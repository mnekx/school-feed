const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/v1/authRoutes'));
app.use('/api/users', require('./routes/v1/userRoutes'));
app.use('/api/schools', require('./routes/v1/schoolRoutes'));
app.use('/api/food', require('./routes/v1/foodRoutes'));
app.use('/api/meetings', require('./routes/v1/meetingRoutes'));
app.use('/api/challenges', require('./routes/v1/challengeRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
