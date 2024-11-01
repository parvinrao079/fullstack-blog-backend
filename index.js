require('dotenv').config();
const express = require('express');
const cors = require('cors');
const postsRoutes = require('./routes/postsRoutes.js'); // Import posts routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow requests from any origin for now
app.use(express.json()); // Parse incoming JSON requests

// Use posts routes
app.use('/posts', postsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
