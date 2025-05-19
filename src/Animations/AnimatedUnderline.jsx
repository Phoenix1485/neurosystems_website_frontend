import React, { useEffect, useRef, useState } from 'react';

const AnimatedUnderline = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    // ✅ Speichere den aktuellen Ref-Wert in einer Variablen
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      // ✅ Cleanup: Nutze die gespeicherte Variable
      if (observer && currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // 🔥 Kein `elementRef` mehr in den Abhängigkeiten!

  return (
    <span ref={elementRef} className="relative inline-block">
      {children}
      <div
        className={`absolute right-0 bottom-0 transform origin-right border-b-4 border-indigo-600 rounded-full ${isInView ? 'animate-underline' : ''}`}
        style={{ height: '4px', bottom: '-4px' }}
      ></div>
    </span>
  );
};

export default AnimatedUnderline;
