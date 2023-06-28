import { TextInput, View, StyleSheet, Text, Button } from "react-native"
import { useQuery } from '@tanstack/react-query';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown'

import { useStoreMarker } from "../hooks/useStoreMarkers";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import axios from "axios";
import { getPokemons } from "../api";

export const FoundPokemonModal = ({navigation, route}:any) => {
  const [chosenPokemon, setChosenPokemon] = useState<string>();
  const storeMarker = useStoreMarker();
  const handlePress = () => {
    storeMarker({
      id: JSON.stringify(route.params.latitude) + JSON.stringify(route.params.latitude),
      coordinate: route.params,
      pokemonName:chosenPokemon!
    });
    navigation.goBack();
  }

  const handlePickerValueChange = (value:any, index:number) => {
    setChosenPokemon(value);
  }

  //move this to higher component to not query api that often
  const {data:pokemonNames, isLoading} = useQuery(['pokemonName'], async () => {
    const {names} = await getPokemons(100000, 0);
    setChosenPokemon(names[0]);
    console.log('koniec fetchowania');
    return names;
  });

  return (
    <View style={styles.container}>
      <PokemonPicker chosenPokemon={chosenPokemon} handlePickerValueChange={handlePickerValueChange} pokemonNames={pokemonNames} isloading={isLoading}></PokemonPicker>
      <Text>Notes</Text>
      <TextInput style={styles.textInput}></TextInput>
      {!isLoading && <Button title='Add' onPress={e => handlePress()}></Button>}
    </View>
  )
}

export const PokemonPicker = ({chosenPokemon, handlePickerValueChange, pokemonNames, isloading}:any) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    // <Picker selectedValue={chosenPokemon} onValueChange={handlePickerValueChange}>
    //   {
    //   isloading 
    //   ? <Picker.Item label="Laduje"></Picker.Item>
    //   : pokemonNames.map(e => (
    //     <Picker.Item key={e} label={e} value={e}/>
    //   ))}
    //   <Picker.Item label="jeden" value={1}/>
    //   <Picker.Item label="dwa" value={2}/>
    // </Picker> 

    <AutocompleteDropdown
      clearOnFocus={false}
      closeOnBlur={true}
      closeOnSubmit={false}
      initialValue={{ id: '2' }} // or just '2'
      onSelectItem={setSelectedItem}
      dataSet={[
        { id: '1', title: 'Alpha' },
        { id: '2', title: 'Beta' },
        { id: '3', title: 'Gamma' },
      ]}
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