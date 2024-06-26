// blogController.js
const express = require('express');
const router = express.Router();
const posts = require('./posts');

// Get all blog posts
router.get('/posts', (req, res) => {
res.json(posts.getAllPosts());
});

// Create a new blog post
router.post('/posts', (req, res) => {
const newPost = req.body;
posts.createPost(newPost);
res.status(201).send('Post created successfully');
});

// Update an existing blog post
router.put('/posts/:id', (req, res) => {
const postId = req.params.id;
const updatedPost = req.body;
posts.updatePost(postId, updatedPost);
res.send('Post updated successfully');
});

// Delete a blog post
router.delete('/posts/:id', (req, res) => {
const postId = req.params.id;
posts.deletePost(postId);
res.send('Post deleted successfully');
});

module.exports = router;
