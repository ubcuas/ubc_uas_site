# Repository Guidelines

## Project Structure & Module Organization
App source lives in `src/`; `main.jsx` mounts the app and `App.jsx` defines shared layout scaffolding. Group features by folder so components, hooks, and styles travel together. Shared UI belongs in `src/components/`, while `src/App.css` stores global styles. Publish-ready assets stay in `public/`; design references live in `figma_ss/`. Generated bundles land in `dist/`. Tune build behavior via `vite.config.js`, lint rules in `eslint.config.js`, and document domain context in `README.md`.

## Build, Test, and Development Commands
Run `npm install` after cloning to sync packages. Use `npm run dev` for the Vite dev server on http://localhost:5173. Validate production output with `npm run build`, then smoke-test with `npm run preview`. Keep formatting honest with `npm run lint`; apply autofixes using `npm run lint -- --fix`. Commit the built `dist/` folder only when distributing static exports.

## Coding Style & Naming Conventions
Ship modern React function components with hooks instead of classes. Follow two-space indentation, single quotes, and trailing commas where syntax allows; ESLint enforces these rules. Name components in PascalCase (`MissionHero.jsx`), hooks in camelCase (`useTelemetry`), and configuration objects in lowerCamelCase. Co-locate CSS modules or plain `.css` files with their owning component, exporting only the pieces the feature consumes.

## Testing Guidelines
Testing libraries are not bundled yet—install `vitest`, `@testing-library/react`, and `@testing-library/jest-dom` before adding specs. Name files `ComponentName.test.jsx` and store them beside the component or under `src/__tests__/` for shared helpers. Target render integrity, key interactions, and accessibility seams. Expose the suite with an `npm test` script and run it before every pull request.

## Commit & Pull Request Guidelines
Write imperative commit messages under 72 characters, e.g., `Add mission hero layout`. Each pull request should summarize scope, link related issues, list manual QA (screenshots for UI tweaks), and confirm `npm run lint` plus any tests. Call out downstream impacts, dependencies added, or follow-up tasks so reviewers can plan their rollout.

## Security & Configuration Tips
Store secrets in `.env.local`; keep `.env*` in `.gitignore`. Document required keys in `README.md` so newcomers can bootstrap quickly. Review third-party packages for license and bundle-size implications. Record notable dependency upgrades or config changes inside PR notes, and keep `vite.config.js` and `eslint.config.js` aligned with the documented conventions above.
