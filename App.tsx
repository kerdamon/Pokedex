import HelloWorld from "./components/HelloWorld";

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <HelloWorld></HelloWorld>
    </NavigationContainer>
  );
}