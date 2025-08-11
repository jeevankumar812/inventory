const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
