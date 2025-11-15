# Repository Guidelines

## Project Structure & Module Organization
- Runtime React code lives in `src/`. `main.jsx` mounts the tree and `App.jsx` wires providers/layout. Feature folders inside `src/` should co-locate their components, hooks, and CSS modules. Shared primitives (buttons, layout helpers) belong under `src/components/`.
- Persistent global styles live in `src/App.css`; feature media assets belong in `src/assets/<feature>/`; public-only artifacts (favicons, manifest, robots) reside in `public/`.
- Build output is emitted to `dist/`. Design references in `figma_ss/` never ship. Add onboarding or environment notes to `README.md` as they evolve.

## Build, Test, and Development Commands
- `npm install`: sync dependencies after pulling.
- `npm run dev`: launch the Vite dev server on http://localhost:5173 with hot reload.
- `npm run build`: create a production bundle in `dist/` (used by CI/CD).
- `npm run preview`: serve the latest build for smoke testing in a production-like server.
- `npm run lint` / `npm run lint -- --fix`: surface ESLint issues and auto-fix when safe.

## Coding Style & Naming Conventions
- React function components, hooks, and configs use modern ES modules, two-space indentation, single quotes, and trailing commas.
- Components in PascalCase (`MissionHero.jsx`), hooks camelCase (`useTelemetry`), configs lowerCamelCase. Keep props descriptive and colocate styling with the owning feature.
- Linting is powered by `eslint.config.js` with React Refresh and React Compiler support—run lint before every commit.

## Testing Guidelines
- Testing libs (Vitest + React Testing Library) are not installed yet. Add them before introducing specs.
- Name tests `ComponentName.test.jsx` and colocate with the component or place under `src/__tests__/` when shared.
- Target render integrity, interactions, and accessibility seams; run the suite via an `npm test` script once added.

## Commit & Pull Request Guidelines
- Write imperative commit subjects under 72 chars (e.g., `Add mission hero layout`).
- Pull requests should summarize scope, link issues, include UI screenshots when visuals change, and confirm `npm run lint` plus any tests.
- Call out new dependencies, config tweaks, or required follow-up work so downstream teams can prepare.

## Security & Configuration Tips
- Keep secrets in `.env.local`; never commit credentials. Document required environment keys in `README.md`.
- Review third-party packages for license/compliance impact. Note any security-sensitive Vite or ESLint changes in PR descriptions.
