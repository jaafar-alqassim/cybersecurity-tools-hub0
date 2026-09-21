export default function NoResults({ onReset }) {
  return (
    <div id="noResults" className="show">
      <i className="fas fa-magnifying-glass" />
      <h3>No tools found</h3>
      <p>
        Try a different keyword or category, or <button onClick={onReset}>reset all filters</button>.
      </p>
    </div>
  );
}
