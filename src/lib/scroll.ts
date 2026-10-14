import { useEffect, type RefObject } from 'react'
import { prefersReducedMotion } from './smooth'

export type ScrollProgress = {
  /** 0 when the element's top reaches the bottom of the viewport → 1 once it has risen `enterSpan` of the viewport. */
  enter: number
  /** 0 when the top reaches the bottom of the viewport → 1 when the bottom leaves the top. */
  pass: number
}

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))

/**
 * Calls `onProgress` (at most once per frame) while the page scrolls, with the element's scroll progress.
 * Handlers should write CSS variables directly so nothing re-renders per frame.
 * Pass a stable handler (module-level function or useCallback).
 */
export function useScrollProgress<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onProgress: (progress: ScrollProgress, el: T) => void,
  enterSpan = 0.85,
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      onProgress({ enter: 1, pass: 0.5 }, el)
      return
    }
    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      onProgress(
        {
          enter: clamp((vh - rect.top) / (vh * enterSpan)),
          pass: clamp((vh - rect.top) / (vh + rect.height)),
        },
        el,
      )
    }
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [ref, onProgress, enterSpan])
}
