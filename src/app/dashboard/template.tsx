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
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>{children}</div>
      </Motion.div>
    </div>
  );
}
