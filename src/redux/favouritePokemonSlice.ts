import { createSlice } from '@reduxjs/toolkit'

export const favouritePokemonSlice = createSlice({
  name: 'favouritePokemon',
  initialState: {
    name: undefined,
  },
  reducers: {
    setFavouritePokemons: (state, action) => {
      state.name = action.payload
    }
  }
})

export const { setFavouritePokemons } = favouritePokemonSlice.actions

export default favouritePokemonSlice.reducer