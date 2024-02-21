import { getFeaturedPosts } from '@/helpers/archiveUtils'
import Hero from '@/components/home-page/Hero'
import FeaturedPosts from '@/components/home-page/FeaturedPosts'
import Explore from '@/components/home-page/Explore'

const HomePage = () => {
  const fetchedPosts = getFeaturedPosts()

  return (
    <>
      <FeaturedPosts {...fetchedPosts} />
      <Explore />
      <Hero />
    </>
  )
}

export default HomePage
