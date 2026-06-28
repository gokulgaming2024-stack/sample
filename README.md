# 🍽️ The Cozy Corner - Restaurant Page

A restaurant website built with webpack featuring tabbed navigation.

## Project Structure

```
restaurant-page/
├── src/
│   ├── index.js         # Main entry point with tab switching logic
│   ├── template.html    # HTML template
│   ├── styles.css       # Global styles
│   ├── home.js          # Home page module
│   ├── menu.js          # Menu page module
│   └── contact.js       # Contact page module
├── webpack.config.js    # Webpack configuration
├── package.json         # Dependencies
└── .gitignore          # Git ignore rules
```

## Prerequisites

Node.js and npm must be installed on your system. Download from [nodejs.org](https://nodejs.org/)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run serve
   ```
   Open [http://localhost:8080](http://localhost:8080/) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This creates the `dist` folder with bundled files.

## Features

✅ Tabbed navigation (Home, Menu, Contact)
✅ Dynamic content loading with JavaScript modules
✅ Responsive design
✅ CSS bundling with webpack
✅ Development server with hot reload

## Deployment

To deploy to GitHub Pages:

1. **Create gh-pages branch (first time only):**
   ```bash
   git branch gh-pages
   ```

2. **Commit all changes:**
   ```bash
   git status
   git add .
   git commit -m "Your message"
   ```

3. **Deploy:**
   ```bash
   git checkout gh-pages
   git merge main --no-edit
   npm run build
   git add dist -f
   git commit -m "Deployment commit"
   git subtree push --prefix dist origin gh-pages
   git checkout main
   ```

4. **Configure GitHub Pages:**
   - Go to repository settings
   - Set GitHub Pages source branch to `gh-pages`
   - Your site will be live at `https://yourusername.github.io/restaurant-page`

## Development Notes

- Each page (home, menu, contact) is a separate module that handles its own content creation
- Tab switching logic is centralized in `index.js`
- All styles are bundled via webpack's style-loader and css-loader
- No global DOM elements except for the initial structure
