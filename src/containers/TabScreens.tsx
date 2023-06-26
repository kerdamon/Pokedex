import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListStackScreen from '../screeens/ListStackScreen';
import FavouriteScreen from "../screeens/FavouriteScreen";
import MapScreen from '../screeens/MapScreen';

export const TabScreens = () => {

  const Tab = createBottomTabNavigator();

  return (      
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="ListStackScreen" component={ListStackScreen} options={{title: 'List of Pokemons'}}/>
      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} options={{title: 'Favourite Pokemon'}}/>
      <Tab.Screen name="MapScreen" component={MapScreen} options={{title: 'Spotted Pokemons'}}/>
    </Tab.Navigator>
  )
}