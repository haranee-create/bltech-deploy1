import { PillLink } from '../components/Buttons'
import { ProductCard } from '../components/ProductCard'
import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../content'
import { FEATURED_COUNT } from '../content/shared'

export function FeaturedProducts() {
  const { productsHeading, products } = useContent()
  const { cta, ...heading } = productsHeading
  return (
    <section className="products-home">
      <SectionHeading {...heading} actions={<PillLink to="/products">{cta}</PillLink>} />
      <div className="prod-grid prod-grid--featured">
        {products.slice(0, FEATURED_COUNT).map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
