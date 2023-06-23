import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PokemonList } from "../components/PokemonList";
import { PokemonListModal } from "./PokemonListModal"

const ListStack = createNativeStackNavigator();

export default function ListStackScreen({navigation}: any) {
  return (
    <ListStack.Navigator>
      <ListStack.Group screenOptions={{headerShown: false}}>
        <ListStack.Screen name="List" component={PokemonList}/>
      </ListStack.Group>
      <ListStack.Group screenOptions={{presentation: 'modal'}}>
        <ListStack.Screen name="Pokemon" component={PokemonListModal}/>
      </ListStack.Group>
    </ListStack.Navigator>
  );
}
