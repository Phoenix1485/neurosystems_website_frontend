import React from "react";
// Importiere Animate.css
import 'animate.css';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-6 py-10 flex items-center justify-center">
      <div className="bg-zinc-800/70 backdrop-blur-lg border border-zinc-700 rounded-xl shadow-2xl p-8 max-w-4xl mx-auto text-gray-200 animate__animated animate__fadeIn">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8 text-center tracking-wide animate__animated animate__zoomIn animate__delay-0.5s">
          Welcome to Neurosystems
        </h1>
        <p className="text-lg mb-4 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
          Welcome to <span className="text-purple-500 font-semibold">Neurosystems</span>, where innovation meets precision in software solutions. The name{" "}
          <strong className="text-yellow-400">"Neuro"</strong> embodies our commitment to being at the forefront of technology, symbolizing connectivity and forward-thinking progress.
        </p>
        <p className="text-lg mb-4 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
          Our color palette reflects this ethos: <span className="text-purple-500 font-semibold">purple</span> represents creativity, wisdom, and sophistication, while <span className="text-blue-500 font-semibold">blue</span> symbolizes trust, integrity, and clarity.
        </p>
        <p className="text-lg mb-4 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
          At <span className="text-purple-400 font-semibold">NeuroSystems</span>, we specialize in crafting bespoke digital experiences that transcend expectations. From robust software development to seamless web and mobile applications, we empower businesses with cutting-edge technologies.
        </p>
        <p className="text-lg mb-4 leading-relaxed animate__animated animate__fadeIn animate__delay-4s">
          Our commitment to excellence is woven into every line of code we write, ensuring your vision is transformed into a compelling digital reality. Join us at <span className="text-purple-400 font-semibold">NeuroSystems</span> and discover the power of tailored solutions that propel your business forward.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
