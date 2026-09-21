# Cyber Security Tools Hub

A curated, searchable directory of professional cybersecurity tools — network scanning, web application testing, exploitation, SIEM, forensics, and more. Every link points to the official project or vendor website.

## What's inside

- **152 tools** across **52 categories**
- Live search by tool name, category, or keyword
- Dark / light theme toggle
- Responsive card layout
- Built with **React + Vite**

## Quick start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project structure

```
├── index.html              # App entry point
├── src/
│   ├── App.jsx             # Search / filter logic
│   ├── main.jsx            # React root
│   ├── data/tools.js       # 152 tools dataset
│   ├── components/         # Header, SearchBar, CategorySection, etc.
│   ├── hooks/useTheme.js   # Theme persistence
│   ├── styles/global.css   # Design tokens & layout
│   └── utils/colors.js     # Hex → rgba helper
├── public/favicon.svg      # Site icon
├── vite.config.js          # Vite + relative base config
└── .github/workflows/      # GitHub Pages deployment
```

## Deployment

The production build is output to the `dist/` folder. `vite.config.js` uses a relative base path (`./`), so the built site works on any static host.

```bash
npm run build
```

Then upload the contents of `dist/` to your hosting provider.

## Contributing

Tool data lives in `src/data/tools.js`. Each entry follows this schema:

```js
{
  name: "Category Name",
  icon: "fa-icon-name",
  color: "#hexcolor",
  tools: [
    {
      name: "Tool Name",
      icon: "fa-icon-name",
      tag: "Short tag",
      desc: "One-sentence description.",
      url: "https://official-link.example",
      // Optional secondary link
      url2: "https://...",
      url2Label: "Docs",
      url2Icon: "fa-book",
      url2Style: "alt" // or "same"
    }
  ]
}
```

Icons are [Font Awesome 6 Free](https://fontawesome.com/search?m=free) classes.

## License

Licensed under [CC-BY-4.0](LICENSE).
