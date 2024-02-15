import { Suspense } from 'react'
import { Metadata } from 'next'
import { Post } from '@/types/postsTypes'
import { getAllPosts } from '@/helpers/archiveUtils'
import AllPosts from '@/components/posts/AllPosts'

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'A list of posts about programming.',
}

const Posts = async () => {
  const fetchedPosts = await getAllPosts()

  return <AllPosts {...fetchedPosts} />
}

const AllPostsPage = () => {
  return (
    <Suspense fallback={<p>Fetching posts...</p>}>
      <Posts />
    </Suspense>
  )
}

export default AllPostsPage
