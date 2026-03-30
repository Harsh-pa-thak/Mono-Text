import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function BlogCard({ blog, onDelete }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const imgSeed = blog.seed || blog._id || 'default';
  const imgUrl = `https://picsum.photos/seed/${imgSeed}/800/500`;

  return (
    <div className="blog-card" style={{ cursor: 'pointer' }} onClick={() => navigate(`/blog/${blog._id}`)}>
      <div className="blog-card-image">
        <img src={imgUrl} alt={blog.title} loading="lazy" />
        <div className="blog-card-overlay" />
      </div>

      <div className="blog-card-body">
        <div className="blog-card-tags">
          {(blog.tags || []).slice(0, 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <h3 className="blog-card-title">{blog.title}</h3>

        <p className="blog-card-description">
          {blog.description || blog.content?.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
        </p>

        <div className="blog-card-footer">
          <div className="blog-card-author">
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'var(--gradient-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700, color: 'white', flexShrink: 0
            }}>
              {blog.author?.[0]?.toUpperCase() || '?'}
            </div>
            <div>
              <div className="author-name">{blog.author}</div>
              <div className="blog-meta">
                {blog.readTime || '5 min read'} • {formatDate(blog.createdAt)}
              </div>
            </div>
          </div>

          <div className="blog-card-actions">
            {user && user.username === blog.author && onDelete && (
              <button
                className="action-btn"
                onClick={(e) => { e.stopPropagation(); onDelete(blog._id); }}
                title="Delete post"
                style={{ color: '#f5576c' }}
              >
                🗑
              </button>
            )}
            <button
              className="action-btn"
              onClick={() => navigate(`/blog/${blog._id}`)}
              title="Read post"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
