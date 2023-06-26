import { useDispatch } from "react-redux";
import { storeData } from "../async_storage";
import { setCurrentFavouritePokemonName } from "../redux/favouritePokemonSlice";

export default function useStorePokemon () {
  const dispatch = useDispatch();
  return (pokemonData:any) => {
    storeData('favourites', JSON.stringify(pokemonData)).then(dispatch(setCurrentFavouritePokemonName(pokemonData?.name)));
  }
}