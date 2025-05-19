import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4500}
      hideProgressBar
      closeButton={false} // X-Button entfernen
    />
  );
};

export const showSuccessToast = (message) => {
  toast.success(message, {
    style: {
      backgroundColor: "rgba(34, 197, 94, 0.9)", // Halbtransparenter grüner Hintergrund
      color: "#fff", // Weiße Schrift
      boxShadow: "0px 4px 15px rgb(9, 224, 2, 0.5)", // Glow-Effekt für Erfolg
      borderRadius: "8px", // Abgerundete Ecken
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    style: {
      backgroundColor: "rgba(239, 68, 68, 0.8)", // Halbtransparenter roter Hintergrund
      color: "#fff", // Weiße Schrift
      boxShadow: "0px 4px 15px rgba(239, 68, 68, 0.5)", // Glow-Effekt für Fehler
      borderRadius: "8px", // Abgerundete Ecken
    },
  });
};

export const showWarningToast = (message) => {
  toast.warn(message, {
    style: {
      backgroundColor: "rgba(234, 179, 8, 0.8)", // Halbtransparentes warmes Gelb
      color: "#fff", // Weiße Schrift für Kontrast
      boxShadow: "0px 4px 15px rgba(234, 179, 8, 0.5)", // Glow-Effekt mit Gelb
      borderRadius: "8px", // Abgerundete Ecken
    },
  });
};

export default ToastProvider;
