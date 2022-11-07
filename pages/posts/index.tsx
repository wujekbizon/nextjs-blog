import AllPosts from '../../components/posts/AllPosts';
import { PostsProps } from '../../types/postsTypes';
import { getAllPosts } from '../../helpers/archiveUtils';

const AllPostsPage = ({ posts }: PostsProps) => {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
