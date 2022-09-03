type FightProperty = {
  type: string
  value: string
}

type AttackProperties = {
  name: string
  convertedEnergyCost: number
  damage: string
  text: string
  cost: string[]
}

export class Card {
  #id: string
  #name: string
  #types: string[]
  #ldImageUrl: string
  #hdImageUrl: string
  #resistances: FightProperty[]
  #weaknesses: FightProperty[]
  #attacks: AttackProperties[]

  constructor(json: any) {
    this.#id = json.id
    this.#name = json.name
    this.#types = json.types
    this.#ldImageUrl = json.images?.small
    this.#hdImageUrl = json.images?.large
    this.#resistances = json.resistances
    this.#weaknesses = json.weaknesses
    this.#attacks = json.attacks
  }

  static emptyCard() {
    return new Card({})
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get types() {
    return Array.isArray(this.#types) ? this.#types.join(', ') : ''
  }

  get ldImageUrl() {
    return this.#ldImageUrl
  }

  get hdImageUrl() {
    return this.#hdImageUrl
  }

  get resistances() {
    return this.#resistances
  }

  get weaknesses() {
    return this.#weaknesses
  }

  get attacks() {
    return this.#attacks
  }
}
