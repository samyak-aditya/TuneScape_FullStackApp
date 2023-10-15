import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'; 
import router from './routes/routes.js';
import dotenv from 'dotenv'


const app = express();
app.use(cors());
dotenv.config();


const port = process.env.PORT || 5000;


app.use(bodyParser.json());

// MongoDB connection setup
const mongoURI = process.env.MONGO_URL;

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


app.use('/', router);



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
