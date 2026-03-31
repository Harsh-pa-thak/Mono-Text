import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import BlogCardSkeleton from '../components/BlogCardSkeleton';
import CategoryCard from '../components/CategoryCard';
import { getBlogs, deleteBlog } from '../services/blogService';
import { useToast } from '../components/Toast';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = [
  { icon: '⚡', name: 'JavaScript', variant: '' },
  { icon: '🎨', name: 'Design', variant: 'accent' },
  { icon: '🔰', name: 'CSS', variant: 'success' },
  { icon: '📘', name: 'Tutorial', variant: '' },
  { icon: '🚀', name: 'Web Dev', variant: 'accent' },
  { icon: '🖥️', name: 'Backend', variant: 'success' },
];

export default function Home() {
  const { showToast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const data = await getBlogs();
      setBlogs(data);
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post?')) return;
    try {
      await deleteBlog(id, user.username);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
      showToast('Post deleted', 'success');
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const featured = blogs.slice(0, 4);
  const trending = [...blogs].sort((a, b) => b.likes - a.likes).slice(0, 6);

  // Count per category
  const catCounts = CATEGORIES.map((c) => ({
    ...c,
    count: blogs.filter((b) => b.tags?.some((t) => t.toLowerCase().includes(c.name.toLowerCase()))).length,
  }));

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 className="fade-in">Discover Amazing Stories</h1>
          <p className="fade-in fade-in-delay-1">
            Join thousands of developers and designers sharing knowledge, experiences, and insights
            on the latest in web development.
          </p>
          <div className="hero-buttons fade-in fade-in-delay-2">
            <button className="btn-primary" onClick={() => navigate('/explore')}>
              Start Exploring
            </button>
            <button className="btn-secondary" onClick={() => navigate('/about')}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Featured Posts</h2>
            <p className="section-subtitle">Hand-picked articles from our top contributors</p>
          </div>

          <div className="blog-grid-4">
            {loading
              ? Array(4).fill(0).map((_, i) => <BlogCardSkeleton key={i} />)
              : featured.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
                ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Browse by Topic</h2>
            <p className="section-subtitle">Find content that matches your interests</p>
          </div>
          <div className="category-grid">
            {catCounts.map((cat) => (
              <CategoryCard key={cat.name} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Trending This Week</h2>
            <p className="section-subtitle">Most popular articles based on likes and views</p>
          </div>
          <div className="blog-grid">
            {loading
              ? Array(6).fill(0).map((_, i) => <BlogCardSkeleton key={i} />)
              : trending.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
                ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: 600, margin: '0 auto 2rem' }}>
              Join our community of passionate developers and designers.
              Share your knowledge, learn from others, and grow together.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate('/explore')}>
                🧭 Browse All Posts
              </button>
              <button className="btn-secondary" onClick={() => navigate('/about')}>
                ℹ️ About Platform
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
