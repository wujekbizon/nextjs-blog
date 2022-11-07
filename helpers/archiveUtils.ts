import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
  data: {
    [key: string]: string;
  };

  content: string;
  slug: string;
};

const dataDirectory = path.join(process.cwd(), 'data');

export const getPostsFile = () => {
  return fs.readdirSync(dataDirectory);
};

export const getPostData = (postIdentifier: string): Post => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(dataDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    data: { ...data },
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postsFiles = getPostsFile();
  const allPosts = postsFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data.date > postB.data.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.data.isFeatured);
  return featuredPosts;
};
