import Image from "next/image";
import React from "react";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={35} />,
    tittle: "Dashboard",
    subTittle: "Visualiación",
  },
  {
    path: "/dashboard/count",
    icon: <IoCalculator size={35} />,
    tittle: "Counter",
    subTittle: "Counter Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={35} />,
    tittle: "Poekmons",
    subTittle: "Generacion estatica",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0 "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="--"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Biel Martinez</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => {
          return <SidebarMenuItem key={item.path} {...item} />;
        })}
      </div>
    </div>
  );
};
