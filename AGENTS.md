# Repository Guidelines

## Project Structure & Module Organization
All application code lives in `src/`, with `main.jsx` mounting the app and `App.jsx` supplying shared layout scaffolding. Group each feature inside its own folder so components, hooks, and styles travel together; shared primitives belong in `src/components/`. Keep global styling in `src/App.css`, long-lived assets in `public/`, and ship-ready imagery in `src/assets/` (organized by feature, e.g., `home/`, `pages/`). `figma_ss/` now only stores reference exports. Publishable bundles land in `dist/`. Update cross-cutting configuration through `vite.config.js` and `eslint.config.js`, and track domain context inside `README.md`.

## Build, Test, and Development Commands
- `npm install`: Sync dependencies after cloning or pulling.
- `npm run dev`: Start the Vite dev server on http://localhost:5173.
- `npm run build`: Produce an optimized production bundle.
- `npm run preview`: Smoke-test the production build locally.
- `npm run lint` / `npm run lint -- --fix`: Check formatting and apply autofixes.

## Coding Style & Naming Conventions
Favor modern React function components with hooks. Use two-space indentation, single quotes, and trailing commas where valid; ESLint enforces deviations. Name components in PascalCase (e.g., `MissionHero.jsx`), hooks in camelCase (e.g., `useTelemetry`), and config objects in lowerCamelCase. Co-locate CSS modules or plain `.css` files with their owning component and export only what the feature consumes.

## Testing Guidelines
Testing libraries are not bundled yet—install `vitest`, `@testing-library/react`, and `@testing-library/jest-dom` before writing specs. Name files `ComponentName.test.jsx` and store them beside the component or under `src/__tests__/` for shared utilities. Focus on render integrity, key interactions, and accessibility seams. Expose the suite through an `npm test` script and run it before every pull request.

## Commit & Pull Request Guidelines
Write imperative commit messages under 72 characters (e.g., `Add mission hero layout`). Each PR should summarize scope, link related issues, capture manual QA details—include screenshots for UI changes—and confirm `npm run lint` plus any tests. Flag downstream impacts, new dependencies, or follow-up tasks so reviewers can plan rollouts.

## Security & Configuration Tips
Keep secrets in `.env.local`, with `.env*` already ignored. Document required keys in `README.md` to speed onboarding. Vet third-party packages for license and bundle-size impact, and call out noteworthy dependency or config changes in PR notes. Align tweaks in `vite.config.js` and `eslint.config.js` with the conventions above to avoid regressions.
