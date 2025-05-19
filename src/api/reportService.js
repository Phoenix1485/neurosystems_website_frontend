import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Remove any Authorization header
  },
});

// Example function to fetch reviews
export const fetchReviews = async () => {
  try {
    const response = await axiosInstance.get('/reviews');
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

// Example function to submit a report
export const submitReport = async (reportData) => {
  try {
    const response = await axiosInstance.post(`/reports/report/${reportData.reviewId}`, reportData);
    return response.data;
  } catch (error) {
    console.error('Error submitting report:', error);
    throw error;
  }
};
