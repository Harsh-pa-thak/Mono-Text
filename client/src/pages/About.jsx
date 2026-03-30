export default function About() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built with performance in mind using React + Vite and an optimized Express backend.' },
    { icon: '🎨', title: 'Beautiful Design', desc: 'A premium dark/light interface with glassmorphism, animated gradients, and smooth micro-interactions.' },
    { icon: '🤖', title: 'AI Powered', desc: 'Google Gemini integration provides instant intelligent blog summaries with a single click.' },
    { icon: '💬', title: 'Community Driven', desc: 'Built-in commenting system lets readers engage directly with authors.' },
    { icon: '🔒', title: 'Secure Auth', desc: 'bcrypt-hashed passwords and simple session management keep the platform safe.' },
    { icon: '📱', title: 'Fully Responsive', desc: 'Works beautifully on every screen size from mobile to desktop.' },
  ];

  const timeline = [
    { date: 'Jan 2026', title: 'MONOTEXT v1 Launch', desc: 'Initial static HTML/CSS/JS version with hardcoded blog posts.' },
    { date: 'Feb 2026', title: 'UI Polish', desc: 'Dark/light themes, glassmorphism cards, animated blobs, and skeleton loading.' },
    { date: 'Mar 2026', title: 'Full-Stack Migration', desc: 'React + Node.js + MongoDB with real-time data, auth, and AI summarization.' },
    { date: 'Future', title: 'What\'s Next', desc: 'Rich text editor, image uploads, tagging system, and user following.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ padding: '5rem 0 3rem' }}>
        <div className="container">
          <h1 className="fade-in">About MONOTEXT</h1>
          <p className="fade-in fade-in-delay-1">
            A premium blogging platform for developers and designers. Built to share knowledge,
            spark ideas, and inspire the next generation of creators.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-subtitle">Built with care, for developers who care</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {features.map((f, i) => (
              <div key={f.title} className="feature-card fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-description">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">Modern tools for a modern platform</p>
          </div>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
              {[
                { icon: '⚛️', name: 'React', desc: 'Vite-powered frontend' },
                { icon: '🎨', name: 'Tailwind CSS', desc: 'Utility-first styling' },
                { icon: '🟢', name: 'Node.js', desc: 'Express REST API' },
                { icon: '🍃', name: 'MongoDB', desc: 'Flexible document DB' },
              ].map((tech) => (
                <div key={tech.name} style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{tech.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{tech.name}</div>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>{tech.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">From a static page to a full-stack platform</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 700, margin: '0 auto' }}>
            {timeline.map((item, i) => (
              <div key={i} className="glass-panel fade-in" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', animationDelay: `${i * 0.1}s` }}>
                <div style={{ minWidth: 80, textAlign: 'center' }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%',
                    background: 'var(--gradient-primary)', margin: '0 auto 0.5rem'
                  }} />
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>{item.date}</div>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.375rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Built By</h2>
            <p className="section-subtitle">Made By Harsh And Anubhav</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: 600, margin: '0 auto' }}>
            {[
              { name: 'Harsh Pathak', role: 'Full-Stack Developer', github: 'https://github.com/Harsh-pa-thak/', twitter: 'https://x.com/Harshpa01' },
              { name: 'Anubhav', role: 'Frontend Developer', github: '#', twitter: '#' },
            ].map((person) => (
              <div key={person.name} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%', background: 'var(--gradient-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem', color: 'white', margin: '0 auto 1rem'
                }}>
                  {person.name[0]}
                </div>
                <h4 style={{ marginBottom: '0.25rem' }}>{person.name}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>{person.role}</p>
                <div className="author-social" style={{ justifyContent: 'center' }}>
                  <a href={person.twitter} className="social-link" target="_blank" rel="noreferrer">𝕏</a>
                  <a href={person.github} className="social-link" target="_blank" rel="noreferrer">GH</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
