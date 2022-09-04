import { Card } from '../models/Card'
import { PokemonTCGService } from '../services/PokemonTCGService'

export const getSomeCards = async (): Promise<Card[]> => {
  const service = new PokemonTCGService()
  const cards = await service.getSome()

  return cards
}
