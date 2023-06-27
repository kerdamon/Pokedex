import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { LongPressEvent, Marker, MarkerPressEvent } from 'react-native-maps';

export default function Map({navigation}: any) {
  const [markers, setMarkers] = useState<any>([]);

  const handleMapPress = (e:LongPressEvent) => {
    console.log(JSON.stringify(e.nativeEvent.coordinate.latitude) + JSON.stringify(e.nativeEvent.coordinate.latitude));
    setMarkers([
      ...markers,
      {
        key: JSON.stringify(e.nativeEvent.coordinate.latitude) + JSON.stringify(e.nativeEvent.coordinate.latitude),
        pokemonData: null,
        coordinate: e.nativeEvent.coordinate,
      }
    ]);
  }

  const handleMarkerPress = (e:MarkerPressEvent) => {
    console.log(markers.find(p => p.key === e.nativeEvent.id));
  }  

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onLongPress={e => handleMapPress(e)}>
        {markers.map(m => (
          <Marker key={m.key} identifier={m.key} coordinate={m.coordinate} onPress={e => handleMarkerPress(e)}/>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  }
});
