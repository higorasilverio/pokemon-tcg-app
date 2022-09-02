import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { AlertType, setAlert } from '../modules/store/slices/alertSlice'

const Home: NextPage = () => {
  const router = useRouter()
  const { locale } = router

  const { alert } = useAppSelector(state => state.alert)
  const dispatch = useAppDispatch()

  const handleToggle = useCallback(() => {
    switch (locale) {
      case 'pt-BR':
        router.push('/', '/', { locale: 'en-US' })
        break
      case 'en-US':
        router.push('/', '/', { locale: 'pt-BR' })
        break
      default:
        break
    }
  }, [locale, router])

  const handleState = useCallback(() => {
    const newAlertObject: AlertType = alert.on
      ? { on: false, type: 'error', message: 'Was on' }
      : { on: true, type: 'success', message: 'Was off' }
    dispatch(setAlert(newAlertObject))
  }, [alert.on, dispatch])

  return (
    <>
      <h1>Pokémon TCG APP</h1>
      <p>Location: {locale}</p>
      <div>
        <button type="button" onClick={handleToggle}>
          Toggle location
        </button>
      </div>
      <div style={{ marginTop: '25px' }}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div style={{ marginTop: '25px' }}>
        <button type="button" onClick={handleState}>
          Toggle state
        </button>
      </div>
    </>
  )
}

export default Home
