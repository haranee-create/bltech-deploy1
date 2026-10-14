import { Link } from 'react-router'
import { useContent, type Product } from '../content'
import { useLocalizePath } from '../i18n/locale'
import { cx } from '../lib/cx'
import { PlusIcon } from './Icons'
import { Reveal } from './Reveal'

/**
 * 제품 카드. 흰 배경 제품 사진(fit: contain)은 곱하기 합성으로 그라데이션 무대 위에
 * 제품만 떠 보이게 하고, 일반 사진은 무대를 꽉 채웁니다.
 */
export function ProductCard({ product, index = 0, to = '/products' }: { product: Product; index?: number; to?: string }) {
  const { ui, productCategories } = useContent()
  const localize = useLocalizePath()
  const cutout = product.fit === 'contain'
  return (
    <Reveal className="prod" delay={(index % 4) * 0.08}>
      <Link to={localize(to)} viewTransition className="prod__link" data-cursor={ui.cursor.view}>
        <div className={cx('prod__stage', cutout ? 'prod__stage--cutout' : 'prod__stage--photo')}>
          <img src={product.image} alt={ui.productAlt(product.name)} loading="lazy" decoding="async" />
          <span className="prod__plus" aria-hidden="true">
            <PlusIcon />
          </span>
        </div>
        <div className="prod__meta">
          <p className="prod__kind">
            {productCategories[product.category]} · {product.kind}
          </p>
          <h3 className="prod__name">{product.name}</h3>
          <p className="prod__tags">{product.tags.join(' · ')}</p>
        </div>
      </Link>
    </Reveal>
  )
}
