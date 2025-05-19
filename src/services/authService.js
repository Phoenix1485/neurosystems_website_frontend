import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

export const getProfile = async (token) => {
  return await axios.get(`${API_URL}/profile`, {
    headers: { 'Authorization': `Bearer ${token}` }, // Authorization Header im Bearer-Format
  });
};

export const validateToken = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/validate-token`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Falls gültig, gibt das Backend den User zurück
  } catch (error) {
    console.error("Token validation failed:", error.response?.data || error.message);
    return null; // Falls der Token ungültig ist, gib null zurück
  }
};
