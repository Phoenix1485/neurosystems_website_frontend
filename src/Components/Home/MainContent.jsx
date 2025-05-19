// MainContent.jsx
import React from 'react';
import Button from '../Button';

const MainContent = () => {
    return (
        <div className="max-w-6xl mx-auto pb-5 text-center items-center">
            <Button to="/login" text="Get started" />
        </div>
    );
};

export default MainContent;
