import { FlatList, Text, View, Image, StyleSheet, Button, ActivityIndicator, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getPokemons, getPokemon } from '../api';

export const PokemonList = ({navigation}:any) =>{
  const pokemonsPerPage = 10;
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState<[]>([]);
  const [refreshing, setRefreshing] = useState(true);
  const [isListEnd, setIsListEnd] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setPokemons([]);
    setPage(0);
    setIsListEnd(false);
  };

  const {isLoading} = useQuery(['pokemons', page], async () => {
    const {names, isLast} = await getPokemons(pokemonsPerPage, pokemonsPerPage * page);
    if (isLast) {
      setIsListEnd(true);
    }
    let newPokemons:[] = [];
    for (const name of names) {
      let pokemon:any = {};
      pokemon.name = name;
      const pokemonData = (await getPokemon(name!)).data;
      pokemon.weight = pokemonData.weight;
      pokemon.uri = pokemonData.sprites.other["official-artwork"].front_default
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
      <View style={{flex:1}}>
        <Weight weight={pokemonData.weight} style={{marginLeft: 5}}/>
        <Types style={{marginLeft: 5}}/>
      </View>
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