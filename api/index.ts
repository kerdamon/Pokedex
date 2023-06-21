import axios from "./axiosinstance";

export async function getAllPokemons(): Promise<any> {
  try{
    return await axios.get('/pokemon?limit=10000&offset=0');
  } catch (error) {
    throw new Error('Failed to fetch pokemons');
  }
}