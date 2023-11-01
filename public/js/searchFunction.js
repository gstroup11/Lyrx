document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", function () {
    // Get user input
    const term = document.getElementById("search-lyrics").value;
    const artist = document.getElementById("search-artist").value;
    const format = "json"; // You can customize the format as needed

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open("GET", `/api/songsearch/search-lyrics?term=${term}&artist=${artist}&format=${format}`, true);

    // Set up a callback function for when the request completes
    xhr.onload = function () {
      if (xhr.status === 200) {

        // Process and display only the first result (if available)
        const data = JSON.parse(xhr.responseText);

        if (Array.isArray(data.result) && data.result.length > 0) {
          displaySongLink(data.result[0]);
        } else {
          displayNoResults();
        }
      } else {
        // Handle any errors or display an error message
        displayError();
      }
    };

    // Send the request
    xhr.send();
  });
});

function displaySongLink(result) {
  const lyricsDisplay = document.getElementById("lyrics-display");
  lyricsDisplay.innerHTML = ""; // Clear previous results

  // Display the song link for the first result
  const songLink = document.createElement("a");
  songLink.href = result["song-link"];
  songLink.textContent = "Listen to the song"; // Customize the link text as needed
  lyricsDisplay.appendChild(songLink);
}

function displayNoResults() {
  const lyricsDisplay = document.getElementById("lyrics-display");
  lyricsDisplay.innerHTML = "<p>No results found.</p>";
}

function displayError() {
  const lyricsDisplay = document.getElementById("lyrics-display");
  lyricsDisplay.innerHTML = "<p>Error searching lyrics.</p>";
}
