import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import favoritePokemonReducer from "./pokemons/slice";
import { myFirstMiddleware } from "./middleware/localStorageFavs";

/* const myFirstMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("my middleware", action);
  next(action);
}; */

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemonsFav: favoritePokemonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myFirstMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
