import type { Locale } from '../i18n/locale'
import type { BusinessSlug, NoticeId, ProductCategory, ProductSlug } from './shared'

export type NavItem = { label: string; to: string; badge?: string }
export type ExternalLink = { label: string; href: string }
export type Announcement = { text: string; cta: string; href?: string; to?: string }
export type Place = { name: string; role: string; address: string; mapUrl: string }
export type Stat = { value?: number; prefix?: string; suffix?: string; text?: string; label: string }
export type Heading = { label: string; title: string; description?: string }

export type Hero = {
  eyebrow: [string, string]
  /** Headline, one entry per line; `accentLine` is drawn in BL BLUE. */
  title: string[]
  accentLine: number
  lead: string
  primary: string
  secondary: string
  facts: { value: string; label: string }[]
  imageAlt: string
  badge: { label: string; text: string }
}

export type BusinessText = { group: string; title: string; description: string; items: string[] }
export type Business = BusinessText & { slug: BusinessSlug; image: string; bg: string; fg: string }

export type ProductText = { kind: string; tags: string[] }
export type Product = ProductText & {
  slug: ProductSlug
  name: string
  category: ProductCategory
  image: string
  /** 흰 배경 제품 사진은 곱하기 합성으로 제품만 띄워 보여줍니다. */
  fit?: 'cover' | 'contain'
}

export type Credential = { kind: string; title: string; detail: string; meta: string; bg: string; fg: string }
export type Notice = { id: NoticeId; date: string; title: string; image: string }
export type Mission = { label: string; title: string; text: string }
export type HistoryGroup = { range: string; years: { year: number; events: string[] }[] }
export type CertItem = { label: string; title: string; meta: string }

export type Content = {
  locale: Locale
  /** language tag for <html lang> */
  lang: string
  meta: { homeTitle: string; titleSuffix: string }

  site: {
    displayName: string
    legalName: string
    tagline: string
    slogan: string
    description: string
    ceo: string
    phone: string
    phoneHref: string
    fax: string
    logoAlt: string
    announcements: Announcement[]
    locations: Place[]
  }

  links: {
    order: string
    catalog: string
    notices: string
    ethics: string
    whistleblowing: string
    noticeUrl: (id: NoticeId) => string
  }

  nav: { main: NavItem[]; footer: NavItem[]; quick: ExternalLink[]; contact: string }

  ui: {
    skip: string
    home: string
    mainMenu: string
    mobileMenu: string
    openMenu: string
    closeMenu: string
    language: string
    newWindow: string
    noticeTag: string
    latestTag: string
    prev: string
    next: string
    scrollDown: string
    viewProducts: string
    backToTop: string
    productAlt: (name: string) => string
    cursor: { view: string; read: string; contact: string; open: string; products: string; map: string }
  }

  hero: Hero
  showcase: { eyebrow: string; title: string; meta: string[]; imageAlt: string }
  intro: { label: string; lead: string; body: string[]; cta: string }
  stats: Stat[]

  businessHeading: Heading
  businesses: Business[]

  productsHeading: Heading & { cta: string }
  productCategories: Record<ProductCategory | 'all', string>
  products: Product[]

  global: { label: string; title: string; ariaLabel: string; countries: string[]; brands: string[]; stats: Stat[] }
  credentialsHeading: Heading & { cta: string }
  credentials: Credential[]
  newsHeading: Heading
  notices: Notice[]

  footer: {
    ctaContact: { title: string; sub: string; big: string }
    ctaCatalog: { title: string; sub: string; big: string }
    columns: { explore: string; support: string; places: string; contact: string }
    legal: string
    ethics: string
    whistleblowing: string
  }

  about: {
    hero: Heading
    visualAlt: string
    storyTitle: string
    story: string[]
    statsLabel: string
    overviewHeading: Heading
    overview: { label: string; value: string }[]
    visionHeading: Heading
    visionLabel: string
    vision: string
    missions: Mission[]
    historyHeading: Heading
    history: HistoryGroup[]
    certsHeading: Heading
    certBlocks: { title: string; award?: boolean; items: CertItem[] }[]
    orgHeading: Heading
    organization: { top: string[]; departments: string[] }
    locationsHeading: Heading
    mapCta: string
  }

  businessPage: {
    hero: Heading
    rndHeading: Heading
    rnd: { eyebrow: string; text: string; areas: string[]; imageAlt: string }
    qualityHeading: Heading
    stepLabel: (n: number) => string
    qualitySteps: string[]
    equipment: { name: string; test: string }[]
    plantHeading: Heading & { period: string }
    plantSteps: { title: string; text: string }[]
    plantAlts: [string, string]
    esg: { label: string; title: string; body: string; cta: string }
  }

  productsPage: { hero: Heading; filterLabel: string; catalog: string; order: string }
  newsPage: { hero: Heading; boardLink: string }

  contactPage: {
    hero: Heading
    phoneLabel: string
    faxLabel: string
    fields: {
      name: string
      phone: string
      email: string
      type: string
      file: string
      message: string
      consent: string
      submit: string
    }
    placeholders: { name: string; phone: string; email: string; message: string }
    inquiryTypes: string[]
    success: { title: string; text: (phone: string) => string; reset: string }
  }

  notFound: { title: string; text: string; cta: string }
}
