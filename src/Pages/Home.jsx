// src/Pages/Home.jsx

import React from 'react';
import Header from '../Components/Home/Header';
import MainContent from '../Components/Home/MainContent';
import LogoSection from '../Components/Home/LogoSection';
import Content from './Content'; // Import Content component

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center my-10">
            <Header />
            <MainContent />
            <div className="flex-grow"></div>
            <LogoSection />
            <Content />
        </div>
    );
};

export default Home;
