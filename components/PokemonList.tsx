import { FlatList, Text, View, Image, StyleSheet, Button } from 'react-native';
import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getAllPokemons, getPokemon } from '../api';

export const PokemonList = () =>{
  const pokemonsPerPage = 10;
  const [page, setPage] = useState(126);
  const [pokemons, setPokemons] = useState<[]>([]);

  const {isLoading, isError} = useQuery(['pokemons', page], async () => {
    const response = await getAllPokemons(pokemonsPerPage, pokemonsPerPage * page);
    let newPokemons:[] = [];
    for (const element of response.data.results) {
      let pokemon:any = {};
      pokemon.name = element.name;
      const pokemonData = (await getPokemon(pokemon.name)).data;
      pokemon.weight = pokemonData.weight;
      pokemon.uri = pokemonData.sprites.other["official-artwork"].front_default
      newPokemons.push(pokemon);
    }
    setPokemons([...pokemons, ...newPokemons]);
    return newPokemons;
  });
  
  return (
    <View style={styles.container}>
      {
        <FlatList
          data={pokemons}
          renderItem={({item}) => <ListElement pokemonData={item}/>}
          keyExtractor={((item:any) => item.name)}
          contentContainerStyle={styles.list}
          onEndReachedThreshold={0.2}
          onEndReached={() => setPage(page + 1)}
          ListFooterComponent={
            isLoading ? <Text>Loading</Text> : <Text>No more pokemons to load</Text>
          }
          ListFooterComponentStyle={{alignItems: 'center', backgroundColor: 'white'}}
        />
      }
    </View>
  );
}

const ListElement = ({pokemonData}:any) => {
  return(
    <View style={styles.listElem}>
      <Name name={pokemonData.name} style={{flex:1}}/>
      <View style={{flex:1}}>
        <Weight weight={pokemonData.weight} style={{marginLeft: 5}}/>
        <Types style={{marginLeft: 5}}/>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <PokemonSprite uri={pokemonData.uri}/>
      </View>
    </View>
  )
}

const Name = ({style, name}:any) => {
  return <Text style={[style, styles.text, styles.bigText]}>{name}</Text>;
}

const Weight = ({style, weight}:any) => {
  return <Text style={[style, styles.text]}>Weight: {weight}</Text>;
}

const Types = ({style, type}:any) => {
  return <Text style={[style, styles.text]}>Types: {}</Text>;
}

const PokemonSprite = ({style, uri}:any) => {
  return <Image source={{uri, width: 64, height:64}}/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    // borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: '#C9C9C9'
  },
  listElem: {
    borderWidth: 0,
    // borderColor: 'blue',
    backgroundColor: '#FFFFFF',
    
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
    margin: 2,
  },
  text: {
    // borderWidth: 1,
    // borderColor: 'green',
  },
  bigText: {
    fontSize: 24,
  }
});