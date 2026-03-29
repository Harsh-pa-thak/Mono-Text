import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getComments, addComment } from '../services/commentService';
import { useToast } from './Toast';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
}

export default function CommentSection({ blogId }) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadComments();
  }, [blogId]);

  const loadComments = async () => {
    try {
      setLoading(true);
      const data = await getComments(blogId);
      setComments(data);
    } catch {
      showToast('Failed to load comments', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    if (!user) { showToast('Please login to comment', 'error'); return; }

    try {
      setSubmitting(true);
      const { comment } = await addComment(blogId, { text, username: user.username });
      setComments((prev) => [comment, ...prev]);
      setText('');
      showToast('Comment posted!', 'success');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ marginTop: '3rem' }}>
      <h3 style={{ marginBottom: '1.5rem' }}>
        💬 Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      {user ? (
        <form onSubmit={handleSubmit} className="comment-form" style={{ marginBottom: '2rem' }}>
          <textarea
            className="form-input"
            placeholder={`Leave a comment as ${user.username}...`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            style={{ marginBottom: '0.75rem' }}
          />
          <button type="submit" className="btn-primary" disabled={submitting || !text.trim()}>
            {submitting ? '⏳ Posting...' : '💬 Post Comment'}
          </button>
        </form>
      ) : (
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)', padding: '1.25rem',
          marginBottom: '2rem', color: 'var(--text-secondary)', textAlign: 'center'
        }}>
          <a href="/login" style={{ color: '#667eea', fontWeight: 600 }}>Login</a> to leave a comment.
        </div>
      )}

      {/* Comments List */}
      {loading ? (
        <div className="page-loader"><div className="spinner" /></div>
      ) : comments.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">💭</div>
          <h3>No comments yet</h3>
          <p>Be the first to share your thoughts!</p>
        </div>
      ) : (
        <div>
          {comments.map((c) => (
            <div key={c._id} className="comment-card">
              <div className="comment-header">
                <div className="comment-avatar">{c.username[0].toUpperCase()}</div>
                <div>
                  <div className="comment-username">{c.username}</div>
                  <div className="comment-date">{formatDate(c.createdAt)}</div>
                </div>
              </div>
              <p className="comment-text">{c.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
