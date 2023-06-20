import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ListTab({navigation}: any) {

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try{
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0');
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
    console.log(pokemons);
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
