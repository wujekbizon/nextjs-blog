import PostContent from '../../components/posts/post-detail/PostContent';
import { PostProps } from '../../types/postsTypes';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostsFile, getPostData } from '../../helpers/archiveUtils';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const PostDetailsPage = ({ post }: PostProps) => {
  return (
    <section>
      <PostContent post={post} />
    </section>
  );
};

export const getStaticProps: GetStaticProps = async (contex) => {
  const { slug } = contex.params as IParams;

  const postDetail = getPostData(slug);

  return {
    props: {
      post: postDetail,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostsFile();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''));
  const postsPath = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths: postsPath,
    fallback: false,
  };
};
export default PostDetailsPage;
