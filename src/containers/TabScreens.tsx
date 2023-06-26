import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
        component={MapScreen} 
        options={{
          title: 'Spotted Pokemons', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          )}}
      />
    </Tab.Navigator>
  )
}