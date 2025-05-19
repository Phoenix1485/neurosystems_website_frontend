import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";
import SmallLoadingScreen from "../Components/LoadingScreen/SmallLoadingScreen";
import Footer from "../Components/Footer";

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [initialLoading, setInitialLoading] = useState(false);
  const [routeLoading, setRouteLoading] = useState(false);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");

    if (!hasLoadedBefore) {
      setInitialLoading(true);
      setTimeout(() => {
        setTimeout(() => {
          setInitialLoading(false);
          sessionStorage.setItem("hasLoadedBefore", "true");
        });
      }, 5000); // 5 Sekunden LoadingScreen
    }
  }, []);

  useEffect(() => {
    if (!initialLoading) {
      setRouteLoading(true);
      const timer = setTimeout(() => setRouteLoading(false), 2500); // 1 Sekunde SmallLoadingScreen
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  if (initialLoading) return <LoadingScreen />;
  return (
    <div className="bg-gray-950 text-white pt-24 relative">
      {routeLoading && <SmallLoadingScreen />}
      <div
        className={`transition-opacity duration-200 ${routeLoading ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
        <Footer />

      </div>
    </div>
  );
};

export default PageWrapper;