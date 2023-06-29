import { useDispatch } from 'react-redux';
import { loadData } from '../async_storage';

import { setMarkers } from '../redux/markerSlice';
import { useEffect } from 'react';

const loadMarkers = async () => {
  return await loadData('foundPokemonsMarkers');
}

export const useLoadMarkers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadMarkers().then(d => {
      dispatch(setMarkers(d))
    });
  }, []);
}