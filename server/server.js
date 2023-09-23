// Import required packages
import express  from 'express';
import bodyParser from 'body-parser';

import cors from 'cors'
import router from './routes/routes.js';

// Create an instance of Express
const app = express();
app.use(cors()); 
// Define a port for your server to listen on
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Sample route
app.use('/',router)


// Define more routes and logic for your API here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
