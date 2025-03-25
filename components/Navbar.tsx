"use client";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import  Image  from 'next/image';
import Link from "next/link";

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

interface NavbarProps {
  animate?: boolean;
  path?: string;
}

function Navbar({ animate = false, path }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = useMemo(
    () => [
      // { nombre: "home", link: "/" },
      { nombre: "BIO", link: "/bio" },
      { nombre: "MUSIC", link: "/music" },
      { nombre: "PLAYLISTS", link: "https://open.spotify.com/user/danieletienne?si=PpJRerFUSd60m-TR0E5DPg" },
      // { nombre: "PHOTOS", link: "/photos" },
      { nombre: "CONTACT", link: "/contact" },
      { nombre: "SEND ME MUSIC", link: "https://tstack.app/danieletienne" },
    ],
    []
  );

  const animationProps = animate
    ? {
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        variants: navbarVariants,
        transition: { duration: 0.3, ease: "easeOut" },
      }
    : {};

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-(--background)/30 border-b border-(--background)/10"
      {...animationProps}
    >
      <div className="flex justify-between items-center p-4">
        
        {/* Logo or Title */}
        <Link href="/">
          <span className="dark:hidden"><Image width={70} height={40} alt="" src={"/logos/negro.png"} className="aspect-16/9"></Image></span>
          <span className="dark:block hidden" ><Image width={70} height={40} alt="" src={"/logos/blanco.png"} className="aspect-16/9"></Image></span>
        </Link>


        {/* Hamburger Button */}
        <button
          className="md:hidden text-(--foreground)"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Links */}
        <ul className="hidden w-full md:flex justify-around">
          {links.map((item) => (
            <li key={item.nombre}>
              <a
                href={item.link}
                className={`text-md text-(--foreground) hover:text-gray-400 transition-colors duration-200 ${
                  path === item.link
                    ? "px-3 rounded-xs border-b-2 border-(--foreground)"
                    : ""
                }`}
              >
                {item.nombre}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center md:hidden bg-(--background)/90 p-4">
          {links.map((item) => (
            <li key={item.nombre} className="my-2">
              <a
                href={item.link}
                className={`text-xl text-(--foreground) hover:text-gray-400 transition-colors duration-200 ${
                  path === item.link
                    ? "px-3 rounded-xs border-b-2 border-(--foreground)"
                    : ""
                }`}
              >
                {item.nombre}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}

export default Navbar;
