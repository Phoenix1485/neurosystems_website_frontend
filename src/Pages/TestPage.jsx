import React from 'react';
import Button from '../Components/Button';

const handleCancel = () => {
    alert("handleCancel klicked");
}

const TestPage = () => {
    return (
        <div className='w-full min-h-screen mt-96 gap-4 items-center justify-center'>
            {/* Outline variant (default, like your original) */}
            <Button to="/about" text="Learn More" />

            {/* Filled variant */}
            <Button to="/contact" text="Contact Us" variant="filled" />

            {/* Ghost variant */}
            <Button text="Cancel" variant="ghost" onClick={handleCancel} />

            {/* Different sizes */}
            <Button text="Small Button" size="sm" />
            <Button text="Large Button" size="lg" variant="filled" />

            {/* Disabled state */}
            <Button text="Not Available" disabled={true} />
        </div>
    );
};

export default TestPage;
