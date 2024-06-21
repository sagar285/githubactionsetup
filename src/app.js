const express = require('express');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;