import { configureStore } from '@reduxjs/toolkit'

import favouritePokemonReducer from './favouritePokemonSlice';
import markerReducer from './markerSlice';

export default configureStore({
  reducer: {
    favouritePokemon: favouritePokemonReducer,
    marker: markerReducer,
  },
})
