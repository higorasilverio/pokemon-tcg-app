import { Card } from '../models/Card'
import { AxiosHttpClient } from './AxiosHttpClient'

export class PokemonTCGService extends AxiosHttpClient {
  async getAll() {
    const { data } = await this.instance.get('cards')
    const cardsData: Card[] = data.data.map((_data: any) => new Card(_data))

    return cardsData
  }

  async getOne(id: string) {
    const { data } = await this.instance.get(`cards/${id}`)

    const cardData: Card = new Card(data)

    return cardData
  }
}
