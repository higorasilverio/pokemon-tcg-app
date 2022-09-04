import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import useAppData from '../../../hooks/useAppData'
import styles from '../../../styles/Search.module.scss'
import { getCardsByName } from '../../useCases/getCardsByName'
import HomeIcon from '../icons/HomeIcon'
import SearchIcon from '../icons/SearchIcon'

const Search = () => {
  const { handleCards } = useAppData()

  const [search, setSearch] = useState<string>('')

  const router = useRouter()

  const handleSearch = useCallback(() => {
    if (!search) router.push('/')
    if (search && handleCards)
      getCardsByName(search)
        .then(cards => handleCards(cards))
        .then(() => setSearch(''))
        .finally(() => router.push('/'))
  }, [search, handleCards, router])

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
