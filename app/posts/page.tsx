import { Metadata } from 'next'
import { Post } from '@/types/postsTypes'
import { getAllPosts } from '@/helpers/archiveUtils'
import AllPosts from '@/components/posts/AllPosts'

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'A list of posts about programming.',
}

const AllPostsPage: React.FC<Post[]> = () => {
  const fetchedPosts = getAllPosts()

  return <AllPosts {...fetchedPosts} />
}

export default AllPostsPage
