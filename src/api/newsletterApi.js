// src/api/newsletterApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/newsletter';

export const subscribeToNewsletter = async (email) => {
    try {
        const response = await axios.post(`${API_URL}/subscribe`, { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};
