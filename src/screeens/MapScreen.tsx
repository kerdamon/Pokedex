import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import Map from '../components/Map';
import { FoundPokemonModal } from './FoundPokemonModal';

const MapStack = createNativeStackNavigator();

export default function MapScreen() {
  return (
    <MapStack.Navigator>
      <MapStack.Group screenOptions={{headerShown: false}}>
        <MapStack.Screen name="Map" component={Map}/>
      </MapStack.Group>
      <MapStack.Group screenOptions={{presentation: 'modal'}}>
        <MapStack.Screen name="FoundPokemonModal" component={FoundPokemonModal} options={{title: 'New pokemon info'}}/>
      </MapStack.Group>
    </MapStack.Navigator>
  );
}