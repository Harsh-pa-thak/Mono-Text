import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/Toast';

export default function Signup() {
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setError('All fields are required'); return;
    }
    if (form.password.length < 6) { setError('Password must be at least 6 characters'); return; }
    try {
      setLoading(true);
      await signup(form);
      // Auto-login after signup
      const { login: loginService } = await import('../services/authService');
      const { user } = await loginService({ email: form.email, password: form.password });
      login(user);
      showToast(`Welcome to MONOTEXT, ${user.username}!`, 'success');
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero" style={{ padding: '5rem 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="auth-card fade-in">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'var(--gradient-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', margin: '0 auto 1rem'
              }}></div>
              <h2 style={{ marginBottom: '0.25rem' }}>Create Account</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Join the MONOTEXT community
              </p>
            </div>

            {error && (
              <div style={{
                background: 'rgba(245, 87, 108, 0.1)', border: '1px solid rgba(245, 87, 108, 0.3)',
                borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem',
                color: '#f5576c', fontSize: '0.875rem', marginBottom: '1.25rem'
              }}>
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-input"
                  placeholder="yourname"
                  value={form.username}
                  onChange={handleChange}
                  autoComplete="username"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="At least 6 characters"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#667eea', fontWeight: 600 }}>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
