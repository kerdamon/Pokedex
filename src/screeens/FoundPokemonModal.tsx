import { TextInput, View, StyleSheet, Text, Button } from "react-native"

import { useStoreMarker } from "../hooks/useStoreMarkers";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export const FoundPokemonModal = ({navigation, route}:any) => {
  const [chosenPokemon, setChosenPokemon] = useState();
  const storeMarker = useStoreMarker();
  const handlePress = () => {
    storeMarker({
      key: JSON.stringify(route.params.latitude) + JSON.stringify(route.params.latitude),
      coordinate: route.params,
    });
    navigation.goBack();
  }

  const handlePickerValueChange = (value:any, index:number) => {
    setChosenPokemon(value);
  }

  return (
    <View style={styles.container}>
      <Picker selectedValue={chosenPokemon} onValueChange={handlePickerValueChange}>
        <Picker.Item label="jeden" value={1}/>
        <Picker.Item label="dwa" value={2}/>
      </Picker>
      <Text>Notes</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Button title='Add' onPress={e => handlePress()}></Button>
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
  }
})