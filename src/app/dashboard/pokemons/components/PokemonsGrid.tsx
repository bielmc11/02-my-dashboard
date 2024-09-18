import { SimplePokemons } from "@/app/pokemons";
import React from "react";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemons[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-4 justify-end">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard id={pokemon.id} name={pokemon.name} key={pokemon.id} />
        );
      })}
    </div>
  );
};
