const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

console.log('MongoDB URI:', uri); // Add this line to debug

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
