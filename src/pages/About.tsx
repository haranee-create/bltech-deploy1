import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { RevealImage } from '../components/RevealImage'
import { SectionHeading } from '../components/SectionHeading'
import { StatsRow } from '../components/StatsRow'
import { WordReveal } from '../components/WordReveal'
import { useContent } from '../content'
import { cx } from '../lib/cx'
import { usePageTitle } from '../lib/hooks'

export default function About() {
  const { about, stats, site, ui, contactPage, nav } = useContent()
  usePageTitle(nav.main[0].label)

  return (
    <>
      <PageHero {...about.hero} />

      <section className="about-visual">
        <RevealImage src="/images/bltech/company-building.webp" alt={about.visualAlt} eager />
      </section>

      <section className="about-story">
        <WordReveal key={about.storyTitle} as="h2" text={about.storyTitle} className="about-story__title" stagger={0.05} />
        <div className="about-story__text">
          {about.story.map((paragraph, i) => (
            <Reveal as="p" delay={i * 0.1} key={i}>
              {paragraph}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-stats" aria-label={about.statsLabel}>
        <StatsRow items={stats} />
      </section>

      <section className="overview">
        <SectionHeading {...about.overviewHeading} />
        <dl className="overview__list">
          {about.overview.map((row, i) => (
            <Reveal className="overview__row" key={row.label} delay={i * 0.05}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="vision">
        <SectionHeading {...about.visionHeading} />
        <div className="vision__statement">
          <p className="vision__label">{about.visionLabel}</p>
          <WordReveal key={about.vision} as="p" text={about.vision} className="vision__text" stagger={0.03} />
        </div>
        <ul className="missions">
          {about.missions.map((mission, i) => (
            <Reveal as="li" className="mission" key={mission.title} delay={i * 0.06}>
              <span className="mission__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="mission__en">{mission.label}</span>
              <strong className="mission__ko">{mission.title}</strong>
              <span className="mission__text">{mission.text}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="history" id="history">
        <SectionHeading {...about.historyHeading} />
        {about.history.map((group) => (
          <div className="history__group" key={group.range}>
            <p className="history__range">{group.range}</p>
            <ol className="history__years">
              {group.years.map((item) => (
                <Reveal as="li" className="history__year" key={item.year}>
                  <span className="history__num">{item.year}</span>
                  <ul className="history__events">
                    {item.events.map((event) => (
                      <li key={event}>{event}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>
        ))}
      </section>

      <section className="certs" id="certifications">
        <SectionHeading {...about.certsHeading} />
        {about.certBlocks.map((block) => (
          <div className="certs__block" key={block.title}>
            <h3 className="certs__heading">{block.title}</h3>
            <ul className="certs__grid">
              {block.items.map((item, i) => (
                <Reveal as="li" className={cx('cert', block.award && 'cert--award')} key={item.title + item.meta} delay={(i % 4) * 0.05}>
                  <span className="cert__no">{item.label}</span>
                  <strong className="cert__title">{item.title}</strong>
                  <span className="cert__date">{item.meta}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="org">
        <SectionHeading {...about.orgHeading} />
        <div className="org__chart">
          <div className="org__top">
            {about.organization.top.map((name, i) => (
              <Reveal className={cx('org__node', i === 0 && 'org__node--ceo')} key={name} delay={i * 0.08}>
                {name}
              </Reveal>
            ))}
          </div>
          <ul className="org__departments">
            {about.organization.departments.map((name, i) => (
              <Reveal as="li" className="org__node org__node--dept" key={name} delay={0.2 + i * 0.05}>
                {name}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="locations" id="location">
        <SectionHeading {...about.locationsHeading} />
        <div className="locations__grid">
          {site.locations.map((place, i) => (
            <Reveal key={place.name} delay={i * 0.08}>
              <a className="location" href={place.mapUrl} target="_blank" rel="noopener noreferrer" data-cursor={ui.cursor.map}>
                <span className="location__name">{place.name}</span>
                <span className="location__role">{place.role}</span>
                <span className="location__address">{place.address}</span>
                <span className="location__map">{about.mapCta}</span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="locations__contact">
          {contactPage.phoneLabel} <a href={`tel:${site.phoneHref}`}>{site.phone}</a> · {contactPage.faxLabel} {site.fax}
        </p>
      </section>
    </>
  )
}
