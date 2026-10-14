import type { ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router'
import { useLocalizePath } from '../i18n/locale'
import { cx } from '../lib/cx'
import { ArrowIcon } from './Icons'
import { RollText } from './RollText'

type Direction = 'right' | 'left' | 'down' | 'up-right'
type Variant = 'light' | 'dark'

/** Two stacked arrows: on hover the first slides out while the second slides in. */
export function ArrowSwap() {
  return (
    <span className="arrow-swap" aria-hidden="true">
      <ArrowIcon className="arrow-swap__a" />
      <ArrowIcon className="arrow-swap__b" />
    </span>
  )
}

/** Decorative round arrow (use inside a link/card that is already clickable). */
export function CircleIcon({
  direction = 'right',
  variant = 'dark',
  className,
}: {
  direction?: Direction
  variant?: Variant
  className?: string
}) {
  return (
    <span className={cx('circle', `circle--${variant}`, `circle--${direction}`, className)} aria-hidden="true">
      <ArrowSwap />
    </span>
  )
}

type CircleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  direction?: Direction
  variant?: Variant
}

export function CircleButton({ label, direction = 'right', variant = 'dark', className, ...rest }: CircleButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cx('circle', `circle--${variant}`, `circle--${direction}`, className)}
      {...rest}
    >
      <ArrowSwap />
    </button>
  )
}

/** White label pill + round arrow — the site's main call-to-action shape. `to` is a site path; it is localized here. */
export function PillLink({
  to,
  children,
  variant = 'light',
  className,
}: {
  to: string
  children: string
  variant?: Variant
  className?: string
}) {
  const localize = useLocalizePath()
  return (
    <Link to={localize(to)} viewTransition className={cx('pill-link', `pill-link--${variant}`, className)}>
      <span className="pill-link__label">
        <RollText>{children}</RollText>
      </span>
      <span className="pill-link__icon">
        <ArrowSwap />
      </span>
    </Link>
  )
}

type PillButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: string; variant?: Variant }

export function PillButton({ children, variant = 'dark', className, type = 'button', ...rest }: PillButtonProps) {
  return (
    <button type={type} className={cx('pill-link', `pill-link--${variant}`, className)} {...rest}>
      <span className="pill-link__label">
        <RollText>{children}</RollText>
      </span>
      <span className="pill-link__icon">
        <ArrowSwap />
      </span>
    </button>
  )
}
