// Initialize the API client
const axios = require('axios');
require('dotenv').config(); // Load environment variables from a .env file

const BASE_URL = 'https://www.stands4.com/services/v2/lyrics.php';

// Function to create the API client
const createApiClient = () => {
  const apiClient = axios.create({
    baseURL: BASE_URL,
    params: {
      uid: process.env.LYRICS_USER,    
      tokenid: process.env.LYRICS_API, 
    },
  });

  return apiClient;
};

module.exports = { createApiClient };
