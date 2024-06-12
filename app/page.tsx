import { getFeaturedPosts } from '@/helpers/archiveUtils'
import FeaturedPosts from '@/components/home-page/FeaturedPosts'
import Explore from '@/components/home-page/Explore'
import Footer from '@/components/layout/Footer'
import { Suspense } from 'react'

const Posts = async () => {
  const fetchedPosts = await getFeaturedPosts()

  return <FeaturedPosts posts={fetchedPosts} />
}

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Posts />
      </Suspense>
      <Explore />
      <Footer />
    </>
  )
}

export default HomePage
