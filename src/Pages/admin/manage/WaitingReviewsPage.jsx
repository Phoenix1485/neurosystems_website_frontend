import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconButton } from '@mui/material';
import { Delete as DeleteIcon, Check as CheckIcon } from '@mui/icons-material';
import { formatDateTime } from '../../../utils/DateTime'; // Passe den Pfad entsprechend deiner Projektstruktur an
import { showErrorToast, showSuccessToast } from '../../../Components/ToastProvider';

const WaitingReviewsPage = () => {
    const [waitingReviews, setWaitingReviews] = useState([]);

    useEffect(() => {
        fetchWaitingReviews();
    }, []);

    const fetchWaitingReviews = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/reviews/waiting', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setWaitingReviews(response.data);
            showSuccessToast('Waiting reviews fetched successfully');
        } catch (error) {
            console.error('Error fetching waiting reviews', error);
            showErrorToast('Error fetching waiting reviews');
        }
    };

    const handleDeleteReview = async (reviewId) => {
        try {
            await axios.delete(`http://localhost:5000/api/reviews/waiting/${reviewId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // Update state after deletion
            setWaitingReviews(waitingReviews.filter(review => review._id !== reviewId));
            showSuccessToast('Review deleted successfully');
        } catch (error) {
            console.error('Error deleting review', error);
            showErrorToast('Error deleting review');
        }
    };

    const handleMoveReview = async (reviewId) => {
        try {
            await axios.put(`http://localhost:5000/api/reviews/move/${reviewId}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // Nach dem Verschieben das Review aus der Warteliste entfernen
            setWaitingReviews(waitingReviews.filter(review => review._id !== reviewId));
        } catch (error) {
            console.error('Error moving review', error);
            showErrorToast('Error moving review');
        }
    };

    return (
        <div className="container mx-auto py-4">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Waiting Reviews</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700">
                    <thead className="bg-slate-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Username</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rating</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Text</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Created At</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-900 divide-y divide-slate-700">
                        {waitingReviews.map(review => (
                            <tr key={review._id}>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{review.username}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{review.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{review.rating}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{review.text}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{formatDateTime(review.createdAt)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">

                                    <div className='flex space-x-4'>
                                        <div className='flex items-center bg-slate-700 hover:bg-slate-800 hover:scale-105 rounded-md'>
                                            <IconButton onClick={() => handleDeleteReview(review._id)} aria-label="delete">
                                                <DeleteIcon className='text-red-600' />
                                            </IconButton>
                                        </div>
                                        <div className='flex items-center bg-slate-700 hover:bg-slate-800 hover:scale-105 rounded-md'>
                                            <IconButton onClick={() => handleMoveReview(review._id)} aria-label="move">
                                                <CheckIcon className='text-green-600' />
                                            </IconButton>
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WaitingReviewsPage;
