import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";
import React from "react";
//Igual tendria que llamar a un componente que llamase a simpelWidget y hacer ese componente use client con el map y la llamada al state...



export default function FavoritesPage () {
  //ERROR NO PUEDO USAR POKEMON CARD QUE USA ASUYNCRONIA EN ESTA PAGE QUE ES USECLIENT.
  //QUIZAS HACER UN HOOK?

  return (
    <div className="">
      <h1>Global estate FavoritesPage</h1>
        <div className="flex flex-wrap p-2 gap-4 ">

          <FavoritePokemons />
          
      </div>
    </div>
  );
}
