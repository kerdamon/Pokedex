import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PokemonList } from "../components/PokemonList";
import PokemonView from "../components/PokemonView";

const ListStack = createNativeStackNavigator();

export default function ListStackScreen({navigation}: any) {
  return (
    <ListStack.Navigator>
      <ListStack.Group screenOptions={{headerShown: false}}>
        <ListStack.Screen name="List" component={PokemonList}/>
      </ListStack.Group>
      <ListStack.Group screenOptions={{presentation: 'modal'}}>
        <ListStack.Screen name="Pokemon" component={PokemonView}/>
      </ListStack.Group>
    </ListStack.Navigator>
  );
}
