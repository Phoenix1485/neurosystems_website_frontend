import { useEffect } from "react";

const Discord = () => {
    const url = "https://discord.gg/DEIN_INVITE";

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = url;
    }, 100); // Leichte Verzögerung, falls notwendig

    return () => clearTimeout(timer);
  }, [url]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-xl font-semibold mb-2">Du wirst weitergeleitet ...</h1>
        <p className="mb-4">Falls die automatische Weiterleitung nicht funktioniert, klicke hier:</p>
        <a
          href={url}
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          Jetzt zu Discord wechseln
        </a>
      </div>
    </div>
  );
};

export default Discord;
