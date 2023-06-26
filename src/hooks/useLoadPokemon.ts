import { useState, useEffect } from "react";

import { getData } from "../async_storage";

export default function useLoadPokemon () {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    getData('favourites').then(data => {
      setPokemonData(data);
    });
  }, []);

  return pokemonData;
}