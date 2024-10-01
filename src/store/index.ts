import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/slice'
import favoritePokemonReducer from './pokemons/slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemonsFav: favoritePokemonReducer

    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch