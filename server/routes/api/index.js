const router = require('express').Router();

const blogRoutes = require('./api/blogRoutes'); // Import blogRoutes
const userRoutes = require('./api/userRoutes'); // Import userRoutes
const commentRoutes = require('./api/commentRoutes'); // Import commentRoutes

router.use('/posts', blogRoutes); // Use blogRoutes for /posts route
router.use('/users', userRoutes); // Use userRoutes for /users route
router.use('/comments', commentRoutes); // Use commentRoutes for /comments route

module.exports = router;