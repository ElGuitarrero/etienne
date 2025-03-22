"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaSpotify, FaTiktok } from "react-icons/fa";

const socialLinks = [
  { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/danieletiennemusic/" },
  { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/danieletienne_" },
  { name: "Facebook", icon: <FaFacebook />, link: "https://facebook.com/danieletiennemusic" },
  { name: "YouTube", icon: <FaYoutube />, link: "https://youtube.com/danieletienne" },
  { name: "Spotify", icon: <FaSpotify />, link: "https://open.spotify.com/artist/0HS4eQaqJ9tjYwXUPF7SsS" },
  { name: "Tiktok", icon: <FaTiktok />, link: "https://tiktok.com/@danieletiennemusic" },
];

const animationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const Photos: React.FC = () => {
  return (
    <div
      className="bg-[url('/background/social.png')] bg-fixed bg-cover bg-center bg-no-repeat h-screen flex flex-col 
                 justify-center items-center text-white"
    >
      {/* Título */}
      <motion.div {...animationProps} className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold">Follow Me</h1>
        <p className="text-xl md:text-2xl mt-2">Stay connected on social media</p>
      </motion.div>

      {/* Redes Sociales */}
      <motion.div
        {...animationProps}
        className="flex gap-8 md:gap-12 text-4xl md:text-6xl"
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[rgb(240,40,15)] transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Photos;