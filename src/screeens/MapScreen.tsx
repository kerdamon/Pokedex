import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { LongPressEvent, Marker } from 'react-native-maps';

export default function MapScreen({navigation}: any) {
  const [markers, setMarkers] = useState<any>([]);

  const handleMapPress = (e:LongPressEvent) => {
    console.log(JSON.stringify(e.nativeEvent.coordinate.latitude) + JSON.stringify(e.nativeEvent.coordinate.latitude));
    setMarkers([
      ...markers,
      {
        coordinate: e.nativeEvent.coordinate,
        key: JSON.stringify(e.nativeEvent.coordinate.latitude) + JSON.stringify(e.nativeEvent.coordinate.latitude),
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onLongPress={e => handleMapPress(e)}>
        {markers.map(m => (
          <Marker key={m.key} coordinate={m.coordinate}/>
        ))}
      </MapView>
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
