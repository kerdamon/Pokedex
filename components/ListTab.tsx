import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getAllPokemons } from '../api';

const ListElement = ({itemKey}:any) => {
  return(
    <View style={styles.listElem}>
      <Text style={styles.pokemonName}>{itemKey}</Text>
    </View>
  )
}

export default function ListTab({navigation}: any) {
  const {data: pokemons, isLoading, isError} = useQuery(['pokemons'], async () => {
    const response = await getAllPokemons();
    const pokemons = response.data.results.map((e:any) => {
      let obj:any = {}
      obj.key = e.name;
      return obj; 
    })
    return pokemons;
  });
  
  return (
    <View style={styles.container}>
      {
        isLoading ? (
          <Text>Loading pokemons</Text>
        ) : (
          <FlatList
            data={pokemons}
            renderItem={({item}) => <ListElement itemKey={item.key}/>}
            contentContainerStyle={styles.list}
          />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex:1,
    borderWidth: 1,
    borderColor: 'red',
  },
  listElem: {
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'flex-start',
    padding: 5,
  },
  pokemonName: {
    borderWidth: 1,
    borderColor: 'green',
  }
});
