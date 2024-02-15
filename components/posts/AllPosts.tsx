import styles from './AllPosts.module.css'
import PostGrid from '@/components/posts/PostGrid'
import { Post } from '@/types/postsTypes'

const AllPosts: React.FC<Post[]> = (posts) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} isFeatured />
    </section>
  )
}

export default AllPosts
