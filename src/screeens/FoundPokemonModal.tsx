import { TextInput, View, StyleSheet, Text, Button } from "react-native"
import {AutocompleteDropdown, TAutocompleteDropdownItem} from 'react-native-autocomplete-dropdown'
import { useCallback, useEffect, useRef } from "react";

import { useStoreMarker } from "../hooks/useStoreMarkers";
import { useState } from "react";
import { getPokemons } from "../api";

export const FoundPokemonModal = ({navigation, route}:any) => {
  const [selectedPokemon, setSelectedPokemon] = useState<TAutocompleteDropdownItem>(null);
  const storeMarker = useStoreMarker();
  const [loading, setLoading] = useState(false);
  const [pokemonItems, setPokemonItems] = useState<TAutocompleteDropdownItem[]>();
  const [notes, handleNotesTextChange] = useState('');

  const handlePress = () => {
    storeMarker({
      id: JSON.stringify(route.params.latitude) + JSON.stringify(route.params.latitude),
      coordinate: route.params,
      pokemonName: selectedPokemon?.title!,
      notes
    });
    navigation.goBack();
  }

  const handleGetPokemons = useCallback(async (q:any) => {
    const filterToken = q.toLowerCase()
    console.log('getPokemons query:', q)
    if (typeof q !== 'string' || q.length < 3) {
      setPokemonItems(null);
      return;
    }
    setLoading(true);
    const {names} = await getPokemons(100000, 0);
    const pokemons = names
      .filter(n => n.toLowerCase().includes(filterToken))
      .map((n, i) => ({
        id: i,
        title: n,
      }));
    setPokemonItems(pokemons);
    setLoading(false);
  }, [])

  const isLoading = true;

  return (
    <View style={styles.container}>
      { 
        !selectedPokemon
        ? <PokemonDropdown handleGetPokemons={handleGetPokemons} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} dataSet={pokemonItems} isloading={loading} setPokemonItems={setPokemonItems}/>
        : 
        <>
          <Text>Selected Pokemon: {selectedPokemon.title}</Text>
          <Button title="Change pokemon" onPress={() => setSelectedPokemon(null)}/>
        </>
      }
      <Text>Notes</Text>
      <TextInput multiline style={styles.textInput} onChangeText={handleNotesTextChange}
        value={notes}></TextInput>
      <Button title='Add' onPress={e => handlePress()} disabled={loading || !selectedPokemon}></Button>
    </View>
  )
}

export const PokemonDropdown = ({handleGetPokemons, selectedPokemon, setSelectedPokemon, dataSet, isLoading, setPokemonItems, ref}:any) => {

  const onClearPress = useCallback(() => {
    setPokemonItems(null)
  }, [])

  return (
    <AutocompleteDropdown
      clearOnFocus={false}
      closeOnBlur={true}
      closeOnSubmit={false}
      onChangeText={handleGetPokemons}
      useFilter={false}
      debounce={600}
      showChevron={false}
      onClear={onClearPress}
      onSelectItem={item => {
        item && setSelectedPokemon(item);
        console.log('select: ', item)
      }}
      textInputProps={{
        placeholder: 'Type 3+ letters',
        autoCorrect: false,
        autoCapitalize: 'none',
      }}
      dataSet={dataSet}
      loading={isLoading}
    />
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