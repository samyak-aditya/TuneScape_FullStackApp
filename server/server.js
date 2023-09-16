// Import required packages
import express  from 'express';
import bodyParser from 'body-parser';
import fetchAlbumData from './spotifyCore/fetchAlbumData.js';
import cors from 'cors'

// Create an instance of Express
const app = express();
app.use(cors()); 
// Define a port for your server to listen on
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Sample route
app.get('/albums', async (req, res) => {
    try {
      const data = await fetchAlbumData(); // Assuming fetchAlbumData returns the data
      res.json(data); // Send the fetched data as JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' }); // Handle errors appropriately
    }
  });


// Define more routes and logic for your API here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
