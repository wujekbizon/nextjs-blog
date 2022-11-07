import styles from './PostGrid.module.css';
import { PostsProps } from '../../types/postsTypes';
import PostItem from './PostItem';

const PostGrid = ({ posts }: PostsProps) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} {...post} />
      ))}
    </ul>
  );
};
export default PostGrid;
