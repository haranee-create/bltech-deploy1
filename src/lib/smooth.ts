import Lenis from 'lenis'

// Single Lenis instance shared by the whole app (null when reduced motion is on or before start).
let lenis: Lenis | null = null

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function startSmoothScroll() {
  if (lenis || prefersReducedMotion()) return () => {}
  const instance = new Lenis({ autoRaf: true, lerp: 0.1 })
  lenis = instance
  return () => {
    instance.destroy()
    if (lenis === instance) lenis = null
  }
}

type Target = number | string | HTMLElement

export function scrollTo(target: Target, { offset = 0, immediate = false } = {}) {
  if (lenis) {
    lenis.scrollTo(target, { offset, immediate, duration: 1.4 })
    return
  }
  const el = typeof target === 'number' ? null : typeof target === 'string' ? document.querySelector(target) : target
  const top = el ? el.getBoundingClientRect().top + window.scrollY : (target as number)
  window.scrollTo({ top: top + offset, behavior: immediate || prefersReducedMotion() ? 'auto' : 'smooth' })
}

export function lockScroll(locked: boolean) {
  document.documentElement.classList.toggle('is-locked', locked)
  if (!lenis) return
  if (locked) lenis.stop()
  else lenis.start()
}
