import { createContext, useContext, useEffect, useState, type RefObject } from 'react'
import { useContent } from '../content'

/** True once the preloader has finished — entrance animations wait for it. */
export const ReadyContext = createContext(false)
export const useReady = () => useContext(ReadyContext)

type InViewOptions = { once?: boolean; rootMargin?: string; threshold?: number }

export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  { once = true, rootMargin = '0px 0px -10% 0px', threshold = 0 }: InViewOptions = {},
) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin, threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, once, rootMargin, threshold])
  return inView
}

export function useScrolled(threshold: number) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])
  return matches
}

/** Sets the document title in the current language ("Title | 비엘테크" / "Title | BL Tech"). */
export function usePageTitle(title?: string) {
  const { meta } = useContent()
  useEffect(() => {
    document.title = title ? `${title} | ${meta.titleSuffix}` : meta.homeTitle
  }, [title, meta])
}
