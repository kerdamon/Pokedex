import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListStackScreen from '../screeens/ListStackScreen';
import FavouriteScreen from "../screeens/FavouriteScreen";
import MapScreen from '../screeens/MapScreen';

export const TabScreens = () => {
  const favouritePokemonName = useSelector(state => state.favouritePokemon.name);

  const Tab = createBottomTabNavigator();

  return (      
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen 
        name="ListStackScreen" 
        component={ListStackScreen} 
        options={{
          title: 'List of Pokemons', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          )}}
      />
      <Tab.Screen 
        name="FavouriteScreen" 
        component={FavouriteScreen} 
        navigationKey={favouritePokemonName}
        options={{
          title: 'Favourite Pokemon', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          )}}
      />
      <Tab.Screen 
        name="MapScreen" 
        component={MapTab} 
        options={{
          title: 'Spotted Pokemons', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          )}}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

import Map from '../components/Map';
import { FoundPokemonModal } from '../screeens/FoundPokemonModal';

const MapStack = createNativeStackNavigator();

const MapTab = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Group screenOptions={{headerShown: false}}>
        <MapStack.Screen name="Map" component={MapScreen}/>
      </MapStack.Group>
      <MapStack.Group screenOptions={{presentation: 'modal'}}>
        <MapStack.Screen name="FoundPokemonModal" component={FoundPokemonModal} options={{title: 'New pokemon info'}}/>
      </MapStack.Group>
    </MapStack.Navigator>
  )
}