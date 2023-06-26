import { Button, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function MapScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}></MapView>
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
  map: {
    width: '100%',
    height: '100%',
  }
});
