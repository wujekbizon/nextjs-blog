import styles from './FeaturedPosts.module.css'
import PostGrid from '@/components/posts/PostGrid'
import { Post } from '@/types/postsTypes'
import Image from 'next/image'

const FeaturedPosts = (posts: Post[]) => {
  return (
    <section className={styles.latest}>
      <div className={styles.title}>
        <h2>Check out my recent blogs.</h2>
      </div>
      <div className={styles.flame}>
        {/* <Image
          className={styles.image}
          src="/assets/images/hero3.jpg"
          width={1024}
          height={1024}
          alt="flame"
          priority
        /> */}
        <PostGrid posts={posts} isFeatured />
        <button className={styles.custom_button}>Get all posts now</button>
      </div>
    </section>
  )
}
export default FeaturedPosts
