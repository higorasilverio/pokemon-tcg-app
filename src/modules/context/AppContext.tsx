import { Card } from '@/models/Card'
import { createContext, ReactNode, useCallback, useState } from 'react'

type AppContextProps = {
  cards?: Card[]
  handleCards?: (cards: Card[]) => void
  isLoading?: boolean
  loading?: () => void
  loaded?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleCards = useCallback((cards: Card[]) => {
    setCards(cards)
  }, [])

  const loading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const loaded = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <AppContext.Provider
      value={{
        cards,
        handleCards,
        isLoading,
        loading,
        loaded
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
