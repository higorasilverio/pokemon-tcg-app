import { isEmpty } from 'lodash'
import { useCallback, useEffect } from 'react'
import useAppData from '../../../hooks/useAppData'
import { getSomeCards } from '../../useCases/getSomeCards'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import NoCards from '../components/NoCards'
import Search from '../components/Search'
import Summary from '../components/Summary'
import SummaryPaper from '../components/SummaryPaper'

const HomeContainer = () => {
  const { isLoading } = useAppData()

  const { cards, handleCards, loading, loaded } = useAppData()

  useEffect(() => {
    loading && loading()

    if (cards === undefined)
      getSomeCards()
        .then(response => handleCards && handleCards(response))
        .finally(() => loaded && loaded())
    else loaded && loaded()
  }, [handleCards, cards, loading, loaded])

  const renderSummaries = useCallback(() => {
    if (isEmpty(cards)) return <NoCards />

    return (
      <SummaryPaper>
        {cards?.map(card => (
          <Summary key={card.id} data={card} />
        ))}
      </SummaryPaper>
    )
  }, [cards])

  return (
    <Layout>
      <Search />
      {isLoading ? <Loading /> : renderSummaries()}
    </Layout>
  )
}

export default HomeContainer
