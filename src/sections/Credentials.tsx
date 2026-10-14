import type { CSSProperties } from 'react'
import { PillLink } from '../components/Buttons'
import { Marquee } from '../components/Marquee'
import { SectionHeading } from '../components/SectionHeading'
import { useContent, type Credential } from '../content'

function CredentialCard({ item }: { item: Credential }) {
  return (
    <article className="ccard" style={{ '--bg': item.bg, '--fg': item.fg } as CSSProperties}>
      <p className="ccard__kind">
        <span className="ccard__dot" aria-hidden="true" />
        {item.kind}
      </p>
      <h3 className="ccard__title">{item.title}</h3>
      <div className="ccard__foot">
        <p className="ccard__detail">{item.detail}</p>
        <p className="ccard__meta">{item.meta}</p>
      </div>
    </article>
  )
}

export function Credentials() {
  const { credentialsHeading, credentials, locale } = useContent()
  const { cta, ...heading } = credentialsHeading
  return (
    <section className="credentials">
      <SectionHeading {...heading} actions={<PillLink to="/about#certifications">{cta}</PillLink>} />
      {/* key re-measures the marquee when the language changes */}
      <Marquee key={locale} speed={36} gap={16} pauseOnHover className="credentials__marquee">
        {credentials.map((item) => (
          <CredentialCard key={item.title} item={item} />
        ))}
      </Marquee>
    </section>
  )
}
