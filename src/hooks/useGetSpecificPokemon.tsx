import { Pokemon } from "@/pokemons/interfaces/pokemons"
import { useEffect, useState } from "react"

export const useGetSpecificPokemon = (name : string) => {
    //QUIERO VER SI FUNCIONA EL USEEFFECT DENTRO DEL HOOK O TENGO QUE HACERLO DENTRO DEL COMPONENTE
    const [pokemon, setPokemon] = useState<Pokemon>()
    const [loanding, setLoanding] = useState(false)
    const [error, setError] = useState<any>(false)


    const getPokemon = (name : string) => {
        setLoanding(true)
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(data => {
                    setError(false)
                    setPokemon(data)
            })
            .catch(error => {
                setError(error)
                console.log(error)
            })
            .finally(() => {
                setLoanding(false)
            })
        
    }


    useEffect(() =>{
        getPokemon(name)
    },[])

    return {pokemon, loanding, error}
}