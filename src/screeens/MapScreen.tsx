import { StyleSheet, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Map from '../components/Map';
import { setMarkers } from '../redux/markerSlice';
import { useStoreMarker } from '../hooks/useStoreMarkers';
import { useClearMarkers } from '../hooks/useClearMarkers';

export default function MapScreen({navigation}:any) {
  const clearMarkers = useClearMarkers();
  const handleOnPress = () => {
    clearMarkers();
  }
  return (
    <View style={styles.container}>
      <Map navigation={navigation}/>
      <Button title='Clear markers' onPress={handleOnPress}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})