import { WidgetGrid } from "@/components";

export const metadata = {
  title: "admin dashboard",
  description: "Dashboard",
};

export default function MainPage() {



  return (
    <div className="flex flex-col">
      <h1>Hello Page</h1>
      <WidgetGrid />
    </div>
  );
}
