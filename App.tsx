import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import ListTab from "./components/ListTab";
import FavouriteTab from "./components/FavouriteTab";
import MapTab from './components/MapTab';

export default function App() {

  const Tab = createBottomTabNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name="FavouriteTab" component={FavouriteTab} options={{title: 'Favourite Pokemon'}}/>
          <Tab.Screen name="ListTab" component={ListTab} options={{title: 'List of Pokemons'}}/>
          <Tab.Screen name="MapTab" component={MapTab} options={{title: 'Spotted Pokemons'}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}