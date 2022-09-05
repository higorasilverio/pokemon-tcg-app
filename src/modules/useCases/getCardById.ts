import { Card } from '@/models/Card'
import { PokemonTCGService } from '@/services/PokemonTCGService'

export const getCardById = async (id: string): Promise<Card> => {
  const service = new PokemonTCGService()
  const card = await service.getOne(id)

  return card
}
