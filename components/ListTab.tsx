import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { getAllPokemons } from '../api';
import { useState, useEffect } from 'react';

export default function ListTab({navigation}: any) {

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try{
      const response = await getAllPokemons();
      setPokemons(response.data.results.map((e:any) => {
        let obj:any = {}
        obj.key = e.name;
        return obj; 
    }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
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
