import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { CircleIcon } from '../components/Buttons'
import { RevealImage } from '../components/RevealImage'
import { SectionHeading } from '../components/SectionHeading'
import { useContent, type Business } from '../content'
import { useLocalizePath } from '../i18n/locale'

const GROUP_SIZE = 3

function chunk<T>(list: T[], size: number) {
  return Array.from({ length: Math.ceil(list.length / size) }, (_, i) => list.slice(i * size, i * size + size))
}

function BusinessCard({ item, index, number, to, cursor }: { item: Business; index: number; number: number; to: string; cursor: string }) {
  return (
    <Link
      to={to}
      viewTransition
      id={item.slug}
      className="xcard"
      style={{ '--i': index } as CSSProperties}
      data-cursor={cursor}
    >
      <div className="xcard__main">
        <div className="xcard__head">
          <span className="xcard__index">{String(number).padStart(2, '0')}</span>
          <span className="xcard__group">{item.group}</span>
        </div>
        <h3 className="xcard__title">{item.title}</h3>
        <p className="xcard__desc">{item.description}</p>
      </div>
      <div className="xcard__meta">
        <CircleIcon variant="dark" className="xcard__arrow" />
        <ul className="xcard__list">
          {item.items.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <RevealImage src={item.image} alt="" className="xcard__media" />
    </Link>
  )
}

/**
 * 3장씩 한 묶음으로 쌓이는 카드. 묶음마다 별도의 sticky 컨테이너라서
 * 다음 묶음이 완성된 스택 위로 올라옵니다.
 */
export function Expertise({ showHeading = true, linkTo = '/business' }: { showHeading?: boolean; linkTo?: string }) {
  const { businessHeading, businesses, ui } = useContent()
  const localize = useLocalizePath()
  return (
    <section className="expertise" aria-label={businessHeading.title}>
      {showHeading && <SectionHeading {...businessHeading} />}
      <div className="expertise__stack">
        {chunk(businesses, GROUP_SIZE).map((group, g) => (
          <div className="expertise__group" key={g}>
            {group.map((item, i) => (
              <BusinessCard
                key={item.slug}
                item={item}
                index={i}
                number={g * GROUP_SIZE + i + 1}
                to={localize(linkTo)}
                cursor={ui.cursor.view}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
