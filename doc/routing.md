# Routing and Navigation

This document covers how routing and navigation are managed within the application.

## Overview

The application utilizes **React Router 7** with `BrowserRouter` for frontend navigation. The main layout and routing configuration are defined centrally in `src/App.tsx`.

## Route Definitions

The application defines a few main routes inside the `<Routes>` component in `src/App.tsx`. These components are lazy-loaded (via React's `Suspense`) to optimize initial load times.

- `/` -> `<Home />`
- `/catering` -> `<Catering />`
- `/empanadas` -> `<Empanadas />`
- `/foodtruck` -> `<FoodTruck />`

Example configuration in `App.tsx`:

```tsx
<Suspense fallback={<div className="h-500">Loading...</div>}>
  <div className="mt-16 md:mt-0">
    <Routes>
      <Route path="/" element={<Home t={t} />} />
      <Route path="/catering" element={<Catering t={t} />} />
      <Route path="/empanadas" element={<Empanadas t={t} />} />
      <Route path="/foodtruck" element={<FoodTruck t={t} />} />
    </Routes>
  </div>
</Suspense>
```

## Navigation Components

- **Navbar**: The primary navigation component is located at the top. It uses the `Link` component from `react-router-dom` to facilitate internal navigation without full page reloads.
- **External Links**: Standard anchor tags `<a>` are used for external resources (e.g., WhatsApp, social media in the Footer). Security best practices dictate that external links must include `target="_blank"` and `rel="noopener noreferrer"`.

## Cross-Route Hash Scrolling

Anchor hash scrolling across different routes (e.g., clicking a link that goes to `/#about` from the `/catering` page) is natively supported via a custom `ScrollToHash` component included in `src/App.tsx`. This component observes `useLocation().hash` and scrolls to the designated element ID when the route or hash changes.
