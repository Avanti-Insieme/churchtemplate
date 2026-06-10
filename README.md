# Lighthouse Gospel Ministry — React

A multi-page React site (Vite + React Router) for Lighthouse Gospel Ministry.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
index.html              App shell + Google Fonts
src/
  main.jsx              React entry + <BrowserRouter>
  App.jsx              Route table
  styles.css           All styling (design tokens in :root)
  components/
    Layout.jsx         CampusBar + Header + page + Footer
    CampusBar.jsx      Top utility bar (campus switcher)
    Header.jsx         Sticky nav (NavLink auto-highlights the active page)
    Footer.jsx
  pages/
    Home.jsx           Landing hub
    Visit.jsx          /plan-a-visit
    Watch.jsx          /watch
    Locations.jsx      /locations
    About.jsx          /about
    Events.jsx         /events  (events come from an array — edit EVENTS)
    Give.jsx           /give
public/
  assets/logo.png
```

## Theming

Brand color, fonts and shape are CSS variables in `:root` at the top of
`src/styles.css` (`--blue`, `--serif`, etc.). Change them in one place.

## Notes

- Image/video/map areas are styled placeholders; drop in real media when ready.
- "Get Directions", "Give Online", "Details" and social icons point to `#` —
  wire them to real URLs.
