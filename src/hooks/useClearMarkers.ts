import { useDispatch, useSelector } from "react-redux";

import { storeData } from "../async_storage";
import { setMarkers } from "../redux/markerSlice";
import type { FoundPokemonMarker } from "../types/foundPokemonMarker";

const storeMarkers = async (data:FoundPokemonMarker[]) => {
  storeData('foundPokemonsMarkers', data);
}

export const useClearMarkers = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch(setMarkers([]));
    storeMarkers([]);
  }
}