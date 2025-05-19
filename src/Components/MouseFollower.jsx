// src/components/MouseFollower.jsx

import React, { useState, useEffect } from 'react';
import './MouseFollower.css'; // Importiere CSS für Styling

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="mouse-follower" style={{ left: position.x, top: position.y }}>
      <div className="gradient-circle"></div>
    </div>
  );
};

export default MouseFollower;
