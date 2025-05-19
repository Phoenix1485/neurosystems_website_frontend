import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDateTime } from '../../../utils/DateTime'; // Adjust the path as per your project structure
import { showErrorToast, showSuccessToast } from '../../../Components/ToastProvider';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reviews', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setReviews(response.data);
                showSuccessToast('Reviews fetched successfully');
            } catch (error) {
                console.error('Error fetching reviews', error);
                showErrorToast('Error fetching reviews');
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="container mx-auto py-4">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Reviews</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700">
                    <thead className="bg-slate-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Username</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Stars</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Text</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Created At</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-900 divide-y divide-slate-700">
                        {reviews.map(review => (
                            <tr key={review._id}>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{review.username}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{review.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{review.rating}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{review.text}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-200">{formatDateTime(review.createdAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewsPage;
