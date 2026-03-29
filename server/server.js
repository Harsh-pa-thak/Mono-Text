require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Route imports
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => res.json({ status: 'OK', message: 'MonoText API is running' }));

// Routes
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);
app.use('/comments', commentRoutes);
app.use('/ai', aiRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

// Centralized error handler (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 MonoText server running on http://localhost:${PORT}`);
});
