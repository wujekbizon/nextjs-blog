'use server'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostItemType } from '@/types/postsTypes'

const dataDirectory = path.join(process.cwd(), 'data')

/**
 * Asynchronously reads the posts directory and returns an array of filenames.
 *
 * @returns {Promise<string[]>} A Promise that resolves to an array of filenames (without extensions) in the posts directory.
 *                              Rejects with an error if there's an issue reading the directory.
 */
export const getPostsFile = async (): Promise<string[]> => {
  try {
    // Read the contents of the posts directory asynchronously
    const postFiles = fs.readdir(dataDirectory)
    // Return the array of filenames
    return postFiles
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error reading post files:', error.message)
      throw new Error('Failed to read posts directory.')
    } else {
      console.error(error)
      throw new Error('Unknown error occurred')
    }
  }
}

/**
 * Fetches data for a single post identified by its filename (without the .md extension).
 *
 * @param postIdentifier {string} The filename of the post (without .md extension).
 * @returns {Promise<PostItemType>} A Promise that resolves to a PostItemType object containing post data.
 *                                Rejects with an error if there's an issue reading the file.
 */
export const getPostData = async (postIdentifier: string): Promise<PostItemType> => {
  try {
    // Construct the file path based on data directory and post identifier
    const postSlug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(dataDirectory, `${postSlug}.md`)

    // Read the file content asynchronously
    const fileContent = await fs.readFile(filePath, 'utf-8')

    // Use matter to parse the file content and destructure the data
    const {
      data: { title, excerpt, image, date, isFeatured },
      content,
    } = matter(fileContent)

    // Create the post data object
    const postData = {
      slug: postSlug,
      data: { title, excerpt, image, date, isFeatured },
      content,
    }

    // Return the post data
    return postData
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error reading post file:', error.message)
      throw new Error('Failed to read post data')
    } else {
      console.error(error)
      throw new Error('Unknown error occurred')
    }
  }
}

/**
 * Fetches and sorts data for all posts.
 *
 * @returns {Promise<PostItemType[]>} A Promise that resolves to an array of PostItemType objects containing sorted post data.
 *                                    Rejects with an error if there's an issue reading files or processing data.
 */
export const getAllPosts = async (): Promise<PostItemType[]> => {
  try {
    // Get filenames of all post files
    const postsFiles = await getPostsFile()

    // Fetch data for each post asynchronously using Promise.all
    const allPosts = await Promise.all(postsFiles.map(getPostData))

    // Sort posts by date (descending order)
    const sortedPosts = allPosts.sort((postA, postB) => {
      //sorting by post date
      return postA.data.date > postB.data.date ? -1 : 1
    })

    // Return the sorted array of post data
    return sortedPosts
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching or sorting all posts:', error.message)
      throw new Error('Failed to get or sort all posts')
    } else {
      console.error(error)
      throw new Error('Unknown error occurred')
    }
  }
}

export const getPostByTitle = async (title: string): Promise<PostItemType> => {
  try {
    // Get data for all posts
    const allPosts = await getAllPosts()

    // Filter  post based on the title property
    const post = allPosts.find((post) => post.data.title === title)

    if (!post) {
      throw new Error('Post not found!')
    }

    return post
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching or filtering featured posts:', error)
      throw new Error('Failed to get or filter featured posts')
    } else {
      console.error(error)
      throw new Error('Unknown error occurred')
    }
  }
}

/**
 * Fetches and filters featured posts from all posts.
 *
 * @returns {Promise<PostItemType[]>} A Promise that resolves to an array of PostItemType objects containing featured post data.
 *                                    Rejects with an error if there's an issue fetching all posts or filtering features.
 */
export const getFeaturedPosts = async (): Promise<PostItemType[]> => {
  try {
    // Get data for all posts
    const allPosts = await getAllPosts()

    // Filter featured posts based on the isFeatured property
    const featuredPosts = allPosts.filter((post) => post.data.isFeatured)

    // Return the array of featured post data
    return featuredPosts
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching or filtering featured posts:', error)
      throw new Error('Failed to get or filter featured posts')
    } else {
      console.error(error)
      throw new Error('Unknown error occurred')
    }
  }
}
