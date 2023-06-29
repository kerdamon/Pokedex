import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { getPokemon } from "../api";
import PokemonView from "../components/PokemonView";
import useStorePokemon from "../hooks/useStorePokemon";

export const FoundPokemonModal = ({route, navigation}:any) => {
  const pokemonName = route.params.pokemonName;
  const notes = route.params.notes;

  const {data:pokemonData, isLoading} = useQuery(['pokemon', pokemonName], async () => {
    return await getPokemon(pokemonName);
  });

  return (
    <View style={styles.container}>
      <PokemonView pokemonData={pokemonData} style={styles.pokemonView}/>
      <View style={styles.notesField}>
        <Text style={styles.header}>Notes:</Text>
        <ScrollView style={styles.textField}>
          <Text style={styles.text}>{notes}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

export default FoundPokemonModal;

const styles = StyleSheet.create({
  textField: {
    flex:1,
    backgroundColor: 'white',
    padding: 5
  },
  text: {

  },
  header: {
    fontSize: 16,
    marginBottom: 5
  },
  container: {
    flex:1
  },
  pokemonView: {
    flex: 3
  },
  notesField: {
    flex: 1,
    margin: 5
  }
})