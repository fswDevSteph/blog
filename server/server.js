// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Use the port specified in the environment variable or default to 5000

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the minimalist blog backend!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
