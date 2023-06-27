import { TextInput, View, StyleSheet, Text, Button } from "react-native"
import { useDispatch } from "react-redux";

import { addMarker } from "../redux/markerSlice";
import { useStoreMarker } from "../hooks/useStoreMarkers";

export const FoundPokemonModal = ({navigation, route}:any) => {
  const storeMarker = useStoreMarker();
  const handlePress = () => {
    storeMarker({
      key: JSON.stringify(route.params.latitude) + JSON.stringify(route.params.latitude),
      coordinate: route.params,
    });
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
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