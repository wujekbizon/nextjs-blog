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
