"use client";
import { Link, useTransitionRouter } from "next-view-transitions";

function slideInOut() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translate(0, 0)",
      },
      {
        opacity: 0,
        transform: "translate(-100px, 0)",
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
        transform: "translate(100px, 0)",
      },
      {
        opacity: 1,
        transform: "translate(0, 0)",
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

export default function MainPage() {
  const router = useTransitionRouter();

  return (
    <div className="flex flex-col">
      <h1>Hello Page</h1>
      <p className="text-3xl demo3">Scrolled</p>
      <Link href="/dashboard/count">VIAJE A COUNT </Link>

      <a
        onClick={(e) => {
          e.preventDefault();
          router.push("/dashboard/count", {
            // Optional custom transition
            onTransitionReady: slideInOut,
          });
        }}
        href="/dashboard/count"
        className="text-4xl pt-32 demo4"
      >
        Not Scrolled
      </a>

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
