import { useEffect, useRef, useState } from 'react'
import { cx } from '../lib/cx'
import { useMediaQuery } from '../lib/hooks'

/**
 * Small dot that trails the pointer. Over any element with `data-cursor="Label"`
 * it grows into a pill showing that label. Desktop / fine pointers only.
 */
export function Cursor() {
  const enabled = useMediaQuery('(hover: hover) and (pointer: fine) and (min-width: 1025px)')
  const ref = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!enabled || !el) return
    let x = 0
    let y = 0
    let targetX = 0
    let targetY = 0
    let started = false
    let frame = 0

    const pickLabel = (node: Element | null) => setLabel(node?.closest('[data-cursor]')?.getAttribute('data-cursor') ?? null)

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!started) {
        started = true
        x = targetX
        y = targetY
      }
      setVisible(true)
      pickLabel(e.target as Element)
    }
    // Content moves under a still pointer while scrolling, so re-check what's beneath it.
    const onScroll = () => started && pickLabel(document.elementFromPoint(targetX, targetY))
    const onLeave = () => setVisible(false)

    const loop = () => {
      x += (targetX - x) * 0.22
      y += (targetY - y) * 0.22
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div ref={ref} className={cx('cursor', visible && 'is-visible', label && 'has-label')} aria-hidden="true">
      <div className="cursor__shape">
        <span className="cursor__label">{label}</span>
      </div>
    </div>
  )
}
