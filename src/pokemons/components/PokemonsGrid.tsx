import { SimplePokemons } from "@/pokemons";
import React from "react";
import { PokemonCard } from "./PokemonCard";
import { PokemonCard2 } from "./PokemonCard2";

interface Props {
  pokemons: SimplePokemons[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-4 justify-end">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard2 id={pokemon.id} name={pokemon.name} key={pokemon.id} />
        );
      })}
    </div>
  );
};
