import { useDispatch } from "react-redux";
import { storeData } from "../async_storage";
import { setFavouritePokemons } from "../redux/favouritePokemonSlice";
import type Pokemon from "../types/Pokemon";

export default function useStorePokemon () {
  const dispatch = useDispatch();
  return (pokemonData:Pokemon) => {
    storeData('favourites', pokemonData).then(dispatch(setFavouritePokemons(pokemonData?.name)));
  }
}