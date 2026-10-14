import { useContent, type Notice } from '../content'
import { CircleIcon } from './Buttons'
import { RevealImage } from './RevealImage'

/** 공지 카드 — 원문은 기존 게시판(새 창)으로 연결합니다. */
export function NewsCard({ notice, delay = 0 }: { notice: Notice; delay?: number }) {
  const { links, ui } = useContent()
  return (
    <a href={links.noticeUrl(notice.id)} target="_blank" rel="noopener noreferrer" className="ncard" data-cursor={ui.cursor.read}>
      <RevealImage src={notice.image} alt="" className="ncard__media" delay={delay} />
      <div className="ncard__body">
        <p className="ncard__meta">
          <span className="ncard__tag">{ui.noticeTag}</span>
          <time>{notice.date}</time>
        </p>
        <h3 className="ncard__title">{notice.title}</h3>
      </div>
      <CircleIcon variant="light" direction="up-right" className="ncard__arrow" />
      <span className="sr-only">{ui.newWindow}</span>
    </a>
  )
}
