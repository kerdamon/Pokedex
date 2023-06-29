import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegisterFoundPokemonScreen } from '../screeens/RegisterFoundPokemonScreen';
import FoundPokemonModal from '../screeens/FoundPokemonModal';
import FavouriteScreen from "../screeens/FavouriteScreen";
import ListScreen from '../screeens/ListScreen';
import MapScreen from '../screeens/MapScreen';
import { PokemonList } from "../components/PokemonList";
import PokemonListModal from '../screeens/PokemonListModal';

export const TabScreens = () => {
  const favouritePokemonName = useSelector(state => state.favouritePokemon.name);

  const Tab = createBottomTabNavigator();

  return (      
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name="ListStackScreen" 
        component={ListTab} 
        options={{
          title: 'List of Pokemons', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          )}}
      />
      <Tab.Screen 
        name="FavouriteScreen" 
        component={FavouriteTab} 
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

const ListStack = createNativeStackNavigator();
const ListTab = () => {
  return (
    <ListStack.Navigator screenOptions={{headerShown: false}}>
      <ListStack.Group>
        <ListStack.Screen name="List" component={ListScreen}/>
      </ListStack.Group>
      <ListStack.Group screenOptions={{presentation: 'modal'}}>
        <ListStack.Screen name="Pokemon" component={PokemonListModal}/>
      </ListStack.Group>
    </ListStack.Navigator>
  )
}

const MapStack = createNativeStackNavigator();
const MapTab = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Group screenOptions={{headerShown: false}}>
        <MapStack.Screen name="Map" component={MapScreen}/>
      </MapStack.Group>
      <MapStack.Group>
        <MapStack.Screen name="RegisterFoundPokemonScreen" component={RegisterFoundPokemonScreen} options={{title: 'New pokemon info'}}/>
        <MapStack.Screen name="FoundPokemonModal" component={FoundPokemonModal} options={{presentation: 'modal'}}/>
      </MapStack.Group>
    </MapStack.Navigator>
  )
}

const FavouriteTab = () => {
  return (
    <FavouriteScreen/>
  )
}