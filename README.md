# Portfolio RTC

Personal portfolio website for Diana Dinis, built as a single-page React application. The site presents an about section, work experience, featured projects, education, skills, and contact/social links in a clean scroll-based layout.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Lucide React and React Icons
- react-type-animation
- Vitest
- React Testing Library
- Netlify

## Project Structure

- `src/App.jsx` composes the main page sections.
- `src/components/` contains the section components and shared layout wrapper.
- `src/data.js` stores the portfolio content and navigation metadata.
- `src/index.css` defines the base styles and custom scrollbars.
- `netlify.toml` configures the production build, SPA routing, and security headers.

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates the production build in `dist`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs Oxlint.
- `npm test` runs the Vitest smoke tests once.
- `npm run test:watch` runs the tests in watch mode.

## Tests

The test suite covers basic smoke checks:

- the main sections render
- in-page navigation links point to existing section IDs
- project links stay valid
- footer and contact social links stay valid

These tests are intentionally lightweight so they can catch broken anchors, missing sections, and link regressions without relying on a browser automation stack.

## Deployment

The app is configured for Netlify.

- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback: all routes rewrite to `index.html`

Security headers are defined in `netlify.toml`, including:

- Content Security Policy
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- anti-framing protection via CSP `frame-ancestors`


## Notes

The portfolio content is data-driven through `src/data.js`, so updating experience, projects, education, or socials usually only requires changing that file.
