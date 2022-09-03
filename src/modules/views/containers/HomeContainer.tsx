import { useCallback, useEffect, useState } from 'react'
import { Card } from '../../models/Card'
import { getAllCards } from '../../useCases/getAllCards'
import Layout from '../components/Layout'
import Paper from '../components/Paper'
import Search from '../components/Search'
import Summary from '../components/Summary'

const HomeContainer = () => {
  const [cards, setCards] = useState<Card[]>()

  useEffect(() => {
    const fetchCards = async () => {
      const cardsData = await getAllCards()

      return cardsData
    }

    fetchCards().then(response => setCards(response))
  }, [])

  const renderSummaries = useCallback(() => {
    return cards?.length ? cards.map(card => <Summary key={card.id} data={card} />) : null
  }, [cards])

  return (
    <Layout>
      <Search />
      <Paper>{renderSummaries()}</Paper>
    </Layout>
  )
}

export default HomeContainer
