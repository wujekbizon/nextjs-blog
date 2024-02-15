import styles from './FeaturedPosts.module.css'
import PostGrid from '@/components/posts/PostGrid'
import { Post } from '@/types/postsTypes'
import Link from 'next/link'

const FeaturedPosts = (posts: Post[]) => {
  return (
    <section className={styles.latest}>
      <div className={styles.title}>
        <h2>Check out our recent blog posts.</h2>
      </div>
      <div className={styles.flame}>
        <PostGrid posts={posts} isFeatured />
        <Link href="/posts" className={styles.custom_button}>
          Check all posts now
        </Link>
      </div>
    </section>
  )
}
export default FeaturedPosts
