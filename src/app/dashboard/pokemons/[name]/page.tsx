"use client";
//Esta es la pagina de prueba apra el view transition
import { Pokemon } from "@/pokemons/interfaces/pokemons";
import Image from "next/image";
import { notFound } from "next/navigation";
import misEstilos from "./misEstilos.module.css";
import { useEffect, useState } from "react";
import { data } from "framer-motion/client";

interface PropsParams {
  name: string;
}

interface Props {
  params: PropsParams;
  searchParams: any;
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  //FINGO EL COMPORTAMIENTO DE UN RETRASO EN LA PROMESA
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const myPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await myPokemon.json();
    return data;
  } catch {
    notFound();
  }
};

// TODO PUEDO HACER LA LLAMADA AQUI EN EL SERVIDOR PERO NO SE HACER EL LOANDING
export default function PokemonViewPage(props: Props) {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const data = await getPokemon(props.params.name);
        setPokemon(data);
      } catch {
        notFound();
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      {pokemon && (
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
          <div className="mt-2 mb-8">
            <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
              #{pokemon.id} {pokemon.name} jejejejeje
            </h1>
            <p>{`image-${pokemon.id}`}</p>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="demo"
                src={pokemon.sprites.other?.dream_world.front_default ?? ""}
                width={150}
                height={150}
                alt={`Imagen del pokemon ${pokemon.name}`}
              />
              <p className="demo2">Mas informacion</p>

              <div className="flex flex-wrap">
                {pokemon.moves.map((move) => (
                  <p key={move.move.name} className="mr-2 capitalize">
                    {move.move.name}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-2 w-full">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Types</p>
              <div className="text-base font-medium text-navy-700 flex">
                {pokemon.types.map((type) => (
                  <p key={type.slot} className="mr-2 capitalize">
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Peso</p>
              <span className="text-base font-medium text-navy-700 flex">
                {pokemon.weight}
              </span>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Regular Sprites</p>
              <div className="flex justify-center">
                <Image
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />

                <Image
                  src={pokemon.sprites.back_default}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Shiny Sprites</p>
              <div className="flex justify-center">
                <Image
                  src={pokemon.sprites.front_shiny}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />

                <Image
                  src={pokemon.sprites.back_shiny}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
