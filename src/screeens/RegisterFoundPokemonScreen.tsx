import { TextInput, View, StyleSheet, Text, Button } from "react-native"
import {AutocompleteDropdown, TAutocompleteDropdownItem} from 'react-native-autocomplete-dropdown'
import { useCallback, useEffect, useRef } from "react";

import { useStoreMarker } from "../hooks/useStoreMarkers";
import { useState } from "react";
import { getPokemonNames } from "../api";
import { PokemonNameDropdown } from "../components/PokemonNameDropdown";

export const RegisterFoundPokemonScreen = ({navigation, route}:any) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string>();
  const storeMarker = useStoreMarker();
  const [notes, handleNotesTextChange] = useState('');

  const handlePress = () => {
    storeMarker({
      id: JSON.stringify(route.params.latitude) + JSON.stringify(route.params.latitude),
      coordinate: route.params,
      pokemonName: selectedPokemon!,
      notes
    });
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <PokemonNameDropdown value={selectedPokemon} onChange={item => setSelectedPokemon(item.value)}/>
      <Text>Notes</Text>
      <TextInput multiline style={styles.textInput} onChangeText={handleNotesTextChange}
        value={notes}></TextInput>
      <Button title='Add' onPress={e => handlePress()} disabled={!selectedPokemon}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }, 
  textInput: {
    borderWidth: 1,
    padding: 5
  }
})