"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { decrement, increment, initCounterSate } from "@/store/counter/slice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

const getApiCounter = async () => {
  const response = await fetch("/api/counter").then((res) => res.json());
  return response;
};

export function CartCounter({ value = 0 }: Props) {
  const myValue = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();



  useEffect(() => {
    getApiCounter()
      .then((res) => {dispatch(initCounterSate(res.count))})
  }, [dispatch]);
;
  const aumentar = () => {
    dispatch(increment());
  };

  const restar = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <span className="text-9xl">{myValue}</span>
      <div>
        <button
          onClick={() => {
            restar();
          }}
          className="rounded bg-blue-400 hover:bg-blue-900 hover:text-white p-2 transition-all w-[90px]"
        >
          -1
        </button>
        <button
          onClick={() => {
            aumentar();
          }}
          className="rounded bg-blue-400 hover:bg-blue-900 hover:text-white p-2 transition-all w-[90px] ml-2"
        >
          +1 
        </button>
      </div>
    </div>
  );
}
