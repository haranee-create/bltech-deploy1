import { useRef } from 'react'
import { WordReveal } from '../components/WordReveal'
import { SHOWCASE_IMAGE } from '../content/shared'
import { useContent } from '../content'
import { useScrollProgress, type ScrollProgress } from '../lib/scroll'

const setProgress = ({ enter, pass }: ScrollProgress, el: HTMLElement) => {
  el.style.setProperty('--enter', enter.toFixed(4))
  el.style.setProperty('--pass', pass.toFixed(4))
}

/** 화면 폭보다 작게 시작해 스크롤에 따라 꽉 차게 커지는 대형 비주얼. */
export function Showcase() {
  const { showcase } = useContent()
  const ref = useRef<HTMLElement>(null)
  useScrollProgress(ref, setProgress)

  return (
    <section className="showcase" id="showcase" ref={ref}>
      <div className="showcase__frame">
        <img className="showcase__img" src={SHOWCASE_IMAGE} alt={showcase.imageAlt} loading="lazy" decoding="async" />
        <div className="showcase__shade" aria-hidden="true" />
        <div className="showcase__content">
          <p className="eyebrow eyebrow--light">{showcase.eyebrow}</p>
          <WordReveal as="h2" text={showcase.title} className="showcase__title" stagger={0.05} />
          <ul className="showcase__meta">
            {showcase.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
