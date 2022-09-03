export class Card {
  #id: string
  #name: string
  #types: string[]
  #ldImageUrl: string
  #hdImageUrl: string

  constructor(json: any) {
    const { data } = json

    this.#id = data.id
    this.#name = data.name
    this.#types = data.types
    this.#ldImageUrl = data.images.small
    this.#hdImageUrl = data.images.large
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get types() {
    return this.#types.join(', ')
  }

  get ldImageUrl() {
    return this.#ldImageUrl
  }

  get hdImageUrl() {
    return this.#hdImageUrl
  }
}
