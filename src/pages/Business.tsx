import { PillLink } from '../components/Buttons'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { RevealImage } from '../components/RevealImage'
import { SectionHeading } from '../components/SectionHeading'
import { WordReveal } from '../components/WordReveal'
import { useContent } from '../content'
import { usePageTitle } from '../lib/hooks'
import { Credentials } from '../sections/Credentials'
import { Expertise } from '../sections/Expertise'

export default function Business() {
  const { businessPage: page, nav } = useContent()
  usePageTitle(nav.main[1].label)
  const { period, ...plantHeading } = page.plantHeading

  return (
    <>
      <PageHero {...page.hero} />
      <Expertise showHeading={false} linkTo="/products" />

      <section className="tech">
        <SectionHeading {...page.rndHeading} />
        <div className="tech__grid">
          <RevealImage src="/images/bltech/rnd-lab.webp" alt={page.rnd.imageAlt} className="tech__image" />
          <div className="tech__text">
            <p className="tech__eyebrow">{page.rnd.eyebrow}</p>
            <WordReveal key={page.rnd.text} as="p" text={page.rnd.text} className="tech__lead" stagger={0.02} />
            <ul className="tech__areas">
              {page.rnd.areas.map((area, i) => (
                <Reveal as="li" key={area} delay={0.2 + i * 0.08}>
                  {area}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="quality">
        <SectionHeading {...page.qualityHeading} />
        <ol className="quality__steps">
          {page.qualitySteps.map((step, i) => (
            <Reveal as="li" className="qstep" key={step} delay={i * 0.06}>
              <span className="qstep__num" aria-label={page.stepLabel(i + 1)}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <strong className="qstep__title">{step}</strong>
            </Reveal>
          ))}
        </ol>
        <ul className="quality__equipment">
          {page.equipment.map((item) => (
            <Reveal as="li" className="equip" key={item.test}>
              <strong>{item.name}</strong>
              <span>{item.test}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="plant">
        <SectionHeading {...plantHeading} actions={<p className="plant__period">{period}</p>} />
        <div className="plant__visuals">
          <RevealImage src="/images/bltech/plant-factory.webp" alt={page.plantAlts[0]} />
          <RevealImage src="/images/bltech/plant-port.webp" alt={page.plantAlts[1]} delay={0.1} />
        </div>
        <ol className="plant__steps">
          {page.plantSteps.map((step, i) => (
            <Reveal as="li" className="step" key={step.title} delay={i * 0.06}>
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="esg">
        <RevealImage src="/images/bltech/ai-esg-forest.webp" alt="" className="esg__image" />
        <div className="esg__text">
          <p className="esg__label">{page.esg.label}</p>
          <WordReveal key={page.esg.title} as="h2" text={page.esg.title} className="esg__title" stagger={0.05} />
          <Reveal as="p" className="esg__body" delay={0.2}>
            {page.esg.body}
          </Reveal>
          <Reveal delay={0.3}>
            <PillLink to="/news">{page.esg.cta}</PillLink>
          </Reveal>
        </div>
      </section>

      <Credentials />
    </>
  )
}
