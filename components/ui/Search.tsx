'use client'

import { useSearchTermStore } from '@/store/searchTermStore'
import FlatList from './FlatList'
import styles from './Search.module.css'
import { CATEGORIES } from '@/constants/data'
import { useEffect, useState } from 'react'

type SearchProps = {
  term: string
  onSetSearchTerm: (term: string) => void
  isLoading: boolean
  error: Error | null
}

const Search = ({ term, onSetSearchTerm, isLoading, error }: SearchProps) => {
  const { clearSearchTerm } = useSearchTermStore()
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | number
    if (isLoading) {
      setShowLoader(true)
      // Optionally, set a timeout to reset showLoader after some time
      timer = setTimeout(() => setShowLoader(false), 2000) // Replace 2000 with desired duration in milliseconds
    } else {
      timer = setTimeout(() => setShowLoader(false), 2000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <div className={styles.search}>
      <div className={styles.search_header}>
        <h4>Explore our resources to find what you interest to read. There is many great articles in our collection</h4>
        <p>
          Discover in-depth articles, tutorials, and thought pieces on a wide range of coding and IT topics. From
          object-oriented programming in C++ to advanced Linux configuration and the intricacies of JavaScript and
          TypeScript, we have got you covered.
        </p>
      </div>
      <div className={styles.list}>
        <div className={styles.input_container}>
          <input
            placeholder="Search our articles..."
            type="text"
            name="text"
            id="text"
            value={term}
            onChange={(e) => onSetSearchTerm(e.target.value)}
          />
          <button onClick={clearSearchTerm}>Reset search</button>
        </div>
        <FlatList data={CATEGORIES} position="HORIZONTAL" onClickHandler={onSetSearchTerm} />
      </div>
      {showLoader && (
        <div className={styles.loader}>
          <p>Caching in progress...</p>
          <p>For optimal performance, we utilize the latest caching technology to store your search queries.</p>
        </div>
      )}
    </div>
  )
}
export default Search
