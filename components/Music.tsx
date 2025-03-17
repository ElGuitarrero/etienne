import { useState } from "react";

// interface contactDataProps {
//   nombre?: string;
//   email?: string;
//   mensaje?: string;
//   file?: File;
// }

function Music() {
//   const [data, setData] = useState<contactDataProps>();

  const handleSend = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById("file") as HTMLInputElement;

    formData.append(
      "nombre",
      (document.getElementById("nombre") as HTMLInputElement)?.value
    );
    formData.append(
      "email",
      (document.getElementById("email") as HTMLInputElement)?.value
    );
    formData.append(
      "mensaje",
      (document.getElementById("mensaje") as HTMLInputElement)?.value
    );

    if (fileInput?.files?.[0]) {
      formData.append("file", fileInput.files[0]);
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert(
        data.message || "¡Música enviada con éxito! Te contactaremos pronto."
      );
    } catch (error) {
      alert(
        `Lo siento, hubo un error al enviar tu música. Por favor, inténtalo de nuevo. ${error}`
      );
    }
  };

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const maxSizeMB = 10; // Maximum size

    if (file) {
      if (file.size > maxSizeMB * 1024 * 1024) {
        setErrorMessage(
          `El archivo es demasiado grande. Máximo permitido: ${maxSizeMB}MB`
        );
        event.target.value = ""; // Clear the input
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <h2 className="font-[helvetica] text-5xl font-bold text-center text-(--foreground) mb-8">
          Send me music
        </h2>
        <form className="relative flex flex-col gap-5 w-full bg-blackwhite/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="space-y-2">
            <label
              htmlFor="nombre"
              className="block text-sm font-semibold text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="mensaje"
              className="block text-sm font-semibold text-gray-700"
            >
              Message:
            </label>
            <input
              type="text"
              id="mensaje"
              placeholder="Mensaje"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="file"
              className="block text-sm font-semibold text-gray-700"
            >
              File:
            </label>
            <input
              onChange={handleFileChange}
              type="file"
              id="file"
              accept=".mp3, .wav, .ogg, .flac"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200
                            file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:transition file:duration-200"
            />
            <p id="errorMessage" className="text-red-400">
              {errorMessage}
            </p>
          </div>

          <button
            onClick={handleSend}
            className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        transform transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Music;
