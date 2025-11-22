# Repository Guidelines

## Project Structure & Module Organization
`src/` contains all runtime React code: `main.jsx` boots the tree, `App.jsx` wires global layout/providers, and each feature folder owns its components, hooks, and CSS modules. Reusable primitives belong under `src/components/`, while feature media sits in `src/assets/<feature>/`. Global styles stay in `src/App.css`; public-only artifacts (favicon, manifest, robots) stay inside `public/`. Production bundles land in `dist/`, design references live in `figma_ss/`, and onboarding notes should be appended to `README.md` as they evolve.

## Build, Test, and Development Commands
- `npm install` — synchronize dependencies after pulling.
- `npm run dev` — start the Vite dev server on http://localhost:5173 with hot reload.
- `npm run build` — emit the production bundle into `dist/` for CI/CD.
- `npm run preview` — serve the latest build for a production-like smoke test.
- `npm run lint` / `npm run lint -- --fix` — surface ESLint issues and auto-fix simple ones.

## Coding Style & Naming Conventions
Use modern ES modules with two-space indentation, single quotes, and trailing commas. Components follow PascalCase (`MissionHero.jsx`), hooks camelCase (`useTelemetry`), configs lowerCamelCase, and CSS modules mirror their component names. Keep props descriptive, colocate styles with owners, and favor composition over deeply nested trees. ESLint is configured via `eslint.config.js` with React Refresh and the React Compiler, so run lint before committing to catch hook or dependency mistakes early.

## Testing Guidelines
Vitest and React Testing Library are not installed yet; add them before authoring specs so we share the same stack. Name files `ComponentName.test.jsx` and colocate them with the component (or `src/__tests__/` if shared). Target render integrity, basic interactions, and accessibility seams; include representative mock data for flight or telemetry views. Once an `npm test` script exists, run it alongside lint, and document any temporary gaps in the PR description.

## Commit & Pull Request Guidelines
Write imperative commit subjects under 72 characters (for example, `Add mission hero layout`). PRs should summarize scope, link the relevant issue, attach UI screenshots when visuals change, and confirm `npm run lint` plus any available tests. Call out new dependencies, config tweaks, or required follow-up work so downstream teams can plan.

## Security & Configuration Tips
Never commit secrets—store them in `.env.local` and document required keys in `README.md`. Review third-party packages for licensing impact before adding them. If you touch Vite or ESLint configuration, highlight the security implications in the PR so deployment owners can revalidate their assumptions.
