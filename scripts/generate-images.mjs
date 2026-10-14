// Generates the site's image assets with the OpenAI Images API.
//
//   npm run images                      -> generate every missing image
//   npm run images -- --only hero,a1    -> only files whose path contains one of these
//   npm run images -- --limit 1         -> stop after N new images (handy for a cost check)
//   npm run images -- --force           -> regenerate even if the file exists
//
// The API key is read from .env.local (OPENAI_API_KEY) and is never bundled into the site.

import { access, appendFile, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { IMAGES, STYLE } from './image-prompts.mjs'

const API_URL = 'https://api.openai.com/v1/images/generations'
const MODEL = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2.5-sunburst'
const QUALITY = process.env.OPENAI_IMAGE_QUALITY || 'high'
const OUT_DIR = path.resolve('public/images')
const LOG_FILE = path.resolve('scripts/image-usage.log')

// USD per 1M tokens, from the model page.
const PRICE = { textIn: 5, imageIn: 8, imageOut: 30 }
// Tier 1 allows 5 images per minute; keep request starts at least this far apart.
const MIN_GAP_MS = 13_000
const MAX_ATTEMPTS = 5

const args = process.argv.slice(2)
const flag = (name) => args.includes(`--${name}`)
const option = (name) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 ? args[i + 1] : undefined
}

const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  console.error('OPENAI_API_KEY is missing. Put it in .env.local (see .env.example).')
  process.exit(1)
}

const only = option('only')?.split(',').map((s) => s.trim()).filter(Boolean)
const limit = Number(option('limit') ?? Infinity)
const force = flag('force')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const exists = (p) => access(p).then(() => true, () => false)

function costOf(usage) {
  if (!usage) return 0
  const textIn = usage.input_tokens_details?.text_tokens ?? usage.input_tokens ?? 0
  const imageIn = usage.input_tokens_details?.image_tokens ?? 0
  const out = usage.output_tokens ?? 0
  return (textIn * PRICE.textIn + imageIn * PRICE.imageIn + out * PRICE.imageOut) / 1_000_000
}

async function requestImage(item) {
  const body = {
    model: MODEL,
    prompt: `${item.prompt}\n\n${STYLE}`,
    size: item.size,
    quality: QUALITY,
    n: 1,
    output_format: 'webp',
    output_compression: 82,
  }

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(6 * 60_000),
    })

    if (res.ok) return res.json()

    const text = await res.text()
    const retryable = res.status === 429 || res.status >= 500
    if (!retryable || attempt === MAX_ATTEMPTS) {
      throw new Error(`HTTP ${res.status}: ${text.slice(0, 500)}`)
    }
    const retryAfter = Number(res.headers.get('retry-after'))
    const wait = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 15_000 * 2 ** (attempt - 1)
    console.warn(`  ${res.status} on attempt ${attempt}, retrying in ${Math.round(wait / 1000)}s`)
    await sleep(wait)
  }
}

const queue = []
for (const item of IMAGES) {
  if (only && !only.some((o) => item.file.includes(o))) continue
  const out = path.join(OUT_DIR, item.file)
  if (!force && (await exists(out))) continue
  queue.push({ ...item, out })
}
const todo = queue.slice(0, limit)

console.log(`Model ${MODEL} · quality ${QUALITY} · ${todo.length} image(s) to generate`)

let totalCost = 0
let done = 0
let lastStart = 0

for (const item of todo) {
  const gap = Date.now() - lastStart
  if (gap < MIN_GAP_MS) await sleep(MIN_GAP_MS - gap)
  lastStart = Date.now()

  process.stdout.write(`[${done + 1}/${todo.length}] ${item.file} (${item.size}) … `)
  try {
    const json = await requestImage(item)
    const b64 = json.data?.[0]?.b64_json
    if (!b64) throw new Error('No image data in response')

    await mkdir(path.dirname(item.out), { recursive: true })
    await writeFile(item.out, Buffer.from(b64, 'base64'))

    const cost = costOf(json.usage)
    totalCost += cost
    done++
    const secs = ((Date.now() - lastStart) / 1000).toFixed(0)
    console.log(`ok in ${secs}s · ${json.usage?.output_tokens ?? '?'} out tokens · $${cost.toFixed(3)}`)
    await appendFile(
      LOG_FILE,
      JSON.stringify({ at: new Date().toISOString(), file: item.file, size: item.size, quality: QUALITY, usage: json.usage, cost }) + '\n',
    )
  } catch (err) {
    console.log('FAILED')
    console.error(`  ${err.message}`)
  }
}

console.log(`\nGenerated ${done}/${todo.length} · estimated cost $${totalCost.toFixed(2)}`)
if (done < todo.length) process.exitCode = 1
