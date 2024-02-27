'use client'

import FlatList from './FlatList'
import styles from './Search.module.css'
import { CATEGORIES } from '@/constants/data'

type SearchProps = {
  term: string
  onSetSearchTerm: (term: string) => void
}

const Search = ({ term, onSetSearchTerm }: SearchProps) => {
  return (
    <div className={styles.search}>
      <div>
        <h4>Explore our resources to find what you interest to read. There is many great articles in our collection</h4>
        <p></p>
      </div>
      <div className={styles.list}>
        <input type="text" name="text" id="text" value={term} onChange={(e) => onSetSearchTerm(e.target.value)} />
        <FlatList data={CATEGORIES} position="HORIZONTAL" onClickHandler={onSetSearchTerm} />
      </div>
    </div>
  )
}
export default Search
