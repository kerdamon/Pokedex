import { Text, View, StyleSheet } from "react-native";

import PokemonView from "../components/PokemonView";
import useStorePokemon from "../hooks/useStorePokemon";

export const FoundPokemonModal = ({route, navigation}:any) => {
  const pokemonName = route.params.pokemonName;
  const notes = route.params.notes;

  return (
    <>
      {/* <PokemonView pokemonData={pokemonData}/> */}
      <View style={styles.textField}>
        <Text style={styles.text}>{notes}</Text>
      </View>
    </>
  );
}

export default FoundPokemonModal;

const styles = StyleSheet.create({
  textField: {
    flex: 1,
  },
  text: {

  }
})