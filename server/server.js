// server.js

const express = require('express');
const blogRoutes = require('./routes/api/blogRoutes'); // Import blogRoutes
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Blog1_DB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/posts', blogRoutes); // Use blogRoutes for /api/posts route

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//! In the code above, we're importing blogRoutes.js as blogRoutes and then using it for the /api/posts route. This means that any routes defined in blogRoutes.js will be accessible under the /api/posts endpoint. For example, the GET / route in blogRoutes.js will be accessible at /api/posts/ in the server.