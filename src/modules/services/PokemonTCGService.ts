import { AxiosHttpClient } from './AxiosHttpClient'

export class PokemonTCGService extends AxiosHttpClient {
  async getAll() {
    const { data } = await this.instance.get('cards')

    return data
  }

  async getOne(id: string) {
    const { data } = await this.instance.get(`cards/${id}`)

    return data
  }
}
