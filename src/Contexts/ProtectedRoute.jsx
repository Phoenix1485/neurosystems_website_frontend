import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { validateToken } from "../services/authService";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const token = localStorage.getItem("token"); // Token aus localStorage holen

  useEffect(() => {
    const checkToken = async () => {
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      const userData = await validateToken(token);
      setIsAuthenticated(!!userData); // Falls userData null ist → Token ungültig
    };

    checkToken();
  }, [token]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Falls die Prüfung noch läuft
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
