
export default function MainPage() {

  return (
    <div className="flex flex-col">
      <h1>Hello Page</h1>
      <p className="text-3xl demo3">Scrolled</p>

      <a>
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
