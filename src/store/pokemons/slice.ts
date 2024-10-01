import { SimplePokemons } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  [key: string]: SimplePokemons;
}

//La mejor estrategia sera cargar en un useEffect un reducer que actualice el estado de localStorage, de momento lo dejo asi con un error de hidratacioin entre el servidor y el cliente por diiferencias hasta ver como lo hace en el video

const initialState = (): PokemonState => {
  if (typeof window !== "undefined") {
    console.log("windoooooooooooooooooooooooooooooooooooooooooooooow");
    return localStorage.getItem("pokemons")
      ? JSON.parse(localStorage.getItem("pokemons")!)
      : {};
  } else {
    console.log("noooooooooooooooooooooooooooooooooooooooooooooooooo window");
    return {};
  }
};

/* const initialState: PokemonState = {
  "1": { id: "1", name: "bulbasaur" },
}; */

const slice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<SimplePokemons>) => {
      const { id } = action.payload;
      state[id] = action.payload;
      localStorage.setItem("pokemons", JSON.stringify(state));
    },
    deletePokemon: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
      localStorage.setItem("pokemons", JSON.stringify(state));
    },
  },
});

export const { addPokemon, deletePokemon } = slice.actions;

export default slice.reducer;
