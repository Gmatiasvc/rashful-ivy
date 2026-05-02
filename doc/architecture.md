# Project Architecture and Execution

This document details the architectural layout, core technical stack, directory structure, and best practices for the frontend application.

## Overview

The application is a single-page application (SPA) focused on enabling online delivery and reservations, built with:
- **React 19**
- **TypeScript**
- **Vite**
- **React Router 7**
- **Tailwind CSS 4**

It uses a persistent global state (via `localStorage` and `App.tsx`) to manage basic state features such as language preferences (`i18n`).

## Directory Structure

The project relies on a flat and categorized directory structure under `src/`:

- `src/App.tsx`: The root application component containing routing logic, global context (like language state), global components (Navbar, Footer, Scroll handlers), and the `React Router` provider setup.
- `src/main.tsx`: The primary entry point which mounts the `<App />` component into the `index.html` file.
- `src/page/`: Contains all main page components. These pages are lazy-loaded within `App.tsx` and map one-to-one with routes (e.g., `Home.tsx`, `Catering.tsx`, `Empanadas.tsx`, `FoodTruck.tsx`). It also houses shared UI fragments like `Separator.tsx`.
- `src/data/`: Houses data models, mock data, and importantly, translation strings (`translations.ts`).
- `src/assets/`: Contains project assets including standard images and SVG graphics (e.g., logos, hero images, background patterns).

## Best Practices and Performance Considerations

To ensure the application scales effectively and remains performant, adhere to the following principles:

1. **Package Manager**: Use `npm` exclusively (e.g., `npm install`, `npm run build`, `npm run lint`). Avoid `pnpm` or `yarn`.
2. **React Key Optimization**: Do not use array indices as React `key` props. Always utilize stable identifiers (like object IDs or unique content) to help React optimize re-renders during list reconciliations.
3. **Scroll Event Optimizations**: Any React state updates tied to scrolling must be wrapped within `window.requestAnimationFrame()` to limit updates to the browser's refresh rate. Add `{ passive: true }` to `scroll` event listeners to prevent blocking the main thread.
4. **Link Management**: Avoid using standard `<a>` tags for internal links to preserve the SPA behavior. Utilize `<Link>` from `react-router-dom` instead.
5. **No Test Files**: The project intentionally does not maintain unit or integration test files (`*.test.*` or `*.spec.*`). Visual and integration verifications are handled externally or manually via running local development servers.