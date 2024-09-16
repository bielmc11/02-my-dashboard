"use client";

import { useCallback, useEffect, useState } from "react";

export default function MainPage() {
  const [myScroll, setMyScroll] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const scrollyOffset = window.scrollY;
    console.log("scrollTop", scrollTop);
    console.log("scrollyOffset", scrollyOffset);
    if (scrollTop > 10) {
      setMyScroll(true);
    } else {
      setMyScroll(false);
    }
    //setMyScroll(window.scrollY > 100);
    console.log("scrollTop", scrollTop);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("El valor de myScroll ha cambiado:", myScroll);
  }, [myScroll]); // Monitorea cambios en myScroll

  return (
    <div className="flex flex-col">
      <h1>Hello Page</h1>
      {myScroll ? (
        <p className="text-6xl">Scrolled</p>
      ) : (
        <p className="text-6xl pt-32">Not Scrolled</p>
      )}

      <div className="flex flex-col gap-4 mt-[1000px]">
        <div className="bg-red-400 w-40 h-40"></div>
        <div className="bg-red-400 w-40 h-40"></div>
        <div className="bg-red-400 w-40 h-40"></div>
        <div className="bg-red-400 w-40 h-40"></div>
        <div className="bg-red-400 w-40 h-40"></div>
        <div className="bg-red-400 w-40 h-40"></div>
      </div>
    </div>
  );
}
