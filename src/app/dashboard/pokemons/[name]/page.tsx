// ESTE COMPONENTE ESTA EN SERVIDOR, EL LOANDING SE VA A loanding.tsx
// Podria hacer el componente 'use client' con el hook useGetSpecificPokemon.tsx
// Mirar la diferencia entre crear las paginas dinamicas: las 151 a la vez al renderizar la pagina o segun se van demandando.
// Tambien mirar como denegar accesos y reenviar a not founds segun el metodo escogido
import { PokemonsResponse } from "@/pokemons";
import { Pokemon } from "@/pokemons/interfaces/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PropsParams {
  name: string;
}
interface Props {
  params: PropsParams;
  searchParams: any;
}

export async function generateStaticParams() {
  const response : PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(res => res.json())


  return response.results.map((pokemon) => {
    return {
      name: pokemon.name,
    };
  });
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  try {
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${props.params.name}`
    );
    //TODO MANEJO DE ERRORES
    //! AUNQUE IGUAL NO HAY QUE MANEJARLO SI LO ENVIA DIRECTAMENTE A LA PAGINA DE ERROR
    return {
      title: props.params.name,
      description: `Pagina de Pokemon ${props.params.name}`,
    };
  } catch {
    return {
      title: "Error",
      description: "Error en la petición",
    };
  }
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  //FINGO EL COMPORTAMIENTO DE UN RETRASO EN LA PROMESA
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const myPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: {
        revalidate: 60 * 60 * 30 * 3, //revalidate cada 3 meses creo
      },
    });
    const data = await myPokemon.json();
    return data;
  } catch {
    notFound();
  }
};

// TODO PUEDO HACER LA LLAMADA AQUI EN EL SERVIDOR PERO NO SE HACER EL LOANDING
export default async function PokemonViewPage(props: Props) {
  console.log("el nombre es:", props);

  const pokemon = await getPokemon(props.params.name);
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              style={{ viewTransitionName: `image-${pokemon.id}` }}
            />

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
    </div>
  );
}
