import Image from "next/image";

import { FavoriteButton } from "..";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
}

export const PokemonCard = ({ id, name }: Props) => {
  return (
    <div className="itemPokemon right-0 w-60 min-h-[300px]">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center min-h-[250px]">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 uppercase">
            {name}
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
