const Comment = require('../models/Comment');

// GET /comments/:blogId
const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ blogId: req.params.blogId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    next(error);
  }
};

// POST /comments/:blogId
const addComment = async (req, res, next) => {
  try {
    const { text, username } = req.body;
    const { blogId } = req.params;

    if (!text || !username) {
      return res.status(400).json({ error: 'Comment text and username are required' });
    }

    const comment = await Comment.create({ text, blogId, username });
    res.status(201).json({ message: 'Comment added', comment });
  } catch (error) {
    next(error);
  }
};

module.exports = { getComments, addComment };
