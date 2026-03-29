const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Comment text is required'],
      trim: true,
      maxlength: [1000, 'Comment cannot exceed 1000 characters'],
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
      required: [true, 'Blog ID is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
