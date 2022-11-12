import styles from './PostContent.module.css';
import PostHeader from './PostHeader';
import { PostProps } from '../../../types/postsTypes';
import ReactMarkdown from 'react-markdown';
import Image from 'next/legacy/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneSpace } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Content } from 'mdast';
import React, { ReactNode, ReactElement } from 'react';

// type NodeToProps<T> = {
//   node: T;
//   children: T extends { children: any } ? ReactNode : never;
//   className?: string;
// };

// type CustomRenderers = {
//   [K in Content['type']]?: (
//     props: NodeToProps<Extract<Content, { type: K }>>
//   ) => ReactElement;
// };

const PostContent = ({ post }: PostProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.data.image}`;

  const customRenderers = {
    p(props: any) {
      const { node } = props;
      const image = node.children[0];

      if (image.type === 'element' && image.tagName === 'img') {
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
        );
      }
      return <p>{props.children}</p>;
    },

    code(code: any) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={duotoneSpace} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.data.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};
export default PostContent;
