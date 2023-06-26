import { configureStore } from '@reduxjs/toolkit'

import favouritePokemonReducer from './favouritePokemonSlice';

export default configureStore({
  reducer: {favouritePokemon: favouritePokemonReducer},
})