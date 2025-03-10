"use client"
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div
      className="bg-[url('/background/roja.png')] md:bg-[url('/background/fondo-landing1.jpg')] 
                    bg-left-top bg-fixed text-white text-5xl 
                    md:bg-cover bg-no-repeat h-screen flex flex-col 
                    justify-start md:justify-center items-center overflow-y-hidden"
      style={{ WebkitTextStroke: "3px rgb(240,240,240)" }}
    >
      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="bg-[url('/logos/blanco.png')] min-[1400px]:bg-[url('/logos/negro.png')] 
                   w-8/10 h-3/10 bg-contain bg-center md:bg-right bg-no-repeat"
      />
    </div>
  );
}