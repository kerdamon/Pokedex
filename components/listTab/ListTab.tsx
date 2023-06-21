import { FlatList, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import styles from './ListStyles'

import { getAllPokemons } from '../../api';
import {ListElement} from './ListComponents'

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
