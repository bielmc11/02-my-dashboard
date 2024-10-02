"use client";
import { useAppSelector } from "@/hooks/useStore";
import React from "react";
import { PokemonsGrid } from "./PokemonsGrid";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemonsFav);
  const FavPokemonsList = Object.values(pokemons);

  return (
    //TODO:
    //RECUERDA ARREGLAR EL LOCAL STORAGE PARA QUE HAGA MATCH ENTRE EL CLIENTE Y EL SERVIDOR

    <PokemonsGrid pokemons={FavPokemonsList} />
  );
};
