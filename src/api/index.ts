import axios from "./axiosinstance";

import Pokemon from "../types/Pokemon";
import { PokemonNamesSlice } from "./types";

export async function getPokemons(limit:number, offset:number): Promise<PokemonNamesSlice> {
  try{
    const response = await axios.get(`/pokemon?limit=${limit}&offset=${offset}`);
    let data:PokemonNamesSlice = {
      names: [],
      isLast: false
    }
    for (const result of response.data.results) {
      data.names.push(result.name);
    }
    if (!response.data.next) {
      data.isLast = true;
    }
    return data; 
  } catch (error) {
    throw new Error(`Failed to fetch pokemons. Limit: ${limit} Offset: ${offset}`);
  }
}

export async function getPokemon(name: string): Promise<any> {
  try {
    return await axios.get(`/pokemon/${name}`);
  } catch (error) {
    throw new Error(`Failed to tetch pokemon ${name}`);
  }
}
