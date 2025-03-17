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
  path?: string;
}

function Navbar({ animate = false, path }: NavbarProps) {
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
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-(--background)/30 border-b border-(--background)/10"
      {...animationProps}
    >
      <ul className="flex justify-around p-4">
        {links.map((item) => (
          <li key={item.nombre}>
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
    </motion.nav>
  );
}

export default Navbar;
