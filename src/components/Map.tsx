import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { LongPressEvent, Marker, MarkerPressEvent } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';

import { loadData, storeData } from '../async_storage';
import { FoundPokemonMarker } from '../types/foundPokemonMarker';
import { addMarker } from '../redux/markerSlice';

const loadMarkers = async () => {
  return await loadData('foundPokemonsMarkers');
}

const storeMarkers = async (data:FoundPokemonMarker) => {
  storeData('foundPokemonsMarkers', data);
}

export default function Map({navigation}: any) {
  const markers = useSelector(state => state.marker);
  const dispatch = useDispatch();

  const handleMapPress = (e:LongPressEvent) => {
    navigation.navigate('FoundPokemonModal', e.nativeEvent.coordinate);
    // setMarkers([
    //   ...markers,
    //   {
    //     key: JSON.stringify(e.nativeEvent.coordinate.latitude) + JSON.stringify(e.nativeEvent.coordinate.latitude),
    //     pokemonData: null,
    //     coordinate: e.nativeEvent.coordinate,
    //   }
    // ]);

  }

  // useEffect(() => {
  //   loadMarkers().then(d => dispatch(addMarker(d)));
  // }, []);

  // const handleMarkerPress = (e:MarkerPressEvent) => {
  //   console.log(markers.find(p => p.key === e.nativeEvent.id));
  // }  

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onLongPress={e => handleMapPress(e)}>
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
