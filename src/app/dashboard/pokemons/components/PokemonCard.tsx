import Image from "next/image";
import { specificPokemon } from "../../../pokemons";
import Link from "next/link";
import { IoHeartOutline } from "react-icons/io5";

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
    <div className="mx-auto right-0 mt-2 w-60 h-full">
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
              href={`/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main" /* Hay que cambiar esto */
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your last donations</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
