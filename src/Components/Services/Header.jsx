import React from 'react';
import AnimatedText from '../../Animations/AnimatedHeader'; // Passe den Pfad entsprechend deiner Dateistruktur an

const Header = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 text-center items-center">
            <h1 className="text-5xl font-black mb-4 relative">
                <AnimatedText text="Services" />
            </h1>
            <p className="text-xl mb-8 font-mono">
                We offer a wide range of software development services to help you grow your business.
            </p>
        </div>
    );
};

export default Header;
