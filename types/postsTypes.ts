// import { Content } from 'mdast';
// import React, { ReactNode, ReactElement } from 'react';

export interface PostItemType {
  slug: string;
  data: { title: string; image: string; excerpt: string; date: string };
  content: string;
}

export type PostsProps = {
  posts: PostItemType[];
};

export type PostProps = {
  post: PostItemType;
};

// type NodeToProps<T> = {
//   node: T;
//   children: T extends { children: any } ? ReactNode : never;
//   className?: string;
// };

// export type CustomRenderers = {
//   [K in Content['type']]?: (
//     props: NodeToProps<Extract<Content, { type: K }>>
//   ) => ReactElement;
// };
