// Create web server
// Create a post request to save the comments
// Create a get request to get the comments

const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.post('/comments', async (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    comment: req.body.comment
  });

  try {
    const savedComment = await comment.save();
    res.json(savedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;