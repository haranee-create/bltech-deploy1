import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { useContent } from '../content'
import { useLocalizePath } from '../i18n/locale'
import { useInView } from '../lib/hooks'
import { scrollTo } from '../lib/smooth'
import { CircleIcon } from './Buttons'
import { AnnouncementBar } from './Header'
import { Logo } from './Logo'
import { RollText } from './RollText'

function CtaCards() {
  const { footer, links, ui } = useContent()
  const to = useLocalizePath()
  return (
    <section className="cta-cards" aria-label={`${footer.ctaContact.big} · ${footer.ctaCatalog.big}`}>
      <Link to={to('/contact')} viewTransition className="cta-card cta-card--dark" data-cursor={ui.cursor.contact}>
        <img className="cta-card__bg" src="/images/bltech/rnd-cleanroom.webp" alt="" loading="lazy" decoding="async" />
        <div>
          <p className="cta-card__title">{footer.ctaContact.title}</p>
          <p className="cta-card__sub">{footer.ctaContact.sub}</p>
        </div>
        <CircleIcon variant="light" />
        <p className="cta-card__big">{footer.ctaContact.big}</p>
      </Link>
      <a href={links.catalog} target="_blank" rel="noopener noreferrer" className="cta-card cta-card--brand" data-cursor={ui.cursor.open}>
        <img className="cta-card__bg" src="/images/bltech/quality-check.webp" alt="" loading="lazy" decoding="async" />
        <div>
          <p className="cta-card__title">{footer.ctaCatalog.title}</p>
          <p className="cta-card__sub">{footer.ctaCatalog.sub}</p>
        </div>
        <CircleIcon variant="light" direction="up-right" />
        <p className="cta-card__big">{footer.ctaCatalog.big}</p>
      </a>
    </section>
  )
}

export function Footer() {
  const { footer, nav, site, ui, links } = useContent()
  const to = useLocalizePath()
  const logoRef = useRef<HTMLAnchorElement>(null)
  const logoIn = useInView(logoRef, { rootMargin: '0px 0px -5% 0px' })
  // 하단 대형 로고가 보이는 동안 헤더 로고를 숨겨 로고가 두 번 겹쳐 보이지 않게 합니다.
  const brandVisible = useInView(logoRef, { once: false, rootMargin: '0px' })

  useEffect(() => {
    document.documentElement.classList.toggle('footer-brand-visible', brandVisible)
    return () => document.documentElement.classList.remove('footer-brand-visible')
  }, [brandVisible])

  return (
    <footer className="site-footer">
      <CtaCards />
      <div className="footer-card">
        <div className="footer-card__cols">
          <div>
            <h3>{footer.columns.explore}</h3>
            <ul>
              {nav.footer.map((item) => (
                <li key={item.to}>
                  <Link to={to(item.to)} viewTransition>
                    <RollText>{item.label}</RollText>
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => scrollTo(0)}>
                  <RollText>{ui.backToTop}</RollText>
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3>{footer.columns.support}</h3>
            <ul>
              {nav.quick.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <RollText>{item.label}</RollText>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-card__places">
            <h3>{footer.columns.places}</h3>
            {site.locations.map((place) => (
              <a key={place.name} href={place.mapUrl} target="_blank" rel="noopener noreferrer" className="footer-card__place">
                <strong>{place.name}</strong>
                <span>{place.address}</span>
              </a>
            ))}
          </div>
          <div className="footer-card__contact">
            <h3>{footer.columns.contact}</h3>
            <a href={`tel:${site.phoneHref}`}>Tel {site.phone}</a>
            <span>Fax {site.fax}</span>
          </div>
        </div>
        <div className="footer-card__legal">
          <span>{footer.legal}</span>
          <span className="footer-card__legal-links">
            <a href={links.ethics} target="_blank" rel="noopener noreferrer">
              {footer.ethics}
            </a>
            <a href={links.whistleblowing} target="_blank" rel="noopener noreferrer">
              {footer.whistleblowing}
            </a>
          </span>
        </div>
      </div>
      <div className="footer-brand">
        <Link to={to('/')} viewTransition className="footer-brand__logo" ref={logoRef} aria-label={ui.home}>
          <Logo play={logoIn} sizes="(max-width: 900px) 80vw, 720px" />
        </Link>
        <p className="footer-brand__slogan">{site.slogan}</p>
      </div>
      <AnnouncementBar className="announce--bottom" />
    </footer>
  )
}
