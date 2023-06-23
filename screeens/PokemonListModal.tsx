import PokemonView from "../components/PokemonView";

export const PokemonListModal = ({route, navigation}:any) => {
  const pokemonData = route.params;
  navigation.setOptions({title: pokemonData.name});

  return (
    <PokemonView pokemonData={pokemonData}/>
  );
}

export default PokemonListModal;