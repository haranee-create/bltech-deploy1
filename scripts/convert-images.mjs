// Converts the original company photos (assets-src/bltech/*.png) into web-ready WebP files
// under public/images/bltech/, renamed by what they show.
//
//   node scripts/convert-images.mjs

import { mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SRC = path.resolve('assets-src/bltech')
const OUT = path.resolve('public/images/bltech')
const MAX_WIDTH = 1600

// original file name (bl-tech.co.kr/images/<name>.png) → new name
const RENAME = {
  main1: 'hero-people',
  bltech: 'casting-material',
  prd1: 'neal-cast',
  prd2: 'neal-splint',
  prd3: 'neal-cover',
  prd4: 'beoderm-hydrogel',
  tech1: 'rnd-lab',
  tech2: 'quality-arm',
  cus1: 'care-child-cast',
  cus2: 'better-life',
  img1_1_1_1: 'company-building',
  img1_1_3_1: 'orthopedic-knee',
  img1_1_3_2: 'industrial-pipes',
  img2_1_1_1_1_pic1: 'product-cast',
  img2_1_2_1_1_pic1: 'product-splint',
  img2_1_3_1_1_pic1: 'product-cover',
  img2_2_1_1_1_pic1: 'product-hydrogel',
  img2_3_1_1_1_pic1: 'product-repair',
  img2_4_2: 'plant-night',
  img2_4_3_1: 'plant-port',
  img2_4_3_3: 'plant-line',
  img2_4_4_1: 'plant-factory',
  img2_4_4_2: 'plant-engineers',
  img3_1_2: 'rnd-meeting',
  img3_1_3: 'rnd-glassware',
  img3_1_4: 'rnd-hydrogel',
  img3_1_6: 'rnd-cleanroom',
  img3_1_7: 'quality-machine',
  img3_1_8: 'quality-check',
  img3_1_9: 'logistics-boxes',
}

await mkdir(OUT, { recursive: true })

let before = 0
let after = 0
for (const [from, to] of Object.entries(RENAME)) {
  const input = path.join(SRC, `${from}.png`)
  const output = path.join(OUT, `${to}.webp`)
  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90 })
    .toFile(output)
  const [a, b] = await Promise.all([stat(input), stat(output)])
  before += a.size
  after += b.size
  console.log(`${from}.png → bltech/${to}.webp (${Math.round(b.size / 1024)} KB)`)
}
console.log(`\n${Object.keys(RENAME).length} files · ${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(1)} MB`)
