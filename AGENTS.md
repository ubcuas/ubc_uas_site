# Repository Guidelines

## Project Structure & Module Organization
The Vite React app lives in `src/`, where `main.jsx` mounts the UI and `App.jsx` defines the root layout. Feature folders should keep components, hooks, and styles together; shareable UI belongs in `src/components/` or `src/assets/`. Store static files that ship untouched (favicons, manifest, robots) in `public/`. Global configuration sits in `vite.config.js` and lint rules in `eslint.config.js`. Add documentation or diagrams to `README.md` or `figma_ss/` when relevant.

## Build, Test, and Development Commands
- `npm install` installs dependencies defined in `package.json`.
- `npm run dev` launches the hot-reload dev server at http://localhost:5173.
- `npm run build` produces the optimized bundle in `dist/` for deployment checks.
- `npm run preview` serves the built assets locally to verify routing and assets.
- `npm run lint` or `npm run lint -- --fix` applies ESLint formatting and catches style issues.

## Coding Style & Naming Conventions
Write modern function components with React hooks, keeping files in PascalCase (`NavBar.jsx`). Use two-space indentation, single quotes, and trailing commas where valid. Keep interfaces tight: export only consumed members, co-locate CSS modules or plain styles with their components, and centralize shared globals in `App.css`. Favour descriptive prop names and introduce memoization only when profiling shows a bottleneck.

## Testing Guidelines
Testing libraries are not bundled yet; install Vitest and React Testing Library before adding automated coverage. Name specs `ComponentName.test.jsx` and place them alongside the component or under `src/__tests__/` for shared utilities. Validate rendering, interactions, and accessibility. Once a test suite exists, expose it through an `npm test` script and treat it as a required pre-PR check.

## Commit & Pull Request Guidelines
Write concise, imperative commit messages (≤72 characters) like `Add mission hero layout`. Group related changes and note follow-up actions in the body. PRs should describe the change, link relevant issues, list manual QA steps (include screenshots for UI updates), and confirm `npm run lint` plus any tests complete successfully.

## Security & Configuration Tips
Never commit secrets; load them via `.env.local` and document required keys in `README.md`. Keep third-party additions minimal and reviewed. Add new secret files to `.gitignore`, and record dependency or tooling updates in the PR notes for traceability.
