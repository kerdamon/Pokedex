import { useDispatch, useSelector } from "react-redux";

import { storeData } from "../async_storage";
import { addMarker } from "../redux/markerSlice";
import type { FoundPokemonMarker } from "../types/foundPokemonMarker";


const storeMarkers = async (data:FoundPokemonMarker) => {
  storeData('foundPokemonsMarkers', data);
}

export const useStoreMarker = () => {
  const markers = useSelector(state => state.marker);
  const dispatch = useDispatch();
  return (data:FoundPokemonMarker) => {
    dispatch(addMarker(data));
    console.log(markers);   // to nie jest zupdejtowane, wiec trzeba zamienic na set markers i dodawac nowego tutaj do listy
    storeMarkers(markers);
  }
}