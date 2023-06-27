import { useState, useEffect } from "react";

import { loadData } from "../async_storage";

export default function useLoadPokemon () {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    loadData('favourites').then(data => {
      setPokemonData(data);
    });
  }, []);

  return pokemonData;
}