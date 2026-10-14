# 비엘테크 BL tech 홈페이지 (리뉴얼 시안)

Vite + React + TypeScript 로 만든 비엘테크 홈페이지입니다. 한국어(`/`)와 영어(`/en`) 두 언어를 지원합니다.
회사 정보는 기존 홈페이지(bl-tech.co.kr, 영문 /eng 포함) 기준이며, 사진은 기존 사이트 이미지 + AI 보완 이미지를 사용합니다.

## 실행

```bash
npm install        # 처음 한 번
npm run dev        # 개발 서버 → http://localhost:5173
npm run build      # 배포용 빌드 → dist/
npm run preview    # 빌드 결과 미리보기 → http://localhost:4173
npm run lint       # 코드 검사
```

## 메뉴 구성

영문 주소는 한글 주소 앞에 `/en` 이 붙습니다 (예: `/about` ↔ `/en/about`). 헤더의 KOR/ENG 로 같은 페이지끼리 전환됩니다.

| 경로 (한글 · 영문) | 페이지 | 주요 내용 |
|---|---|---|
| `/` · `/en` | 홈 | 히어로, 대형 비주얼, 회사 소개, 사업분야 카드, 대표 제품, 글로벌, 인증·특허, 새 소식 |
| `/about` · `/en/about` | 회사소개 | 개요, 숫자 지표, 비전·미션, 연혁, 특허·인증·수상, 조직도, 오시는 길 |
| `/business` · `/en/business` | 사업분야 | 9개 사업 카드, R&D, 6단계 품질검사, 플랜트 프로세스, ESG |
| `/products` · `/en/products` | 제품 | 18개 제품 (정형외과 / 더마 케어 / 산업용 보수재 필터) |
| `/news` · `/en/news` | 소식 | 공지사항 (원문은 기존 한글 게시판으로 연결) |
| `/contact` · `/en/contact` | 문의하기 | 연락처·사업장, 문의 양식 (현재 시연용 — 실제 전송 안 됨) |

## 내용 수정 위치

| 무엇 | 파일 |
|---|---|
| 한국어 문구 전체 (회사 정보, 메뉴, 각 페이지 문장, 버튼 이름) | `src/content/ko.ts` |
| 영어 문구 전체 | `src/content/en.ts` |
| 두 언어가 함께 쓰는 것 (이미지, 카드 색, 제품 목록, 공지 번호) | `src/content/shared.ts` |
| 문구 항목 정의 (빠진 번역이 있으면 빌드 오류로 알려 줌) | `src/content/types.ts` |
| 색상·폰트 토큰 (브랜드 네이비·블루·그린) | `src/styles/base.css` (`:root`) |

## 로고

- 공식 CI 원본: `assets-src/bltech-ci/BL_tech_ci.ai` (기존 사이트 CI 페이지 제공 파일)
- `npm run logo` → `public/images/brand/` 에 웹용 로고(1x·2x WebP, 그림자 제거)와 심볼, `public/` 에 파비콘을 만듭니다.
- CI 색상: BL BLUE `#243f8e` (PANTONE 7687C), BL GREEN `#009244` (PANTONE 347C) — `src/styles/base.css`

## 이미지

- `public/images/bltech/*.webp` — 실제로 사이트에 쓰이는 이미지
- 기존 사이트 원본 PNG: `assets-src/bltech/` → `npm run images:convert` 로 WebP 변환 (파일 이름 매핑은 `scripts/convert-images.mjs`)
- AI 보완 이미지: 프롬프트는 `scripts/image-prompts.mjs`, 생성은 `npm run images` (`.env.local` 의 `OPENAI_API_KEY` 필요)
- `assets-src/` 는 git 에 올리지 않습니다 (원본 보관용).

## 배포 전에 확인할 것

- 문의 양식은 아직 서버와 연결되지 않았습니다 (Formspree, 자체 API 등 연결 필요).
- 공지·주문·자료실·영문 링크는 기존 사이트(bl-tech.co.kr)로 연결됩니다. 기존 사이트를 내리면 링크를 바꿔야 합니다.
- **Vercel (사용 중)**: GitHub `haranee-create/bltech-deploy1` 의 `main` 에 올리면 https://bltech-deploy1.vercel.app/ 에 자동 배포. 빌드 설정(Vite, 결과 폴더 `dist`)과 SPA 라우팅은 `vercel.json`.
- **Netlify**: Build `npm run build`, Publish `dist`, SPA 라우팅은 `public/_redirects`.
