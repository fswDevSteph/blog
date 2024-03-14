// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost'); // Import the BlogPost model

// 1. Retrieve all blog posts
router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.json(blogPosts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Retrieve a single blog post by its ID
router.get('/:id', getBlogPost, (req, res) => {
    res.json(res.blogPost);
});

// 3. Create a new blog post
router.post('/', async (req, res) => {
    const blogPost = new BlogPost({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: req.body.date
    });
    try {
        const newBlogPost = await blogPost.save();
        res.status(201).json(newBlogPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 4. Update an existing blog post
router.patch('/:id', getBlogPost, async (req, res) => {
    if (req.body.title != null) {
        res.blogPost.title = req.body.title;
    }
    if (req.body.content != null) {
        res.blogPost.content = req.body.content;
    }
    if (req.body.author != null) {
        res.blogPost.author = req.body.author;
    }
    if (req.body.date != null) {
        res.blogPost.date = req.body.date;
    }
    try {
        const updatedBlogPost = await res.blogPost.save();
        res.json(updatedBlogPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 5. Delete a blog post
router.delete('/:id', getBlogPost, async (req, res) => {
    try {
        await res.blogPost.remove();
        res.json({ message: 'Deleted blog post' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get a single blog post by its ID
async function getBlogPost(req, res, next) {
    let blogPost;
    try {
        blogPost = await BlogPost.findById(req.params.id);
        if (blogPost == null) {
            return res.status(404).json({ message: 'Cannot find blog post' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.blogPost = blogPost;
    next();
}

module.exports = router;

//? Sample routes to test:
// Retrieve all blog posts:
// GET: http://localhost:3001/api/posts

// Retrieve a single blog post by its ID:
// GET: http://localhost:3001/api/posts/:id (Replace :id with the ID of the blog post you want to retrieve)

// Create a new blog post:
// POST: http://localhost:3001/api/posts
// JSON payload: Include the title, content, author, and date of the new blog post in the request body.

// Update an existing blog post:
// PATCH: http://localhost:3001/api/posts/:id (Replace :id with the ID of the blog post you want to update)
// JSON payload: Include the fields(title, content, author, date) you want to update in the request body.

// Delete a blog post:
// DELETE: http://localhost:3001/api/posts/:id (Replace :id with the ID of the blog post you want to delete)
