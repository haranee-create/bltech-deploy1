import { Fragment, useRef, type CSSProperties } from 'react'
import { useScrollProgress, type ScrollProgress } from '../lib/scroll'
import { cx } from '../lib/cx'

// Words light up one by one as the paragraph scrolls through the middle of the screen.
const setFill = ({ enter }: ScrollProgress, el: HTMLElement) => el.style.setProperty('--fill', enter.toFixed(4))

/** 스크롤하는 만큼 단어가 하나씩 진해지는 문단. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  useScrollProgress(ref, setFill, 0.75)
  const words = text.split(' ')

  return (
    <p ref={ref} className={cx('scroll-text', className)} style={{ '--n': words.length } as CSSProperties}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="scroll-text__word" aria-hidden="true" style={{ '--i': i } as CSSProperties}>
            {word}
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </p>
  )
}
