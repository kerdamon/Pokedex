import { createSlice } from '@reduxjs/toolkit'
import type { FoundPokemonMarker } from '../types/foundPokemonMarker'

const initialState: FoundPokemonMarker[] = []

export const markerSlice = createSlice({
  name: 'foundPokemonsMarkers',
  initialState,
  reducers: {
    addMarker: (state, action) => {
      state.push(action.payload);
    },
    setMarkers: (state, action) => {
      state.length = 0; //state object cannot be overwritten, because it causes bugs, so we need to operate on this variable and empty it
      if (action.payload === null) return;
      for (const elem of action.payload){
        state.push(elem);
      }
    }
  }
})

export const { addMarker, setMarkers } = markerSlice.actions

export default markerSlice.reducer