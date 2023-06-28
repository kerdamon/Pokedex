import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {AutocompleteDropdownContextProvider} from 'react-native-autocomplete-dropdown'

import store from './src/redux/store';
import { Provider } from 'react-redux';
import { TabScreens } from './src/containers/TabScreens';

export default function App() {

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AutocompleteDropdownContextProvider>
            <TabScreens/>
          </AutocompleteDropdownContextProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}