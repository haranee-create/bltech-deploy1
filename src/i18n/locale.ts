import { createContext, useCallback, useContext } from 'react'

export type Locale = 'ko' | 'en'

/** URL prefix per locale: Korean lives at the root, English under /en. */
const PREFIX: Record<Locale, string> = { ko: '', en: '/en' }

export const LocaleContext = createContext<Locale>('ko')
export const useLocale = () => useContext(LocaleContext)

/** '/about' → '/en/about' (and '/' → '/en') for English. Hashes are kept. */
export function localizePath(path: string, locale: Locale) {
  const prefix = PREFIX[locale]
  if (!prefix) return path
  return path === '/' ? prefix : `${prefix}${path}`
}

/** '/en/about' → '/about', '/en' → '/'. */
export function stripLocale(pathname: string) {
  if (pathname === '/en' || pathname === '/en/') return '/'
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname
}

/** Returns a function that turns a site path into the current locale's path. */
export function useLocalizePath() {
  const locale = useLocale()
  return useCallback((path: string) => localizePath(path, locale), [locale])
}
