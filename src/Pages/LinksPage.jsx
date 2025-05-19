import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routesConfig'; // Pfade anpassen, wenn die Datei woanders liegt

const LinksPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Links</h1>
      <ul className="list-disc pl-5">
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path} className="text-blue-500 hover:underline">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksPage;
