// api/reviewApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reviews';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  console.log('Retrieved token:', token);  // Debug log
  return token ? `Bearer ${token}` : '';
};

export const getReviews = async () => {
  try {
    console.log('Authorization Header:');  // Debug log
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const submitReview = async (reviewData) => {
  try {
    const authHeader = getAuthHeader();
    const response = await axios.post(`${API_URL}/add`, reviewData, {
      headers: {
        Authorization: authHeader
      }
    });
    return response.data; // Optional, je nachdem was deine Funktion tun soll
  } catch (error) {
    console.error('Error adding review:', error);
    throw error; // Wird hier geworfen, um den Fehler an die aufrufende Komponente weiterzugeben
  }
};
