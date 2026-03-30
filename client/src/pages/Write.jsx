import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createBlog } from '../services/blogService';
import { useToast } from '../components/Toast';

export default function Write() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [form, setForm] = useState({ title: '', content: '', description: '' });
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleTagKey = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim().replace(',', '');
      if (!tags.includes(newTag) && tags.length < 5) {
        setTags((prev) => [...prev, newTag]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tag) => setTags((prev) => prev.filter((t) => t !== tag));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      setError('Title and content are required'); return;
    }
    try {
      setLoading(true);
      const { blog } = await createBlog({
        ...form,
        tags,
        author: user.username,
      });
      showToast('Post published!', 'success');
      navigate(`/blog/${blog._id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Write a Post</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Share your knowledge with the MONOTEXT community</p>
        </div>

        <div className="write-card fade-in">
          {error && (
            <div style={{
              background: 'rgba(245, 87, 108, 0.1)', border: '1px solid rgba(245, 87, 108, 0.3)',
              borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem',
              color: '#f5576c', fontSize: '0.875rem', marginBottom: '1.5rem'
            }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Title *</label>
              <input
                type="text"
                name="title"
                className="form-input"
                placeholder="Give your post a clear, compelling title..."
                value={form.title}
                onChange={handleChange}
                maxLength={200}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Short Description</label>
              <input
                type="text"
                name="description"
                className="form-input"
                placeholder="A brief summary shown on cards (optional)..."
                value={form.description}
                onChange={handleChange}
                maxLength={300}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Tags{' '}
                <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>
                  (Press Enter or comma to add, max 5)
                </span>
              </label>
              <div className="tag-input-container">
                {tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                    <button type="button" className="tag-chip-remove" onClick={() => removeTag(tag)}>✕</button>
                  </span>
                ))}
                <input
                  type="text"
                  className="tag-input-field"
                  placeholder={tags.length < 5 ? 'Add a tag...' : 'Max 5 tags'}
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKey}
                  disabled={tags.length >= 5}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Content * <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>(HTML supported)</span></label>
              <textarea
                name="content"
                className="form-input"
                placeholder={`Write your post content here...

You can use HTML tags like:
<h2>Section Title</h2>
<p>Paragraph text</p>
<pre><code>code block</code></pre>
<ul><li>List item</li></ul>
<blockquote>Quote text</blockquote>`}
                value={form.content}
                onChange={handleChange}
                rows={20}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={loading}
              >
                {loading ? 'Publishing...' : 'Publish Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
