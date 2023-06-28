import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { LongPressEvent, Marker, MarkerPressEvent } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';

import { useLoadMarkers } from '../hooks/useLoadMarkers';

export default function Map({navigation}: any) {
  const markers = useSelector(state => state.marker);
  useLoadMarkers();

  const handleMapPress = (e:LongPressEvent) => {
    navigation.navigate('FoundPokemonModal', e.nativeEvent.coordinate);
  };

  const handleMarkerPress = (e:MarkerPressEvent) => {
    console.log(markers.find(p => p.id === e.nativeEvent.id));
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onLongPress={e => handleMapPress(e)}> 
        {markers.map(m => (
          <Marker key={m.id} identifier={m.id} coordinate={m.coordinate} onPress={e => handleMarkerPress(e)}/>
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
