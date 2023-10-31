const express = require('express');
const router = express.Router();
const musixmatchAPI = require('../../public/js/musixmatchAPI');

router.get('/search-lyrics', async (req, res) => {
    const { query } = req.query; // Get the query from the query parameter
    try {
        // Step 1: Search for the song
        const searchResult = await musixmatchAPI.searchSong(query);

        if (searchResult.message.header.status_code === 404) {
            res.status(404).json({ error: 'No results found' });
            return;
        }

        if (!searchResult.message.body || searchResult.message.body.track_list.length === 0) {
            res.status(404).json({ error: 'No results found' });
            return;
        }

        const trackId = searchResult.message.body.track_list[0].track.track_id;

        // Step 2: Get the lyrics for the matched song
        const lyricsData = await musixmatchAPI.getLyrics(trackId);
        res.json(lyricsData); // Send the response as JSON
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle the error and send an error response
    }
});


module.exports = router;