import { memo } from 'react';
import { rgba } from '../utils/colors.js';

function ToolCard({ tool, color, delay }) {
  return (
    <article className="tool-card" style={{ '--c': color, animationDelay: `${delay}ms` }}>
      <div className="card-head">
        <div className="t-ico" style={{ background: rgba(color, 0.14), color }}>
          <i className={`fas ${tool.icon}`} />
        </div>
        <div>
          <div className="t-name">{tool.name}</div>
          <span
            className="t-tag"
            style={{ color, background: rgba(color, 0.12), borderColor: rgba(color, 0.28) }}
          >
            {tool.tag}
          </span>
        </div>
      </div>
      <p className="t-desc">{tool.desc}</p>
      <div className="t-links">
        <a className="t-link" href={tool.url} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-arrow-up-right-from-square" /> Visit Website
        </a>
        {tool.url2 && (
          <a
            className={`t-link${tool.url2Style === 'same' ? '' : ' t-link-alt'}`}
            href={tool.url2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fas ${tool.url2Icon || 'fa-terminal'}`} />{' '}
            {tool.url2Label || 'Kali Tools'}
          </a>
        )}
      </div>
    </article>
  );
}

export default memo(function CategorySection({ category, index }) {
  const catDelay = index * 55;

  return (
    <section className="cat-sec" style={{ animationDelay: `${catDelay}ms` }}>
      <div className="cat-hdr">
        <div
          className="cat-ico"
          style={{ background: rgba(category.color, 0.15), color: category.color }}
        >
          <i className={`fas ${category.icon}`} />
        </div>
        <span className="cat-label">{category.name}</span>
        <div className="cat-line" />
        <span className="cat-badge">
          {category.tools.length} tool{category.tools.length > 1 ? 's' : ''}
        </span>
      </div>
      <div className="tool-grid">
        {category.tools.map((tool, ti) => (
          <ToolCard
            key={tool.name}
            tool={tool}
            color={category.color}
            delay={catDelay + (ti + 1) * 55}
          />
        ))}
      </div>
    </section>
  );
});
