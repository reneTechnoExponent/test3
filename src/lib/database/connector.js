import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
let connection = null;

export const connectToDB = () => {
  if (connection && connection.readyState === 1) {
    console.log('Using existing database connection.');
    return connection;
  }
  const connectionString = process.env.MONGODB_URI;
  if (!connectionString) {
    throw new Error('MONGODB_URI is not defined in your environment variables. Please check your .env file.');
  }
  console.log('Creating new database connection...');
  try {
    connection = mongoose.createConnection(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    connection.on('connected', () => console.log('MongoDB connected successfully.'));
    connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      connection.close();
      connection = null;
    });
    connection.on('disconnected', () => {
      console.log('MongoDB disconnected.');
      connection = null;
    });
    return connection;
  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
    throw error;
  }
};

export const getConnection = () => {
    if (!connection) return connectToDB();
    return connection;
}