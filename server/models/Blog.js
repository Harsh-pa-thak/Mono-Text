const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    description: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    tags: {
      type: [String],
      default: [],
    },
    seed: {
      type: String,
      default: () => Math.random().toString(36).substring(2, 10),
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
