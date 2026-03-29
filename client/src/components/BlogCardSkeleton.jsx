export default function BlogCardSkeleton() {
  return (
    <div className="blog-card">
      <div className="skeleton" style={{ height: 200 }} />
      <div style={{ padding: '1.5rem' }}>
        <div className="skeleton skeleton-text" style={{ width: '40%', marginBottom: '1rem' }} />
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" style={{ width: '60%', marginBottom: '1.5rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <div className="skeleton" style={{ width: 32, height: 32, borderRadius: '50%' }} />
            <div>
              <div className="skeleton skeleton-text" style={{ width: 80 }} />
              <div className="skeleton skeleton-text" style={{ width: 60 }} />
            </div>
          </div>
          <div className="skeleton" style={{ width: 36, height: 36, borderRadius: 8 }} />
        </div>
      </div>
    </div>
  );
}
