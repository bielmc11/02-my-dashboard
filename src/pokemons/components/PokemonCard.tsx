import Image from "next/image";

import {  FavoriteButton, specificPokemon } from "..";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
}

const getPokemon = async (
  name: string
): Promise<specificPokemon | undefined> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error("Error en la petición");
    }
    //Deberia mapearlo
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const PokemonCard = async ({ id, name }: Props) => {
  const pokemon = await getPokemon(name);
  const pokemonName = pokemon?.name;
  const linkImagen = pokemon?.sprites?.other?.dream_world?.front_default;

  return (
    <div className="itemPokemon mx-auto right-0 mt-2 w-60 h-full">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
          <Image
            src={linkImagen ?? ""}
            alt={pokemonName ?? "Imagen del pokemon"}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 uppercase">
            {pokemonName}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas informacion
            </Link>
          </div>
        </div>
        <FavoriteButton id={id} name={name} />
      </div>
    </div>
  );
};
