import { useState } from "react"

interface contactDataProps {
    nombre?: string,
    email?: string,
    mensaje?: string,
    file? : File
}


function Music () {

    const [data, setData] = useState<contactDataProps>()

    const handleSend = async () => {
        
        setData({
            nombre: (document.getElementById("nombre") as HTMLInputElement)?.value,
            email: (document.getElementById("email") as HTMLInputElement)?.value,
            mensaje: (document.getElementById("mensaje") as HTMLInputElement)?.value,
            file: (document.getElementById("file") as HTMLInputElement)?.files?.[0]
        })

        await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

    }

    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        const maxSizeMB = 10 // Maximum size

        if (file) {
            if (file.size > maxSizeMB * 1024 * 1024) {
                setErrorMessage(`El archivo es demasiado grande. Máximo permitido: ${maxSizeMB}MB`)
                event.target.value = "" // Clear the input
            } else {
                setErrorMessage("")
            }
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-full max-w-md px-4">
                <h2 className="font-[helvetica] text-3xl font-medium text-center text-gray-800 mb-8">Send me music</h2>
                <form className="flex flex-col gap-5 w-full bg-white rounded-xl shadow-lg p-8">
                    <div className="space-y-2">
                        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700">Name:</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            placeholder="Nombre" 
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700">Message:</label>
                        <input 
                            type="text" 
                            id="mensaje" 
                            placeholder="Mensaje" 
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="file" className="block text-sm font-semibold text-gray-700">File:</label>
                        <input 
                            onChange={handleFileChange}
                            type="file" 
                            id="file"
                            accept=".mp3, .wav, .ogg, .flac"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200
                            file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:transition file:duration-200"
                        />
                        <p id="errorMessage" className="text-red-400">{errorMessage}</p>
                    </div>
                    
                    <button 
                        onClick={handleSend}
                        className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        transform transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}


export default Music;