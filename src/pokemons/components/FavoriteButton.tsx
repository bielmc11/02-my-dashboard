"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { addPokemon, deletePokemon } from "@/store/pokemons/slice";
import React from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

interface Props {
  id: string;
  name: string;
}
export const FavoriteButton = ({ id, name }: Props) => {
  const pokemonsFav = useAppSelector((state) => state.pokemonsFav);
  const dispatch = useAppDispatch();

  const isFavorite = pokemonsFav[id];

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deletePokemon(id));
    } else {
      dispatch(addPokemon({ id, name }));
    }
  };

  //TODO :
          //ME FALTA EL EL INITIALSTATE SE PILLE CON LOCALSTORAGE
  return (
    <div className="border-b hover:cursor-pointer" onClick={toggleFavorite} >
      <div
        /* Hay que cambiar esto */
        className="px-4 py-2 hover:bg-gray-100 flex items-center"
      >
        <div className="text-red-600">
          {isFavorite ? <IoHeart /> : <IoHeartOutline />}
        </div>
        <div className="pl-3">
          <p className="text-sm font-medium text-gray-800 leading-none py-2">
            {
              isFavorite ? <span> Eliminar de favoritos</span> : <span>Añadir a favoritos</span>
            }
          </p>
        </div>
      </div>
    </div>
  );
};
