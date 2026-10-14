import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import { Reveal } from './Reveal'
import { WordReveal } from './WordReveal'

type SectionHeadingProps = {
  label: string
  title: string
  /** 오른쪽에 놓이는 짧은 설명 */
  description?: string
  actions?: ReactNode
  tone?: 'dark' | 'light'
}

export function SectionHeading({ label, title, description, actions, tone = 'dark' }: SectionHeadingProps) {
  return (
    <header className={cx('section-heading', tone === 'light' && 'section-heading--light')}>
      <div className="section-heading__main">
        <p className={cx('eyebrow', tone === 'light' && 'eyebrow--light')}>{label}</p>
        <WordReveal as="h2" text={title} className="section-heading__title" stagger={0.06} />
      </div>
      {(description || actions) && (
        <Reveal className="section-heading__side" delay={0.2}>
          {description && <p className="section-heading__desc">{description}</p>}
          {actions}
        </Reveal>
      )}
    </header>
  )
}
