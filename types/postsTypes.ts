// import { Content } from 'mdast';
// import React, { ReactNode, ReactElement } from 'react';

export interface PostItemType {
  slug: string
  data: { title: string; image: string; excerpt: string; date: string; isFeatured: boolean }
  content: string
}

export type PostsProps = {
  posts: PostItemType[]
}

export type PostProps = {
  post: PostItemType
}

export type Post = {
  data: {
    [key: string]: string | boolean
  }
  content: string
  slug: string
}
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
