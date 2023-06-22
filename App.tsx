import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import ListStackScreen from "./screeens/ListStackScreen";
import FavouriteScreen from "./screeens/FavouriteScreen";
import MapScreen from './screeens/MapScreen';

export default function App() {

  const Tab = createBottomTabNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} options={{title: 'Favourite Pokemon'}}/>
          <Tab.Screen name="ListStackScreen" component={ListStackScreen} options={{title: 'List of Pokemons'}}/>
          <Tab.Screen name="MapScreen" component={MapScreen} options={{title: 'Spotted Pokemons'}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}