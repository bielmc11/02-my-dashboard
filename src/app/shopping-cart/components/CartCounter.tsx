'use client'
import { useState } from "react";

interface Props {
  value?: number
}

export function CartCounter({ value = 0 }: Props) {
  const [count, setCount] = useState(value);



  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <span className="text-9xl">{count}</span>
      <div>
        <button
          onClick={() => {
            increment();
          }}
          className="rounded bg-blue-400 hover:bg-blue-900 hover:text-white p-2 transition-all w-[90px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => {
            decrement();
          }}
          className="rounded bg-blue-400 hover:bg-blue-900 hover:text-white p-2 transition-all w-[90px]"
        >
          -1
        </button>
      </div>
    </div>
  );
}
