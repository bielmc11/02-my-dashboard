import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Shopping Client Side",
};

export default function CounterPage() {


  return (
    <div className="flex justify-center items-center flex-col w-full h-full">
      <span>Productos en el carritos</span>
      <CartCounter value={0}/>
      <p className="text-3xl demo3">Scrolled</p>

      <p className="text-4xl pt-32 demo4">Not Scrolled</p>



    </div>
  );
}
