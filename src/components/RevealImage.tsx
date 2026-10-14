import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useInView } from '../lib/hooks'
import { cx } from '../lib/cx'

type RevealImageProps = {
  src: string
  alt?: string
  className?: string
  eager?: boolean
  delay?: number
  /** Which way the clip-path wipe travels. */
  direction?: 'down' | 'up'
  /** `contain` keeps the whole image visible (for product shots on white). */
  fit?: 'cover' | 'contain'
}

/** Image that wipes open with a clip-path when it enters the viewport; shows a shimmer until loaded. */
export function RevealImage({ src, alt = '', className, eager = false, delay = 0, direction = 'down', fit = 'cover' }: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const inView = useInView(ref, { rootMargin: '0px 0px -6% 0px' })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) setLoaded(true)
  }, [src])

  return (
    <div
      ref={ref}
      className={cx('reveal-img', fit === 'contain' && 'reveal-img--contain', inView && 'is-in', loaded && 'is-loaded', className)}
      data-dir={direction}
      style={{ '--d': `${delay}s` } as CSSProperties}
    >
      <div className="reveal-img__inner">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}
