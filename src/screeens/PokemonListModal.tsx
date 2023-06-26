import { Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCurrentFavouritePokemonName } from "../redux/favouritePokemonSlice";
import { useDispatch } from "react-redux";

import PokemonView from "../components/PokemonView";
import { storeData } from "../async_storage";

export const PokemonListModal = ({route, navigation}:any) => {
  const pokemonData = route.params;
  navigation.setOptions({title: pokemonData.name});
  const dispatch = useDispatch();

  return (
    <>
      <PokemonView pokemonData={pokemonData}/>
      <Button onPress={() => storeData('favourites', JSON.stringify(pokemonData)).then(dispatch(setCurrentFavouritePokemonName(pokemonData.name)))} title="Add to favourites"/>
    </>
  );
}

export default PokemonListModal;