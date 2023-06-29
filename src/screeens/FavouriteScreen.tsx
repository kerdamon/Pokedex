import { Button, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PokemonView from '../components/PokemonView';
import useLoadPokemon from '../hooks/useLoadPokemon';
import useStorePokemon from '../hooks/useStorePokemon';


export default function FavouriteScreen({navigation}: any) {
  const pokemonData = useLoadPokemon();
  const storePokemon = useStorePokemon();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1, justifyContent:'center'}}>
        {
        pokemonData 
        ? <PokemonView pokemonData={pokemonData}/>
        : <Text style={{alignSelf:'center'}}>No favourite pokemons</Text>
        }
      </View>
      <Button onPress={() => storePokemon(null)} title='Unfavourite'></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})