import { LatLng } from "react-native-maps";

export interface FoundPokemonMarker {
  id: string,
  coordinate: LatLng,
  pokemonName: string,
  notes: string,
}