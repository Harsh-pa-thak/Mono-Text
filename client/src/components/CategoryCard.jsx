export default function CategoryCard({ icon, name, count, variant }) {
  const iconClass = variant === 'accent' ? 'category-icon accent'
    : variant === 'success' ? 'category-icon success'
    : 'category-icon';

  return (
    <div className="category-card">
      <div className={iconClass}>{icon}</div>
      <h3 className="category-name">{name}</h3>
      <p className="category-count">{count} posts</p>
    </div>
  );
}
