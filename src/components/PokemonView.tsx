import { View, StyleSheet, Text, Image } from "react-native";

export const PokemonView = ({pokemonData}:any) => {

  return (
    <View style={styles.container}>
      {
      !pokemonData 
      ? <Text>None</Text> 
      : <View style={styles.container}> 
          <Image source={{uri: pokemonData.uri}} style={styles.image}/>
          <InfoField pokemonData={pokemonData} style={styles.infoField}/>
        </View>
      }
    </View>
  );
}

const InfoField = ({style, pokemonData}:any) => {
  return (
    <View style={style}>
      <Text>Weight: {pokemonData.weight}</Text>
      <Text>Types: </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 2,
    resizeMode: 'contain',
  },
  infoField: {
    flex: 1,
    backgroundColor: 'white',
    margin: 4,
    padding: 8,
  },
});

export default PokemonView;