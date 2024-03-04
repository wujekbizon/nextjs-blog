import styles from './FeaturedPosts.module.css'
import PostGrid from '@/components/posts/PostGrid'
import { Post } from '@/types/postsTypes'
import Link from 'next/link'

const FeaturedPosts = (posts: Post[]) => {
  return (
    <section className={styles.latest}>
      <div className={styles.title_container}>
        <div className="gradient-divider"></div>
        <div className="gradient-divider"></div>
        <div className="gradient-divider"></div>
        <div className="gradient-divider"></div>
        <div className="gradient-divider"></div>
        <h1 className={styles.title}>Wesa Tech Blog</h1>
        <p className={styles.subtitle}>Check out our recent articles.</p>
      </div>
      <div className="gradient-divider"></div>
      <div className={styles.content}>
        <PostGrid posts={posts} isFeatured />
        <Link href="/posts" className={styles.custom_button}>
          Check all posts now
        </Link>
      </div>
    </section>
  )
}
export default FeaturedPosts
