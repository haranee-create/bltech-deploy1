import { useEffect, useState, type CSSProperties } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { useContent } from '../content'
import { localizePath, stripLocale, useLocale, useLocalizePath, type Locale } from '../i18n/locale'
import { cx } from '../lib/cx'
import { useReady, useScrolled } from '../lib/hooks'
import { lockScroll } from '../lib/smooth'
import { PillLink } from './Buttons'
import { CloseIcon, MenuIcon } from './Icons'
import { Logo } from './Logo'
import { Marquee } from './Marquee'
import { RollText } from './RollText'

const LANGUAGES: { code: Locale; label: string }[] = [
  { code: 'ko', label: 'KOR' },
  { code: 'en', label: 'ENG' },
]

/** The same page in another language: '/about' ↔ '/en/about'. */
function useAlternatePath() {
  const { pathname, hash } = useLocation()
  const base = stripLocale(pathname)
  return (code: Locale) => `${localizePath(base, code)}${hash}`
}

export function AnnouncementBar({ className }: { className?: string }) {
  const { site } = useContent()
  const to = useLocalizePath()
  return (
    <div className={cx('announce', className)}>
      <Marquee speed={40}>
        {site.announcements.map((item) => (
          <p className="announce__item" key={item.text}>
            {item.text}{' '}
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.cta}
              </a>
            ) : (
              <Link to={to(item.to ?? '/')}>{item.cta}</Link>
            )}
          </p>
        ))}
      </Marquee>
    </div>
  )
}

/** KOR | ENG 토글 — 모든 화면 크기에서 헤더에 바로 보입니다. */
function LangSwitch() {
  const { ui } = useContent()
  const locale = useLocale()
  const alternate = useAlternatePath()

  return (
    <nav className="lang" aria-label={ui.language}>
      {LANGUAGES.map((language) =>
        language.code === locale ? (
          <span key={language.code} className="lang__item is-current" aria-current="true">
            {language.label}
          </span>
        ) : (
          <Link
            key={language.code}
            to={alternate(language.code)}
            viewTransition
            lang={language.code}
            className="lang__item"
            data-cursor={language.label}
          >
            {language.label}
          </Link>
        ),
      )}
    </nav>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { nav, ui, site, links } = useContent()
  const locale = useLocale()
  const to = useLocalizePath()
  const alternate = useAlternatePath()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const items = [...nav.main, { label: nav.contact, to: '/contact' }]
  const other = LANGUAGES.find((l) => l.code !== locale)!
  return (
    <div id="mobile-menu" className={cx('mobile-menu', open && 'is-open')} inert={!open} aria-hidden={!open}>
      <div className="mobile-menu__top">
        <Logo tone="white" className="mobile-menu__brand" sizes="140px" />
        <button type="button" className="mobile-menu__close" aria-label={ui.closeMenu} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <nav aria-label={ui.mobileMenu}>
        <ul className="mobile-menu__links">
          {items.map((item, i) => (
            <li key={item.to} style={{ '--i': i } as CSSProperties}>
              <Link to={to(item.to)} viewTransition onClick={onClose}>
                <span className="mobile-menu__index">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobile-menu__foot">
        <a href={`tel:${site.phoneHref}`}>Tel {site.phone}</a>
        <div className="mobile-menu__socials">
          <a href={links.order} target="_blank" rel="noopener noreferrer">
            {nav.quick.find((q) => q.href === links.order)?.label}
          </a>
          <Link to={alternate(other.code)} viewTransition lang={other.code} onClick={onClose}>
            {other.label}
          </Link>
        </div>
      </div>
    </div>
  )
}

/** 로고 · 메뉴 · 문의 버튼이 한 줄에 놓인 고정 헤더. 스크롤하면 반투명 유리 배경이 깔립니다. */
export function Header() {
  const { nav, ui } = useContent()
  const to = useLocalizePath()
  const ready = useReady()
  const scrolled = useScrolled(12)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // 경로가 바뀌면 모바일 메뉴를 닫습니다.
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    lockScroll(menuOpen)
  }, [menuOpen])

  return (
    <>
      <AnnouncementBar />
      <header className={cx('site-header', scrolled && 'is-scrolled', ready && 'is-in')}>
        <Link to={to('/')} viewTransition className="site-header__logo" aria-label={ui.home}>
          <Logo play={ready} sizes="180px" />
        </Link>
        <nav className="site-nav" aria-label={ui.mainMenu}>
          <ul className="site-nav__links">
            {nav.main.map((item) => (
              <li key={item.to}>
                <NavLink to={to(item.to)} viewTransition className={({ isActive }) => cx(isActive && 'is-active')}>
                  <RollText>{item.label}</RollText>
                  {item.badge && <span className="badge">{item.badge}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__actions">
          <LangSwitch />
          <PillLink to="/contact" variant="dark" className="site-header__contact">
            {nav.contact}
          </PillLink>
          <button
            type="button"
            className="site-header__burger"
            aria-label={ui.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
