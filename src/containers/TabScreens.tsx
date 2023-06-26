import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import ListStackScreen from '../screeens/ListStackScreen';
import FavouriteScreen from "../screeens/FavouriteScreen";
import MapScreen from '../screeens/MapScreen';

export const TabScreens = () => {
  const favouritePokemonName = useSelector(state => state.favouritePokemon.name);

  const Tab = createBottomTabNavigator();

  return (      
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="ListStackScreen" component={ListStackScreen} options={{title: 'List of Pokemons'}}/>
      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} navigationKey={favouritePokemonName} options={{title: 'Favourite Pokemon'}}/>
      <Tab.Screen name="MapScreen" component={MapScreen} options={{title: 'Spotted Pokemons'}}/>
    </Tab.Navigator>
  )
}