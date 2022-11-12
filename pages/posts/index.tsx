import AllPosts from '../../components/posts/AllPosts';
import { PostsProps } from '../../types/postsTypes';
import { getAllPosts } from '../../helpers/archiveUtils';
import { GetStaticProps } from 'next';
import Head from 'next/head';

const AllPostsPage = ({ posts }: PostsProps) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of posts about programming." />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
export default AllPostsPage;
