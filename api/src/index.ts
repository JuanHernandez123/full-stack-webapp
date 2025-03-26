import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import petRoutes from './routes/petRoutes';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(petRoutes);

// Add logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// MongoDB connection
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/petdb';

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });