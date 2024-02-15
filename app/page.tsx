import { Post } from '@/types/postsTypes'
import { getFeaturedPosts } from '@/helpers/archiveUtils'
import Hero from '@/components/home-page/Hero'
import FeaturedPosts from '@/components/home-page/FeaturedPosts'

const HomePage: React.FC<Post[]> = () => {
  const fetchedPosts = getFeaturedPosts()

  return (
    <>
      <FeaturedPosts {...fetchedPosts} />
      {/* <Hero /> */}
    </>
  )
}

export default HomePage
