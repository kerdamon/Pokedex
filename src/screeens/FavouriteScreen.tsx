import { Button, Text, View } from 'react-native';

import PokemonView from '../components/PokemonView';
import useLoadPokemon from '../hooks/useLoadPokemon';
import useStorePokemon from '../hooks/useStorePokemon';


export default function FavouriteScreen({navigation}: any) {
  const pokemonData = useLoadPokemon();
  const storePokemon = useStorePokemon();

  return (
    <>
      <View style={{flex:1, justifyContent:'center'}}>
        {
        pokemonData 
        ? <PokemonView pokemonData={pokemonData}/>
        : <Text style={{alignSelf:'center'}}>No favourite pokemons</Text>
        }
      </View>
      <Button onPress={() => storePokemon([])} title='Unfavourite'></Button>
    </>
  );
}