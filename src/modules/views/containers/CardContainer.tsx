import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useAppData from '../../../hooks/useAppData'
import { Card } from '../../models/Card'
import { getCardById } from '../../useCases/getCardById'
import Detail from '../components/Detail'
import DetailPaper from '../components/DetailPaper'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Search from '../components/Search'

const CardContainer = () => {
  const { isLoading, loading, loaded, cards } = useAppData()

  const [card, setCard] = useState<Card>()

  const router = useRouter()

  useEffect(() => {
    loading && loading()

    const { id } = router.query
    const currentCard = cards?.find(_card => _card.id === id)
    if (!currentCard && id) {
      getCardById(id as string)
        .then(response => setCard(response))
        .finally(() => loaded && loaded())
    } else {
      setCard(currentCard)
      loaded && loaded()
    }
  }, [cards, loaded, loading, router])

  return (
    <Layout>
      <Search />
      {isLoading ? (
        <Loading />
      ) : (
        <DetailPaper>{card?.id ? <Detail data={card} /> : null}</DetailPaper>
      )}
    </Layout>
  )
}

export default CardContainer
