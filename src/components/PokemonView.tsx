import { StyleProp, ViewStyle } from "react-native";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Pokemon from "../types/Pokemon";

export const PokemonView = ({pokemonData, style}:any) => {

  return (
    <View style={[styles.container, style]}>
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

const InfoField = ({style, pokemonData}:{style:StyleProp<ViewStyle>, pokemonData:Pokemon}) => {
  return (
    <ScrollView style={style}>
      <Text>Weight: {pokemonData.weight}</Text> 
      <Text>Types: {pokemonData.types?.map(t => <Text>{t} </Text>)}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 3,
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