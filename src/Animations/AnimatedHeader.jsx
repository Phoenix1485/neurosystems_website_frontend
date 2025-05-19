import React, { useEffect, useState } from 'react';
import './css/Header.css';

const AnimatedText = ({ text }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let animationTimeout;

    // Starte die Animation nach einer Verzögerung von 500ms
    animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <span className="inline-block overflow-hidden font-bold text-5xl">
      {Array.from(text).map((char, index) => (
        <span
          key={index}
          className={`inline-block ${animationComplete ? 'opacity-100' : 'opacity-0'} type-in-header`}
          style={{ animationDelay: `${(index + 1) * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
