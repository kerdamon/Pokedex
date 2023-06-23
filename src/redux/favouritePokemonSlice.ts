import { createSlice } from '@reduxjs/toolkit'

export const favouritePokemonSlice = createSlice({
  name: 'favouritePokemon',
  initialState: {
    name: '',
  },
  reducers: {
    setCurrentFavouritePokemonName: (state, action) => {
      state.name = action.payload
    }
  }
})

export const { setCurrentFavouritePokemonName } = favouritePokemonSlice.actions

export default favouritePokemonSlice.reducer