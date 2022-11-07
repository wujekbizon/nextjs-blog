import styles from './FeaturedPosts.module.css';
import PostGrid from '../posts/PostGrid';
import { PostsProps } from '../../types/postsTypes';

const FeaturedPosts = ({ posts }: PostsProps) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};
export default FeaturedPosts;
