import type { Stat } from '../content'
import { cx } from '../lib/cx'
import { CountUp } from './CountUp'
import { Reveal } from './Reveal'

/** 숫자 지표 한 줄 — 화면에 들어오면 숫자가 올라갑니다. */
export function StatsRow({ items, tone = 'dark', className }: { items: Stat[]; tone?: 'dark' | 'light'; className?: string }) {
  return (
    <ul className={cx('stats-row', tone === 'light' && 'stats-row--light', className)}>
      {items.map((stat, i) => (
        <Reveal as="li" className="stats-row__item" key={stat.label} delay={i * 0.08}>
          <span className={cx('stats-row__value', stat.text && 'stats-row__value--text')}>
            {stat.text ?? (
              <>
                {stat.prefix}
                <CountUp value={stat.value ?? 0} suffix={stat.suffix} />
              </>
            )}
          </span>
          <span className="stats-row__label">{stat.label}</span>
        </Reveal>
      ))}
    </ul>
  )
}
