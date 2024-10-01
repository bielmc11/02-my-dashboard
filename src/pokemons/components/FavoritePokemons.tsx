"use client";
import { useAppSelector } from "@/hooks/useStore";
import React from "react";
import { PokemonsGrid } from "./PokemonsGrid";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemonsFav);
  const FavPokemonsList = Object.values(pokemons);

  return (
    <PokemonsGrid pokemons={FavPokemonsList}/>
  )
};
