import { useCallback, useEffect, useState } from 'react'
import { Card } from '../../models/Card'
import { getSomeCards } from '../../useCases/getSomeCards'
import Layout from '../components/Layout'
import Paper from '../components/Paper'
import Search from '../components/Search'
import Summary from '../components/Summary'

const HomeContainer = () => {
  const [cards, setCards] = useState<Card[]>()

  useEffect(() => {
    getSomeCards().then(response => setCards(response))
  }, [])

  const renderSummaries = useCallback(() => {
    return cards ? cards.map(card => <Summary key={card.id} data={card} />) : null
  }, [cards])

  return (
    <Layout>
      <Search />
      <Paper>{renderSummaries()}</Paper>
    </Layout>
  )
}

export default HomeContainer
