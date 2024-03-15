const blogRoutes = require('./routes/api/blogRoutes'); // Import blogRoutes
const router = express.Router();

router.use('/api/posts', blogRoutes); // Use blogRoutes for /api/posts route

module.exports = router;