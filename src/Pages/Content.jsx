// src/Components/Content.jsx

import React from 'react';
import Services from '../Components/Home/Services';
import About from '../Components/Home/About';
// import Technologies from '../Components/Technologies';

const Content = () => {
  return (
    <div className="text-white p-8">

      <Services />
      {/* <Technologies /> */}
      <About />

    </div>
  );
};

export default Content;
