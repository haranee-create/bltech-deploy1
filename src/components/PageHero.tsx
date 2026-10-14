import type { ReactNode } from 'react'
import { useReady } from '../lib/hooks'
import { Reveal } from './Reveal'
import { WordReveal } from './WordReveal'

type PageHeroProps = { label: string; title: string; description?: string; children?: ReactNode }

/** 하위 페이지 상단 — 왼쪽 큰 제목, 오른쪽 소개 문장, 아래 얇은 구분선. */
export function PageHero({ label, title, description, children }: PageHeroProps) {
  const ready = useReady()
  return (
    <section className="page-hero">
      <div className="hero__glow hero__glow--soft" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="eyebrow">{label}</p>
      <div className="page-hero__grid">
        <WordReveal as="h1" text={title} className="page-hero__title" stagger={0.06} play={ready} />
        {(description || children) && (
          <Reveal className="page-hero__side" delay={0.35}>
            {description && <p className="page-hero__intro">{description}</p>}
            {children}
          </Reveal>
        )}
      </div>
    </section>
  )
}
