// musixmatchAPI.js
const axios = require('axios');
require('dotenv').config();

const musixmatchApiKey = process.env.MUSIXMATCH_API_KEY;

function searchSong(query) {
    // Define the Musixmatch API search endpoint URL
    const apiUrl = `https://api.musixmatch.com/ws/1.1/track.search?q=${query}&apikey=${musixmatchApiKey}`;

    return axios
        .get(apiUrl)
        .then(response => {
            // Return the search results
            return response.data;
        })
        .catch(error => {
            // Handle any errors here
            console.error('Error:', error);
            throw new Error('Failed to search for songs');
        });
}

function getLyrics(trackId) {
    const apiUrl = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${musixmatchApiKey}`;

    return axios
        .get(apiUrl)
        .then(response => {
            if (response.data.message.body && response.data.message.body.lyrics) {
                const lyrics = response.data.message.body.lyrics.lyrics_body;
                console.log('Lyrics found:', lyrics);
                return lyrics;
            } else {
                console.log('Lyrics not found');
                return 'Lyrics not found';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            return 'Error fetching lyrics';
        });
}


module.exports = {
    searchSong,
    getLyrics
};
