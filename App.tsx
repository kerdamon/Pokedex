import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListTab from "./components/ListTab";
import FavouriteTab from "./components/FavouriteTab";

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="FavouriteTab" component={FavouriteTab} options={{title: 'Favourite Pokemon'}}/>
        <Tab.Screen name="ListTab" component={ListTab} options={{title: 'List of Pokemons'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}