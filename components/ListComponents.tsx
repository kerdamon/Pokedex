import { FlatList, Text, View, Image } from 'react-native';

import styles from './PokemonList/ListStyles';

import { useQuery } from '@tanstack/react-query';
import { getAllPokemons, getPokemon } from '../api';

export const PokemonList = () =>{
  const {data: pokemons, isLoading, isError} = useQuery(['pokemons'], async () => {
    const response = await getAllPokemons(10, 0);
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

export const ListElement = ({pokemonData}:any) => {
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

export const Name = ({style, name}:any) => {
  return <Text style={[style, styles.text, styles.bigText]}>{name}</Text>;
}

export const Weight = ({style, weight}:any) => {
  return <Text style={[style, styles.text]}>Weight: {weight}</Text>;
}

export const Types = ({style, type}:any) => {
  return <Text style={[style, styles.text]}>Types: {}</Text>;
}

export const PokemonSprite = ({style, uri}:any) => {
  return <Image source={{uri, width: 64, height:64}}/>
}