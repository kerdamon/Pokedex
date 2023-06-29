export default interface Pokemon {
  weight: number,
  uri: string,
  name: string,
  types: TypeOfPokemon[]
}

export type TypeOfPokemon = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'unknown' | 'shadow';