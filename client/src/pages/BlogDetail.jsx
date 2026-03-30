import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogById } from '../services/blogService';
import CommentSection from '../components/CommentSection';
import AISummary from '../components/AISummary';
import AIChat from '../components/AIChat';
import { useToast } from '../components/Toast';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });
}

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [chatOpen, setChatOpen] = useState(true);
  const [chatSummaryMsg, setChatSummaryMsg] = useState('');
  const contentRef = useRef(null);

  const handleSummarizeDone = (summary) => {
    setChatSummaryMsg(summary);
    setChatOpen(true);
  };

  useEffect(() => {
    loadBlog();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const winH = window.innerHeight;
      const docH = document.documentElement.scrollHeight - winH;
      setProgress((window.scrollY / docH) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadBlog = async () => {
    try {
      setLoading(true);
      const data = await getBlogById(id);
      setBlog(data);
      document.title = `${data.title} | MONOTEXT`;
    } catch (err) {
      showToast('Blog not found', 'error');
      navigate('/explore');
    } finally {
      setLoading(false);
    }
  };

  const sharePost = (platform) => {
    const url = window.location.href;
    const title = blog?.title || '';
    const urls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    if (urls[platform]) window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => showToast('Link copied!', 'success'));
  };

  if (loading) {
    return (
      <div className="page-loader" style={{ minHeight: '60vh' }}>
        <div className="spinner" />
      </div>
    );
  }

  if (!blog) return null;

  const imgSeed = blog.seed || blog._id;

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '3rem', alignItems: 'start' }}>
          {/* Main Content */}
          <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="blog-card-tags" style={{ marginBottom: '1rem' }}>
                {(blog.tags || []).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h1 className="blog-detail-title">{blog.title}</h1>

              <div className="blog-detail-meta">
                <div className="blog-card-author">
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', fontWeight: 700, color: 'white'
                  }}>
                    {blog.author?.[0]?.toUpperCase()}
                  </div>
                  <div>
                    <div className="author-name" style={{ fontSize: '1rem' }}>{blog.author}</div>
                    <div className="blog-meta">{formatDate(blog.createdAt)} • {blog.readTime}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <img
              src={`https://picsum.photos/seed/${imgSeed}/1200/600`}
              alt={blog.title}
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', objectFit: 'cover', height: 380 }}
            />

            {/* AI Summary Button */}
            <AISummary content={blog.content} onSummarize={handleSummarizeDone} />

            {/* Blog Content */}
            <div
              className="blog-detail-content"
              ref={contentRef}
              style={{ marginTop: '1.5rem' }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Author Card */}
            <div className="author-card">
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'var(--gradient-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem', fontWeight: 700, color: 'white', flexShrink: 0
              }}>
                {blog.author?.[0]?.toUpperCase()}
              </div>
              <div className="author-card-info">
                <h4 style={{ marginBottom: '0.5rem' }}>{blog.author}</h4>
                <p className="author-card-bio">
                  Passionate developer and technical writer sharing insights about modern web development.
                </p>
                <div className="author-social">
                  <a href="https://x.com/Harshpa01" className="social-link" target="_blank" rel="noreferrer">𝕏</a>
                  <a href="https://github.com/Harsh-pa-thak/" className="social-link" target="_blank" rel="noreferrer">GH</a>
                  <a href="https://www.linkedin.com/in/harsh-pathak-48389b1a3/" className="social-link" target="_blank" rel="noreferrer">LI</a>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="share-buttons">
              <button className="share-btn" onClick={() => sharePost('twitter')}>𝕏 Share on X</button>
              <button className="share-btn" onClick={() => sharePost('linkedin')}>LinkedIn</button>
              <button className="share-btn" onClick={copyLink}>📋 Copy Link</button>
            </div>

            {/* Comments */}
            <CommentSection blogId={id} />
          </div>

          {/* Sidebar */}
          <aside className="blog-detail-sidebar">
            <AIChat
              blogContent={blog.content}
              initialMessage={chatSummaryMsg}
              onClose={null}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
