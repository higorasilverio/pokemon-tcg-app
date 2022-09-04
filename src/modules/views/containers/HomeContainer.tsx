import { isEmpty } from 'lodash'
import { useCallback, useEffect } from 'react'
import useAppData from '../../../hooks/useAppData'
import { getSomeCards } from '../../useCases/getSomeCards'
import Layout from '../components/Layout'
import Search from '../components/Search'
import Summary from '../components/Summary'
import SummaryPaper from '../components/SummaryPaper'

const HomeContainer = () => {
  const { cards, handleCards } = useAppData()

  useEffect(() => {
    if (isEmpty(cards) && handleCards) getSomeCards().then(response => handleCards(response))
  }, [handleCards, cards])

  const renderSummaries = useCallback(() => {
    return isEmpty(cards) ? null : cards?.map(card => <Summary key={card.id} data={card} />)
  }, [cards])

  return (
    <Layout>
      <Search />
      <SummaryPaper>{renderSummaries()}</SummaryPaper>
    </Layout>
  )
}

export default HomeContainer
