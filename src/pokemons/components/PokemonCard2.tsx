"use client";
import Image from "next/image";
import { specificPokemon } from "..";
import { Link } from 'next-view-transitions'
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import misEstilos from '../../app/dashboard/pokemons/[name]/misEstilos.module.css'

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

export const PokemonCard2 = ({ id, name }: Props) => {
  const [pokemon2, setPokemon2] = useState<specificPokemon | undefined>();
  const [loadin, setLoadin] = useState(false);
  const [error, setError] = useState(false);



  useEffect(() => {
    const dataFetch = async () => {
      setLoadin(true);
      try {
        const pokemon = await getPokemon(name);
        setPokemon2(pokemon);
        setLoadin(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoadin(false);
      }
    };
    dataFetch();
  }, []);


  

  //! TODO PONER LA IMAGEN Y INTENTAR EL VIEW TRANSITION
  return (
    <div className="itemPokemon mx-auto right-0 mt-2 w-60 h-full">
      {loadin && <div className="text-center">Cargando...</div>}
      {!loadin && !error && (
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
            <Image
            className="demo"
              src={pokemon2?.sprites?.other?.dream_world?.front_default ?? ""}
              alt={pokemon2?.name ?? "Imagen del pokemon"}
              width={100}
              height={100}
              priority={false}
            />
            <p className="pt-2 text-lg font-semibold text-gray-50 uppercase">
              {pokemon2?.name ?? "Imagen del pokemon"}
            </p>
            <div className="mt-5">
              <Link
                href={`/dashboard/pokemons/${name}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                <p className="demo2">

                Mas informacion
                </p>
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
                <p className="text-xs text-gray-500">
                  View your last donations
                </p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
