// Language-neutral data shared by every locale: images, colours, product line-up, notice ids.

export const IMG = '/images/bltech'
export const INK = '#1e1e1e'
export const WHITE = '#ffffff'
export const LEGACY = 'http://www.bl-tech.co.kr'

// BL tech CI: BL BLUE #243f8e, BL GREEN #009244 (흰 글씨가 올라가는 면은 대비를 위해 #00843d)
export const palette = {
  navy: '#243f8e',
}

export const naverMap = (query: string) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`
export const googleMap = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
export const noticeUrl = (id: number) => `${LEGACY}/sub4_1/${id}`

export const SHOWCASE_IMAGE = `${IMG}/ai-polymer-macro.webp`

// ── 사업분야 카드 (3장씩 쌓이는 순서 그대로) ──
// tint: 카드 위쪽에서 흰색으로 번지는 색 — 로고 색을 따라 묶음마다 블루 → 그린 → 네이비.
//       정형외과 블루 · 하이드로겔 아쿠아·민트·라임(로고 심볼의 초록) · 산업용 네이비 슬레이트, 쌓일수록 한 단계씩.
export const businessBase = [
  { slug: 'casting', image: `${IMG}/product-cast.webp`, tint: '#d6e4f7' },
  { slug: 'splint', image: `${IMG}/product-splint.webp`, tint: '#c8d7f1' },
  { slug: 'compression', image: `${IMG}/neal-cover.webp`, tint: '#bccbeb' },
  { slug: 'skin-protector', image: `${IMG}/beoderm-hydrogel.webp`, tint: '#cfe9e4' },
  { slug: 'hydrogel-patch', image: `${IMG}/product-hydrogel.webp`, tint: '#c8e7d3' },
  { slug: 'oem-odm', image: `${IMG}/ai-oem-line.webp`, tint: '#d9ecc6' },
  { slug: 'repair', image: `${IMG}/ai-pipe-wrap.webp`, tint: '#d8e0ee' },
  { slug: 'protection', image: `${IMG}/ai-anti-corrosion.webp`, tint: '#cad5ea' },
  { slug: 'plant', image: `${IMG}/plant-line.webp`, tint: '#bcc7e4' },
] as const

export type BusinessSlug = (typeof businessBase)[number]['slug']

// ── 제품 ───────────────────────────────────────────────
export type ProductCategory = 'ortho' | 'derma' | 'industrial'

type ProductBase = { slug: string; name: string; category: ProductCategory; image: string; fit?: 'cover' | 'contain' }

export const productBase = [
  { slug: 'neal-cast-plus', name: 'NEAL Cast PLUS', category: 'ortho', image: `${IMG}/neal-cast.webp`, fit: 'contain' },
  { slug: 'neal-splint-f-plus', name: 'NEAL Splint F PLUS', category: 'ortho', image: `${IMG}/neal-splint.webp`, fit: 'contain' },
  { slug: 'neal-cover', name: 'NEAL Cover', category: 'ortho', image: `${IMG}/neal-cover.webp`, fit: 'contain' },
  { slug: 'beoderm', name: 'BEODERM Hydrogel', category: 'derma', image: `${IMG}/beoderm-hydrogel.webp`, fit: 'contain' },
  { slug: 'neal-cast-alpha', name: 'NEAL Cast ALPHA', category: 'ortho', image: `${IMG}/product-cast.webp` },
  { slug: 'smile-cast-premium', name: 'SMILE Cast PREMIUM', category: 'ortho', image: `${IMG}/casting-material.webp`, fit: 'contain' },
  { slug: 'neal-cast-soft', name: 'NEAL Cast SOFT', category: 'ortho', image: `${IMG}/care-child-cast.webp` },
  { slug: 'neal-cast-flex', name: 'NEAL Cast FLEX', category: 'ortho', image: `${IMG}/quality-arm.webp` },
  { slug: 'neal-splint-n-plus', name: 'NEAL Splint N PLUS', category: 'ortho', image: `${IMG}/product-splint.webp` },
  { slug: 'smile-splint-fg', name: 'SMILE Splint FG', category: 'ortho', image: `${IMG}/ai-polymer-macro.webp` },
  { slug: 'smile-splint-sp', name: 'SMILE Splint SP', category: 'ortho', image: `${IMG}/orthopedic-knee.webp` },
  { slug: 'neal-pre-mold', name: 'NEAL Pre-mold', category: 'ortho', image: `${IMG}/product-cover.webp` },
  { slug: 'hydrogel-patch', name: 'Hydrogel Patch', category: 'derma', image: `${IMG}/product-hydrogel.webp` },
  { slug: 'hydrogel-oem', name: 'Hydrogel OEM / ODM', category: 'derma', image: `${IMG}/ai-hydrogel-macro.webp` },
  { slug: 'pipe-repair', name: 'Pipe Repair', category: 'industrial', image: `${IMG}/product-repair.webp` },
  { slug: 'anti-corrosion', name: 'Anti-Corrosion', category: 'industrial', image: `${IMG}/ai-anti-corrosion.webp` },
  { slug: 'anti-flame', name: 'Anti-Flame', category: 'industrial', image: `${IMG}/industrial-pipes.webp` },
  { slug: 'home-kit', name: 'Home Kit', category: 'industrial', image: `${IMG}/ai-home-repair.webp` },
] as const satisfies readonly ProductBase[]

export type ProductSlug = (typeof productBase)[number]['slug']

/** 홈 화면 '대표 제품'에 쓰는 앞쪽 4개 */
export const FEATURED_COUNT = 4

// ── 소식 (기존 공지사항 게시판 글 번호) ────────────────
export const noticeBase = [
  { id: 11, date: '2026.09.28', image: `${IMG}/logistics-boxes.webp` },
  { id: 10, date: '2026.09.10', image: `${IMG}/ai-esg-forest.webp` },
  { id: 9, date: '2026.08.07', image: `${IMG}/ai-documents.webp` },
  { id: 8, date: '2026.07.07', image: `${IMG}/rnd-meeting.webp` },
  { id: 7, date: '2026.06.25', image: `${IMG}/quality-check.webp` },
  { id: 6, date: '2026.06.09', image: `${IMG}/company-building.webp` },
  { id: 5, date: '2026.06.09', image: `${IMG}/plant-factory.webp` },
  { id: 4, date: '2026.04.24', image: `${IMG}/care-child-cast.webp` },
  { id: 2, date: '2026.03.16', image: `${IMG}/rnd-cleanroom.webp` },
] as const

export type NoticeId = (typeof noticeBase)[number]['id']

/** 인증 카드 색 — 대표 인증 1장만 브랜드 네이비 */
export const credentialColors = (index: number) =>
  index === 0 ? { bg: palette.navy, fg: WHITE } : { bg: WHITE, fg: INK }
