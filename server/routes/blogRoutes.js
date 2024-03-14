// blogRoutes.js

const express = require('express');
const router = express.Router();

// Example data (replace with MongoDB/Mongoose integration later)
let posts = [
    { id: 1, title: 'First Blog Post', content: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'Second Blog Post', content: 'Consectetur adipiscing elit.' }
];

// GET all blog posts
router.get('/', (req, res) => {
    res.json(posts);
});

// GET a single blog post by ID
router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
});

// POST a new blog post
router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT update an existing blog post
router.put('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    posts[postIndex] = { ...posts[postIndex], title, content };
    res.json(posts[postIndex]);
});

// DELETE a blog post
router.delete('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }
    posts.splice(postIndex, 1);
    res.json({ message: 'Post deleted successfully' });
});

module.exports = router;
//! This code sets up basic route handlers for CRUD operations on blog posts using an in-memory array blogPosts as our temporary data store. Will replace this with database operations using a tool like Mongoose for MongoDB later. 
//? Sample routes to test:
// GET http://localhost:5000/api/posts: Get all blog posts.
// POST http://localhost:5000/api/posts: Create a new blog post (send JSON payload with title and content).
// GET http://localhost:5000/api/posts/:id: Get a single blog post by ID.
// PUT http://localhost:5000/api/posts/:id: Update a blog post by ID (send JSON payload with title and content).
// DELETE http://localhost:5000/api/posts/:id: Delete a blog post by ID.