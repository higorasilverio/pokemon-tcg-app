import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import styles from '../../../styles/Search.module.scss'
import { getCardsByName } from '../../useCases/getCardsByName'
import HomeIcon from '../icons/HomeIcon'
import SearchIcon from '../icons/SearchIcon'

const Search = () => {
  const [search, setSearch] = useState<string>('')

  const router = useRouter()

  const handleSearch = useCallback(() => {
    if (search)
      getCardsByName(search).then(response => {
        console.log(response)
        setSearch('')
      })
    if (!search && router.pathname !== '/') router.push('/')
  }, [search, router])

  return (
    <div className={styles.search}>
      <label htmlFor="search">Search Card: </label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        {search ? <SearchIcon /> : <HomeIcon />}
      </button>
    </div>
  )
}

export default Search
