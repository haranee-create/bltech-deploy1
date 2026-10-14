// Builds the web logo assets from the official CI files (bl-tech.co.kr CI page):
//   assets-src/bltech-ci/BL_tech_ci.ai  (PDF-compatible Illustrator file → full logo)
//   assets-src/bltech-ci/img1_5_2.png   (symbol only → nav icon / favicon)
//
//   npm run logo

import { mkdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import * as mupdf from 'mupdf'
import sharp from 'sharp'

const CI = path.resolve('assets-src/bltech-ci')
const OUT = path.resolve('public/images/brand')
const PUBLIC = path.resolve('public')
const SCALE = 8 // render the vector artboard at 8x so the gradient symbol stays sharp

await mkdir(OUT, { recursive: true })

// 1. Render the CI artboard with a transparent background.
const doc = mupdf.Document.openDocument(await readFile(path.join(CI, 'BL_tech_ci.ai')), 'application/pdf')
const pixmap = doc.loadPage(0).toPixmap(mupdf.Matrix.scale(SCALE, SCALE), mupdf.ColorSpace.DeviceRGB, true)

// 2. Remove the soft grey drop shadow under the symbol (the website header logo has none).
//    The logo itself is only navy + the green→blue gradient, so every low-saturation pixel is shadow.
const { data, info } = await sharp(Buffer.from(pixmap.asPNG())).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
for (let i = 0; i < data.length; i += 4) {
  const max = Math.max(data[i], data[i + 1], data[i + 2])
  const min = Math.min(data[i], data[i + 1], data[i + 2])
  const saturation = max === 0 ? 0 : (max - min) / max
  if (saturation < 0.2) data[i + 3] = 0
}
const logo = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim()
  .png()
  .toBuffer()

// 3. Full logo: 1x and 2x WebP with alpha.
for (const [name, width] of [['bltech-logo.webp', 1200], ['bltech-logo@2x.webp', 2400]]) {
  const file = await sharp(logo)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100, effort: 6 })
    .toFile(path.join(OUT, name))
  console.log(`${name}: ${file.width} x ${file.height} (${Math.round(file.size / 1024)} KB)`)
}

// 4. Symbol only: nav icon, favicon and home-screen icon.
const mark = await sharp(path.join(CI, 'img1_5_2.png')).trim().png().toBuffer()
const markFile = await sharp(mark)
  .resize({ width: 256, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(path.join(OUT, 'bltech-mark.webp'))
console.log(`bltech-mark.webp: ${markFile.width} x ${markFile.height}`)

const transparent = { r: 0, g: 0, b: 0, alpha: 0 }
await sharp(mark).resize(32, 32, { fit: 'contain', background: transparent }).png().toFile(path.join(PUBLIC, 'favicon-32.png'))
await sharp(mark).resize(192, 192, { fit: 'contain', background: transparent }).png().toFile(path.join(PUBLIC, 'icon-192.png'))
await sharp(mark)
  .resize(140, 140, { fit: 'contain', background: '#ffffff' })
  .extend({ top: 20, bottom: 20, left: 20, right: 20, background: '#ffffff' })
  .flatten({ background: '#ffffff' })
  .png()
  .toFile(path.join(PUBLIC, 'apple-touch-icon.png'))
console.log('favicon-32.png, icon-192.png, apple-touch-icon.png')
