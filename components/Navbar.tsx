"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

interface NavbarProps {
  animate?: boolean;
}

function Navbar({ animate = false }: NavbarProps) {
  const links = useMemo(
    () => [
      { nombre: "home", link: "/" },
      { nombre: "bio", link: "/bio" },
      { nombre: "music", link: "/music" },
      { nombre: "photos", link: "/photos" },
      { nombre: "contact", link: "/contact" },
      { nombre: "send me music", link: "/send" },
    ],
    []
  );

  const animationProps = animate
    ? {
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        variants: navbarVariants,
        transition: { duration: 0.2, ease: "easeOut" },
      }
    : {};

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white shadow-md"
      {...animationProps}
    >
      <ul className="flex justify-around p-4">
        {links.map((item) => (
          <li key={item.nombre}>
            <a href={item.link} className="text-xl hover:text-gray-700">
              {item.nombre}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
