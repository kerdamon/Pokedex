import { useDispatch } from "react-redux";
import { storeData } from "../async_storage";
import { setFavouritePokemons } from "../redux/favouritePokemonSlice";
import { PokemonData } from "../types/pokemonData";

export default function useStorePokemon () {
  const dispatch = useDispatch();
  return (pokemonData:PokemonData) => {
    storeData('favourites', pokemonData).then(dispatch(setFavouritePokemons(pokemonData?.name)));
  }
}