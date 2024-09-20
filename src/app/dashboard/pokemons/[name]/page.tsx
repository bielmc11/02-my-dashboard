//QUITAR EL USECLIENT Y CAMBIAR LA PARTE DE CLIENTE A UN COMPONENTE 
import { Pokemon } from "@/pokemons/interfaces/pokemons"
import { Metadata } from "next"

interface PropsParams {
  name: string
}

interface Props {
  params: PropsParams
  searchParams: any
}

export  async function generateMetadata  (props: Props) : Promise<Metadata> {
  
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.params.name}`)

  //TODO MANEJO DE ERRORES 
  //! AUNQUE IGUAL NO HAY QUE MANEJARLO SI LO ENVIA DIRECTAMENTE A LA PAGINA DE ERROR 
  return {
    title: props.params.name,
    description: `Pagina de Pokemon ${props.params.name}`
  }
}


const getPokemon  = async (name : string) : Promise<Pokemon> => {
  
    //FINGO EL COMPORTAMIENTO DE UN RETRASO EN LA PROMESA
    await new Promise((resolve) => setTimeout(resolve, 5000))

    const myPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await myPokemon.json()

    return data
}

// TODO PUEDO HACER LA LLAMADA AQUI EN EL SERVIDOR PERO NO SE HACER EL LOANDING
export default async function PokemonViewPage(props: Props) {
  const myPokemon = await getPokemon(props.params.name)
  return (
    <div className="flex items-center flex-col">
      <h3 className="text-3xl">Hello PokemonViewPage</h3>
      <p className="text-xl mt-3 uppercase">{props.params.name}</p>
      <p> {myPokemon.id} </p>
    </div>
  );
}