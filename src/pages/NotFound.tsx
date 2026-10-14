import { PillLink } from '../components/Buttons'
import { useContent } from '../content'
import { usePageTitle } from '../lib/hooks'

export default function NotFound() {
  const { notFound } = useContent()
  usePageTitle(notFound.title)
  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <p className="not-found__text">{notFound.text}</p>
      <PillLink to="/">{notFound.cta}</PillLink>
    </section>
  )
}
