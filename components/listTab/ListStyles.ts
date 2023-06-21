import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex:1,
    borderWidth: 1,
    borderColor: 'red',
  },
  listElem: {
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'flex-start',
    padding: 5,
  },
  pokemonName: {
    borderWidth: 1,
    borderColor: 'green',
  }
});