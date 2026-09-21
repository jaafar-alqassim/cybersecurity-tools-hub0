import { useDeferredValue, useMemo, useState } from 'react';
import { DATA } from './data/tools.js';
import { ALL_CATEGORIES } from './constants.js';
import { useTheme } from './hooks/useTheme.js';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import CategorySelect from './components/CategorySelect.jsx';
import CategorySection from './components/CategorySection.jsx';
import NoResults from './components/NoResults.jsx';
import Footer from './components/Footer.jsx';

function filterData(query, activeCategory) {
  const q = query.toLowerCase().trim();

  return DATA
    .filter((cat) => activeCategory === ALL_CATEGORIES || cat.name === activeCategory)
    .map((cat) => {
      if (!q) return cat;

      // A matching category name pulls in all of its tools; otherwise fall
      // back to matching the individual tool's name, tag, or description.
      const categoryMatches = cat.name.toLowerCase().includes(q);
      return {
        ...cat,
        tools: categoryMatches
          ? cat.tools
          : cat.tools.filter(
              (t) =>
                t.name.toLowerCase().includes(q) ||
                t.tag.toLowerCase().includes(q) ||
                t.desc.toLowerCase().includes(q)
            ),
      };
    })
    .filter((cat) => cat.tools.length > 0);
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);

  // Defer the filter+render work so typing in the search box stays responsive.
  const deferredQuery = useDeferredValue(query);

  const visible = useMemo(
    () => filterData(deferredQuery, activeCategory),
    [deferredQuery, activeCategory]
  );

  const toolCount = useMemo(
    () => visible.reduce((sum, cat) => sum + cat.tools.length, 0),
    [visible]
  );

  const resetFilters = () => {
    setQuery('');
    setActiveCategory(ALL_CATEGORIES);
  };

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        toolCount={toolCount}
        catCount={visible.length}
      />
      <main>
        <SearchBar value={query} onChange={setQuery} />
        <CategorySelect activeCategory={activeCategory} onSelect={setActiveCategory} />
        {visible.length > 0 ? (
          <div id="container">
            {visible.map((cat, i) => (
              <CategorySection key={cat.name} category={cat} index={i} />
            ))}
          </div>
        ) : (
          <NoResults onReset={resetFilters} />
        )}
      </main>
      <Footer />
    </>
  );
}
