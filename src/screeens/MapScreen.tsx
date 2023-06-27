import { StyleSheet, View, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Map from '../components/Map';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Map/>
      <Button title='Clear markers'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})