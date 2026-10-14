import { useEffect, useState, type CSSProperties } from 'react'
import { lockScroll } from '../lib/smooth'
import { cx } from '../lib/cx'

const MIN_DURATION = 1300
const MAX_WAIT = 4000
const CRITICAL_IMAGES = [
  '/images/brand/bltech-logo.webp',
  '/images/bltech/better-life.webp',
  '/images/bltech/care-child-cast.webp',
  '/images/bltech/ai-hydrogel-macro.webp',
  '/images/bltech/product-repair.webp',
]

function preload(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image()
    img.onload = img.onerror = () => resolve()
    img.src = src
  })
}

/** Percentage counter shown on first load while fonts and hero images arrive. */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    lockScroll(true)
    let assetsReady = false
    let frame = 0
    const start = performance.now()
    const assets = Promise.all([document.fonts?.ready, ...CRITICAL_IMAGES.map(preload)])
    Promise.race([assets, new Promise((r) => setTimeout(r, MAX_WAIT))]).then(() => {
      assetsReady = true
    })

    const tick = (now: number) => {
      const t = Math.min((now - start) / MIN_DURATION, 1)
      const eased = 1 - (1 - t) ** 3
      // Hold at 90% until assets are in, so the counter never lies about being done.
      const value = Math.round(assetsReady ? eased * 100 : Math.min(eased * 100, 90))
      setProgress((p) => Math.max(p, value))
      if (t >= 1 && assetsReady) {
        setProgress(100)
        setLeaving(true)
        return
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (!leaving) return
    lockScroll(false)
    onDone()
    const timer = setTimeout(() => setGone(true), 1000)
    return () => clearTimeout(timer)
  }, [leaving, onDone])

  if (gone) return null
  return (
    <div className={cx('preloader', leaving && 'is-leaving')} style={{ '--p': `${progress}%` } as CSSProperties} aria-hidden="true">
      <div className="preloader__inner">
        <img className="preloader__mark" src="/images/brand/bltech-mark.webp" alt="" width={256} height={222} />
        <span className="preloader__count">{progress}%</span>
      </div>
      <span className="preloader__bar" />
    </div>
  )
}
