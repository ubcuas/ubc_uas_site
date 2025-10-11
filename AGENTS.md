# Repository Guidelines

## Project Structure & Module Organization
Keep application code inside `src/`, where `main.jsx` boots the UI and `App.jsx` defines shared layout. Organize features in folders that bundle components, hooks, and styles; place reusable UI in `src/components/` and global styles in `src/App.css`. Static assets that ship unchanged live in `public/`, and reference material such as diagrams belongs in `figma_ss/`. Configuration stays close to the root: adjust Vite in `vite.config.js`, linting in `eslint.config.js`, and document quirks in `README.md`.

## Build, Test, and Development Commands
Run `npm install` after cloning to sync dependencies. Use `npm run dev` for the hot-reload server at http://localhost:5173, and `npm run build` to validate production output in `dist/`. `npm run preview` serves the build locally for smoke tests. Keep lint clean with `npm run lint`, or `npm run lint -- --fix` when applying formatter-approved changes.

## Coding Style & Naming Conventions
Author modern function components, preferring hooks and local state over classes. Follow two-space indentation, single quotes, and trailing commas where valid. Name components in PascalCase (`MissionHero.jsx`) and hooks in camelCase (`useTelemetry`). Co-locate CSS modules or plain styles with their components, and export only what the feature consumes to avoid accidental coupling.

## Testing Guidelines
Testing libraries are not bundled yet; install Vitest and React Testing Library before adding specs. Name tests `ComponentName.test.jsx` and store them beside the component or under `src/__tests__/` for shared utilities. Target render integrity, critical interactions, and accessibility seams. Once tests exist, expose them via an `npm test` script and treat the suite as mandatory pre-merge verification.

## Commit & Pull Request Guidelines
Write imperative commit messages under 72 characters, e.g., `Add mission hero layout`, grouping related edits together. PRs should summarize the change, link any issues or tickets, list manual QA steps (screenshots for UI tweaks), and confirm `npm run lint` and any tests completed. Note downstream impacts or follow-ups in the PR description so reviewers can plan ahead.

## Security & Configuration Tips
Never commit secrets; load them through `.env.local` and update `.gitignore` for new secret classes. Document required environment keys in `README.md` so new contributors can bootstrap quickly. Review third-party additions for licensing and size implications, and record dependency upgrades in the PR notes for traceability.
