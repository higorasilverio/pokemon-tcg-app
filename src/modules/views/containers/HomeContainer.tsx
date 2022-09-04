import { isEmpty } from 'lodash'
import { useCallback, useEffect } from 'react'
import useAppData from '../../../hooks/useAppData'
import { getSomeCards } from '../../useCases/getSomeCards'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Search from '../components/Search'
import Summary from '../components/Summary'
import SummaryPaper from '../components/SummaryPaper'

const HomeContainer = () => {
  const { isLoading } = useAppData()

  const { cards, handleCards, loading, loaded } = useAppData()

  useEffect(() => {
    loading && loading()

    if (isEmpty(cards))
      getSomeCards()
        .then(response => handleCards && handleCards(response))
        .finally(() => loaded && loaded())
    else loaded && loaded()
  }, [handleCards, cards, loading, loaded])

  const renderSummaries = useCallback(() => {
    return isEmpty(cards) ? null : cards?.map(card => <Summary key={card.id} data={card} />)
  }, [cards])

  return (
    <Layout>
      <Search />
      {isLoading ? <Loading /> : <SummaryPaper>{renderSummaries()}</SummaryPaper>}
    </Layout>
  )
}

export default HomeContainer
