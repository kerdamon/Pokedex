import { Button } from "react-native";

import PokemonView from "../components/PokemonView";
import useStorePokemon from "../hooks/useStorePokemon";

export const PokemonListModal = ({route, navigation}:any) => {
  const storePokemon = useStorePokemon();

  const pokemonData = route.params;

  return (
    <>
      <PokemonView pokemonData={pokemonData}/>
      <Button onPress={() => storePokemon(pokemonData)} title="Add to favourites"/>
    </>
  );
}

export default PokemonListModal;