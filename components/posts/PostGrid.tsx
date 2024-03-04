import styles from './PostGrid.module.css'
import { Post } from '@/types/postsTypes'
import PostItem from '@/components/posts/PostItem'

interface EnhancedFeaturedPostsProps {
  posts: Post[]
  isFeatured?: boolean // Optional `isFeatured` prop with default value (`false`)
}

const PostGrid: React.FC<EnhancedFeaturedPostsProps> = ({ posts, isFeatured }) => {
  return (
    <ul className={`${isFeatured ? styles.features : styles.grid}`}>
      {Object.entries(posts).map(([key, post], index) => (
        <PostItem key={key} {...post} index={index} />
      ))}
    </ul>
  )
}
export default PostGrid
