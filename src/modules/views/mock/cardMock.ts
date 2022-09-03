export const cardMock = {
  data: {
    id: 'basep-1',
    name: 'Pikachu',
    supertype: 'Pokémon',
    subtypes: ['Basic'],
    level: '16',
    hp: '60',
    types: ['Lightning'],
    evolvesTo: ['Raichu'],
    attacks: [
      {
        name: 'Growl',
        cost: ['Colorless'],
        convertedEnergyCost: 1,
        damage: '',
        text: "If the Defending Pokémon attacks Pikachu during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)"
      },
      {
        name: 'Thundershock',
        cost: ['Lightning', 'Lightning'],
        convertedEnergyCost: 2,
        damage: '20',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
      }
    ],
    weaknesses: [{ type: 'Fighting', value: '×2' }],
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    set: {
      id: 'basep',
      name: 'Wizards Black Star Promos',
      series: 'Base',
      printedTotal: 53,
      total: 53,
      legalities: { unlimited: 'Legal' },
      ptcgoCode: 'PR',
      releaseDate: '1999/07/01',
      updatedAt: '2020/08/14 09:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/basep/symbol.png',
        logo: 'https://images.pokemontcg.io/basep/logo.png'
      }
    },
    number: '1',
    artist: 'Keiji Kinebuchi',
    rarity: 'Promo',
    flavorText:
      'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
    nationalPokedexNumbers: [25],
    legalities: { unlimited: 'Legal' },
    images: {
      small: 'https://images.pokemontcg.io/basep/1.png',
      large: 'https://images.pokemontcg.io/basep/1_hires.png'
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/basep-1',
      updatedAt: '2022/09/02',
      prices: { normal: { low: 3.2, mid: 5.9, high: 89.99, market: 7.02, directLow: 3.45 } }
    },
    cardmarket: {
      url: 'https://prices.pokemontcg.io/cardmarket/basep-1',
      updatedAt: '2022/09/02',
      prices: {
        averageSellPrice: 6.1,
        lowPrice: 2.5,
        trendPrice: 4.95,
        reverseHoloTrend: 16.32,
        lowPriceExPlus: 4.0,
        avg1: 7.0,
        avg7: 6.56,
        avg30: 6.56,
        reverseHoloAvg1: 12.0,
        reverseHoloAvg7: 12.83,
        reverseHoloAvg30: 12.83
      }
    }
  }
}
