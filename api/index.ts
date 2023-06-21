import axios from "./axiosinstance";

export async function getAllPokemons(): Promise<any> {
  try{
    return await axios.get('/pokemon?limit=2&offset=0');
  } catch (error) {
    throw new Error('Failed to fetch pokemons');
  }
}

export async function getPokemon(name: string): Promise<any> {
  try {
    return await axios.get(`/pokemon/${name}`);
  } catch (error) {
    throw new Error(`Failed to tetch pokemon ${name}`);
  }
}