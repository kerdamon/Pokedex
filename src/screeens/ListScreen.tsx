import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PokemonList } from "../components/PokemonList";
import { PokemonListModal } from "./PokemonListModal"

const ListStack = createNativeStackNavigator();

export default function ListScreen({navigation}: any) {
  return (
    <PokemonList navigation={navigation}/>
  );
}
