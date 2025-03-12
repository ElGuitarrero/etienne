import React, { useMemo } from "react";

const links = useMemo(
  () => [
    { nombre: "bio", link: "#" },
    { nombre: "music", link: "#" },
    { nombre: "photos", link: "#" },
    { nombre: "contact", link: "#" },
    { nombre: "send me music", link: "#" },
  ],
  []
);

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.nombre}>
            <a href={link.link} className="text-white hover:text-gray-400">
              {link.nombre}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
