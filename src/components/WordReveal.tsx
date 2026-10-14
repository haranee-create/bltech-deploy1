import { Fragment, useCallback, useRef, type CSSProperties, type ElementType } from 'react'
import { useInView } from '../lib/hooks'
import { cx } from '../lib/cx'

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'

type WordRevealProps = {
  text: string
  as?: Tag
  className?: string
  /** Seconds before the first word starts. */
  delay?: number
  /** Seconds between words. */
  stagger?: number
  /** Force the animation on/off. When omitted it plays once the element scrolls into view. */
  play?: boolean
}

/** Splits text into words that slide up from behind a mask, one after another. */
export function WordReveal({ text, as = 'p', className, delay = 0, stagger = 0.035, play }: WordRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref)
  const setRef = useCallback((el: HTMLElement | null) => {
    ref.current = el
  }, [])
  const active = play ?? inView
  const words = text.split(' ')
  const Component: ElementType = as

  return (
    <Component ref={setRef} className={cx('word-reveal', active && 'is-in', className)}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="word-reveal__mask" aria-hidden="true">
            <span className="word-reveal__word" style={{ '--d': `${delay + i * stagger}s` } as CSSProperties}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Component>
  )
}
