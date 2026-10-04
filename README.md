# Tulas International School (TIS) - Homepage Redesign

An animated, responsive redesign of the Tulas International School homepage. It keeps the school's copy, yellow-and-navy identity and official logo, and rebuilds the page as a modern single-page experience: a Himalayan-ridge parallax hero, a brand tagline ticker, an interactive sports index, and a validated enquiry form.

## Live Demo
- **Live URL:** [Insert Vercel / Netlify Link Here]
- **Repository:** [Insert GitHub Repo Link Here]

## Tech Stack
- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3 (theme tokens as CSS variables)
- **Animations:** Framer Motion 11 (plus CSS keyframes for the marquee and the 360 ring)
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify / GitHub Pages

## Standout Features Implemented
All four optional features are implemented.

1. **Custom cursor** (`components/animation/CustomCursor.jsx`): a spring-driven ring plus dot. Position lives in motion values, so mouse moves cause no React re-renders. The ring grows and fills over links, buttons, form controls and tabs. It only mounts when `(hover: hover) and (pointer: fine)` matches, so touch devices never get it.
2. **Scroll-triggered reveals** (`components/animation/Reveal.jsx`): `Reveal`, `Stagger` and `StaggerItem` use `whileInView` with `viewport={{ once: true }}`. Entrances take 0.5s with an 0.08s stagger.
3. **Animated dark/light theme switcher** (`components/animation/ThemeToggle.jsx`, `hooks/useTheme.js`): an accessible `role="switch"` with a sliding knob and a rotating sun/moon icon. The choice is saved in `localStorage` and falls back to the OS preference. A small inline script in `index.html` applies the saved theme before first paint, so there is no flash.
4. **Scroll progress bar** (`components/animation/ScrollProgress.jsx`): `useScroll` + `useSpring` driving `scaleX` on a fixed bar.

Other touches: a scroll-linked parallax hero, a nav underline that glides between sections (`layoutId` + `IntersectionObserver`), count-up statistics, an animated tab switcher, a scroll-snap review carousel, and a skip link.

## Getting Started Locally

Requires Node.js 18 or newer.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser.

Other scripts: `npm run build` (production build into `dist/`) and `npm run preview` (serve the build locally).

## Deployment

- **Vercel:** import the repo. Framework preset "Vite", build command `npm run build`, output directory `dist`.
- **Netlify:** build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** the site is served from `/<repo-name>/`, so build with the base path set:
  ```bash
  VITE_BASE=/tis-homepage-redesign/ npm run build
  ```
  then publish the `dist/` folder (for example with a GitHub Actions Pages workflow). Note that `index.html` references `/favicon.svg`; with a sub-path base Vite rewrites this automatically.

## Project Structure

```
src/
├── components/
│   ├── ui/          Button, Section, SectionHeading, Field, Logo
│   ├── layout/      Navbar, MobileNav, Footer
│   ├── sections/    Hero, Marquee, About, Stats, Rankings, Sports, Community,
│   │                VirtualTour, StudentVoices, Reviews, Enquire, Contact
│   └── animation/   CustomCursor, ScrollProgress, ThemeToggle, Reveal, variants
├── hooks/           useTheme, useMediaQuery, useActiveSection
├── data/            site.js (all copy, links, lists)
├── index.css        theme tokens (CSS variables) and global styles
├── App.jsx          page composition
└── main.jsx
```

### Architecture notes (for the technical review)

- **Content is separate from presentation.** Every string, link and list lives in `data/site.js`; section components only map over it.
- **Theming** uses CSS variables (`--paper`, `--surface`, `--ink`, `--muted`, `--line`) exposed as Tailwind colours with alpha support. Components use `bg-paper`, `text-ink` and so on, so no component needs `dark:` variants. Brand colours (`navy`, `accent`) are constant in both themes.
- **State is local and minimal.** `useTheme` is owned by `Navbar` (the only consumer). The cursor, enquiry form, carousel and tabs each keep their own state. Per-frame values (cursor position, scroll progress, count-up numbers, parallax) go through Framer Motion motion values rather than React state.
- **Hooks:** `useMediaQuery` wraps `useSyncExternalStore`; `useActiveSection` is a single `IntersectionObserver`; `useTheme` syncs state to the `<html>` class and `localStorage`.
- **Accessibility:** semantic landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`), skip link, visible focus rings, 44px+ touch targets, labelled form fields with `aria-invalid` / `aria-describedby`, ARIA tabs and switch roles, and `MotionConfig reducedMotion="user"` plus `motion-reduce` classes for CSS animations.
- **Performance:** animations use transform and opacity only; the map iframe is lazy-loaded; the cursor effect is skipped on touch devices.

## Brand Identity Retained
- Copy, statistics, rankings, personalities and parent reviews are taken from tis.edu.in.
- Yellow accent and navy base, echoing the yellow underline used in the original navigation.
- The official logo is loaded from tis.edu.in (with a text fallback if it cannot load).

## Known Limitations
- **The enquiry form is front-end only.** It validates and shows a confirmation but sends nothing, and the original site's OTP verification is not reproduced. Connect it to a real endpoint before using it in production.
- Personality photos, sports artwork and award images from the original site are not included; people are shown with initials instead.
- Several footer links point to documents on the live tis.edu.in site.
