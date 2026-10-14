import { useCallback, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useInView } from '../lib/hooks'
import { cx } from '../lib/cx'

type Tag = 'div' | 'p' | 'section' | 'li' | 'article' | 'span'

/** Fades + lifts its children in when they scroll into view. */
export function Reveal({
  as = 'div',
  delay = 0,
  className,
  children,
}: {
  as?: Tag
  delay?: number
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref)
  // A callback ref works for whichever tag `as` picks.
  const setRef = useCallback((el: HTMLElement | null) => {
    ref.current = el
  }, [])
  const Component: ElementType = as
  return (
    <Component ref={setRef} className={cx('reveal', inView && 'is-in', className)} style={{ '--d': `${delay}s` } as CSSProperties}>
      {children}
    </Component>
  )
}
