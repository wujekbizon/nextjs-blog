'use client'

import styles from './AllPosts.module.css'
import { useState, useEffect, useMemo } from 'react'
import { useDebounce } from 'use-debounce'
import { useQuery } from '@tanstack/react-query'
import { useSearchTermStore } from '@/store/searchTermStore'
import PostGrid from '@/components/posts/PostGrid'
import Search from '@/components/ui/Search'
import { PostItemType } from '@/types/postsTypes'

const AllPosts: React.FC<PostItemType[]> = (posts) => {
  const { searchTerm, setSearchTerm } = useSearchTermStore()
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)
  const debouncedSearchTermUpdated = useDebounce(debouncedSearchTerm, 250) // Debounce search

  const postsArray = Object.values(posts) // Convert object to array

  const filteredPostsQueryFn = useMemo(() => {
    return async () => {
      if (!debouncedSearchTerm) return postsArray // Return all posts if no search term

      const filteredPosts = postsArray.filter(
        ({ data }) =>
          data?.title?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          data?.excerpt?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
      return filteredPosts
    }
  }, [debouncedSearchTerm, postsArray]) // Memoize queryFn

  const {
    data: filteredPosts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['filteredPosts', debouncedSearchTermUpdated],
    queryFn: filteredPostsQueryFn,
    enabled: !!searchTerm,
    staleTime: 10 * 60 * 1000, // Cache results for 10 minutes
  })

  useEffect(() => {
    setDebouncedSearchTerm(searchTerm)
  }, [searchTerm, setDebouncedSearchTerm]) // Update debouncedSearchTerm on searchTerm change

  return (
    <section className={styles.posts}>
      <h1>Browse Our Extensive Article Collection</h1>
      <Search onSetSearchTerm={setSearchTerm} term={searchTerm} isLoading={isLoading} error={error} />
      {filteredPosts ? <PostGrid posts={filteredPosts} isFeatured /> : <PostGrid posts={postsArray} isFeatured />}
      {filteredPosts?.length === 0 && <h2>No Data Available</h2>}
    </section>
  )
}

export default AllPosts
