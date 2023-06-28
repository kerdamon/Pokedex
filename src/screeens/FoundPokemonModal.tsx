import { TextInput, View, StyleSheet, Text, Button } from "react-native"
import {AutocompleteDropdown, TAutocompleteDropdownItem} from 'react-native-autocomplete-dropdown'
import { memo, useCallback, useEffect } from "react";

import { useStoreMarker } from "../hooks/useStoreMarkers";
import { useState } from "react";
import { getPokemons } from "../api";

export const FoundPokemonModal = ({navigation, route}:any) => {
  const [selectedPokemon, setSelectedPokemon] = useState<TAutocompleteDropdownItem>();
  const storeMarker = useStoreMarker();
  const [loading, setLoading] = useState(false);
  const [pokemonItems, setPokemonItems] = useState<TAutocompleteDropdownItem[]>();

  const handlePress = () => {
    storeMarker({
      id: JSON.stringify(route.params.latitude) + JSON.stringify(route.params.latitude),
      coordinate: route.params,
      pokemonName: selectedPokemon?.title!
    });
    navigation.goBack();
  }

  const handleGetPokemons = useCallback(async (q:any) => {
    const filterToken = q.toLowerCase()
    console.log('getPokemons query:', q)
    if (typeof q !== 'string' || q.length < 3) {
      setPokemonItems([]);
      return;
    }
    setLoading(true);
    const {names} = await getPokemons(100000, 0);
    const pokemons = names
      .filter(n => n.toLowerCase().includes(filterToken))
      .map(n => ({
        id: n,
        title: n,
      }));
    setPokemonItems(pokemons);
    setLoading(false);
  }, [])

  useEffect(() => console.log('render found pokemon modal'));

  const isLoading = true;

  return (
    <View style={styles.container}>
      <PokemonDropdown handleGetPokemons={handleGetPokemons} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} dataSet={pokemonItems} isloading={loading} setPokemonItems={setPokemonItems}/>
      <Text>Notes</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Button title='Add' onPress={e => handlePress()} disabled={isLoading}></Button>
    </View>
  )
}

export const PokemonDropdown = ({handleGetPokemons, selectedPokemon, setSelectedPokemon, dataSet, isLoading, setPokemonItems}:any) => {
  console.log(selectedPokemon);

  const onClearPress = useCallback(() => {
    setPokemonItems(null)
  }, [])

  const onOpenSuggestionsList = useCallback(isOpened => {}, [])

  return (
    <AutocompleteDropdown
      clearOnFocus={false}
      closeOnBlur={true}
      closeOnSubmit={false}
      onChangeText={handleGetPokemons}
      useFilter={false}
      debounce={600}
      onClear={onClearPress}
      onOpenSuggestionsList={onOpenSuggestionsList}
      onSelectItem={item => {
        item && setSelectedPokemon(item.id)
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
  }
})