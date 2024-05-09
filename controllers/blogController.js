const express = require('express');
const router = express.Router();
const posts = require('../models/post');

//Get all posts 
router.post('/posts', (req, res) => {
    const newPost = req.body;
    posts.createPost(newPost);
    res.status(201).send('Post created sucessfully');
});

