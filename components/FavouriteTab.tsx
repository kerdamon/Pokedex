import { Button, StyleSheet, Text, View } from 'react-native';

export default function FavouriteTab({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>Favourite pokemon tab</Text>
    </View>
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
