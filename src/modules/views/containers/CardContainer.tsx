import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Card } from '../../models/Card'
import { getCardById } from '../../useCases/getCardById'
import Layout from '../components/Layout'
import Paper from '../components/Paper'
import Search from '../components/Search'
import Summary from '../components/Summary'

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
      <Paper>{card?.id ? <Summary data={card} /> : null}</Paper>
    </Layout>
  )
}

export default CardContainer
