import { useEffect, useState } from "react";
import Music from "./Music";

// Define interfaces instead of type for better extensibility
interface Music {
    nombre: string;
    album: string;
    link: string;
    cover_art: string;
    album_type: string;
    release_date: Date;
    preview: string;
}

// Move API constants to environment variables
const SPOTIFY_API = {
    TOKEN_URL: 'https://accounts.spotify.com/api/token',
    ARTIST_ID: "0HS4eQaqJ9tjYwXUPF7SsS",
    CLIENT_TOKEN: '07179c459c1c4e7694a5e9bf4138f79f',
    CLIENT_SECRET: '06c8c00836b44f888f0bd619f2a1092d'
};

const getAuthToken = async (client_token: string, client_secret: string): Promise<string> => {
    try {
        const response = await fetch(SPOTIFY_API.TOKEN_URL, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(`${client_token}:${client_secret}`),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'grant_type': 'client_credentials'
            })
        });

        if (!response.ok) throw new Error('Failed to get auth token');

        const { access_token } = await response.json();
        return access_token;
    } catch (error) {
        console.error('Auth token error:', error);
        throw error;
    }
};

const handleFetching = async (): Promise<Music[]> => {
    try {
        const token = await getAuthToken(SPOTIFY_API.CLIENT_TOKEN, SPOTIFY_API.CLIENT_SECRET);
        
        const response = await fetch(`https://api.spotify.com/v1/artists/${SPOTIFY_API.ARTIST_ID}/albums`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });
        
        if (!response.ok) throw new Error("Error fetching albums");

        const { items } = await response.json();
        
        return items.slice(0, 5).map((item: any): Music => ({
            nombre: item.name,
            album: item.album_type,
            link: item.external_urls.spotify,
            cover_art: item.images[0].url,
            album_type: item.album_type,
            release_date: item.release_date,
            preview: item.preview_url,
        }));
    } catch (error) {
        console.error('Fetching error:', error);
        throw error;
    }
};

const MusicCard: React.FC<Music> = ({ cover_art, nombre, album, preview }) => (
    <div className="relative w-full max-w-md mx-auto bg-blackwhite/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <div className="relative flex items-center gap-6">
            <img 
                src={cover_art} 
                alt={nombre} 
                className="w-24 h-24 rounded-2xl object-cover shadow-lg ring-1 ring-white/10" 
            />
            <div className="flex-1">
                <h3 className="text-xl font-medium text-(--foreground)/90 mb-1">{nombre}</h3>
                <p className="text-sm text-(--foreground)/60">{album}</p>
            </div>
        </div>
        
        <div className="mt-6">
            <audio 
                controls 
                className="w-full h-10 rounded-lg [&::-webkit-media-controls-panel]:bg-white/10 [&::-webkit-media-controls-current-time-display]:text-white [&::-webkit-media-controls-time-remaining-display]:text-white"
            >
                <source src={preview} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
);

const Show: React.FC = () => {
    const [data, setData] = useState<Music[]>([]);
    const [activeAlbum, setActiveAlbum] = useState<Music | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const albums = await handleFetching();
                setData(albums);
                setActiveAlbum(albums[0]);
            } catch (err) {
                setError('Failed to load music data');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchData();
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
            <div className="flex flex-col gap-20">
                <div className="flex flex-col items-center font-[helvetica]">
                    <h1 className="text-5xl font-bold text-(--foreground)">Music</h1>
                    <h2 className="text-3xl font-bold text-(--foreground)">Listen to my latest tracks</h2>
                </div>
                    
                <MusicCard {...activeAlbum}/>

                <div className="flex flex-row gap-5 justify-evenly mx-10">
                    {data.map((info) => (
                        <div 
                            key={info.nombre} 
                            onClick={() => setActiveAlbum(info)}
                            className={`
                                relative cursor-pointer mx-auto bg-blackwhite/20 backdrop-blur-xl rounded-3xl 
                                p-5 px-10 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 
                                overflow-hidden flex flex-col items-center w-[20%] transition-[width] duration-300 justify-center
                                ${activeAlbum.nombre === info.nombre ? 'w-[35%] border-gray-700' : ''}
                            `}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                            <img 
                                src={info.cover_art} 
                                className="w-40 aspect-1/1 object-cover rounded-lg border-1 border-gray-200" 
                                alt={info.nombre}
                            />
                            <p>{info.nombre}</p>
                            <p>{info.album}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Show;