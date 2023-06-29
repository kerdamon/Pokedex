export interface PokemonNamesSlice {
  names: string[],
  hasNext: Boolean,
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