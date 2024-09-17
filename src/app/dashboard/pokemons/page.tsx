import { PokemonsResponse, SimplePokemons } from "@/app/pokemons";

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
    <div className="relative">
      <h1>Pokemons</h1>
      <div>{JSON.stringify(pokemons)}</div>
    </div>
  );
}
