import { PillLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { ScrollText } from '../components/ScrollText'
import { StatsRow } from '../components/StatsRow'
import { useContent } from '../content'

/** 스크롤에 따라 차오르는 회사 소개 문장 + 숫자 지표. */
export function Intro() {
  const { intro, stats } = useContent()
  return (
    <section id="intro" className="statement">
      <p className="eyebrow">{intro.label}</p>
      {/* key re-mounts the split words when the language changes */}
      <ScrollText key={intro.lead} text={intro.lead} className="statement__text" />
      <div className="statement__foot">
        <div className="statement__body">
          {intro.body.map((text, i) => (
            <Reveal as="p" delay={i * 0.1} key={i}>
              {text}
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <PillLink to="/about">{intro.cta}</PillLink>
        </Reveal>
      </div>
      <StatsRow items={stats} />
    </section>
  )
}
