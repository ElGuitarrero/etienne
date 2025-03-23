'use client'
import { useEffect, useState } from "react";
import Music from "./Music";
import { AnimatedElement } from "@/app/lib/animations";
import { MUSICA } from "./data/musica";
import { FaYoutube, FaApple, FaSpotify } from "react-icons/fa";

// Define interfaces instead of type for better extensibility
interface Music {
  id: number;
  nombre: string;
  //   album: string;
  appleLink: string;
  spotifyLink: string;
  cover_art: string;
  youtubeLink: string;
  //   release_date: Date;
}

/* // Move API constants to environment variables
const SPOTIFY_API = {
  TOKEN_URL: "https://accounts.spotify.com/api/token",
  ARTIST_ID: "0HS4eQaqJ9tjYwXUPF7SsS",
  CLIENT_TOKEN: "07179c459c1c4e7694a5e9bf4138f79f",
  CLIENT_SECRET: "06c8c00836b44f888f0bd619f2a1092d",
}; */

/* const getAuthToken = async (
  client_token: string,
  client_secret: string
): Promise<string> => {
  try {
    const response = await fetch(SPOTIFY_API.TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(`${client_token}:${client_secret}`),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    if (!response.ok) throw new Error("Failed to get auth token");

    const { access_token } = await response.json();
    return access_token;
  } catch (error) {
    console.error("Auth token error:", error);
    throw error;
  }
}; */

/* const handleFetching = async (): Promise<Music[]> => {
  try {
    const token = await getAuthToken(
      SPOTIFY_API.CLIENT_TOKEN,
      SPOTIFY_API.CLIENT_SECRET
    );

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${SPOTIFY_API.ARTIST_ID}/albums`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) throw new Error("Error fetching albums");

    const { items } = await response.json();

    return items.slice(0, 10).map(
      (item: any): Music => ({
        nombre: item.name,
        album: item.album_type,
        link: item.external_urls.spotify,
        cover_art: item.images[0].url,
        album_type: item.album_type,
        release_date: item.release_date,
        preview: item.preview_url,
      })
    );
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
}; */

const MusicCard: React.FC<Music> = ({
  cover_art,
  nombre,
  appleLink,
  spotifyLink,
  youtubeLink,
}) => {
  const size = 35;
  const estilos = "text-black dark:text-white hover:opacity-70 transition-all duration-300";

  return (
  <div className="flex flex-row gap-5 justify-center items-center mx-10 transition-all duration-300">
    {/* Imagen */}
    <div className="w-1/2 flex justify-center">
      <img
        src={cover_art}
        className="w-full md:w-5/10 aspect-9/9 object-cover rounded-lg border-1 border-gray-200 shadow-2xl backdrop-blur-xl"
        alt={nombre}
      />
    </div>

    {/* Datos */}
    <div className="w-1/2 flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-(--foreground)">{nombre}</h1>
      {/* <h2 className="text-2xl font-bold text-(--foreground)">{album}</h2> */}
      {/* <a href={link}>Spotify</a> */}


      
      <div className="flex gap-8 items-center">
        <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
          <FaSpotify size={size} className={estilos} />
        </a>
        <a href={appleLink} target="_blank" rel="noopener noreferrer">
          <FaApple size={size+5} className={`${estilos} pb-1`} />
        </a>
        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
          <FaYoutube size={size} className={estilos} />
        </a>
      </div>
      {/* <audio controls src={preview} className="w-full rounded-lg" /> */}
    </div>
  </div>
);}

const Show: React.FC = () => {
  const [data, setData] = useState<Music[]>([]);
  const [activeAlbum, setActiveAlbum] = useState<Music | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const albums = await handleFetching();
        setData(albums);
        setActiveAlbum(albums[0]);
      } catch (err) {
        setError("Failed to load music data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); */

  useEffect(() => {
    setData(MUSICA);
    setActiveAlbum(MUSICA[0]);
    setIsLoading(false);

    setError(null);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-white">Loading...</h1>
      </div>
    );
  }

  if (error || !activeAlbum) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-red-500">{error}</h1>
      </div>
    );
  }

  return (
    <div className="w-full" id="music">
      <div className="flex flex-col gap-10">

        {/* Título */}
        <AnimatedElement>
          <div className="flex flex-col items-center font-[helvetica] text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-(--foreground)">
              Music
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-(--foreground)">
              Listen to my latest tracks
            </h2>
          </div>
        </AnimatedElement>

        {/* Tarjeta activa */}
        <AnimatedElement>
          <MusicCard {...activeAlbum} />
        </AnimatedElement>

        {/* Tarjetas */}
        <AnimatedElement>
          <div className="relative">
            <div className="flex items-stretch justify-evenly overflow-x-auto gap-5 px-10 pb-15 scrollbar-hide">
              {data.map((info) => (
                <div
                  key={info.nombre}
                  onClick={() => setActiveAlbum(info)}
                  className={`
                                relative cursor-pointer flex-shrink-0 bg-blackwhite/20 backdrop-blur-xl rounded-3xl 
                                p-5 shadow-2xl border border-white/10 hover:border-white/20 transition duration-300 opacity-50 hover:opacity-100
                                overflow-hidden flex flex-col items-center w-[30%] sm:w-[20%] md:w-[10%] justify-center
                                ${
                                  activeAlbum?.nombre === info.nombre
                                    ? "opacity-100"
                                    : ""
                                }
                            `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <img
                    src={info.cover_art}
                    className={`w-3/4 aspect-square object-cover rounded-lg border-1 border-gray-200 shadow-2xl backdrop-blur-xl
                                    ${
                                      activeAlbum?.nombre === info.nombre
                                        ? "w-4/4"
                                        : ""
                                    }`}
                    alt={info.nombre}
                  />
                  <p className="text-sm md:text-base font-medium mt-2 truncate px-5">
                    {info.nombre}
                  </p>
                </div>
              ))}
            </div>
            <style jsx>{`
              .scrollbar-hide {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none; /* Chrome, Safari, and Opera */
              }
            `}</style>
          </div>
        </AnimatedElement>


      </div>
    </div>
  );
};

export default Show;
