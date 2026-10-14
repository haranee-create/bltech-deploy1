import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router'
import { CircleButton } from '../components/Buttons'
import { PlusIcon } from '../components/Icons'
import { useContent, type HeroToken } from '../content'
import { useLocalizePath } from '../i18n/locale'
import { cx } from '../lib/cx'
import { useReady } from '../lib/hooks'
import { scrollTo } from '../lib/smooth'

const d = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties

const PILL_IMAGE = '/images/bltech/better-life.webp'
const STACK_IMAGES = ['/images/bltech/care-child-cast.webp', '/images/bltech/ai-hydrogel-macro.webp', '/images/bltech/product-repair.webp']

function Word({ children, delay, accent = false }: { children: string; delay: number; accent?: boolean }) {
  return (
    <span className="hero__mask" aria-hidden="true">
      <span className={cx('hero__word', accent && 'hero__word--accent')} style={d(delay)}>
        {children}
      </span>
    </span>
  )
}

/** 도형 안에 잘린 이미지 — 사진이 회전을 풀며 아래에서 올라옵니다. */
function Media({ src, className, delay, children }: { src: string; className: string; delay: number; children?: ReactNode }) {
  return (
    <span className={cx('hero-media', className)} aria-hidden="true">
      <span className="hero-media__inner" style={d(delay)}>
        <img src={src} alt="" />
      </span>
      {children}
    </span>
  )
}

export function Hero() {
  const { hero, ui, locale } = useContent()
  const ready = useReady()
  const localize = useLocalizePath()

  // Words rise one after another across all lines; media and controls follow on fixed cues.
  let wordIndex = 0
  const renderToken = (token: HeroToken, key: string) => {
    switch (token.type) {
      case 'word':
        return (
          <Word key={key} delay={0.05 + wordIndex++ * 0.075} accent={token.accent}>
            {token.text}
          </Word>
        )
      case 'pill':
        return <Media key={key} src={PILL_IMAGE} className="hero-pill" delay={0.55} />
      case 'stack':
        return (
          <span key={key} className="hero-stack">
            {STACK_IMAGES.map((src, i) => (
              <Media key={src} src={src} className="hero-stack__item" delay={0.65 + i * 0.07} />
            ))}
          </span>
        )
      case 'plus':
        return (
          <Link
            key={key}
            to={localize('/products')}
            viewTransition
            className="hero-plus hero-pop"
            style={d(0.9)}
            aria-label={ui.viewProducts}
            data-cursor={ui.cursor.products}
          >
            <PlusIcon />
          </Link>
        )
      case 'down':
        return (
          <CircleButton
            key={key}
            label={ui.scrollDown}
            direction="down"
            variant="light"
            className="hero__down hero-pop"
            style={d(1)}
            onClick={() => scrollTo('#showcase', { offset: -90 })}
          />
        )
    }
  }

  return (
    <section className={cx('hero', `hero--${locale}`, ready && 'is-in')}>
      {/* 로고 색(라임 · 블루 · 네이비)으로 아주 옅게 번지는 빛 */}
      <div className="hero__glow" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <p className="hero__eyebrow hero-fade" style={d(0.1)}>
        {hero.eyebrow[0]} <span aria-hidden="true">·</span> {hero.eyebrow[1]}
      </p>

      <h1 className="sr-only">{hero.srTitle}</h1>
      <div className="hero__title">
        {hero.lines.map((line, l) => (
          <div className="hero__line" key={l}>
            {line.map((token, t) => renderToken(token, `${l}-${t}`))}
          </div>
        ))}
      </div>

      <div className="hero__foot hero-fade" style={d(1.1)}>
        <p className="hero__lead">{hero.lead}</p>
        <ul className="hero__facts">
          {hero.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
