import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { cx } from '../lib/cx'

type MarqueeProps = {
  children: ReactNode
  /** Pixels per second. */
  speed?: number
  reverse?: boolean
  pauseOnHover?: boolean
  gap?: number
  className?: string
}

/**
 * Seamless infinite marquee. The content is measured once and repeated just enough
 * times to cover the container, then the track slides by exactly one copy.
 */
export function Marquee({ children, speed = 50, reverse = false, pauseOnHover = false, gap = 0, className }: MarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const unitRef = useRef<HTMLDivElement>(null)
  const [unitWidth, setUnitWidth] = useState(0)
  const [copies, setCopies] = useState(2)

  useLayoutEffect(() => {
    const root = rootRef.current
    const unit = unitRef.current
    if (!root || !unit) return
    const measure = () => {
      const width = unit.getBoundingClientRect().width
      if (!width) return
      setUnitWidth(width)
      setCopies(Math.max(2, Math.ceil(root.clientWidth / width) + 1))
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    observer.observe(unit)
    return () => observer.disconnect()
  }, [])

  const style = {
    '--marquee-gap': `${gap}px`,
    '--marquee-distance': `${-unitWidth}px`,
    '--marquee-duration': `${unitWidth / speed}s`,
  } as CSSProperties

  return (
    <div
      ref={rootRef}
      className={cx('marquee', reverse && 'marquee--reverse', pauseOnHover && 'marquee--pause', unitWidth > 0 && 'is-ready', className)}
      style={style}
    >
      <div className="marquee__track">
        {Array.from({ length: copies }, (_, i) => (
          <div key={i} ref={i === 0 ? unitRef : undefined} className="marquee__unit" aria-hidden={i > 0 || undefined} inert={i > 0}>
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
