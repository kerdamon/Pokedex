import { FlatList, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import styles from './ListStyles'

import { getAllPokemons, getPokemon } from '../../api';
import {ListElement} from './ListComponents'

export default function ListTab({navigation}: any) {
  const {data: pokemons, isLoading, isError} = useQuery(['pokemons'], async () => {
    const response = await getAllPokemons();
    let pokemons:[] = [];
    // const pokemonNames = response.data.results.map((e:any) => {
    //   let obj:any = {}
    //   obj.key = e.name;
    //   return obj; 
    // });
    for (const element of response.data.results) {
      let pokemon:any = {};
      pokemon.name = element.name;
      // const pokemonResponse = await getPokemon(pokemon.name);
      // console.log(pokemonResponse);
      pokemons.push(pokemon);
    }

    // const pokemonUrls = response.data.results.map((e:any) => e.url);

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
            renderItem={({item}) => <ListElement itemKey={item.name}/>}
            keyExtractor={((item:any) => item.name)}
            contentContainerStyle={styles.list}
          />
        )
      }
    </View>
  );
}
