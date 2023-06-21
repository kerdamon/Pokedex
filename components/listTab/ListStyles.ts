import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  listElem: {
    borderWidth: 0.3,
    // borderColor: 'blue',
    
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
    margin: 2,
  },
  text: {
    // borderWidth: 1,
    // borderColor: 'green',
  },
  bigText: {
    fontSize: 24,
  }
});