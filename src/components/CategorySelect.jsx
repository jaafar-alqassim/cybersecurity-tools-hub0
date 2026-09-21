import { useEffect, useRef, useState } from 'react';
import { DATA } from '../data/tools.js';
import { ALL_CATEGORIES } from '../constants.js';
import { rgba } from '../utils/colors.js';

const TOTAL_TOOLS = DATA.reduce((sum, cat) => sum + cat.tools.length, 0);

export default function CategorySelect({ activeCategory, onSelect }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // Close the dropdown when clicking anywhere outside it.
  useEffect(() => {
    if (!open) return;
    const onDocumentClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, [open]);

  const isAll = activeCategory === ALL_CATEGORIES;
  const active = isAll ? null : DATA.find((c) => c.name === activeCategory);

  const select = (name) => {
    onSelect(name);
    setOpen(false);
  };

  return (
    <div className="cat-select" ref={wrapRef}>
      <button
        type="button"
        className={`cat-select-btn${open ? ' open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span
          className="cs-ico"
          style={{
            '--c': isAll ? 'var(--accent)' : active.color,
            '--c-bg': isAll ? 'var(--accent-tint)' : rgba(active.color, 0.14),
          }}
        >
          <i className={`fas ${isAll ? 'fa-layer-group' : active.icon}`} />
        </span>
        <span className="cs-label">{isAll ? 'All Categories' : active.name}</span>
        <i className="fas fa-chevron-down cs-chevron" />
      </button>

      {open && (
        <div className="cat-dropdown open" role="listbox" aria-label="Categories">
          <button
            className={`cat-option${isAll ? ' selected' : ''}`}
            onClick={() => select(ALL_CATEGORIES)}
            role="option"
            aria-selected={isAll}
          >
            <span className="co-ico" style={{ '--c': 'var(--accent)', '--c-bg': 'var(--accent-tint)' }}>
              <i className="fas fa-layer-group" />
            </span>
            All Categories
            <span className="co-count">{TOTAL_TOOLS}</span>
          </button>
          {DATA.map((cat) => {
            const selected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                className={`cat-option${selected ? ' selected' : ''}`}
                onClick={() => select(cat.name)}
                role="option"
                aria-selected={selected}
              >
                <span
                  className="co-ico"
                  style={{ '--c': cat.color, '--c-bg': rgba(cat.color, 0.14) }}
                >
                  <i className={`fas ${cat.icon}`} />
                </span>
                {cat.name}
                <span className="co-count">{cat.tools.length}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
