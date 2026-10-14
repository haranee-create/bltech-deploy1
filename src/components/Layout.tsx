import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { contents } from '../content'
import { LocaleContext, type Locale } from '../i18n/locale'
import { ReadyContext } from '../lib/hooks'
import { useMagnetic } from '../lib/magnetic'
import { scrollTo, startSmoothScroll } from '../lib/smooth'
import { Cursor } from './Cursor'
import { Footer } from './Footer'
import { Header } from './Header'
import { Preloader } from './Preloader'

export function Layout() {
  const [ready, setReady] = useState(false)
  const { pathname, hash } = useLocation()
  const locale: Locale = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ko'
  const content = contents[locale]
  useMagnetic()

  useEffect(() => {
    document.documentElement.lang = content.lang
  }, [content.lang])

  // Smooth scrolling starts once the preloader is gone.
  useEffect(() => {
    if (!ready) return
    return startSmoothScroll()
  }, [ready])

  // Runs inside the view transition, so the new page is captured already scrolled to the top.
  useLayoutEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) requestAnimationFrame(() => scrollTo(target, { offset: -140 }))
    else scrollTo(0, { immediate: true })
  }, [pathname, hash])

  const handleReady = useCallback(() => setReady(true), [])

  return (
    <LocaleContext.Provider value={locale}>
      <ReadyContext.Provider value={ready}>
        <a href="#main" className="skip-link">
          {content.ui.skip}
        </a>
        <Preloader onDone={handleReady} />
        <Cursor />
        <Header />
        <main id="main" className="site-main">
          <Outlet />
        </main>
        <Footer />
      </ReadyContext.Provider>
    </LocaleContext.Provider>
  )
}
