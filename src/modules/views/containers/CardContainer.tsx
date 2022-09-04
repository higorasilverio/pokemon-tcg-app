import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Card } from '../../models/Card'
import { getCardById } from '../../useCases/getCardById'
import Detail from '../components/Detail'
import DetailPaper from '../components/DetailPaper'
import Layout from '../components/Layout'
import Search from '../components/Search'

const CardContainer = () => {
  const [card, setCard] = useState<Card>()

  const router = useRouter()

  useEffect(() => {
    const { id } = router.query
    if (id) getCardById(id as string).then(response => setCard(response))
  }, [router])

  return (
    <Layout>
      <Search />
      <DetailPaper>{card?.id ? <Detail data={card} /> : null}</DetailPaper>
    </Layout>
  )
}

export default CardContainer
