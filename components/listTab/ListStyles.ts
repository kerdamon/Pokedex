import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    borderWidth: 1,
    borderColor: 'red',
    
    flex:1,
  },
  listElem: {
    borderWidth: 1,
    borderColor: 'blue',
    
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
  },
  text: {
    borderWidth: 1,
    borderColor: 'green',
  },
  bigText: {
    fontSize: 24,
  }
});