const express = require('express');
const router = express.Router();
const { createApiClient } = require('../../public/js/lyricsAPI'); // Adjust the import path

// Define a route for searching lyrics
router.get('/search-lyrics', async (req, res) => {
  const { term, artist, format } = req.query;

  try {
    const apiClient = createApiClient();
    const response = await apiClient.get('', {
      params: {
        term,
        artist,
        format,
      },
    });

    const result = response.data;

    // Process and return the result as needed
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error searching lyrics' });
  }
});

module.exports = router;