# MateX Chess Landing Page

A modern, animated React + Vite landing page for a chess-themed product/brand (MateX), featuring smooth scrolling and scroll-driven transitions.

## Preview

This project includes:
- Hero video background with animated headline/content reveal
- Animated chess king piece transitions between sections
- Multiple storytelling sections with scroll-triggered effects
- Smooth scrolling powered by Lenis
- Interactive tilt card effects
- Responsive top navigation

## Tech Stack

- React 19
- Vite 7
- GSAP + ScrollTrigger
- Lenis
- react-parallax-tilt
- ESLint 9

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Starts the Vite dev server
- `npm run build` - Creates a production build
- `npm run preview` - Serves the production build locally
- `npm run lint` - Runs ESLint checks

## Project Structure

```text
Chess/
  public/
    images/
    videos/
  src/
    components/
      Hero.jsx
      Hero.css
      Navbar.jsx
      Navbar.css
    App.jsx
    lenis.js
    main.jsx
  index.html
  package.json
  vite.config.js
  eslint.config.js
```

## Notes

- Static assets are stored in `public/images` and `public/videos`.
- Smooth scrolling is initialized in `src/lenis.js` and called from `src/App.jsx`.
- Section animations are implemented in `src/components/Hero.jsx` using GSAP timelines and ScrollTrigger.

## License

This project is currently unlicensed. Add a license if you plan to distribute or open-source it.
