// LogoSection.jsx
import React from 'react';
import logo from '../../Assets/Img/group_ppl.png'; // Pfade entsprechend anpassen

const LogoSection = () => {
    return (
        <div className="flex justify-center mt-24 mb-52">
            <img src={logo} alt="Logo" className="w-8/12 mb-4" />
        </div>
    );
};

export default LogoSection;
