import { PokemonTCGService } from './../services/PokemonTCGService'

export const getAllCards = async () => {
  try {
    const service = new PokemonTCGService()
    const cards = await service.getAll()

    return cards
  } catch (err) {
    return err
  }
}
