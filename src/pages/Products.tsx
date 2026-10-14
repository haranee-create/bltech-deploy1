import { useState } from 'react'
import { PageHero } from '../components/PageHero'
import { ProductCard } from '../components/ProductCard'
import { useContent } from '../content'
import type { ProductCategory } from '../content/shared'
import { usePageTitle } from '../lib/hooks'

type Filter = ProductCategory | 'all'
const FILTERS: Filter[] = ['all', 'ortho', 'derma', 'industrial']

export default function Products() {
  const { productsPage: page, products, productCategories, links, nav } = useContent()
  usePageTitle(nav.main[2].label)
  const [filter, setFilter] = useState<Filter>('all')
  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter)

  return (
    <>
      <PageHero {...page.hero}>
        <div className="page-hero__actions">
          <a className="text-link" href={links.catalog} target="_blank" rel="noopener noreferrer">
            {page.catalog}
          </a>
          <a className="text-link" href={links.order} target="_blank" rel="noopener noreferrer">
            {page.order}
          </a>
        </div>
      </PageHero>
      <div className="work-filters" role="group" aria-label={page.filterLabel}>
        {FILTERS.map((key) => {
          const count = key === 'all' ? products.length : products.filter((p) => p.category === key).length
          return (
            <button key={key} type="button" className="chip" aria-pressed={filter === key} onClick={() => setFilter(key)}>
              {productCategories[key]}
              <span className="chip__count">{count}</span>
            </button>
          )
        })}
      </div>
      {/* 필터가 바뀌면 그리드를 다시 마운트해 등장 애니메이션을 재생합니다. */}
      <div className="prod-grid prod-grid--page" key={filter}>
        {visible.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} to="/contact" />
        ))}
      </div>
    </>
  )
}
