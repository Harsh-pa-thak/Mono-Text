const Blog = require('../models/Blog');

// GET /blogs
const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

// GET /blogs/:id
const getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

// POST /blogs
const createBlog = async (req, res, next) => {
  try {
    const { title, content, description, author, tags, readTime } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ error: 'Title, content, and author are required' });
    }

    // Estimate read time based on word count (~200 words per minute)
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const estimatedReadTime = readTime || `${Math.ceil(wordCount / 200)} min read`;

    const blog = await Blog.create({
      title,
      content,
      description: description || content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      author,
      tags: tags || [],
      readTime: estimatedReadTime,
    });

    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    next(error);
  }
};

// DELETE /blogs/:id
const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const { author } = req.body;
    if (blog.author !== author) {
      return res.status(403).json({ error: 'You can only delete your own posts' });
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getBlogs, getBlogById, createBlog, deleteBlog };
