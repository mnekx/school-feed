const express = require('express');
const dotenv = require('dotenv');
const { connectDatabase, sequelize } = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize the database connection
connectDatabase();

const app = express();
app.use(express.json());

// Sync models with the database
sequelize.sync({ alter: true }).then(() => {
    console.log("All models were synchronized successfully.");
}).catch(error => {
    console.error("Error synchronizing models:", error);
});

// Routes
app.use('/api/auth', require('./routes/v1/authRoutes'));
app.use('/api/users', require('./routes/v1/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
