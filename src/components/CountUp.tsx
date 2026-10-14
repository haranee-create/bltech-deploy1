import { useEffect, useRef, useState } from 'react'
import { useInView } from '../lib/hooks'
import { prefersReducedMotion } from '../lib/smooth'

/** Counts from 0 to `value` once visible. */
export function CountUp({ value, suffix = '', duration = 1600 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref)
  const [current, setCurrent] = useState(0)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    if (!inView || reduced) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setCurrent(Math.round(value * (1 - (1 - t) ** 4)))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduced, value, duration])

  return (
    <span ref={ref}>
      {reduced ? value : current}
      {suffix}
    </span>
  )
}
