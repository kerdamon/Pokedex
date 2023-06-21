import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getAllPokemons } from '../api';

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
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
          // <Text>zaladowne</Text>
        )
      }

    </View>
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
