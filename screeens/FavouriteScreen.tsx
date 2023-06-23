import { Button, StyleSheet, Text, View } from 'react-native';
import PokemonView from '../components/PokemonView';

export default function FavouriteScreen({navigation}: any) {
  return (
    <>
      {/* <PokemonView/> */}
      <View>
        <Button onPress={() => {}} title='Unfavourite'></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
