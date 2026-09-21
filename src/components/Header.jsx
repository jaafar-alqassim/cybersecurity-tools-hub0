export default function Header({ theme, onToggleTheme, toolCount, catCount }) {
  const isDark = theme === 'dark';

  return (
    <header className="site-header">
      <a
        className="brand"
        href="https://www.instagram.com/cyberj.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="brand-name">CYBERJ.IO</span>
        <span className="brand-insta">
          <i className="fab fa-instagram" />
        </span>
      </a>
      <button
        className="theme-btn"
        onClick={onToggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'} />
        <span className="btn-lbl">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
      <div className="hdr-inner">
        <div className="eyebrow">
          <i className="fas fa-shield-halved" /> Professional Security Toolkit
        </div>
        <h1 className="site-title">
          🛡️ Cyber Security <em>Tools Hub</em>
        </h1>
        <p className="site-sub">
          Your centralized gateway to the most powerful cybersecurity tools.
          <br />
          Official links, concise descriptions, and clear categories — all in one place.
        </p>
        <div className="stats-row">
          <span className="stat-pill">
            <i className="fas fa-toolbox" />
            {'\u2009'}
            <b>{toolCount}</b>
            {'\u2009'}Tools
          </span>
          <span className="stat-pill">
            <i className="fas fa-layer-group" />
            {'\u2009'}
            <b>{catCount}</b>
            {'\u2009'}Categories
          </span>
          <span className="stat-pill">
            <i className="fas fa-circle-check" />
            {'\u2009'}Official Links Only
          </span>
        </div>
      </div>
    </header>
  );
}
