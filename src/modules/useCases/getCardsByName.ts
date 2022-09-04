import { Card } from '../models/Card'
import { PokemonTCGService } from '../services/PokemonTCGService'

export const getCardsByName = async (search: string): Promise<Card[]> => {
  const service = new PokemonTCGService()
  const card = await service.getByName(search)

  return card
}
