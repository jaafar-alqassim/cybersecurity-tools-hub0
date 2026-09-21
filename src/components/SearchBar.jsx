import { useRef } from 'react';

export default function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);

  const clear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className="search-box">
      <i className="fas fa-magnifying-glass s-ico" />
      <input
        ref={inputRef}
        id="searchInput"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by tool name, category, or keyword…"
        aria-label="Search tools by name, category, or keyword"
        autoComplete="off"
      />
      {value.trim() !== '' && (
        <button id="clearBtn" onClick={clear} title="Clear search" aria-label="Clear search">
          <i className="fas fa-xmark" />
        </button>
      )}
    </div>
  );
}
