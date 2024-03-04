import { getFeaturedPosts } from '@/helpers/archiveUtils'
import FeaturedPosts from '@/components/home-page/FeaturedPosts'
import Explore from '@/components/home-page/Explore'
import Footer from '@/components/layout/Footer'

const HomePage = () => {
  const fetchedPosts = getFeaturedPosts()

  return (
    <>
      <FeaturedPosts {...fetchedPosts} />
      <Explore />
      <Footer />
    </>
  )
}

export default HomePage
