// IconsContainer.jsx

import React from 'react';
import MongoDBIcon from './MongoDBLogo';
import MySQLIcon from './MysqlLogo';
import JavaScriptIcon from './JavascriptLogo';
import ReactLogo from './ReactLogo';
import HTMLIcon from './PythonLogo';

const IconsContainer = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <div style={{ padding: '8px', borderRadius: '8px' }}>
        <MongoDBIcon width="48" height="48" fill="white" />
      </div>
      <div style={{ padding: '8px', borderRadius: '8px' }}>
        <MySQLIcon width="48" height="48" fill="white" />
      </div>
      <div style={{ padding: '8px', borderRadius: '8px' }}>
        <JavaScriptIcon width="48" height="48" fill="white" />
      </div>
      <div style={{ padding: '8px', borderRadius: '8px' }}>
        <ReactLogo width="48" height="48" fill="white" />
      </div>
      <div style={{ padding: '8px', borderRadius: '8px' }}>
        <HTMLIcon width="48" height="48" fill="white" />
      </div>
    </div>
  );
};

export default IconsContainer;
