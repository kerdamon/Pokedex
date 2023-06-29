export interface PokemonNamesSlice {
  names: string[],
  isLast: Boolean,
}

export interface PokemonDTO {
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  },
  weight: number
}