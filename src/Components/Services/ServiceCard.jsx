import React from 'react';

const ServiceCard = ({ title, content, icon }) => {
  return (
    <div className="z-50 duration-150 hover:scale-105 bg-bg-main-color hover:bg-bg-dark-blue shadow-lg rounded-lg p-6 flex flex-col items-center h-full">
      <div className="mb-4 text-indigo-600">
        {React.cloneElement(icon, { style: { fontSize: 50 } })}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-300 text-center">
        {content}
      </p>
    </div>
  );
};

export default ServiceCard;
