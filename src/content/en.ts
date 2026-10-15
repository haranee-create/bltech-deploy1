// English content. Facts follow bl-tech.co.kr (incl. the official English site /eng);
// copy is edited to fit the new layout.
import {
  businessBase,
  credentialColors,
  googleMap,
  LEGACY,
  noticeBase,
  noticeUrl,
  productBase,
  type BusinessSlug,
  type NoticeId,
  type ProductSlug,
} from './shared'
import type { BusinessText, Content, ProductText } from './types'

const description =
  'BL Tech develops and manufactures orthopedic medical devices, hydrogel derma-care products and industrial repair materials with patented polymer synthesis technology.'

const businessText: Record<BusinessSlug, BusinessText> = {
  casting: {
    group: 'Orthopedic devices',
    title: 'Casting Tape',
    description:
      'Orthopedic casts made from polymer materials built on patented technology, available in 2–5 inch widths with 3 stock and 4 made-to-order colours.',
    items: ['NEAL Cast PLUS', 'NEAL Cast ALPHA', 'NEAL Cast SOFT', 'NEAL Cast FLEX', 'SMILE Cast PREMIUM'],
  },
  splint: {
    group: 'Orthopedic devices',
    title: 'Splints',
    description:
      'Orthopedic splints shaped to the injured area. We hold related patents, including a splint that cures with carbon dioxide in the air.',
    items: ['NEAL Splint F PLUS', 'NEAL Splint N PLUS', 'SMILE Splint FG', 'SMILE Splint SP', 'NEAL Pre-mold'],
  },
  compression: {
    group: 'Orthopedic devices',
    title: 'Compression Band',
    description: 'NEAL Cover, launched in 2023, rounds out our orthopedic range alongside casts and splints.',
    items: ['NEAL Cover', 'Compression band', 'CE MDR · Elastic Bands'],
  },
  'skin-protector': {
    group: 'Derma care',
    title: 'Hydrogel Skin Protector',
    description:
      'A Class I medical-device hydrogel skin protector using TDS (transdermal delivery system) technology. Sold as BEODERM — FDA listed and CE MDR certified.',
    items: ['BEODERM', 'Class I medical device', 'Biocompatibility tested', 'FDA Listing · CE MDR'],
  },
  'hydrogel-patch': {
    group: 'Derma care',
    title: 'Hydrogel Patches',
    description: 'Our patented polymer hydrogel sits comfortably even on sensitive skin, across face, body and all-purpose lines.',
    items: ['Sunburn Soothing Patch', 'Hip · Pregnancy Stretchmark Patches', 'Breakout Patch', 'Scar Care Patch'],
  },
  'oem-odm': {
    group: 'Derma care',
    title: 'OEM / ODM',
    description:
      'Licensed to manufacture both medical devices and cosmetics, we develop and produce hydrogel products on whichever track our clients choose.',
    items: ['Medical device track', 'Cosmetics track (3 CPNP)', 'ISO 22716', 'Custom development & production'],
  },
  repair: {
    group: 'Industrial repair · Plant',
    title: 'Industrial Repair',
    description:
      'Repair tapes that fix leaking or damaged pipes on site, holding up to 20 bar in our in-house pressure test (7 layers, HD).',
    items: ['Pipe Repair', 'Anti-Corrosion', 'Anti-Flame', 'Home Kit'],
  },
  protection: {
    group: 'Industrial repair · Plant',
    title: 'Corrosion & Flame Protection',
    description:
      'Our Anti-Corrosion and Anti-Flame lines protect equipment. We hold a seawater anti-corrosion tape patent and entered a Malaysian national tender in 2020.',
    items: ['Anti-Corrosion', 'Anti-Flame', 'Seawater anti-corrosion patent', 'Malaysia national tender (2020)'],
  },
  plant: {
    group: 'Industrial repair · Plant',
    title: 'Plant Export',
    description:
      'Built on our ISO 13485 quality system, we set up orthopedic splint production lines tailored to local regulations — from equipment export to certification support and technology transfer.',
    items: ['Site survey', 'Equipment layout design', 'Equipment ordering', 'Raw material planning', 'Training & defect analysis'],
  },
}

const productText: Record<ProductSlug, ProductText> = {
  'neal-cast-plus': { kind: 'Casting tape', tags: ['2 · 3 · 4 · 5 inch', '3 stock · 4 made-to-order colours'] },
  'neal-splint-f-plus': { kind: 'Splint', tags: ['Orthopedic splint'] },
  'neal-cover': { kind: 'Compression band', tags: ['Launched 2023', 'CE MDR'] },
  beoderm: { kind: 'Skin protector', tags: ['Class I medical device', 'FDA Listing', 'CE MDR'] },
  'neal-cast-alpha': { kind: 'Casting tape', tags: ['Casting tape'] },
  'smile-cast-premium': { kind: 'Casting tape', tags: ['SMILE brand'] },
  'neal-cast-soft': { kind: 'Casting tape', tags: ['Soft cast'] },
  'neal-cast-flex': { kind: 'Casting tape', tags: ['Casting tape'] },
  'neal-splint-n-plus': { kind: 'Splint', tags: ['Orthopedic splint'] },
  'smile-splint-fg': { kind: 'Splint', tags: ['SMILE brand'] },
  'smile-splint-sp': { kind: 'Splint', tags: ['SMILE brand'] },
  'neal-pre-mold': { kind: 'Splint', tags: ['Pre-molded'] },
  'hydrogel-patch': { kind: 'Hydrogel patch', tags: ['Face', 'Body', 'All-Purpose'] },
  'hydrogel-oem': { kind: 'Contract development & manufacturing', tags: ['Medical device · cosmetics tracks'] },
  'pipe-repair': { kind: 'Pipe repair tape', tags: ['Up to 20 bar (7 layers, HD)'] },
  'anti-corrosion': { kind: 'Anti-corrosion tape', tags: ['Seawater anti-corrosion patent'] },
  'anti-flame': { kind: 'Flame protection', tags: ['Industrial use'] },
  'home-kit': { kind: 'Home repair kit', tags: ['Home use'] },
}

// Notices are published in Korean; titles are translated and link to the Korean originals.
const noticeTitles: Record<NoticeId, string> = {
  11: 'Change of ordering and payment contact (from Oct 1)',
  10: '2026 human rights due diligence results',
  9: 'Notice of extraordinary general meeting of shareholders (Aug 24, 2026)',
  8: 'Notice of record date and closure of shareholder register',
  7: 'Online ordering guide',
  6: 'Return policy',
  5: 'Return request form',
  4: 'Insurance price list (as of the Apr 27, 2026 notice)',
  2: 'Notice of the 20th annual general meeting of shareholders',
}

const credentialText = [
  { kind: 'Quality management system', title: 'ISO 13485:2016', detail: 'Medical device QMS · Kiwa', meta: '2024.09.21 – 2027.09.20' },
  { kind: 'US export', title: 'FDA Listing', detail: 'Hydrogel Skin Protector and 7 more', meta: 'FEI 3005869201' },
  { kind: 'EU export', title: 'CE MDR', detail: 'Cast material · Splints · Elastic Bands', meta: 'EU Medical Device Regulation' },
  { kind: 'EU cosmetics', title: 'CPNP', detail: 'NEAL Hydrogel Patch — Lifting · Mask · Skin Protector', meta: '3 notifications' },
  { kind: 'Award', title: '$5M Export Tower', detail: 'Korea International Trade Association', meta: '2025 · $3M (2014) · $1M (2008)' },
  { kind: 'Company certification', title: 'Global SME 1000+', detail: 'Designated by the Ministry of SMEs and Startups', meta: '2026.04.01 – 2027.12.31' },
  { kind: 'Patent No. 10-2481810', title: 'CO₂-curing splint', detail: 'Orthopedic splint that cures with carbon dioxide in the air', meta: '2022.12.22' },
  { kind: 'Patent No. 10-1985368', title: 'High-moisture hydrogel', detail: 'Hydrogel composition with excellent moisturizing properties, and a sheet using it', meta: '2019.05.28' },
]

const locations = [
  {
    name: 'Chuncheon HQ',
    role: 'Headquarters · 1st factory — orthopedic medical devices',
    address: '84, Toegye Nonggong-ro, Chuncheon-si, Gangwon-do, Korea',
  },
  {
    name: 'Wonju Branch',
    role: '2nd factory · sales & R&D — hydrogel (derma care) products',
    address: 'Suite 1001, 200, Gieopdosi-ro, Jijeong-myeon, Wonju-si, Gangwon-do, Korea',
  },
  {
    name: 'Gapyeong Factory',
    role: '3rd site — raw materials for orthopedic devices',
    address: '699-29, Mokdong-ri, Buk-myeon, Gapyeong-gun, Gyeonggi-do, Korea',
  },
]

const CATALOG = `${LEGACY}/bbs/board.php?bo_table=sub4_2_eng`
const ORDER = `${LEGACY}/bbs/login.php?url=/shop/list-10`
const NOTICES = `${LEGACY}/bbs/board.php?bo_table=sub4_1`

export const en: Content = {
  locale: 'en',
  lang: 'en',
  meta: { homeTitle: 'BL Tech — Polymer Science for a Better Life', titleSuffix: 'BL Tech' },

  site: {
    displayName: 'BL Tech',
    legalName: 'BL Tech Co., Ltd.',
    tagline: 'Biomedical Polymer',
    slogan: 'Better Life, Think of New Ideal',
    description,
    ceo: 'Jin Woo Bae',
    phone: '+82-33-264-2686',
    phoneHref: '+82332642686',
    fax: '+82-31-629-5216',
    logoAlt: 'BL Tech Co., Ltd.',
    announcements: [
      { text: 'Notice · Ordering and payment details changed as of October 1', cta: 'Details (Korean)', href: noticeUrl(11) },
      { text: 'NEAL · SMILE · BEODERM — supplied to more than 36 countries', cta: 'View products', to: '/products' },
    ],
    locations: locations.map((place) => ({ ...place, mapUrl: googleMap(place.address) })),
  },

  links: {
    order: ORDER,
    catalog: CATALOG,
    notices: NOTICES,
    ethics: `${LEGACY}/eng/sub5_2.php`,
    whistleblowing: `${LEGACY}/eng/sub5_3.php`,
    noticeUrl,
  },

  nav: {
    main: [
      { label: 'About', to: '/about' },
      { label: 'Business', to: '/business' },
      { label: 'Products', to: '/products' },
      { label: 'News', to: '/news' },
    ],
    footer: [
      { label: 'About', to: '/about' },
      { label: 'Business', to: '/business' },
      { label: 'Products', to: '/products' },
      { label: 'News', to: '/news' },
      { label: 'Contact', to: '/contact' },
    ],
    quick: [
      { label: 'Catalog download', href: CATALOG },
      { label: 'Online order (Korean)', href: ORDER },
      { label: 'Notice board (Korean)', href: NOTICES },
      { label: 'Careers (Korean)', href: `${LEGACY}/bbs/board.php?bo_table=sub6_1` },
    ],
    contact: 'Contact',
  },

  ui: {
    skip: 'Skip to content',
    home: 'BL Tech home',
    mainMenu: 'Main menu',
    mobileMenu: 'Mobile menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Choose language',
    newWindow: '(opens in a new window)',
    noticeTag: 'Notice',
    latestTag: 'Latest',
    prev: 'Previous news',
    next: 'Next news',
    scrollDown: 'Scroll down',
    viewProducts: 'View products',
    backToTop: 'Back to top',
    productAlt: (name) => `${name} product image`,
    cursor: { view: 'View', read: 'Read', contact: 'Contact', open: 'Open', products: 'Products', map: 'Map' },
  },

  hero: {
    eyebrow: ['Biomedical Polymer', 'Since 2006'],
    title: ['Polymer science', 'for a better life'],
    accentLine: 1,
    lead: 'Since 2006, we have developed and manufactured orthopedic medical devices, hydrogel products and industrial repair materials with our patented polymer synthesis technology.',
    primary: 'View products',
    secondary: 'About us',
    facts: [
      { value: '36+', label: 'Countries supplied' },
      { value: 'ISO 13485', label: 'Medical device QMS' },
      { value: 'FDA · CE MDR', label: 'US & EU regulatory' },
    ],
    imageAlt: 'A clinician wrapping an orthopedic bandage around a patient’s forearm',
    badge: { label: 'Since 2006', text: 'Orthopedic medical device manufacturer' },
  },

  showcase: {
    eyebrow: 'Better Life, Think of New Ideal',
    title: 'Researching from the material up, for a better quality of life worldwide',
    meta: ['Founded 2006', '36+ countries', 'ISO 13485'],
    imageAlt: 'Close-up of orthopedic casting tape material',
  },

  intro: {
    label: 'About BL Tech',
    lead: 'Since 2006, BL Tech has developed and manufactured orthopedic medical devices, hydrogel products and industrial repair materials with patented polymer synthesis technology.',
    body: [
      'Led by our flagship NEAL brand, our products are supplied to more than 36 countries, including the United States, Japan, the United Kingdom, France and Australia.',
      'Built on a systematic development process, rigorous quality control and steady customer support, we keep investing in biomedical polymer R&D.',
    ],
    cta: 'About BL Tech',
  },

  stats: [
    { value: 20, label: 'Years since 2006' },
    { value: 36, suffix: '+', label: 'Countries supplied' },
    { value: 8, label: 'Patents & utility models' },
    { value: 5, prefix: '$', suffix: 'M', label: 'Export Tower Award (2025)' },
  ],

  businessHeading: {
    label: 'Business',
    title: 'Our Business',
    description:
      'From a single polymer synthesis technology, we have grown into orthopedic devices, hydrogel derma care, industrial repair materials and plant exports.',
  },
  businesses: businessBase.map((base) => ({ ...base, ...businessText[base.slug] })),

  productsHeading: {
    label: 'Products',
    title: 'Featured Products',
    description:
      'NEAL, the orthopedic cast and splint brand with the No. 1 market share in Japan, and BEODERM, a medical hydrogel with FDA listing and CE MDR. Built on our patented polymer technology and supplied to clinics in more than 36 countries.',
    cta: 'All products',
  },
  productCategories: { all: 'All', ortho: 'Orthopedics', derma: 'Derma Care', industrial: 'Industrial Repair' },
  products: productBase.map((base) => ({ ...base, ...productText[base.slug] })),

  global: {
    label: 'Global Network',
    title: 'Supplied to more than 36 countries worldwide',
    ariaLabel: 'Global network',
    countries: ['United States', 'Japan', 'United Kingdom', 'France', 'Australia', 'Malaysia', 'Saudi Arabia', 'Philippines'],
    brands: ['NEAL', 'SMILE', 'BEODERM', 'ISO 13485', 'FDA', 'CE MDR', 'CPNP'],
    stats: [
      { value: 36, suffix: '+', label: 'Countries supplied' },
      { text: 'FDA · CE MDR', label: 'US · EU registrations' },
      { value: 5, prefix: '$', suffix: 'M', label: 'Export Tower Award (2025)' },
    ],
  },

  credentialsHeading: {
    label: 'Quality & Certification',
    title: 'Proven Quality',
    description:
      'An ISO 13485 quality system, US FDA and EU CE MDR registrations and patented technology stand behind every product.',
    cta: 'All certifications',
  },
  credentials: credentialText.map((item, i) => ({ ...item, ...credentialColors(i) })),

  newsHeading: { label: 'News', title: 'Latest News', description: 'Notices and updates from BL Tech. Original posts are in Korean.' },
  notices: noticeBase.map((base) => ({ ...base, title: noticeTitles[base.id] })),

  footer: {
    ctaContact: { title: 'Interested in our products or distribution?', sub: 'Products · Distribution · OEM/ODM', big: 'Contact' },
    ctaCatalog: { title: 'Need our product catalog?', sub: 'Download it from our library (new window)', big: 'Catalog' },
    columns: { explore: 'Explore', support: 'Support', places: 'Locations', contact: 'Contact' },
    legal: 'BL Tech Co., Ltd. · CEO Jin Woo Bae · © BLTECH All rights reserved.',
    ethics: 'Ethics',
    whistleblowing: 'Clean Reporting Center',
  },

  about: {
    hero: { label: 'About BL Tech', title: 'Polymer science for a better life', description },
    visualAlt: 'BL Tech office building',
    storyTitle: 'Safe, reliable orthopedic medical devices',
    story: [
      'Founded in 2006, BL Tech began manufacturing orthopedic medical devices from polymer materials built on patented technology, and has kept strengthening its products through accumulated R&D.',
      'Our NEAL brand is recognised for quality and technology at home and abroad, and is supplied to more than 36 countries including the US, Japan, the UK, France and Australia.',
      'As an R&D-driven company, we develop, manufacture and distribute high-value medical devices to improve quality of life worldwide and to lead in the global medical device market.',
    ],
    statsLabel: 'BL Tech in numbers',
    overviewHeading: { label: 'Company', title: 'Company Overview' },
    overview: [
      { label: 'Company', value: 'BL Tech Co., Ltd.' },
      { label: 'CEO', value: 'Jin Woo Bae' },
      { label: 'Founded', value: 'May 1, 2006' },
      { label: 'Business', value: 'Medical device manufacturing · Industrial repair materials' },
      { label: 'Key products', value: 'Orthopedic casting tape, splints, industrial repair tape, hydrogel patches' },
    ],
    visionHeading: { label: 'Vision & Mission', title: 'Vision & Mission' },
    visionLabel: 'VISION',
    vision:
      'A company that grows with customers, employees and shareholders and creates sustainable value, built on globally competitive innovation and ethics',
    missions: [
      { label: 'Technology', title: 'Innovation', text: 'We secure global competitiveness through innovative technology.' },
      { label: 'Customers', title: 'Trust', text: 'We earn trust with service shaped around each customer’s needs.' },
      { label: 'People', title: 'Growth', text: 'We grow together with our people and build a happy workplace.' },
      { label: 'ESG', title: 'Responsibility', text: 'We pursue ESG values through sustainable management and social responsibility.' },
      { label: 'Ethics', title: 'Fairness', text: 'We deliver long-term value to every stakeholder through ethical, fair management.' },
    ],
    historyHeading: { label: 'History', title: 'History' },
    history: [
      {
        range: '2025 — 2020',
        years: [
          { year: 2025, events: ['$5 Million Export Tower Award', 'Contract with global hydrogel company “E”; launched in Philippine drugstores'] },
          { year: 2024, events: ['BEODERM Hydrogel Skin Protector: CE MDR'] },
          {
            year: 2023,
            events: ['NEAL Cover compression band launched', 'BEODERM Hydrogel Skin Protector: FDA listed', 'ISO 22716 certified', 'Hydrogel patch: CPNP notified'],
          },
          { year: 2022, events: ['BEODERM brand launched (hydrogel skin protector)'] },
          { year: 2021, events: ['Orthopedic product line: CE MDR'] },
          { year: 2020, events: ['Industrial repair tape: Malaysian national tender secured'] },
        ],
      },
      {
        range: '2019 — 2010',
        years: [
          { year: 2019, events: ['Hydrogel sheet patent registered', 'NEAL brand enters Japan with the leading market share'] },
          { year: 2018, events: ['Hydrogel manufacturing patent registered', 'Plant business launched in Saudi Arabia'] },
          { year: 2017, events: ['Plant and raw materials exported to Malaysia'] },
          { year: 2016, events: ['Wonju branch established', 'Medical-grade hydrogel production facilities installed'] },
          { year: 2015, events: ['SMILE brand launched'] },
          { year: 2014, events: ['$3 Million Export Tower Award'] },
          { year: 2013, events: ['NEAL Industrial Repair Tape launched'] },
          { year: 2012, events: ['Contract signed with global company “B”'] },
          { year: 2011, events: ['2nd plant established in Gapyeong'] },
        ],
      },
      {
        range: '2009 — 2006',
        years: [
          { year: 2009, events: ['Headquarters moved to Chuncheon', 'Contract signed with global company “O”'] },
          { year: 2008, events: ['ISO 13485 certified', '$1 Million Export Tower Award', 'U.S. FDA registration'] },
          { year: 2006, events: ['BL Tech founded (May 1, 2006)', 'ISO 9001 certified', 'Orthopedic products: CE MDD', 'Splint and underpad patent applications filed'] },
        ],
      },
    ],
    certsHeading: { label: 'Patents & Certificates', title: 'Patents & Certifications' },
    certBlocks: [
      {
        title: 'Patents & utility models',
        items: [
          { label: 'No. 10-0799594', title: 'Orthopedic splint and its manufacturing method', meta: '2008.01.24' },
          { label: 'No. 10-0826214', title: 'Water-repellent tubular orthopedic bandage and its manufacturing method', meta: '2008.04.23' },
          { label: 'No. 10-1746821', title: 'Seawater anti-corrosion tape', meta: '2017.06.07' },
          { label: 'Utility model 20-0485980', title: 'Orthopedic splint kit', meta: '2018.03.13' },
          { label: 'No. 10-1882308', title: 'Orthopedic splint', meta: '2018.07.20' },
          { label: 'No. 10-1901386', title: 'Hydrogel manufacturing method', meta: '2018.09.17' },
          { label: 'No. 10-1985368', title: 'Hydrogel composition with excellent moisturizing properties, and a sheet using it', meta: '2019.05.28' },
          { label: 'No. 10-2481810', title: 'Orthopedic splint cured by carbon dioxide in the air', meta: '2022.12.22' },
        ],
      },
      {
        title: 'Certificates',
        items: [
          { label: 'Kiwa', title: 'ISO 13485:2016', meta: '2024.09.21 – 2027.09.20' },
          { label: 'Kiwa', title: 'ISO 22716:2007', meta: '2023.09.12 – 2026.09.11' },
          { label: 'Korea Venture Business Association', title: 'Venture Company Certificate', meta: '2025.11.03 – 2028.11.02' },
          { label: 'Ministry of SMEs and Startups', title: 'Innovative SME (Inno-Biz)', meta: '2023.07.13 – 2026.07.12' },
          { label: 'Ministry of SMEs and Startups', title: 'Global SME 1000+ designation', meta: '2026.04.01 – 2027.12.31' },
          { label: 'Ministry of SMEs and Startups', title: 'SME certificate (medium enterprise)', meta: '2026.04.01 – 2027.03.31' },
        ],
      },
      {
        title: 'Export registrations',
        items: [
          { label: 'Export', title: 'FDA Listing', meta: 'Hydrogel Skin Protector and 7 more · FEI 3005869201' },
          { label: 'Export', title: 'CE DoC / MDR', meta: 'Cast material, Splints, Elastic Bands' },
          { label: 'Export', title: 'CPNP', meta: 'NEAL Hydrogel patch — Lifting · Mask · Skin protector' },
        ],
      },
      {
        title: 'Awards',
        award: true,
        items: [
          { label: 'Korea International Trade Association', title: '$5M Export Tower', meta: '2025' },
          { label: 'Governor of Gangwon', title: 'Commendation', meta: '2026' },
          { label: 'Korea International Trade Association', title: '$3M Export Tower', meta: '2014' },
          { label: 'Korea International Trade Association', title: '$1M Export Tower', meta: '2008' },
        ],
      },
    ],
    orgHeading: { label: 'Organization', title: 'Organization' },
    organization: {
      top: ['CEO', 'Board of Directors', 'QM Representative'],
      departments: ['R&D', 'Quality Management', 'Domestic Sales', 'Overseas Sales', 'Production', 'HR · Accounting', 'Purchasing · Shipping'],
    },
    locationsHeading: { label: 'Locations', title: 'Find Us' },
    mapCta: 'View on Google Maps ↗',
  },

  businessPage: {
    hero: {
      label: 'Business',
      title: 'From the clinic to the field',
      description:
        'Orthopedic devices, hydrogel derma care, industrial repair materials and plant exports — all growing from one polymer synthesis technology.',
    },
    rndHeading: { label: 'Technology · R&D Center', title: 'Research & Development' },
    rnd: {
      eyebrow: 'Expanding Technological Capabilities',
      text: 'We keep extending our polymer synthesis expertise through orthopedic immobilization products, hydrogel dressings and industrial repair materials.',
      areas: ['Orthopedic immobilization', 'Hydrogel dressings', 'Industrial repair'],
      imageAlt: 'Researcher analysing samples in the lab',
    },
    qualityHeading: { label: 'Quality', title: 'Six-step quality inspection' },
    stepLabel: (n) => `Step ${n}`,
    qualitySteps: [
      'Inspection planning',
      'Incoming inspection',
      'In-process inspection',
      'Sampling & final inspection',
      'Pre-shipment inspection',
      'Post-market quality management',
    ],
    equipment: [
      { name: 'UTM', test: 'Flexural strength (MPa) test' },
      { name: 'FT-IR', test: 'Infrared spectroscopy' },
      { name: 'UTM', test: 'Tensile strength test' },
      { name: 'Magnetic stirrer', test: 'NCO mixing test' },
    ],
    plantHeading: { label: 'Plant Export', title: 'Plant project process', period: 'About 6 months from order' },
    plantSteps: [
      { title: 'Site survey', text: 'We survey infrastructure and site conditions for installation.' },
      { title: 'Layout design', text: 'We plan wiring, drainage, dehumidification piping and partitions.' },
      { title: 'Equipment ordering', text: 'We place purchase orders for the production equipment.' },
      { title: 'Raw material planning', text: 'We propose the raw material quantities needed for initial production.' },
      { title: 'Training & defect analysis', text: 'We train your team on equipment, processes and quality defect analysis.' },
    ],
    plantAlts: ['Factory exterior', 'Export port'],
    esg: {
      label: 'Sustainability',
      title: 'Management that creates lasting value',
      body: 'We practise ESG and ethical, compliant management, and published our 2026 human rights due diligence results.',
      cta: 'Related news',
    },
  },

  productsPage: {
    hero: {
      label: 'Products',
      title: 'NEAL · SMILE · BEODERM',
      description: 'From orthopedic casts and splints to hydrogel derma care and industrial repair materials — explore BL Tech products.',
    },
    filterLabel: 'Product categories',
    catalog: 'Download catalog ↗',
    order: 'Online order (Korean) ↗',
  },

  newsPage: {
    hero: {
      label: 'News',
      title: 'BL Tech News',
      description: 'Notices and updates from BL Tech. Original posts open on our Korean notice board.',
    },
    boardLink: 'View the notice board (Korean) ↗',
  },

  contactPage: {
    hero: {
      label: 'Contact',
      title: 'Let’s talk',
      description: 'We’re happy to help with products, distribution and OEM/ODM. For urgent matters, please call our main line.',
    },
    phoneLabel: 'Main line',
    faxLabel: 'Fax',
    fields: {
      name: 'Name *',
      phone: 'Phone *',
      email: 'Email',
      type: 'Inquiry type *',
      file: 'Attachment',
      message: 'Message *',
      consent: 'I agree to the collection and use of my personal information (name, phone, email) to handle this inquiry. *',
      submit: 'Send message',
    },
    placeholders: { name: 'Jane Doe', phone: '+1 555 000 0000', email: 'name@company.com', message: 'Tell us about your inquiry…' },
    inquiryTypes: ['Products', 'Distribution', 'OEM & ODM'],
    success: {
      title: 'Thank you!',
      text: (phone) => `This is a demo form, so nothing was sent. For urgent matters, please call ${phone}.`,
      reset: 'Write another message',
    },
  },

  notFound: { title: 'Page not found', text: 'Sorry, we couldn’t find that page.', cta: 'Back to home' },
}
