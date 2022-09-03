export class Card {
  #id: string
  #name: string
  #types: string[]
  #ldImageUrl: string
  #hdImageUrl: string

  constructor(json: any) {
    this.#id = json.id
    this.#name = json.name
    this.#types = json.types
    this.#ldImageUrl = json.images.small
    this.#hdImageUrl = json.images.large
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
