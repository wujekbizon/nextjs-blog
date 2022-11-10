import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import { PostsProps } from '../types/postsTypes';
import { getFeaturedPosts } from '../helpers/archiveUtils';
import { GetStaticProps } from 'next';

const HomePage = ({ posts }: PostsProps) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
