import { Card } from '../models/Card'
import { PokemonTCGService } from './../services/PokemonTCGService'

export const getAllCards = async (): Promise<Card[]> => {
  const service = new PokemonTCGService()
  const cards = await service.getAll()

  return cards
}
