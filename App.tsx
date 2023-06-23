import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import ListStackScreen from "./src/screeens/ListStackScreen";
import FavouriteScreen from "./src/screeens/FavouriteScreen";
import MapScreen from './src/screeens/MapScreen';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {

  const Tab = createBottomTabNavigator();
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="ListStackScreen" component={ListStackScreen} options={{title: 'List of Pokemons'}}/>
            <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} options={{title: 'Favourite Pokemon'}}/>
            <Tab.Screen name="MapScreen" component={MapScreen} options={{title: 'Spotted Pokemons'}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}