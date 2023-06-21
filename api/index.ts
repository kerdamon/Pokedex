import axios from "./axiosinstance";

export async function getAllPokemons(limit:number, offset:number): Promise<any> {
  try{
    return await axios.get(`/pokemon?limit=${limit}&offset=${offset}`);
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
