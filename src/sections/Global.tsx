import { useRef } from 'react'
import { Marquee } from '../components/Marquee'
import { StatsRow } from '../components/StatsRow'
import { WordReveal } from '../components/WordReveal'
import { useContent } from '../content'
import { useScrollProgress, type ScrollProgress } from '../lib/scroll'

const setPass = ({ pass }: ScrollProgress, el: HTMLElement) => el.style.setProperty('--pass', pass.toFixed(4))

/** 세계 지도를 배경으로 한 다크 네이비 섹션 — 배경은 스크롤에 따라 천천히 움직입니다. */
export function Global() {
  const { global } = useContent()
  const ref = useRef<HTMLElement>(null)
  useScrollProgress(ref, setPass)

  return (
    <section className="global-dark" ref={ref} aria-label={global.ariaLabel}>
      <img className="global-dark__bg" src="/images/bltech/ai-global-export.webp" alt="" loading="lazy" decoding="async" />
      <div className="global-dark__inner">
        <p className="eyebrow eyebrow--light">{global.label}</p>
        <WordReveal key={global.title} as="h2" text={global.title} className="global-dark__title" stagger={0.05} />
        <StatsRow items={global.stats} tone="light" />
      </div>
      {/* keys re-measure the marquees when the language changes */}
      <div className="global-dark__rows" key={global.countries.join()}>
        <Marquee speed={30} pauseOnHover>
          {global.countries.map((name) => (
            <span className="global__item" key={name}>
              {name}
              <span className="global__dot" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
        <Marquee speed={24} reverse pauseOnHover>
          {global.brands.map((name) => (
            <span className="global__item global__item--outline" key={name}>
              {name}
              <span className="global__dot" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
