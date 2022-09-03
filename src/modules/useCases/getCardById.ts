import { PokemonTCGService } from '../services/PokemonTCGService'

export const getCardById = async (id: string) => {
  try {
    const service = new PokemonTCGService()
    const cards = await service.getOne(id)

    return cards
  } catch (err) {
    return err
  }
}
