import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import { PostsProps } from '../types/postsTypes';
import { getFeaturedPosts } from '../helpers/archiveUtils';
import { GetStaticProps } from 'next';
import Head from 'next/head';

const HomePage = ({ posts }: PostsProps) => {
  return (
    <>
      <Head>
        <title>Grzegorz Wolfinger Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
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
