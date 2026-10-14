import { CircleIcon } from '../components/Buttons'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { RevealImage } from '../components/RevealImage'
import { useContent } from '../content'
import { usePageTitle } from '../lib/hooks'

export default function News() {
  const { newsPage: page, notices, links, ui, nav } = useContent()
  usePageTitle(nav.main[3].label)
  const [featured, ...rest] = notices

  return (
    <>
      <PageHero {...page.hero}>
        <a className="text-link" href={links.notices} target="_blank" rel="noopener noreferrer">
          {page.boardLink}
        </a>
      </PageHero>

      <a href={links.noticeUrl(featured.id)} target="_blank" rel="noopener noreferrer" className="mag-featured" data-cursor={ui.cursor.read}>
        <RevealImage src={featured.image} alt="" eager />
        <Reveal className="mag-featured__text">
          <p className="ncard__meta">
            <span className="ncard__tag">{ui.latestTag}</span>
            <time>{featured.date}</time>
          </p>
          <h2 className="mag-featured__title">{featured.title}</h2>
          <CircleIcon direction="up-right" />
        </Reveal>
      </a>

      <ul className="news-list">
        {rest.map((notice, i) => (
          <Reveal as="li" key={notice.id} delay={Math.min(i, 5) * 0.05}>
            <a href={links.noticeUrl(notice.id)} target="_blank" rel="noopener noreferrer" className="news-row" data-cursor={ui.cursor.read}>
              <time className="news-row__date">{notice.date}</time>
              <span className="news-row__title">{notice.title}</span>
              <CircleIcon variant="light" direction="up-right" className="news-row__arrow" />
              <span className="sr-only">{ui.newWindow}</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </>
  )
}
