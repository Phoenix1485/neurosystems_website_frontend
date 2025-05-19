import React, { useEffect, useState } from "react";
import "./LoadingScreen.css"; // CSS-Datei bleibt gleich

const LoadingScreen = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // Verhindere das Scrollen, wenn der Ladebildschirm angezeigt wird
    document.body.style.overflow = "hidden";

    // Ladebildschirm nach 3,5 Sekunden verschwinden lassen
    const timer = setTimeout(() => {
      setIsAnimationComplete(true); // Animation beenden und Ladebildschirm ausblenden
    }, 3500); // Warten für 3,5 Sekunden

    return () => {
      clearTimeout(timer); // Aufräumen der Timer-Ressourcen
      document.body.style.overflow = "auto"; // Scrollen nach dem Ladebildschirm wieder aktivieren
    };
  }, []);

  return (
    <div className={`container2 ${isAnimationComplete ? "fade-out" : ""}`}>
      <div className="name-container">
        <p className="font-semibold text-xl text-slate-400 welcome-name">
          Welcome to Neurosystems
        </p>
      </div>
      
      <div className={`loading-page ${isAnimationComplete ? "fade-out" : ""}`}>
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z" />
        </svg>

        <div className="name-container">
          <div className="logo-name">Neurosystems</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
