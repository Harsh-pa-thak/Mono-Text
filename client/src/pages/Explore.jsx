import { useState, useEffect, useMemo } from 'react';
import BlogCard from '../components/BlogCard';
import BlogCardSkeleton from '../components/BlogCardSkeleton';
import { getBlogs, deleteBlog } from '../services/blogService';
import { useToast } from '../components/Toast';
import { useAuth } from '../context/AuthContext';

export default function Explore() {
  const { showToast } = useToast();
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeTags, setActiveTags] = useState([]);
  const [sort, setSort] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

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

  // All unique tags
  const allTags = useMemo(() => [...new Set(blogs.flatMap((b) => b.tags || []))], [blogs]);

  // Filtered + sorted blogs
  const filtered = useMemo(() => {
    let result = [...blogs];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.description?.toLowerCase().includes(q) ||
          b.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (activeTags.length > 0) {
      result = result.filter((b) => activeTags.some((t) => b.tags?.includes(t)));
    }
    switch (sort) {
      case 'oldest': result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); break;
      case 'popular': result.sort((a, b) => b.likes - a.likes); break;
      default: result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return result;
  }, [blogs, search, activeTags, sort]);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const resetFilters = () => {
    setSearch(''); setActiveTags([]); setSort('newest');
    showToast('Filters reset');
  };

  const gridClass = viewMode === 'list' ? 'blog-grid' : 'blog-grid';

  return (
    <>
      {/* Header */}
      <section className="hero" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <h1 className="fade-in" style={{ fontSize: '3rem' }}>Explore All Posts</h1>
          <p className="fade-in fade-in-delay-1">
            Discover in-depth articles, tutorials, and insights from our community.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Filters */}
          <div className="filters fade-in">
            <div style={{ marginBottom: '1.25rem' }}>
              <div className="search-container">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search posts by title, description, or tags..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'start' }}>
              <div>
                <label className="filter-label">🏷️ Filter by Tags</label>
                <div className="tag-filters">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      className={`tag-filter ${activeTags.includes(tag) ? 'active' : ''}`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ minWidth: 180 }}>
                <label className="filter-label">⬇️ Sort By</label>
                <select
                  className="sort-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                </select>

                <div style={{ marginTop: '0.75rem' }}>
                  <label className="filter-label">⊞ View Mode</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`action-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      title="Grid view"
                    >⊞</button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`action-btn ${viewMode === 'list' ? 'active' : ''}`}
                      title="List view"
                    >☰</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
              {filtered.length} {filtered.length === 1 ? 'post' : 'posts'} found
            </p>
            <button className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} onClick={resetFilters}>
              ↺ Reset Filters
            </button>
          </div>

          {/* Results Grid */}
          {loading ? (
            <div className={`blog-grid ${viewMode === 'list' ? 'blog-grid' : 'blog-grid'}`}>
              {Array(9).fill(0).map((_, i) => <BlogCardSkeleton key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <h3>No posts found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className={viewMode === 'list' ? 'blog-grid' : 'blog-grid'}>
              {filtered.map((blog) => (
                <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
