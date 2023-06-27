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
      state = action.payload;
    }
  }
})

export const { addMarker, setMarkers } = markerSlice.actions

export default markerSlice.reducer