import { StyleSheet, View, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Map from '../components/Map';

export default function MapScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <Map navigation={navigation}/>
      <Button title='Clear markers'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})