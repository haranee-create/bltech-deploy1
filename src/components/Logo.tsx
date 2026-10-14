import { useContent } from '../content'
import { cx } from '../lib/cx'

// 공식 CI 로고 (scripts/convert-logo.mjs 로 BL_tech_ci.ai 에서 생성)
const LOGO_1X = '/images/brand/bltech-logo.webp' // 1200 x 426
const LOGO_2X = '/images/brand/bltech-logo@2x.webp' // 2374 x 843

type LogoProps = {
  className?: string
  /** 켜지면 로고가 아래에서 위로 드러납니다. */
  play?: boolean
  /** white: 어두운 배경용 단색 로고 */
  tone?: 'color' | 'white'
  sizes?: string
}

export function Logo({ className, play = true, tone = 'color', sizes = '(max-width: 900px) 60vw, 460px' }: LogoProps) {
  const { site } = useContent()
  return (
    <span className={cx('logo', tone === 'white' && 'logo--white', play && 'is-in', className)}>
      <img
        src={LOGO_1X}
        srcSet={`${LOGO_1X} 1200w, ${LOGO_2X} 2374w`}
        sizes={sizes}
        width={1200}
        height={426}
        alt={site.logoAlt}
        decoding="async"
      />
    </span>
  )
}
