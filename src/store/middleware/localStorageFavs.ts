import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const myFirstMiddleware = (store: MiddlewareAPI) => (next: any) => (action: any ) => {
    console.log("my middleware", action);
    next(action);
    if(action.type === 'pokemonSlice/addPokemon'){
        localStorage.setItem('pokemonsFav', JSON.stringify(store.getState().pokemonsFav))
    }
    if(action.type === 'pokemonSlice/deletePokemon'){
        localStorage.setItem('pokemonsFav', JSON.stringify(store.getState().pokemonsFav))
    }
  };