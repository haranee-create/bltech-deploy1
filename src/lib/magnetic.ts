import { useEffect } from 'react'
import { prefersReducedMotion } from './smooth'

const SELECTOR = '[data-magnetic], .circle, .pill-link__icon, .hero-plus'
const STRENGTH = 0.3

/**
 * Round buttons lean toward the pointer while it is over them.
 * Uses the individual `translate` property so it never fights CSS transform animations.
 */
export function useMagnetic() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion()) return
    let active: HTMLElement | null = null

    const release = () => {
      if (active) active.style.translate = ''
      active = null
    }

    const onMove = (e: PointerEvent) => {
      const target = (e.target as Element | null)?.closest<HTMLElement>(SELECTOR) ?? null
      if (target !== active) release()
      if (!target) return
      active = target
      const rect = target.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      target.style.translate = `${(dx * STRENGTH).toFixed(1)}px ${(dy * STRENGTH).toFixed(1)}px`
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', release)
    window.addEventListener('scroll', release, { passive: true })
    return () => {
      release()
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', release)
      window.removeEventListener('scroll', release)
    }
  }, [])
}
