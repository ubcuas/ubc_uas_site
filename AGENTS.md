# Repository Guidelines

## Project Structure & Module Organization
All runtime code lives in `src/`, with `main.jsx` mounting the React tree and `App.jsx` handling global layout and providers. Feature folders inside `src/` should package components, hooks, and styles together; cross-cutting primitives belong in `src/components/`. Store persistent styles in `src/App.css`, production-ready imagery under `src/assets/<feature>/`, and public static files (favicons, manifest, robots) in `public/`. Generated bundles land in `dist/`, while `figma_ss/` is reference-only and should never ship. Document domain decisions or environment expectations in `README.md` to keep onboarding current.

## Build, Test, and Development Commands
- `npm install`: install or refresh dependencies after syncing the repo.
- `npm run dev`: start the Vite dev server on http://localhost:5173 with hot reload.
- `npm run build`: emit an optimized production bundle into `dist/`.
- `npm run preview`: serve the build output locally for smoke testing.
- `npm run lint` / `npm run lint -- --fix`: surface and optionally auto-fix ESLint issues.

## Coding Style & Naming Conventions
Use modern React function components with hooks, two-space indentation, single quotes, and trailing commas when valid. Components use PascalCase (`MissionHero.jsx`), hooks camelCase (`useTelemetry`), configs lowerCamelCase. Co-locate CSS (module or plain) with the owning component and export only what the feature consumes. Prefer descriptive prop names and keep config tweaks centralized in `vite.config.js` and `eslint.config.js`.

## Testing Guidelines
Testing libraries are not bundled yet; add `vitest`, `@testing-library/react`, and `@testing-library/jest-dom` before creating specs. Name test files `ComponentName.test.jsx` and either colocate them or use `src/__tests__/` for shared utilities. Focus on render integrity, interactive flows, and accessibility seams. Expose the suite via an `npm test` script and run it before opening a pull request.

## Commit & Pull Request Guidelines
Write imperative commit subjects under 72 characters (e.g., `Add mission hero layout`). Pull requests should summarize scope, link related issues, capture manual QA (screenshots for UI changes), and confirm `npm run lint` plus any added tests. Highlight new dependencies, config changes, or follow-up tasks so downstream teams can plan.

## Security & Configuration Tips
Keep secrets in `.env.local`; `.env*` files are ignored by default. Document required keys in `README.md` and never hard-code credentials. Review third-party packages for licensing and bundle impact, and note any security-sensitive adjustments when tweaking `vite.config.js` or build tooling.
