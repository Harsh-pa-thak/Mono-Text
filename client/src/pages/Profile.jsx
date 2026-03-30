import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getBlogs, deleteBlog } from '../services/blogService';
import BlogCard from '../components/BlogCard';
import BlogCardSkeleton from '../components/BlogCardSkeleton';
import { useToast } from '../components/Toast';

export default function Profile() {
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { navigate('/login'); return; }
    loadUserBlogs();
  }, [user]);

  const loadUserBlogs = async () => {
    try {
      setLoading(true);
      const all = await getBlogs();
      setBlogs(all.filter((b) => b.author === user.username));
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

  const totalLikes = blogs.reduce((sum, b) => sum + (b.likes || 0), 0);

  if (!user) return null;

  return (
    <>
      {/* Profile Header */}
      <section className="profile-hero">
        <div className="container">
          <div style={{
            width: 120, height: 120, borderRadius: '50%',
            background: 'var(--gradient-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '3rem', fontWeight: 700, color: 'white',
            margin: '0 auto 1.5rem', border: '4px solid var(--border)'
          }}>
            {user.username[0].toUpperCase()}
          </div>

          <h1 className="profile-name fade-in">{user.username}</h1>
          <p className="profile-bio fade-in fade-in-delay-1">{user.email}</p>

          <div className="profile-stats fade-in fade-in-delay-2">
            <div className="stat">
              <span className="stat-value">{blogs.length}</span>
              <span className="stat-label">Posts</span>
            </div>
            <div className="stat">
              <span className="stat-value">{totalLikes.toLocaleString()}</span>
              <span className="stat-label">Total Likes</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/write')}>
              Write New Post
            </button>
            <button className="btn-secondary" onClick={() => { logout(); navigate('/'); showToast('Logged out!'); }}>
              Log Out
            </button>
          </div>
        </div>
      </section>

      {/* Author's Posts */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your Posts</h2>
            <p className="section-subtitle">All articles you've written</p>
          </div>

          {loading ? (
            <div className="blog-grid">
              {Array(3).fill(0).map((_, i) => <BlogCardSkeleton key={i} />)}
            </div>
          ) : blogs.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📝</div>
              <h3>No posts yet</h3>
              <p>Share your knowledge with the community!</p>
              <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={() => navigate('/write')}>
                Write Your First Post
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
