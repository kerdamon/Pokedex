import { TypeOfPokemon } from "../types/Pokemon"

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
  weight: number,
  types: pokemonTypeWrap[]
}

interface pokemonTypeWrap {
  type: {
    name: TypeOfPokemon
  }
}