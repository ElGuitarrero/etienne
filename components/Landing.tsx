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
      { nombre: "BIO", link: "/bio" },
      { nombre: "MUSIC", link: "/music" },
      // { nombre: "PHOTOS", link: "/photos" },
      { nombre: "CONTACT", link: "/contact" },
      // { nombre: "SEND", link: "https://tstack.app/danieletienne" },
      { nombre: "PLAYLISTS", link: "/playlists" },
    ],
    []
  );

  return (
    <div
      className="bg-[url('/background/roja.png')] md:bg-[url('/background/fondorojo.png')] bg-center 
                    md:bg-center md:bg-fixed
                    bg-cover bg-no-repeat h-screen flex flex-col 
                    justify-start md:justify-center items-center overflow-y-hidden  max-md:gap-50"
    >

      {/* Logo */}
      <div className="w-4/5 max-md:h-3/10 flex">
        <div className="w-1/2 h-full hidden md:inline"></div>
        <motion.div
          {...animationProps}
          className="
                    md:w-1/2 w-full h-full flex justify-center items-center"
        ><img src="/logos/blanco.png" alt="" className="w-5/10"/></motion.div>
      </div>

      {/* <div className=" md:hidden h-10"></div> */}

      {/* Lista de nombres */}
      <motion.div className="w-8/10 flex justify-end" {...animationProps}>
        <div className="w-1/2 hidden md:inline"></div>
        <ul className="w-full md:w-1/2 text-white flex flex-row items-center justify-center md:items-center pt-30">
          {links.map((item, index) => (
        <li key={item.nombre} className="flex items-center">
          <a
            href={item.link}
            className="text-sm md:text-2xl font-[helvetica] font-bold md:text-lg hover:opacity-40 transition-all duration-400"
          >
            {item.nombre}
          </a>
          {index < links.length - 1 && (
            <span className="mx-2 text-lg font-thin">•</span>
          )}
        </li>
          ))}
        </ul>
      </motion.div>
      
    </div>
  );
};

export default Landing;
