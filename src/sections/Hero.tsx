import type { CSSProperties } from 'react'
import { PillLink } from '../components/Buttons'
import { useContent } from '../content'
import { cx } from '../lib/cx'
import { useReady } from '../lib/hooks'

const d = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties

const HERO_IMAGE = '/images/bltech/ai-hero-clinical.webp'

/** 첫 화면 — 왼쪽에 제목·설명·버튼, 오른쪽에 큰 임상 사진, 아래에 인증 정보 한 줄. */
export function Hero() {
  const { hero, locale } = useContent()
  const ready = useReady()

  return (
    <section className={cx('hero', `hero--${locale}`, ready && 'is-in')}>
      <div className="hero__glow hero__glow--soft" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="hero__copy">
        <p className="hero__eyebrow hero-fade" style={d(0.1)}>
          <span>
            {hero.eyebrow[0]} <span className="hero__eyebrow-dash" aria-hidden="true">—</span> {hero.eyebrow[1]}
          </span>
        </p>

        <h1 className="hero__title">
          {hero.title.map((line, i) => (
            <span className="hero__mask" key={line}>
              <span className={cx('hero__line', i === hero.accentLine && 'hero__line--accent')} style={d(0.15 + i * 0.1)}>
                {line}
              </span>{' '}
            </span>
          ))}
        </h1>

        <p className="hero__lead hero-fade" style={d(0.55)}>
          {hero.lead}
        </p>

        <div className="hero__actions hero-fade" style={d(0.7)}>
          <PillLink to="/products" variant="dark">
            {hero.primary}
          </PillLink>
          <PillLink to="/about">{hero.secondary}</PillLink>
        </div>
      </div>

      <figure className="hero__visual">
        <img src={HERO_IMAGE} alt={hero.imageAlt} width={1024} height={1536} fetchPriority="high" decoding="async" />
        <figcaption className="hero__badge hero-fade" style={d(1.05)}>
          <span className="hero__badge-label">{hero.badge.label}</span>
          <span className="hero__badge-text">{hero.badge.text}</span>
        </figcaption>
      </figure>

      <dl className="hero__facts hero-fade" style={d(0.9)}>
        {hero.facts.map((fact) => (
          <div className="hero__fact" key={fact.value}>
            <dt>{fact.value}</dt>
            <dd>{fact.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
