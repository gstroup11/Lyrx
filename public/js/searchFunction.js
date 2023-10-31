document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-lyrics');
    const searchBtn = document.getElementById('search-btn');
  
    searchBtn.addEventListener('click', async () => {
      const searchQuery = searchInput.value;
  
      if (searchQuery) {
        // Include the artist name and additional details in your query
        const refinedQuery = `"${searchQuery}"`;
  
        // Make an HTTP GET request to your server's /search-lyrics route
        const response = await fetch(`/api/songsearch/search-lyrics?query=${refinedQuery}`);
        const data = await response.json();
  
        // Handle the response data (e.g., display lyrics)
        console.log(data);
  
        // You can update the DOM with the results here.
      } else {
        // Handle empty search query
        console.log('Please enter a search query.');
      }
    });
  });
  
  
  
  
  