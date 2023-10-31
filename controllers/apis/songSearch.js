const express = require('express');
const router = express.Router();
const musixmatchAPI = require('../../public/js/musixmatchAPI');

router.get('/search-lyrics', async (req, res) => {
    const { query } = req.query; // Get the search query from the request

    if (!query) {
        return res.status(400).json({ error: 'Missing search query' });
    }

    try {
        // Call the searchSong function to make the API request
        const searchResult = await musixmatchAPI.searchSong(query);
        
        if (searchResult.message.header.status_code === 404) {
            return res.status(404).json({ error: 'No results found' });
        }

        // If you want to extract and return the search results:
        const searchResults = searchResult.message.body.track_list;
        res.json(searchResults);

    } catch (error) {
        console.error('Error searching for songs:', error);
        res.status(500).json({ error: 'Failed to search for songs' });
    }
});


module.exports = router;
