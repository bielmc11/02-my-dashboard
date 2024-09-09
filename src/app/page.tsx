import { redirect } from "next/navigation";

export default function HomePage() {

  redirect("/dashboard/count")
  
  /* Esto no se verá porque direcciono de golpe */
  return (
    <div></div>
  );
}
