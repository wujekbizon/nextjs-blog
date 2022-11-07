import styles from './AllPosts.module.css';
import PostGrid from './PostGrid';
import { PostsProps } from '../../types/postsTypes';

const AllPosts = ({ posts }: PostsProps) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
