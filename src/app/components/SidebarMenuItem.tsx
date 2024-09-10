'use client'
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  path: string;
  icon: JSX.Element;
  tittle: string;
  subTittle?: string;
}


export const SidebarMenuItem = ({ path, icon, tittle, subTittle }: Props) => {
  const ruta = usePathname()

  const imInPath = () => {
    return ((ruta === path) ? 'bg-blue-800' : 'jeje')
  }
  console.log(imInPath())
  return (
    <a
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150 ${imInPath()}`}
    >
      <div >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">
          {tittle}
        </span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTittle}
        </span>
      </div>
    </a>
  );
};
