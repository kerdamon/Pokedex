import { TextInput, View, StyleSheet, Text, Button } from "react-native"

export const FoundPokemonModal = ({navigation}:any) => {
  const handlePress = () => {
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