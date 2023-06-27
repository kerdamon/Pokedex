import { useDispatch, useSelector } from "react-redux";

import { storeData } from "../async_storage";
import { setMarkers } from "../redux/markerSlice";
import type { FoundPokemonMarker } from "../types/foundPokemonMarker";

const storeMarkers = async (data:FoundPokemonMarker[]) => {
  storeData('foundPokemonsMarkers', data);
}

export const useStoreMarker = () => {
  const markers = useSelector(state => state.marker);
  const dispatch = useDispatch();
  return (marker:FoundPokemonMarker) => {
    let newMarkers:FoundPokemonMarker[] = [];
    markers.forEach((element: FoundPokemonMarker) => {
      newMarkers.push(element);
    });
    newMarkers.push(marker);
    dispatch(setMarkers(newMarkers));
    storeMarkers(newMarkers);
  }
}