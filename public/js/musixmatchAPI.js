// musixmatchAPI.js
const axios = require('axios');
require('dotenv').config();

const musixmatchApiKey = process.env.MUSIXMATCH_API_KEY;

// Function to fetch lyrics by track ID
async function getLyrics(trackId) {
    const url = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${musixmatchApiKey}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Musixmatch API Error: ${error.message}`);
    }
}

async function searchSong(query) {
    const url = `https://api.musixmatch.com/ws/1.1/track.search?q=${encodeURIComponent(query)}&apikey=${musixmatchApiKey}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Musixmatch API Error: ${error.message}`);
    }
}


// Add more functions for different Musixmatch API endpoints as needed

module.exports = {
    getLyrics,
    searchSong,
    // Add more functions here
};
