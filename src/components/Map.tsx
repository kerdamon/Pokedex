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
  }

  // const handleMarkerPress = (e:MarkerPressEvent) => {
  //   console.log(markers.find(p => p.key === e.nativeEvent.id));
  // }  

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onLongPress={e => handleMapPress(e)} onPress={() => console.log(markers)}>
        {markers.map(m => (
          // <Marker key={m.key} identifier={m.key} coordinate={m.coordinate} onPress={e => handleMarkerPress(e)}/>
          <Marker key={m.key} identifier={m.key} coordinate={m.coordinate}/>
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
