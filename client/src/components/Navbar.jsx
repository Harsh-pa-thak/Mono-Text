import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Explore', path: '/explore' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <span className="navbar-brand" onClick={() => navigate('/')}>
          MONOTEXT
        </span>

        {/* Desktop Nav */}
        <ul className="navbar-nav" style={{ display: 'flex' }}>
          {navItems.map((item) => (
            <li key={item.path}>
              <span
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => navigate(item.path)}
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </span>
            </li>
          ))}
          {user && (
            <li>
              <span
                className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
                onClick={() => navigate('/profile')}
                style={{ cursor: 'pointer' }}
              >
                Profile
              </span>
            </li>
          )}
        </ul>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                onClick={() => navigate('/write')}>
                ✏️ Write
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.875rem', fontWeight: 700, color: 'white', flexShrink: 0
                }}>
                  {user.username[0].toUpperCase()}
                </div>
                <button className="btn-secondary" style={{ padding: '0.4rem 0.875rem', fontSize: '0.8rem' }}
                  onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                onClick={() => navigate('/signup')}>
                Sign Up
              </button>
            </div>
          )}

          {/* Mobile Toggle */}
          <button className="nav-toggler" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`navbar-nav-wrapper ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <span
            key={item.path}
            className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => { navigate(item.path); setMenuOpen(false); }}
            style={{ cursor: 'pointer' }}
          >
            {item.label}
          </span>
        ))}
        {user && (
          <span className="nav-link" onClick={() => { navigate('/profile'); setMenuOpen(false); }}>
            Profile
          </span>
        )}
      </div>
    </nav>
  );
}
