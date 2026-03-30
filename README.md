# Peruvian Restaurant Website

A React 19 single-page application built with TypeScript, Vite, and Tailwind CSS 4. This repository houses the frontend codebase for the restaurant's main website, featuring sections for catering, food truck details, empanadas, and a central landing page.

## Quick Start

The project relies strictly on **pnpm** for dependency management.

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm run dev

# Lint codebase
pnpm run lint

# Build for production
pnpm run build
```

## Documentation

Detailed information regarding the system's architecture, design patterns, and internal functionalities are located within the `/doc` directory.

- **[Architecture & Execution](doc/architecture.md)**
  Covers the overall application structure, folder layout (`src/`), performance considerations, and best practices.
- **[Routing & Navigation](doc/routing.md)**
  Explains the React Router 7 setup, lazy-loaded page components, and cross-route hash scrolling implementations.
- **[Internationalization (i18n)](doc/i18n.md)**
  Details the custom language context system relying on `translations.ts` and `localStorage` persistence.
- **[Styling & Design](doc/styling.md)**
  Outlines the usage of Tailwind CSS, mobile-first responsive design paradigms, accessibility (a11y) rules, and shared UI components.

## Agent Directives

> **Notice for Coding Agents**:
> Any modifications, feature additions, or architectural shifts made to this project **must** be reflected in the relevant documentation.
> - If you alter existing behavior, update the corresponding `.md` file in the `/doc` folder.
> - If you introduce a new core system, create a new `.md` file in `/doc` and link to it from this `README.md`.
> - Always maintain this documentation to ensure context is accurately preserved for future agents and developers.
