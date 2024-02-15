import { getFeaturedPosts } from '@/helpers/archiveUtils'
import Hero from '@/components/home-page/Hero'
import FeaturedPosts from '@/components/home-page/FeaturedPosts'

const HomePage = () => {
  const fetchedPosts = getFeaturedPosts()

  return (
    <>
      <FeaturedPosts {...fetchedPosts} />
      <Hero />
    </>
  )
}

export default HomePage
