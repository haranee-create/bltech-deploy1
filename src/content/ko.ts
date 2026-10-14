// 한국어 콘텐츠. 사실 정보는 bl-tech.co.kr 기준이며 문구는 새 디자인에 맞게 정리했습니다.
import {
  businessBase,
  credentialColors,
  LEGACY,
  naverMap,
  noticeBase,
  noticeUrl,
  productBase,
  type BusinessSlug,
  type NoticeId,
  type ProductSlug,
} from './shared'
import type { BusinessText, Content, ProductText } from './types'

const description =
  '비엘테크는 특허 받은 폴리머 합성 기술로 정형외과용 의료기기, 하이드로겔 더마 케어 제품, 산업용 보수재를 개발·제조합니다.'

const businessText: Record<BusinessSlug, BusinessText> = {
  casting: {
    group: '정형외과용 의료기기',
    title: '캐스팅 테이프',
    description: '특허 기술을 접목한 폴리머 소재의 정형외과용 캐스트입니다. 2~5인치 폭과 상시 3색·주문 4색으로 공급합니다.',
    items: ['NEAL Cast PLUS', 'NEAL Cast ALPHA', 'NEAL Cast SOFT', 'NEAL Cast FLEX', 'SMILE Cast PREMIUM'],
  },
  splint: {
    group: '정형외과용 의료기기',
    title: '스플린트 (부목)',
    description: '환부에 맞춰 고정하는 정형외과용 부목입니다. 공기 중 이산화탄소로 경화하는 부목 등 관련 특허를 보유하고 있습니다.',
    items: ['NEAL Splint F PLUS', 'NEAL Splint N PLUS', 'SMILE Splint FG', 'SMILE Splint SP', 'NEAL Pre-mold'],
  },
  compression: {
    group: '정형외과용 의료기기',
    title: '압박 밴드',
    description: '2023년 출시한 압박용 밴드 NEAL Cover(닐커버)로 캐스트·부목과 함께 쓰는 정형외과 제품군을 갖췄습니다.',
    items: ['NEAL Cover', '압박용 밴드', 'CE MDR · Elastic Bands'],
  },
  'skin-protector': {
    group: '더마 케어',
    title: '하이드로겔 스킨 프로텍터',
    description:
      'TDS(경피 전달 시스템) 기술을 활용한 의료기기 1등급 하이드로겔 피부보호대입니다. BEODERM 브랜드로 FDA 리스팅과 CE MDR을 획득했습니다.',
    items: ['BEODERM (비오덤)', '의료기기 1등급', '생체적합성 시험 통과', 'FDA Listing · CE MDR'],
  },
  'hydrogel-patch': {
    group: '더마 케어',
    title: '하이드로겔 패치',
    description: '특허 받은 고분자 하이드로겔로 민감한 피부에도 편안하게 붙습니다. 얼굴·바디·다목적 패치 라인업을 갖추고 있습니다.',
    items: ['썬번 수딩 패치', '힙 · 맘 튼살 패치', '트러블 케어 패치', '스카 케어 패치'],
  },
  'oem-odm': {
    group: '더마 케어',
    title: 'OEM / ODM',
    description: '의료기기와 화장품 제조 허가를 모두 보유해, 고객사가 원하는 트랙으로 하이드로겔 제품을 개발하고 생산합니다.',
    items: ['의료기기 트랙', '화장품 트랙 (CPNP 3건)', 'ISO 22716', '맞춤 개발 · 생산'],
  },
  repair: {
    group: '산업용 보수재 · 플랜트',
    title: '산업용 보수재',
    description: '배관 누수와 손상을 현장에서 보수하는 산업용 보수 테이프입니다. 자체 압력시험 기준 최대 20 bar(7겹, HD)를 견딥니다.',
    items: ['Pipe Repair', 'Anti-Corrosion', 'Anti-Flame', 'Home Kit'],
  },
  protection: {
    group: '산업용 보수재 · 플랜트',
    title: '방식 · 방염 보호재',
    description:
      'Anti-Corrosion·Anti-Flame 라인으로 설비 보호 수요에 대응합니다. 해수방식테이프 특허를 보유하고 있으며, 2020년 말레이시아 국가입찰에 진입했습니다.',
    items: ['Anti-Corrosion', 'Anti-Flame', '해수방식테이프 특허', '말레이시아 국가입찰 (2020)'],
  },
  plant: {
    group: '산업용 보수재 · 플랜트',
    title: '플랜트 수출',
    description:
      'ISO 13485 품질시스템을 바탕으로 현지 규제에 맞춘 정형외과용 부목 생산라인을 구축합니다. 설비 수출부터 현지 인증, 기술이전까지 지원합니다.',
    items: ['현장 실사', '설비 배치 · 레이아웃 설계', '설비 발주', '원자재 구매 제안', '생산 교육 · 불량 분석'],
  },
}

const productText: Record<ProductSlug, ProductText> = {
  'neal-cast-plus': { kind: '캐스팅 테이프', tags: ['2 · 3 · 4 · 5 inch', '상시 3색 · 주문 4색'] },
  'neal-splint-f-plus': { kind: '스플린트', tags: ['정형외과용 부목'] },
  'neal-cover': { kind: '압박 밴드', tags: ['2023 출시', 'CE MDR'] },
  beoderm: { kind: '스킨 프로텍터', tags: ['의료기기 1등급', 'FDA Listing', 'CE MDR'] },
  'neal-cast-alpha': { kind: '캐스팅 테이프', tags: ['캐스팅 테이프'] },
  'smile-cast-premium': { kind: '캐스팅 테이프', tags: ['SMILE 브랜드'] },
  'neal-cast-soft': { kind: '캐스팅 테이프', tags: ['소프트 캐스트'] },
  'neal-cast-flex': { kind: '캐스팅 테이프', tags: ['캐스팅 테이프'] },
  'neal-splint-n-plus': { kind: '스플린트', tags: ['정형외과용 부목'] },
  'smile-splint-fg': { kind: '스플린트', tags: ['SMILE 브랜드'] },
  'smile-splint-sp': { kind: '스플린트', tags: ['SMILE 브랜드'] },
  'neal-pre-mold': { kind: '스플린트', tags: ['프리몰드'] },
  'hydrogel-patch': { kind: '하이드로겔 패치', tags: ['Face', 'Body', 'All-Purpose'] },
  'hydrogel-oem': { kind: '위탁 개발 · 생산', tags: ['의료기기 · 화장품 트랙'] },
  'pipe-repair': { kind: '배관 보수 테이프', tags: ['최대 20 bar (7겹, HD)'] },
  'anti-corrosion': { kind: '방식 테이프', tags: ['해수방식테이프 특허'] },
  'anti-flame': { kind: '방염 보호재', tags: ['산업용'] },
  'home-kit': { kind: '가정용 보수 키트', tags: ['가정용'] },
}

const noticeTitles: Record<NoticeId, string> = {
  11: '비엘테크㈜ → ㈜비엘포스메드 주문·입금처 변경 안내 (10/1부)',
  10: '비엘테크(주) 2026년 인권경영 실사 결과 공개',
  9: '비엘테크(주) 임시주주총회 소집공고 (2026년 8월 24일)',
  8: '비엘테크(주) 기준일 및 주주명부 폐쇄기간 공고문',
  7: '비엘테크(주) 인터넷 주문방법 안내서',
  6: '반품 규정 안내문',
  5: '반품요청서 양식',
  4: '보험수가표 안내 (2026년 4월 27일 고시 기준)',
  2: '비엘테크(주) 제20기 정기주주총회 소집공고',
}

const credentialText = [
  { kind: '품질경영시스템', title: 'ISO 13485:2016', detail: '의료기기 품질경영시스템 · Kiwa', meta: '2024.09.21 – 2027.09.20' },
  { kind: '미국 수출', title: 'FDA Listing', detail: 'Hydrogel Skin Protector 외 7건', meta: 'FEI 3005869201' },
  { kind: '유럽 수출', title: 'CE MDR', detail: 'Cast material · Splints · Elastic Bands', meta: 'EU 의료기기 규정' },
  { kind: '유럽 화장품', title: 'CPNP', detail: 'NEAL Hydrogel Patch — Lifting · Mask · Skin Protector', meta: '3건 등록' },
  { kind: '수상', title: '500만불 수출의 탑', detail: '한국무역협회', meta: '2025 · 300만불(2014) · 100만불(2008)' },
  { kind: '기업 인증', title: '글로벌 강소기업 1000+', detail: '중소벤처기업부장관 지정', meta: '2026.04.01 – 2027.12.31' },
  { kind: '특허 제10-2481810호', title: 'CO₂ 경화 부목', detail: '공기 중 이산화탄소를 이용해 경화하는 정형외과용 부목', meta: '2022.12.22' },
  { kind: '특허 제10-1985368호', title: '고보습 하이드로겔', detail: '보습력이 우수한 하이드로겔 조성물 및 이를 이용한 시트', meta: '2019.05.28' },
]

const locations = [
  { name: '춘천 본사', role: '본사 · 제1공장 — 정형외과용 제품 제조', address: '강원도 춘천시 퇴계농공로 84' },
  { name: '원주 지사', role: '제2공장 · 영업 및 연구 — 하이드로겔(더마 케어) 제품 제조', address: '강원도 원주시 지정면 기업도시로 200, 1001호' },
  { name: '가평 공장', role: '제3사업장 — 정형외과용 제품 원재료 제조', address: '경기도 가평군 북면 목동리 699-29' },
]

export const ko: Content = {
  locale: 'ko',
  lang: 'ko',
  meta: { homeTitle: '비엘테크 BL tech — 폴리머 기술로 더 나은 삶을', titleSuffix: '비엘테크' },

  site: {
    displayName: '비엘테크',
    legalName: '비엘테크(주)',
    tagline: 'Biomedical Polymer',
    slogan: 'Better Life, Think of New Ideal',
    description,
    ceo: '배진우',
    phone: '033-264-2686',
    phoneHref: '0332642686',
    fax: '031-629-5216',
    logoAlt: '비엘테크(주) BL tech',
    announcements: [
      { text: '[공지] 10월 1일부로 주문·입금처가 ㈜비엘포스메드로 변경되었습니다', cta: '자세히 보기', href: noticeUrl(11) },
      { text: 'NEAL · SMILE · BEODERM — 전 세계 36개국 이상에 공급하고 있습니다', cta: '제품 보기', to: '/products' },
    ],
    locations: locations.map((place) => ({ ...place, mapUrl: naverMap(place.address) })),
  },

  links: {
    order: `${LEGACY}/bbs/login.php?url=/shop/list-10`,
    catalog: `${LEGACY}/bbs/board.php?bo_table=sub4_3`,
    notices: `${LEGACY}/bbs/board.php?bo_table=sub4_1`,
    ethics: `${LEGACY}/main/sub5_2.php`,
    whistleblowing: `${LEGACY}/main/sub5_3.php`,
    noticeUrl,
  },

  nav: {
    main: [
      { label: '회사소개', to: '/about' },
      { label: '사업분야', to: '/business' },
      { label: '제품', to: '/products' },
      { label: '소식', to: '/news' },
    ],
    footer: [
      { label: '회사소개', to: '/about' },
      { label: '사업분야', to: '/business' },
      { label: '제품', to: '/products' },
      { label: '소식', to: '/news' },
      { label: '문의하기', to: '/contact' },
    ],
    quick: [
      { label: '온라인 주문', href: `${LEGACY}/bbs/login.php?url=/shop/list-10` },
      { label: '자료실 · 카탈로그', href: `${LEGACY}/bbs/board.php?bo_table=sub4_3` },
      { label: '공지사항', href: `${LEGACY}/bbs/board.php?bo_table=sub4_1` },
      { label: '채용', href: `${LEGACY}/bbs/board.php?bo_table=sub6_1` },
    ],
    contact: '문의하기',
  },

  ui: {
    skip: '본문 바로가기',
    home: '비엘테크 홈',
    mainMenu: '주 메뉴',
    mobileMenu: '모바일 메뉴',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
    language: '언어 선택',
    newWindow: '(새 창에서 열림)',
    noticeTag: '공지',
    latestTag: '최신 공지',
    prev: '이전 소식',
    next: '다음 소식',
    scrollDown: '아래로 스크롤',
    viewProducts: '제품 보기',
    backToTop: '맨 위로',
    productAlt: (name) => `${name} 제품 이미지`,
    cursor: { view: '자세히', read: '원문 보기', contact: '문의하기', open: '자료실 열기', products: '제품 보기', map: '지도 보기' },
  },

  hero: {
    eyebrow: ['Biomedical Polymer', 'Since 2006'],
    srTitle: '폴리머 기술로 더 나은 삶을 만듭니다 — 비엘테크',
    lines: [
      [{ type: 'word', text: '폴리머' }, { type: 'word', text: '기술로' }, { type: 'pill' }],
      [{ type: 'word', text: '더' }, { type: 'word', text: '나은' }, { type: 'stack' }, { type: 'plus' }, { type: 'word', text: '삶을', accent: true }],
      [{ type: 'word', text: '만듭니다' }, { type: 'down' }],
    ],
    lead: '특허 받은 폴리머 합성 기술로 정형외과용 의료기기, 하이드로겔, 산업용 보수재를 개발하고 제조합니다.',
    facts: ['36개국 이상 공급', 'ISO 13485', 'FDA · CE MDR'],
  },

  showcase: {
    eyebrow: 'Better Life, Think of New Ideal',
    title: '전 세계인의 삶의 질 향상을 위해 소재부터 연구합니다',
    meta: ['2006년 설립', '36개국 이상 공급', 'ISO 13485'],
    imageAlt: '정형외과용 캐스팅 테이프 소재를 가까이서 본 모습',
  },

  intro: {
    label: 'About BL tech',
    lead: '비엘테크는 2006년 설립 이후 특허 받은 폴리머 합성 기술로 정형외과용 의료기기와 하이드로겔 제품, 산업용 보수재를 개발하고 제조해 왔습니다.',
    body: [
      '대표 브랜드 NEAL을 비롯한 제품은 미국, 일본, 영국, 프랑스, 호주 등 전 세계 36개국 이상에 공급되고 있습니다.',
      '체계적인 제품 개발 프로세스와 엄격한 품질관리, 꾸준한 고객 지원을 바탕으로 Biomedical Polymer 분야의 연구개발과 투자를 이어가고 있습니다.',
    ],
    cta: '회사소개 보기',
  },

  stats: [
    { value: 20, suffix: '년', label: '2006년 설립 이후' },
    { value: 36, suffix: '+', label: '제품 공급 국가' },
    { value: 8, suffix: '건', label: '등록 특허 · 실용신안' },
    { value: 500, suffix: '만불', label: '수출의 탑 (2025)' },
  ],

  businessHeading: {
    label: 'Business',
    title: '사업분야',
    description:
      '하나의 폴리머 합성 기술에서 출발해 정형외과 의료기기, 하이드로겔 더마 케어, 산업용 보수재와 플랜트 수출까지 영역을 넓혀 왔습니다.',
  },
  businesses: businessBase.map((base) => ({ ...base, ...businessText[base.slug] })),

  productsHeading: {
    label: 'Products',
    title: '대표 제품',
    description: '국내외 정형외과 시장에서 알려진 대표 브랜드 NEAL과 BEODERM 하이드로겔을 소개합니다.',
    cta: '전체 제품 보기',
  },
  productCategories: { all: '전체', ortho: '정형외과', derma: '더마 케어', industrial: '산업용 보수재' },
  products: productBase.map((base) => ({ ...base, ...productText[base.slug] })),

  global: {
    label: 'Global Network',
    title: '전 세계 36개국 이상에 제품을 공급합니다',
    ariaLabel: '글로벌 네트워크',
    countries: ['미국', '일본', '영국', '프랑스', '호주', '말레이시아', '사우디아라비아', '필리핀'],
    brands: ['NEAL', 'SMILE', 'BEODERM', 'ISO 13485', 'FDA', 'CE MDR', 'CPNP'],
    stats: [
      { value: 36, suffix: '+', label: '제품 공급 국가' },
      { text: 'FDA · CE MDR', label: '미국 · 유럽 수출 등록' },
      { value: 500, suffix: '만불', label: '수출의 탑 (2025)' },
    ],
  },

  credentialsHeading: {
    label: 'Quality & Certification',
    title: '검증된 품질',
    description: 'ISO 13485 품질경영시스템과 미국 FDA · 유럽 CE MDR 등록, 그리고 특허 기술이 제품의 신뢰를 뒷받침합니다.',
    cta: '인증 · 특허 전체 보기',
  },
  credentials: credentialText.map((item, i) => ({ ...item, ...credentialColors(i) })),

  newsHeading: { label: 'News', title: '새 소식', description: '공지사항과 주요 소식을 전해 드립니다.' },
  notices: noticeBase.map((base) => ({ ...base, title: noticeTitles[base.id] })),

  footer: {
    ctaContact: { title: '제품 도입이나 대리점 문의가 있으신가요?', sub: '제품 · 대리점 · OEM/ODM 상담', big: '문의하기' },
    ctaCatalog: { title: '제품 카탈로그가 필요하신가요?', sub: '자료실에서 내려받을 수 있습니다 (새 창)', big: '카탈로그' },
    columns: { explore: '바로가기', support: '고객지원', places: '사업장', contact: '연락처' },
    legal: '비엘테크(주) · 대표이사 배진우 · © BLTECH All rights reserved.',
    ethics: '윤리경영',
    whistleblowing: '클린제보센터',
  },

  about: {
    hero: { label: 'About BL tech', title: '더 나은 삶을 위한 폴리머 기술', description },
    visualAlt: '비엘테크 사옥',
    storyTitle: '안전하고 신뢰할 수 있는 정형외과 의료기기',
    story: [
      '2006년 설립된 비엘테크는 특허 기술을 접목한 폴리머 소재로 정형외과 의료기기 제조를 시작했습니다. 창립 이래 쌓아 온 연구개발 역량을 바탕으로 제품 경쟁력을 꾸준히 높여 왔습니다.',
      'NEAL 브랜드 제품은 국내는 물론 해외에서도 품질과 기술력을 인정받고 있으며, 현재 미국·일본·영국·프랑스·호주 등 36개국 이상에 공급되고 있습니다.',
      '연구개발 중심 기업으로서 고품질·고부가가치 의료기기의 개발, 제조, 유통을 통해 전 세계인의 삶의 질 향상에 기여하고 글로벌 의료기기 시장에서의 리더십을 목표로 합니다.',
    ],
    statsLabel: '숫자로 보는 비엘테크',
    overviewHeading: { label: 'Company', title: '회사 개요' },
    overview: [
      { label: '회사명', value: '비엘테크(주) BL tech. co., ltd' },
      { label: '대표이사', value: '배진우' },
      { label: '설립일', value: '2006년 5월 1일' },
      { label: '사업분야', value: '의료기기 제조 · 산업용 보수재 제조' },
      { label: '주요 제품', value: '정형외과용 캐스팅 테이프, 스플린트, 산업용 보수 테이프, 하이드로겔 패치' },
    ],
    visionHeading: { label: 'Vision & Mission', title: '경영전략체계' },
    visionLabel: 'VISION',
    vision: '글로벌 경쟁력을 갖춘 기술 혁신과 윤리를 바탕으로 고객·직원·주주와 함께 성장하며 지속가능한 가치를 만드는 회사',
    missions: [
      { label: 'Innovation', title: '혁신', text: '혁신적인 기술 개발로 글로벌 시장에서 경쟁력을 확보합니다.' },
      { label: 'Trust', title: '신뢰', text: '고객의 필요에 맞춘 최상의 서비스로 신뢰를 쌓습니다.' },
      { label: 'Growth', title: '성장', text: '직원과 회사가 함께 성장하는 행복한 일터를 만듭니다.' },
      { label: 'Responsibility', title: '책임', text: '지속가능경영과 사회적 책임으로 ESG 가치를 실천합니다.' },
      { label: 'Fair', title: '공정', text: '윤리적이고 공정한 경영으로 모든 이해관계자에게 장기적 가치를 드립니다.' },
    ],
    historyHeading: { label: 'History', title: '연혁' },
    history: [
      {
        range: '2025 — 2020',
        years: [
          { year: 2025, events: ['500만불 수출의 탑 수상', '하이드로겔 글로벌 기업 E사와 계약, 필리핀 드럭스토어 진출'] },
          { year: 2024, events: ['비오덤 하이드로겔 스킨 프로텍터 CE MDR'] },
          {
            year: 2023,
            events: ['압박용 밴드 NEAL Cover(닐커버) 출시', '비오덤 하이드로겔 스킨 프로텍터 FDA 리스팅', 'ISO 22716 인증 획득', '하이드로겔 패치 화장품 CPNP 획득'],
          },
          { year: 2022, events: ['하이드로겔 스킨 프로텍터 브랜드 BEODERM(비오덤) 런칭'] },
          { year: 2021, events: ['정형외과용 제품 라인 CE MDR'] },
          { year: 2020, events: ['산업용 테이프 말레이시아 국가입찰 진입'] },
        ],
      },
      {
        range: '2019 — 2010',
        years: [
          { year: 2019, events: ['하이드로겔 시트 특허 등록', 'NEAL 브랜드 일본 시장 진출 · 점유율 1위 달성'] },
          { year: 2018, events: ['하이드로겔 제조방법 특허 등록', '사우디아라비아 플랜트 사업 진출'] },
          { year: 2017, events: ['말레이시아 플랜트 및 원부자재 수출'] },
          { year: 2016, events: ['원주지사 설립', '의료용 하이드로겔 생산 설비 구축'] },
          { year: 2015, events: ['SMILE 브랜드 런칭'] },
          { year: 2014, events: ['300만불 수출의 탑 수상'] },
          { year: 2013, events: ['NEAL Industrial Repair Tape 출시'] },
          { year: 2012, events: ['“B”사와 계약 체결'] },
          { year: 2011, events: ['가평 제2공장 설립'] },
        ],
      },
      {
        range: '2009 — 2006',
        years: [
          { year: 2009, events: ['본사 춘천 이전', '“O”사와 계약 체결'] },
          { year: 2008, events: ['ISO 13485 인증 획득', '100만불 수출의 탑 수상', 'FDA 인증 획득'] },
          { year: 2006, events: ['비엘테크 설립 (2006.05.01)', 'ISO 9001 인증 획득', '정형외과용 제품 CE MDD', '스플린트 · 언더패드 특허 출원'] },
        ],
      },
    ],
    certsHeading: { label: 'Patents & Certificates', title: '특허 · 인증' },
    certBlocks: [
      {
        title: '특허 · 실용신안',
        items: [
          { label: '제10-0799594호', title: '정형외과용 부목 및 그 제조방법', meta: '2008.01.24' },
          { label: '제10-0826214호', title: '정형외과용 발수 관상붕대 및 그 제조방법', meta: '2008.04.23' },
          { label: '제10-1746821호', title: '해수방식테이프', meta: '2017.06.07' },
          { label: '실용신안 20-0485980', title: '정형외과용 부목 키트', meta: '2018.03.13' },
          { label: '제10-1882308호', title: '정형외과 부목', meta: '2018.07.20' },
          { label: '제10-1901386호', title: '하이드로겔 제조방법', meta: '2018.09.17' },
          { label: '제10-1985368호', title: '보습력이 우수한 하이드로겔 조성물 및 이를 이용한 시트', meta: '2019.05.28' },
          { label: '제10-2481810호', title: '공기 중 이산화탄소를 이용해 경화하는 정형외과용 부목', meta: '2022.12.22' },
        ],
      },
      {
        title: '인증서',
        items: [
          { label: 'Kiwa', title: 'ISO 13485:2016', meta: '2024.09.21 – 2027.09.20' },
          { label: 'Kiwa', title: 'ISO 22716:2007', meta: '2023.09.12 – 2026.09.11' },
          { label: '(사)벤처기업협회', title: '벤처기업확인서', meta: '2025.11.03 – 2028.11.02' },
          { label: '중소벤처기업부장관', title: '기술혁신형 중소기업(Inno-biz)', meta: '2023.07.13 – 2026.07.12' },
          { label: '중소벤처기업부장관', title: '글로벌 강소기업 1000+ 지정', meta: '2026.04.01 – 2027.12.31' },
          { label: '중소벤처기업부장관', title: '중소기업 확인서 (중기업)', meta: '2026.04.01 – 2027.03.31' },
        ],
      },
      {
        title: '수출 등록',
        items: [
          { label: 'Export', title: 'FDA Listing', meta: 'Hydrogel Skin protector 외 7건 · FEI 3005869201' },
          { label: 'Export', title: 'CE DoC / MDR', meta: 'Cast material, Splints, Elastic Bands' },
          { label: 'Export', title: 'CPNP', meta: 'NEAL Hydrogel patch — Lifting · Mask · Skin protector' },
        ],
      },
      {
        title: '수상',
        award: true,
        items: [
          { label: '한국무역협회', title: '500만불 수출의 탑', meta: '2025' },
          { label: '강원도지사', title: '표창장', meta: '2026' },
          { label: '한국무역협회', title: '300만불 수출의 탑', meta: '2014' },
          { label: '한국무역협회', title: '100만불 수출의 탑', meta: '2008' },
        ],
      },
    ],
    orgHeading: { label: 'Organization', title: '조직 안내' },
    organization: {
      top: ['CEO', '이사회', '품질경영대리인'],
      departments: ['연구개발', '품질경영', '국내영업', '해외영업', '생산', '인사 · 회계', '구매 · 출고'],
    },
    locationsHeading: { label: 'Location', title: '오시는 길' },
    mapCta: '네이버 지도에서 보기 ↗',
  },

  businessPage: {
    hero: {
      label: 'Business',
      title: '의료 현장부터 산업 현장까지',
      description:
        '정형외과용 의료기기, 하이드로겔 더마 케어, 산업용 보수재와 플랜트 수출까지 — 하나의 폴리머 합성 기술에서 출발한 비엘테크의 사업 영역입니다.',
    },
    rndHeading: { label: 'Technology · R&D Center', title: '연구개발' },
    rnd: {
      eyebrow: 'Expanding Technological Capabilities',
      text: '정형외과용 고정재, 하이드로겔 드레싱재, 산업용 보수재를 개발하며 고분자 합성 기술의 영역을 넓혀 가고 있습니다.',
      areas: ['정형외과용 고정재', '하이드로겔 드레싱재', '산업용 보수재'],
      imageAlt: '연구소에서 시료를 분석하는 연구원',
    },
    qualityHeading: { label: 'Quality', title: '6단계 품질 검사 시스템' },
    stepLabel: (n) => `${n}단계`,
    qualitySteps: ['검사계획 수립', '입고 검사', '공정 검사', '샘플링 및 최종검사', '출하 검사', '사후 품질관리'],
    equipment: [
      { name: 'UTM', test: '굽힘강도(MPa) 테스트' },
      { name: 'FT-IR', test: '적외선 분광 검사' },
      { name: 'UTM', test: '인장강도 테스트' },
      { name: 'Magnetic stirrer', test: 'NCO 믹싱 테스트' },
    ],
    plantHeading: { label: 'Plant Export', title: '플랜트 진행 프로세스', period: '주문일 기준 약 6개월' },
    plantSteps: [
      { title: '현장 실사', text: '설비 설치를 위한 인프라 상태와 부지 조건을 실측 조사합니다.' },
      { title: '설비 배치 · 레이아웃 설계', text: '전기 배선, 배수, 제습 배관, 파티션 구성 등 설치 계획을 세웁니다.' },
      { title: '설비 발주', text: '생산설비 구매 발주를 진행합니다.' },
      { title: '원자재 구매 제안', text: '생산 초기 투입에 필요한 원자재 소요량과 구매 수량을 제안합니다.' },
      { title: '생산 교육 · 불량 분석', text: '장비 운용, 생산공정, 품질 불량 분석에 대한 기술 교육을 진행합니다.' },
    ],
    plantAlts: ['생산 공장 외관', '수출 항만'],
    esg: {
      label: 'Sustainability',
      title: '지속가능한 가치를 만드는 경영',
      body: 'ESG 경영과 윤리·준법 경영을 실천하며, 2026년 인권경영 실사 결과를 공개했습니다.',
      cta: '관련 소식 보기',
    },
  },

  productsPage: {
    hero: {
      label: 'Products',
      title: 'NEAL · SMILE · BEODERM',
      description: '정형외과용 캐스트와 스플린트, 하이드로겔 더마 케어, 산업용 보수재까지 비엘테크의 제품을 소개합니다.',
    },
    filterLabel: '제품 분류',
    catalog: '카탈로그 다운로드 ↗',
    order: '온라인 주문 ↗',
  },

  newsPage: {
    hero: {
      label: 'News',
      title: '비엘테크 소식',
      description: '공지사항과 주요 소식을 전해 드립니다. 각 글의 원문은 기존 공지사항 게시판에서 열립니다.',
    },
    boardLink: '공지사항 게시판 전체 보기 ↗',
  },

  contactPage: {
    hero: {
      label: 'Contact',
      title: '무엇이든 편하게 문의하세요',
      description: '제품 · 대리점 · OEM/ODM 상담을 도와드립니다. 급한 문의는 대표전화로 연락해 주세요.',
    },
    phoneLabel: '대표전화',
    faxLabel: '팩스',
    fields: {
      name: '이름 *',
      phone: '연락처 *',
      email: '이메일',
      type: '문의 유형 *',
      file: '첨부파일',
      message: '문의 내용 *',
      consent: '문의 처리를 위한 개인정보(이름, 연락처, 이메일) 수집·이용에 동의합니다. *',
      submit: '문의 보내기',
    },
    placeholders: { name: '홍길동', phone: '010-0000-0000', email: 'name@company.com', message: '문의하실 내용을 적어 주세요.' },
    inquiryTypes: ['제품', '대리점', 'OEM & ODM'],
    success: {
      title: '감사합니다!',
      text: (phone) => `지금은 시연용 양식이라 실제로 전송되지 않았습니다. 급한 문의는 대표전화 ${phone}로 연락해 주세요.`,
      reset: '다시 작성하기',
    },
  },

  notFound: { title: '페이지를 찾을 수 없습니다', text: '요청하신 페이지를 찾을 수 없습니다.', cta: '홈으로' },
}
