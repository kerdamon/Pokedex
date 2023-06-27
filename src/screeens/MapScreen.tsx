import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from '../components/Map';

const MapStack = createNativeStackNavigator();

export default function MapScreen() {
  return (
    <MapStack.Navigator screenOptions={{headerShown: false}}>
      <MapStack.Group>
        <MapStack.Screen name="Map" component={Map}/>
      </MapStack.Group>
    </MapStack.Navigator>
  );
}