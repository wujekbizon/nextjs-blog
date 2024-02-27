'use client'

import styles from './AllPosts.module.css'
import { useQuery } from '@tanstack/react-query'
import { useSearchTermStore } from '@/store/searchTermStore'
import PostGrid from '@/components/posts/PostGrid'
import Search from '@/components/ui/Search'
import { Post } from '@/types/postsTypes'

const AllPosts: React.FC<Post[]> = (posts) => {
  const { searchTerm, setSearchTerm } = useSearchTermStore()
  const postsArray = Object.values(posts) // Convert object to array

  const {
    data: filteredPosts,
    isLoading,
    error,
  } = useQuery({
    queryKey: [searchTerm],
    queryFn: async () => {
      if (!searchTerm) return postsArray // Return all posts if no search term

      if (searchTerm) {
        const filteredPosts = postsArray.filter(
          ({ data }) =>
            data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        )
        return filteredPosts
      }
    },
    enabled: !!searchTerm,
    staleTime: 10 * 60 * 1000, // Cache results for 10 minutes
  })

  return (
    <section className={styles.posts}>
      <h1>Browse Our Extensive Article Collection</h1>
      <Search onSetSearchTerm={setSearchTerm} term={searchTerm} />
      {isLoading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>Error fetching posts: {error.message}</p>
      ) : filteredPosts ? (
        <PostGrid posts={filteredPosts} isFeatured />
      ) : (
        <PostGrid posts={postsArray} isFeatured />
      )}
    </section>
  )
}

export default AllPosts
