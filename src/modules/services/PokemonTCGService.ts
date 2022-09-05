import { Card } from '@/models/Card'
import { AxiosHttpClient } from './AxiosHttpClient'

export class PokemonTCGService extends AxiosHttpClient {
  readonly #queryString: string

  constructor() {
    super()
    this.#queryString = 'cards?orderBy=name&q=supertype:Pokémon%20name:'
  }

  async getSome() {
    const { data } = await this.instance.get(`${this.#queryString}Ash's`)
    const cardsData: Card[] = data.data.map((_data: any) => new Card(_data))

    return cardsData
  }

  async getOne(id: string) {
    const { data } = await this.instance.get(`cards/${id}`)
    const cardData: Card = new Card(data.data)

    return cardData
  }

  async getByName(search: string) {
    const { data } = await this.instance.get(`${this.#queryString}*${search}*`)
    const cardsData: Card[] = data.data.map((_data: any) => new Card(_data))

    return cardsData
  }
}
