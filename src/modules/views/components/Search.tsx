import useAppData from '@/hooks/useAppData'
import styles from '@/styles/Search.module.scss'
import { getCardsByName } from '@/useCases/getCardsByName'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import HomeIcon from './icons/HomeIcon'
import SearchIcon from './icons/SearchIcon'

const Search = () => {
  const { handleCards, loading, loaded, isLoading } = useAppData()

  const [search, setSearch] = useState<string>('')

  const router = useRouter()

  const handleSearch = useCallback(() => {
    loading && loading()

    if (!search) {
      loaded && loaded()
      router.push('/')
    }

    if (search)
      getCardsByName(search)
        .then(cards => handleCards && handleCards(cards))
        .finally(() => {
          loaded && loaded()
          setSearch('')
          router.push('/')
        })
  }, [loading, search, loaded, router, handleCards])

  return (
    <div className={styles.search}>
      <label htmlFor="search">Search Card: </label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        disabled={isLoading}
      />
      <button type="button" onClick={() => handleSearch()} disabled={isLoading}>
        {search ? <SearchIcon /> : <HomeIcon />}
      </button>
    </div>
  )
}

export default Search
