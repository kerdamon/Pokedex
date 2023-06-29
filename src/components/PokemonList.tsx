import { FlatList, Text, View, Image, StyleSheet, Button, ActivityIndicator, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getPokemonNames, getPokemon } from '../api';

import type Pokemon from '../types/Pokemon';

export const PokemonList = ({navigation}:any) =>{
  const pokemonsPerPage = 10;
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState<[]>([]);
  const [refreshing, setRefreshing] = useState(true);
  const [isListEnd, setIsListEnd] = useState(false);
  const insets = useSafeAreaInsets();

  const handleRefresh = () => {
    setRefreshing(true);
    setPokemons([]);
    setPage(0);
    setIsListEnd(false);
  };

  const {isLoading} = useQuery(['pokemons', page], async () => {
    const {names, hasNext} = await getPokemonNames(pokemonsPerPage, pokemonsPerPage * page);
    if (!hasNext) {
      setIsListEnd(true);
    }
    let newPokemons:Pokemon[] = [];
    for (const name of names) {
      const pokemon = await getPokemon(name!);
      newPokemons.push(pokemon);
    }
    setPokemons([...pokemons, ...newPokemons]);
    setRefreshing(false);
    return newPokemons;
  });
  
  return (
    <View style={styles.container}>
      {
        refreshing
        ? <ActivityIndicator size='large' style={{flex: 1}}/>
        : <FlatList
            data={pokemons}
            renderItem={({item}) => <ListElement pokemonData={item} navigation={navigation}/>}
            keyExtractor={((item:any) => item.name)}
            contentContainerStyle={styles.list}
            onEndReachedThreshold={0.2}
            onEndReached={() => {
              if (!isListEnd) setPage(page + 1);
            }}
            ListFooterComponent={
              <View>
                {isLoading && <ActivityIndicator/>}
                {isListEnd && <Text>No more pokemons to load</Text>}
              </View>
            }
            ListHeaderComponent={<View style={{minHeight: insets.top}}></View>}
            ListFooterComponentStyle={{alignItems: 'center', marginTop: 2}}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
      }
    </View>
  );
}

const ListElement = ({pokemonData, navigation}:any) => {
  const handlePress = () => {
    navigation.navigate('Pokemon', pokemonData );
  }

  return(
    <Pressable style={styles.listElem} onPress={handlePress}>
      <Name name={pokemonData.name} style={{flex:1}}/>
      <View style={{alignItems: 'flex-end'}}>
        <PokemonSprite uri={pokemonData.uri}/>
      </View>
    </Pressable>
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
  },
  listElem: {
    borderWidth: 0,
    backgroundColor: '#FFFFFF',
    
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
    margin: 2,
  },
  text: {
  },
  bigText: {
    fontSize: 24,
  }
});