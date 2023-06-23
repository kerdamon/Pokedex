import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import PokemonView from '../components/PokemonView';
import { getData } from '../api/storage';

export default function FavouriteScreen({navigation}: any) {
  const [pokemonData, setPokemonData] = useState();

  const clearFavourites = () => {
    AsyncStorage.setItem('favourites', '');
  };

  useEffect(() => {
    getData('favourites').then(data => {
      setPokemonData(data);
    });
  }, [pokemonData]);

  return (
    <>
      {pokemonData && <PokemonView pokemonData={pokemonData}/>}
      <View>    
        <Button onPress={() => clearFavourites()} title='Unfavourite'></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
