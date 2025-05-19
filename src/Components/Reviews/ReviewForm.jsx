import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { submitReview } from '../../api/reviewApi';

const ReviewForm = ({ onClose, fetchReviews }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(1);
    const [text, setText] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedUsername = localStorage.getItem('username');
        
        if (storedEmail) {
            setEmail(storedEmail);
        }

        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            username,
            email,
            rating,
            text,
        };

        try {
            await submitReview(newReview);

            // Save username to localStorage
            localStorage.setItem('username', username);

            onClose();
            fetchReviews();
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="bg-gray-800 text-white w-96 p-4 rounded-lg z-50 relative">
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'white',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <h2 className="text-lg font-semibold mb-4 text-center">Add Review</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled
                        className="mb-3"
                        sx={{
                            marginBottom: '16px',
                            '& .MuiInputBase-input.Mui-disabled': { color: '#999', WebkitTextFillColor: '#999' },
                            '& .MuiInputLabel-root.Mui-disabled': { color: '#999' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: '#555' },
                                '&:hover fieldset': { borderColor: '#777' },
                                '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
                            },
                        }} 
                    />
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled
                        className="mb-3"
                        sx={{
                            marginBottom: '16px',
                            '& .MuiInputBase-input.Mui-disabled': { color: '#999', WebkitTextFillColor: '#999' },
                            '& .MuiInputLabel-root.Mui-disabled': { color: '#999' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: '#555' },
                                '&:hover fieldset': { borderColor: '#777' },
                                '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
                            },
                        }}
                    />
                    <div className="mb-3">
                        <Rating
                            name="rating"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue < 1 ? 1 : newValue);
                            }}
                            precision={0.5}
                            min={1}
                            emptyIcon={<span className="text-gray-300">★</span>}
                            icon={<span className="text-purple-600">★</span>}
                        />
                    </div>
                    <TextField
                        label="Review Text"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="mb-3"
                        sx={{
                            marginBottom: '16px',
                            '& .MuiInputBase-input': { color: '#ccc' },
                            '& .MuiInputLabel-root': { color: '#ccc' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: '#555' },
                                '&:hover fieldset': { borderColor: '#777' },
                                '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
                            },
                        }}
                    />
                    <Button type="submit" variant="contained" className="bg-blue-500 text-white hover:bg-blue-600">
                        Submit Review
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
