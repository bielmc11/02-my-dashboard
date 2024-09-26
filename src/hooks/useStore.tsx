import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

//Comprobar si funciona mi estado global a traves de estos hooks
