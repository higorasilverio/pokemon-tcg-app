import { createContext, ReactNode, useCallback, useState } from 'react'
import { Card } from '../models/Card'

type AppContextProps = {
  cards?: Card[]
  handleCards?: (cards: Card[]) => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[]>([])

  const handleCards = useCallback((cards: Card[]) => {
    setCards(cards)
  }, [])

  return (
    <AppContext.Provider
      value={{
        cards,
        handleCards
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
