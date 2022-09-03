import { useCallback, useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { setCards } from '../../store/slices/cardsSlice'
import { getAllCards } from '../../useCases/getAllCards'
import Layout from '../components/Layout'
import Paper from '../components/Paper'
import Search from '../components/Search'
import Summary from '../components/Summary'

const HomeContainer = () => {
  const { cards } = useAppSelector(state => state.cards)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchCards = async () => {
      const cardsData = await getAllCards()
      return cardsData
    }

    if (cards?.length) return

    fetchCards().then(response => {
      const sortedCards = response.sort((r1, r2) =>
        r1.name > r2.name || (r1.name === r2.name && r1.id > r2.id) ? 1 : -1
      )
      dispatch(setCards(sortedCards))
    })
  }, [cards, dispatch])

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
