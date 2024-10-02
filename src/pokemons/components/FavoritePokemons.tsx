"use client";
import { useAppSelector } from "@/hooks/useStore";
import React from "react";
import { PokemonsGrid } from "./PokemonsGrid";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemonsFav);
  const FavPokemonsList = Object.values(pokemons);

  return (
    //Pokemon grid llama a pokemon card que es ssr por tanto no esta bien deberia quizas cambiar para que la pagina de pokemons haga la llamada le pase el pokmemomn a pokemon grid y este a pokemonCard y hacer lo mimso aqui,
    //Mirar en su codigo pero creo que hace esto
    
    <PokemonsGrid pokemons={FavPokemonsList}/>
  )
};
