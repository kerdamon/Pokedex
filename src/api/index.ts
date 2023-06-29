import axios from "./axiosinstance";

import type Pokemon from "../types/Pokemon";
import type { PokemonDTO, PokemonNamesSlice } from "./types";

export async function getPokemonNames(limit:number, offset:number): Promise<PokemonNamesSlice> {
  try{
    const response = await axios.get(`/pokemon?limit=${limit}&offset=${offset}`);
    let data:PokemonNamesSlice = {
      names: [],
      hasNext: true
    }
    for (const result of response.data.results) {
      data.names.push(result.name);
    }
    if (!response.data.next) {
      data.hasNext = false;
    }
    return data; 
  } catch (error) {
    throw new Error(`Failed to fetch pokemons. Limit: ${limit} Offset: ${offset}`);
  }
}

export async function getPokemon(name: string): Promise<Pokemon> {
    const response = await axios.get(`/pokemon/${name}`);
    const data:PokemonDTO = response.data;
    return {
      name,
      weight: data.weight,
      uri: data.sprites.other["official-artwork"].front_default,
      types: data.types.map(e => e.type.name)
    }
}
