import { useState } from 'react'
import styles from '../../../styles/Search.module.scss'
import SearchIcon from '../icons/SearchIcon'

const Search = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <div className={styles.search}>
      <label htmlFor="search">Search Card: </label>
      <input type="text" name="search" id="search" onChange={e => setSearch(e.target.value)} />
      <button type="button" onClick={() => alert(search)}>
        <SearchIcon />
      </button>
    </div>
  )
}

export default Search
