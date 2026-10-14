import { usePageTitle } from '../lib/hooks'
import { Credentials } from '../sections/Credentials'
import { Expertise } from '../sections/Expertise'
import { FeaturedProducts } from '../sections/FeaturedProducts'
import { Global } from '../sections/Global'
import { Hero } from '../sections/Hero'
import { Intro } from '../sections/Intro'
import { LatestNews } from '../sections/LatestNews'
import { Showcase } from '../sections/Showcase'

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <Showcase />
      <Intro />
      <Expertise />
      <FeaturedProducts />
      <Global />
      <Credentials />
      <LatestNews />
    </>
  )
}
