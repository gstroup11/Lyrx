const express = require('express');
const router = express.Router();
const { createApiClient } = require('../../public/js/lyricsAPI'); // Adjust the import path

// Define a route for searching lyrics
router.get("/result", async (req, res) => {
  const { term, artist, format } = req.query;

  try {
    const apiClient = createApiClient();
    const response = await apiClient.get("", {
      params: {
        term,
        artist,
        format,
      },
    });

    const results = response.data.result;

    if (Array.isArray(results) && results.length > 0) {
      const firstResult = results[0];
      // Render the 'results' Handlebars template and pass the first result
      res.render("result", { firstResult });
    } else {
      // Render the 'results' Handlebars template with no results found
      res.render("result", { firstResult: null });
    }
  } catch (error) {
    // Render the 'results' Handlebars template with an error message
    res.render("result", { error: "Error searching lyrics" });
  }
});

module.exports = router;

