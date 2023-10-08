// Import required packages
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'; // Added Mongoose import
import router from './routes/routes.js';
import dotenv from 'dotenv'

// Create an instance of Express
const app = express();
app.use(cors());
dotenv.config();

// Define a port for your server to listen on
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection setup
const mongoURI = process.env.MONGO_URL; // Change this URL


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Sample route
app.use('/', router);

// Define more routes and logic for your API here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
