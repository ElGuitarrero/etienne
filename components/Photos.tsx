"use client";
import React from "react";
import {
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaYoutube,
    FaSpotify,
    FaTiktok,
} from "react-icons/fa";

const socialLinks = [
    {
        name: "Instagram",
        icon: <FaInstagram />,
        link: "https://instagram.com/danieletiennemusic/",
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        link: "https://twitter.com/danieletienne_",
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        link: "https://facebook.com/danieletiennemusic",
    },
    {
        name: "YouTube",
        icon: <FaYoutube />,
        link: "https://youtube.com/danieletienne",
    },
    {
        name: "Spotify",
        icon: <FaSpotify />,
        link: "https://open.spotify.com/artist/0HS4eQaqJ9tjYwXUPF7SsS",
    },
    {
        name: "Tiktok",
        icon: <FaTiktok />,
        link: "https://tiktok.com/@danieletiennemusic",
    },
];


const Photos: React.FC = () => {
    return (
        <div>

            {/* Fotos y redes sociales */}
            <div
                className="bg-[url('/background/social.png')] bg-fixed bg-cover md:bg-center bg-no-repeat h-screen flex flex-col 
                 justify-center items-center text-white"
            >
                {/* Título */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-6xl font-bold">Follow Me</h1>
                    <p className="text-xl md:text-2xl mt-2">
                        Stay connected on social media
                    </p>
                </div>

                {/* Redes Sociales */}
                <div className="flex gap-8 md:gap-12 text-4xl md:text-6xl">
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
                </div>
                
                {/* Link to send music */}
                <div className="mt-10">
                    <a
                        href="https://tstack.app/danieletienne"
                        className="pointer px-6 py-3 bg-white text-black text-lg font-semibold rounded-lg opacity-80 hover:opacity-100 transition-all duration-300 inline-block text-center"
                        target="_blank"
                    >
                        Send Me Music
                    </a>
                </div>
                
            </div>

            {/* Contact and Subscription to newsletter */}

        </div>
    );
};

export default Photos;
