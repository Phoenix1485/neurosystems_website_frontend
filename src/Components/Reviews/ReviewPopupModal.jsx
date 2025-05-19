// ReviewPopupModal.jsx

import React from 'react';

const ReviewPopupModal = ({ name, text, onClose }) => {
    return (
        <div className="review-popup fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl text-center font-semibold mb-4">{name}'s Review</h2>
                    <p className="text-white text-center">{text}</p>
                <div className="mt-4 text-right">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewPopupModal;
