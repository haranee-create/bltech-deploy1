import { useEffect, useRef, useState } from 'react'
import { CircleButton } from '../components/Buttons'
import { NewsCard } from '../components/NewsCard'
import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../content'

/** 이전 / 다음 버튼으로 넘기는 가로 스크롤 공지 카드. */
export function LatestNews() {
  const { newsHeading, notices, ui } = useContent()
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft < 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [])

  const step = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('.ncard')
    const gap = parseFloat(getComputedStyle(el).columnGap) || 16
    el.scrollBy({ left: direction * (card ? card.offsetWidth + gap : el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section className="news">
      <SectionHeading
        {...newsHeading}
        actions={
          <div className="news__nav">
            <CircleButton label={ui.prev} direction="left" variant="light" onClick={() => step(-1)} disabled={atStart} />
            <CircleButton label={ui.next} direction="right" variant="light" onClick={() => step(1)} disabled={atEnd} />
          </div>
        }
      />
      <div className="news__track" ref={trackRef} onScroll={updateEdges}>
        {notices.slice(0, 5).map((notice, i) => (
          <NewsCard key={notice.id} notice={notice} delay={i * 0.08} />
        ))}
      </div>
    </section>
  )
}
