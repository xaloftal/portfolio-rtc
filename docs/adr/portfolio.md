# Architecture Decision Record – Portfolio Timeline & Theming

## 1. Context

We are building a **single‑page portfolio** that showcases:
- About, Experience, Education, Skills, Projects, Contact sections.
- A **vertical scroll** for the whole page, but the **Experience** section should scroll **horizontally** (timeline) while the page scroll pauses.
- A typewriter title in the About section, a profile picture placeholder, a downloadable CV, and social links in the footer.
- Premium visual design using **React** + **Tailwind CSS** with a **semantic color system**.

## 2. Decision

| What we are building | Why we chose this approach |
|----------------------|---------------------------|
| **Sticky horizontal timeline** – a tall (`h-[300vh]`) wrapper that becomes `position: sticky` and maps vertical scroll progress to a `translateX` transform on the timeline cards. | Provides a smooth, native‑feel scroll‑jacking effect without heavy animation libraries. |
| **Semantic theming in `tailwind.config.js`** – central colour definitions (`primary`, `muted`, `card`, `border`, etc.) and removal of hard‑coded Tailwind colour utilities from components. | Allows the primary accent colour (currently `#faf27c`) to be changed in one place and propagate everywhere. |
| **React + Tailwind (no extra UI framework)** – keeps the bundle small and matches the user’s stack preference. | Simpler dev workflow, fast builds, and easy customisation. |
| **Pure CSS/JS implementation** – timeline line and dots are rendered with Tailwind utilities; width of the flex container is forced to `w-max` so the line spans the full scrollable width. | Guarantees compatibility across browsers and avoids extra runtime dependencies. |

## 3. Out of Scope

- Backend / CMS – the site is static; no API, database, or authentication.
- Multi‑page routing / server‑side rendering – we stay with a single‑page layout.
- Dark‑mode toggle – the current theme is dark; switching themes is not in this iteration.
- Analytics / third‑party tracking – not required for the portfolio showcase.
- Complex animation libraries (GSAP, Framer Motion, etc.) – rejected to keep the bundle lightweight.

## 4. Alternatives Considered & Rejected

| Alternative | Reason for rejection |
|-------------|----------------------|
| GSAP / Framer‑Motion scroll‑trigger | Adds a sizable dependency and complexity for a simple horizontal timeline. |
| Pure CSS `scroll-snap` for the timeline | Works only when the user manually scrolls; does not give the “vertical‑to‑horizontal” mapping the user requested. |
| Using Tailwind’s built‑in colour utilities directly (e.g., `bg-blue-500`) | Hard‑coded colours prevented easy theme updates; broke the new primary colour after changing it. |
| Separate pages for each section | Violates the original requirement for a single‑page, continuous scroll experience. |
| External UI kits (Bootstrap, Material‑UI) | Would clash with the custom, premium aesthetic and increase bundle size. |

## 5. Consequences

**Pros** – Fast load times, minimal JavaScript, easy theming, smooth native‑feel scroll experience, premium UI without heavy libraries.

**Cons** – Custom scroll‑jacking may need tweaking on very small viewports; no built‑in dark‑mode toggle (can be added later).
