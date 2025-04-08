const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contentRoutes = require('./routes/contentRoutes');

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Set up routes
app.use('/api/content', contentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
