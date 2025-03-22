"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

const animationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 1, ease: "easeOut" },
};

const Landing: React.FC = () => {
  const links = useMemo(
    () => [
      { nombre: "bio", link: "/bio" },
      { nombre: "music", link: "/music" },
      { nombre: "photos", link: "/photos" },
      { nombre: "contact", link: "/contact" },
      { nombre: "send me music", link: "/send" },
    ],
    []
  );

  return (
    <div
      className="bg-[url('/background/roja.png')] md:bg-[url('/background/fondo-landing1.jpg')] 
                    md:bg-center md:bg-fixed
                    bg-cover bg-no-repeat h-screen flex flex-col 
                    justify-start md:justify-center items-center overflow-y-hidden  max-md:gap-50"
    >

      {/* Logo */}
      <div className="w-4/5 h-3/10 flex">
        <div className="w-1/2 h-full hidden md:inline"></div>
        <motion.div
          {...animationProps}
          className="bg-[url('/logos/blanco.png')] lg:bg-[url('/logos/negro.png')] 
                    md:w-1/2 w-full h-full bg-contain bg-center bg-no-repeat"
        />
      </div>

      {/* Lista de nombres */}
      <motion.div className="w-8/10 flex justify-end" {...animationProps}>
        <div className="w-1/2 hidden md:inline"></div>
        <ul className="w-full md:w-1/2 gap-1 text-white lg:text-black flex flex-col items-center font-[sourcesans] font-medium">
          {links.map((item) => (
            <li key={item.nombre}>
              <a
                href={item.link}
                className="text-2xl md:text-3xl hover:text-[rgb(240,40,15)] transition-all duration-400"
              >
                {item.nombre}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
      
    </div>
  );
};

export default Landing;
