import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import PokemonView from '../components/PokemonView';
import { getData } from '../async_storage';
import { useSelector } from 'react-redux';

export default function FavouriteScreen({navigation}: any) {
  const favouritePokemonName = useSelector(state => state.favouritePokemon.name);

  const clearFavourites = () => {
    console.log('clear');
  };

  let pokemonData = null;

  useEffect(() => {
    getData('favourites').then(data => {
      console.log(`pauke do pokemondata`);
      console.log(data);
      pokemonData = data;
    });
  }, [favouritePokemonName]);

  return (
    <>
      {pokemonData && <PokemonView pokemonData={pokemonData}/>}
      <Text>W reduxie siedzi sobie {favouritePokemonName}</Text>
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
