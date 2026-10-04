# Tulas International School (TIS) — Homepage Redesign

A modern, animated, and responsive redesign of the **Tulas International School (TIS)** homepage, built with React, Vite, Tailwind CSS, and Framer Motion.

The project preserves the school's **yellow-and-navy visual identity, official logo, and core website content**, while rebuilding the homepage as a polished single-page experience with interactive animations, responsive layouts, accessibility support, and performance-conscious implementation.

---

## Overview

This project reimagines the Tulas International School homepage as a modern single-page web experience.

The redesign combines the original school's identity and content with modern frontend techniques such as:

* Responsive layouts
* Scroll-based animations
* Himalayan-inspired parallax effects
* Interactive sections
* Dark / light theme switching
* Custom cursor interactions
* Accessible form validation
* Animated statistics
* Smooth navigation
* Reduced-motion support

The project focuses on **component reusability, maintainability, accessibility, responsive design, and animation performance**.

---

## Key Features

### Animated Hero Section

* Himalayan-inspired parallax design
* Layered mountain/ridge animations
* Scroll-linked movement
* Responsive typography and layout
* Primary call-to-action
* Reduced-motion support

### Custom Cursor

The custom cursor is implemented using Framer Motion.

Features include:

* Spring-based cursor ring
* Center cursor dot
* Interactive hover states
* Enlarged cursor over buttons, links, tabs, and form controls
* Motion values instead of React state for cursor movement

The cursor is automatically disabled on touch and coarse-pointer devices.

### Scroll-Triggered Animations

Reusable animation components provide consistent entrance effects throughout the page.

Implemented components include:

* `Reveal`
* `Stagger`
* `StaggerItem`

Animations are triggered when sections enter the viewport and are configured to run only once.

### Dark / Light Theme

The website includes an animated theme switcher with:

* Light theme
* Dark theme
* System preference fallback
* `localStorage` persistence
* Animated sun/moon transition
* Theme applied before first paint to reduce flash

### Scroll Progress

A fixed scroll progress indicator shows the user's current position on the page.

It uses Framer Motion's:

* `useScroll`
* `useSpring`

### Interactive Navigation

The navigation includes:

* Active section detection
* Smooth scrolling
* Animated active-section underline
* Responsive mobile navigation
* Intersection Observer-based section tracking

### Animated Statistics

Important school statistics are displayed using animated counters, including:

* 22-acre campus
* 16+ Olympic sports
* 24×7 medical assistance
* 6:1 student–teacher ratio

### Interactive Sports Section

The sports section presents the school's sports offerings through an interactive interface.

Sports include:

* Archery
* Cycling
* Hockey
* Swimming
* Taekwondo
* Football
* Shooting Range
* Horse Riding
* Billiards
* Squash
* Volleyball
* Basketball
* Cricket
* Lawn Tennis
* Badminton
* Table Tennis

### Rankings & Achievements

The project includes a structured rankings section containing:

* Ranking position
* Location
* School/category information
* Source references

### Student Voices & Parent Reviews

The website includes:

* Student testimonials
* Parent reviews
* Featured review
* Responsive review cards
* Horizontal scroll-snap interaction

### Enquiry Form

The enquiry form includes client-side validation for:

* Parent/guardian name
* Phone number
* Student class
* State
* Consent

Accessibility attributes include:

* `aria-invalid`
* `aria-describedby`
* Proper form labels
* Keyboard-friendly controls

The form displays a confirmation state after successful validation.

> **Note:** The enquiry form is currently frontend-only. It does not send data to a backend or implement OTP verification.

---

## Tech Stack

| Technology                      | Purpose                                  |
| ------------------------------- | ---------------------------------------- |
| React 18                        | Component-based UI development           |
| Vite 5                          | Development and production build tooling |
| Tailwind CSS 3                  | Responsive styling                       |
| Framer Motion 11                | Animations and interactive motion        |
| Lucide React                    | Icons                                    |
| JavaScript                      | Application logic                        |
| CSS Variables                   | Theme tokens and theming                 |
| Vercel / Netlify / GitHub Pages | Deployment                               |

---

## Project Structure

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Field.jsx
│   │   ├── Logo.jsx
│   │   ├── Section.jsx
│   │   └── SectionHeading.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── MobileNav.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── About.jsx
│   │   ├── Stats.jsx
│   │   ├── Rankings.jsx
│   │   ├── Sports.jsx
│   │   ├── Community.jsx
│   │   ├── VirtualTour.jsx
│   │   ├── StudentVoices.jsx
│   │   ├── Reviews.jsx
│   │   ├── Enquire.jsx
│   │   └── Contact.jsx
│   │
│   └── animation/
│       ├── CustomCursor.jsx
│       ├── Reveal.jsx
│       ├── ScrollProgress.jsx
│       ├── ThemeToggle.jsx
│       └── variants.js
│
├── hooks/
│   ├── useActiveSection.js
│   ├── useMediaQuery.js
│   └── useTheme.js
│
├── data/
│   └── site.js
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## Architecture

### Content-Driven Architecture

Website content is separated from presentation and maintained in:

```text
src/data/site.js
```

This includes:

* Navigation links
* School information
* Statistics
* Rankings
* Sports
* Student information
* Reviews
* Form options
* Footer links
* Social links

This approach keeps the React components focused on rendering and interaction instead of storing large amounts of static content.

### Reusable Components

Common UI elements are extracted into reusable components such as:

* `Button`
* `Section`
* `SectionHeading`
* `Field`
* `Logo`

Animation behavior is also separated into reusable components.

### Custom Hooks

The project uses custom hooks for:

* Theme management
* Media query detection
* Active section detection

`useMediaQuery` uses `useSyncExternalStore`, while `useActiveSection` uses `IntersectionObserver`.

---

## Theme System

The application uses CSS variables for theme tokens.

Core variables include:

```text
--paper
--surface
--ink
--muted
--line
```

These values are exposed through Tailwind utility classes such as:

```text
bg-paper
bg-surface
text-ink
text-muted
border-line
```

The school's primary brand colors remain consistent across light and dark themes.

---

## Animation & Performance

The project uses Framer Motion for interactive animations while avoiding unnecessary React re-renders.

Motion values are used for high-frequency effects such as:

* Cursor movement
* Scroll progress
* Hero parallax
* Animated counters

Animations primarily use:

```text
transform
opacity
```

to reduce layout and paint overhead.

Additional performance considerations include:

* Custom cursor disabled on touch devices
* Lazy-loaded map iframe
* `viewport={{ once: true }}` for reveal animations
* Reduced-motion support
* Motion values instead of React state for frame-based animation

---

## Accessibility

Accessibility was considered throughout the implementation.

The website includes:

* Semantic HTML landmarks
* Skip-to-content link
* Keyboard-accessible controls
* Visible focus states
* Large touch targets
* Proper form labels
* ARIA attributes for validation
* ARIA tabs
* ARIA switch
* Reduced-motion support

Framer Motion is configured to respect user motion preferences:

```jsx
<MotionConfig reducedMotion="user">
```

---

## Brand Identity

The redesign intentionally preserves the visual identity of Tulas International School.

### Brand Elements

* Navy primary color
* Yellow accent
* Yellow navigation underline
* Official school logo
* School-specific content
* Himalayan-inspired visual direction

The official logo is loaded from the school's website with a text fallback if the image cannot be loaded.

---

## Getting Started

### Prerequisites

Make sure you have:

* Node.js 18 or newer
* npm

### Clone the Repository

```bash
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:5173
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Create the production build  |
| `npm run preview` | Preview the production build |

---

## Deployment

### Vercel

Import the repository into Vercel.

Use:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

### Netlify

Use:

```text
Build Command: npm run build
Publish Directory: dist
```

### GitHub Pages

If the repository is hosted under a sub-path, build using:

```bash
VITE_BASE=/tis-homepage-redesign/ npm run build
```

Then deploy the generated `dist` directory using GitHub Pages or GitHub Actions.

---

## Known Limitations

### Enquiry Form

The enquiry form currently performs client-side validation and displays a success state.

It does not currently:

* Send form data to a backend
* Store enquiries
* Send emails
* Implement OTP verification

A production deployment should connect the form to a secure backend or form-processing service.

### OTP Verification

The OTP verification flow from the original website has not been reproduced.

### Original Media Assets

Some original website assets have intentionally not been reproduced, including:

* Personality photographs
* Sports artwork
* Award images

Where appropriate, initials or redesigned visual elements are used.

### External Resources

Some resources continue to reference the official Tulas International School website, including external documents, virtual tour resources, map content, social links, and the official logo.

---

## Future Improvements

Potential future enhancements include:

* Backend integration for enquiry submissions
* Secure OTP verification
* Server-side form validation
* Automated unit and component testing
* SEO metadata
* Structured data
* Analytics integration
* Improved image optimization
* CMS-based content management
* CI/CD pipeline
* Production error monitoring
* Improved form submission feedback

---

## Project Objective

The goal of this project is to demonstrate how an existing educational website can be transformed into a **modern, responsive, accessible, and animation-rich React experience** while preserving its original brand identity and core content.

The project demonstrates:

* React component architecture
* Reusable UI components
* Responsive design
* Tailwind CSS
* Framer Motion
* Custom React hooks
* Accessibility practices
* Theme management
* Performance-conscious animation
* Content-driven architecture

---

## Disclaimer

This project is a **frontend redesign / concept implementation** of the Tulas International School homepage and is intended for educational, portfolio, and technical demonstration purposes.

Tulas International School's name, branding, logo, content, and related materials belong to their respective owners.
