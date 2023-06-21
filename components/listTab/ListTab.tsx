import { FlatList, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import styles from './ListStyles'

import { getAllPokemons, getPokemon } from '../../api';
import {ListElement} from './ListComponents'

export default function ListTab({navigation}: any) {
  const {data: pokemons, isLoading, isError} = useQuery(['pokemons'], async () => {
    const response = await getAllPokemons();
    let pokemons:[] = [];
    for (const element of response.data.results) {
      let pokemon:any = {};
      pokemon.name = element.name;
      const pokemonData = (await getPokemon(pokemon.name)).data;
      pokemon.weight = pokemonData.weight;
      pokemon.uri = pokemonData.sprites.other["official-artwork"].front_default
      pokemons.push(pokemon);
    }
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
            renderItem={({item}) => <ListElement pokemonData={item}/>}
            keyExtractor={((item:any) => item.name)}
            contentContainerStyle={styles.list}
          />
        )
      }
    </View>
  );
}
