import * as Motion from "framer-motion/client";
//OBJETIVO HACER UNA SMOOTH ANIMACION DE FADE IN FADE OUT ENTRE LINKS
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Motion.div
          //Igual puedo copiar en la transicion la rapidez que tiene el useinview en el ejemplo (cubernte...)
          key={"main"}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
        >
          <div>{children}</div>
        </Motion.div>
    </div>
  );
}
