import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '2rem' }}>
          <div>
            <div className="footer-brand">MONOTEXT</div>
            <p className="footer-description">
              A premium blog platform for developers and designers to share knowledge,
              experiences, and insights on modern web development.
            </p>
            <div className="author-social">
              <a href="https://x.com/Harshpa01" className="social-link" target="_blank" rel="noreferrer">𝕏</a>
              <a href="https://github.com/Harsh-pa-thak/" className="social-link" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/harsh-pathak-48389b1a3/" className="social-link" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Platform</h4>
            <ul className="footer-links">
              <li><span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span></li>
              <li><span style={{ cursor: 'pointer' }} onClick={() => navigate('/explore')}>Explore</span></li>
              <li><span style={{ cursor: 'pointer' }} onClick={() => navigate('/profile')}>Profile</span></li>
              <li><span style={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>About</span></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Guidelines</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Community</h4>
            <ul className="footer-links">
              <li><a href="#">Discord</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 MONOTEXT. All rights reserved. Built by Harsh and Anubhav, for developers.
        </div>
      </div>
    </footer>
  );
}
