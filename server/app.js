import fetchAlbumData from './spotifyCore/fetchAlbumData.js'; // Import your fetchAlbumData function

// Function to display the fetched data in the browser
const displayAlbumData = async () => {
  try {
    const data = await fetchAlbumData(); // Fetch the data using your function
    const albumDataElement = document.getElementById('albumData'); // Get the placeholder element
    
    // Create an HTML structure to display the data (customize this based on your data structure)
    const html = `
      <h2>Album Data</h2>
      <p>Album Name: ${data.name}</p>
      <p>Artist: ${data.artist}</p>
      <p>Release Date: ${data.releaseDate}</p>
    `;

    // Set the HTML content of the placeholder element
    albumDataElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};

// Call the displayAlbumData function to load and display the data when the page loads
window.addEventListener('load', displayAlbumData);
