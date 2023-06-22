import { View, StyleSheet } from "react-native";

export const PokemonView = () =>{
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1
  }
});

export default PokemonView;