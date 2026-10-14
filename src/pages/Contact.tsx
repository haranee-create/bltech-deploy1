import { useState, type FormEvent } from 'react'
import { PillButton } from '../components/Buttons'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { useContent } from '../content'
import { usePageTitle } from '../lib/hooks'

export default function Contact() {
  const { contactPage: page, site, nav } = useContent()
  usePageTitle(nav.contact)
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero {...page.hero} />
      <section className="contact">
        <Reveal className="contact__info">
          <dl>
            <div>
              <dt>{page.phoneLabel}</dt>
              <dd>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt>{page.faxLabel}</dt>
              <dd>{site.fax}</dd>
            </div>
            {site.locations.map((place) => (
              <div key={place.name}>
                <dt>{place.name}</dt>
                <dd>
                  <a href={place.mapUrl} target="_blank" rel="noopener noreferrer">
                    {place.address}
                  </a>
                  <span className="contact__role">{place.role}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="form-success" role="status">
              <p className="form-success__title">{page.success.title}</p>
              <p>{page.success.text(site.phone)}</p>
              <button type="button" className="form-success__reset" onClick={() => setSent(false)}>
                {page.success.reset}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="contact-form__row">
                <label className="field">
                  <span>{page.fields.name}</span>
                  <input name="name" required autoComplete="name" placeholder={page.placeholders.name} />
                </label>
                <label className="field">
                  <span>{page.fields.phone}</span>
                  <input name="phone" type="tel" required autoComplete="tel" placeholder={page.placeholders.phone} />
                </label>
              </div>
              <label className="field">
                <span>{page.fields.email}</span>
                <input name="email" type="email" autoComplete="email" placeholder={page.placeholders.email} />
              </label>
              <fieldset className="field">
                <legend>{page.fields.type}</legend>
                <div className="chips">
                  {page.inquiryTypes.map((item, i) => (
                    <label key={item} className="chip-option">
                      <input type="radio" name="type" value={item} required={i === 0} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="field">
                <span>{page.fields.file}</span>
                <input name="file" type="file" className="field__file" />
              </label>
              <label className="field">
                <span>{page.fields.message}</span>
                <textarea name="message" required rows={5} placeholder={page.placeholders.message} />
              </label>
              <label className="consent">
                <input type="checkbox" required />
                <span>{page.fields.consent}</span>
              </label>
              <PillButton type="submit">{page.fields.submit}</PillButton>
            </form>
          )}
        </Reveal>
      </section>
    </>
  )
}
