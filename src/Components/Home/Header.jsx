import React from 'react';
import AnimatedText from '../../Animations/AnimatedHeader'; // Passe den Pfad entsprechend deiner Dateistruktur an

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 text-center items-center">
      <h1 className="text-6xl font-bold mb-3 text-center">
      <AnimatedText text="Neurosystems" />
      </h1>
      <p className="text-xl mb-8 font-mono">
        We're passionate about creating software solutions that exceed
        expectations. We take pride in transforming your ideas into digital
        realities, empowering your business for a brighter future.
      </p>
    </div>
  );
};

export default Header;
