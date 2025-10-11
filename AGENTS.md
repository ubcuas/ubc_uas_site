# Repository Guidelines

## Project Structure & Module Organization
Client code lives under `src/`, with `main.jsx` bootstrapping the React app and `App.jsx` providing the root layout. Place feature-specific components alongside their hooks and styles; reuse-ready assets belong in `src/assets/`. Static files served as-is sit in `public/` (favicons, manifest). Configuration stays in `vite.config.js` and lint rules in `eslint.config.js`. When adding tests, colocate them as `ComponentName.test.jsx` or inside `src/__tests__/` for shared utilities.

## Build, Test, and Development Commands
- `npm install` to sync dependencies from `package.json` before your first run.
- `npm run dev` to start the Vite dev server with hot reload on http://localhost:5173.
- `npm run build` to create the production bundle in `dist/` for deployment checks.
- `npm run preview` to serve the optimized build locally and confirm routing/assets.
- `npm run lint` (or `npm run lint -- --fix`) to enforce formatting prior to commits.

## Coding Style & Naming Conventions
Stick to modern function components, React hooks, and PascalCase filenames (`NavBar.jsx`). Use two-space indentation, single quotes for strings, and trailing commas where valid. Keep components focused, export only what you consume, and keep shared styles near the feature or in `App.css`. Prefer descriptive prop names and memoization only when profiling suggests it.

## Testing Guidelines
Testing libraries are not installed yet; add Vitest and React Testing Library when introducing automated coverage. Name specs `ComponentName.test.jsx`, assert rendering, interactions, and accessibility, and store fixtures under `src/__tests__/fixtures/` if needed. Once tests exist, run them through an `npm test` script and gate pull requests on their success.

## Commit & Pull Request Guidelines
Write concise, imperative commit messages ≤72 characters (e.g., "Add mission hero layout"). Group related changes per commit and document follow-up tasks in the body. Pull requests should explain what changed, why it matters, manual QA steps, and include screenshots or recordings for UI updates. Link relevant GitHub issues and confirm `npm run lint` (and future tests) are green before requesting review.

## Security & Environment Notes
Store API keys and secrets outside the repo; prefer `.env.local` and document required variables in `README.md`. Never commit credentials—add new secret files to `.gitignore` immediately. Verify third-party packages before installing, and track upgrade notes in the pull request description.
