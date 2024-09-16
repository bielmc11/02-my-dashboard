const getPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function  PokemonPage() {
  const pokemons = await getPokemons();

  return (
    <div className="relative">
      <h1>Pokemons</h1>
      <div>{JSON.stringify(pokemons)}</div>
    </div>
  );
}
