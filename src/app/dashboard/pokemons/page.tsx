import { PokemonCard } from "@/app/components";
import { PokemonsResponse, SimplePokemons } from "@/app/pokemons";
import { PokemonsGrid } from "./components/PokemonsGrid";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemons[]> => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data: PokemonsResponse = await response.json();

    const mapedData = data.results.map((pokemon) => {
      return {
        id: pokemon.url.split("/").at(-2) as string,
        name: pokemon.name,
      };
    });
    return mapedData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function PokemonPage() {
  const pokemons = await getPokemons();

  return (
    <div className="relative flex flex-col items-center">
      <h2 className="text-4xl mt-4 font-bold mb-10">
        Lista de Pokemons <span className="text-green-700">Estatica</span>
      </h2>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
