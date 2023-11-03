document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get user input
    const searchInput = document.getElementById("search-input").value;

    // Split the user input into artist and term
    const inputParts = searchInput.split(' - ');

    // Check if inputParts has the expected number of elements
    if (inputParts.length === 2) {
      const artist = inputParts[0].trim();
      const term = inputParts[1].trim();

      // Create a URL with the query parameters
      const url = `/api/songsearch/result?term=${term}&artist=${artist}&format=json`;

      // Navigate to the "/results" page with the query parameters
      window.location.href = url;
    } else {
      // Handle the case where input is not in the expected format
      alert("Please enter the input in the format 'Artist and Song'.");
    }
  });
});