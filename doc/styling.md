# Styling and Design Patterns

This document details the styling framework, design principles, and shared components used across the project.

## Styling Framework

The application uses **Tailwind CSS 4** for styling via utility classes directly within components. This allows for rapid development and consistent styling patterns.

## Mobile-First Responsive Design

A mobile-first approach is utilized for building layouts. The base styles (those without breakpoints) apply to mobile viewports, while responsive prefixes (`md:`, `lg:`) modify those classes for larger screens.

- **Stacking vs Grid**: Flexbox and CSS Grid are widely used. Mobile defaults typically stack elements using `flex-col` or a single-column grid. Desktop adaptations use `md:flex-row` or multi-column grids (e.g., `md:grid-cols-2`).
- **Sizing Adjustments**: Dimensions (widths, heights, margins, and paddings) dynamically scale. Avoid fixed pixel dimensions for main layout containers; rely on relative or fluid units where possible.

```tsx
// Example of responsive layout
<div className="flex flex-col md:flex-row w-full gap-4 p-4 md:p-8">
  <div className="w-full md:w-1/2">
    {/* Content... */}
  </div>
</div>
```

## Shared Components

To ensure visual consistency, shared design elements are abstracted into their own reusable components.

- **Separator Component**: Used to visually divide sections. Located at `src/page/Separator.tsx`. It provides consistent spacing and thematic line styles.

## Accessibility (a11y) and UX Guidelines

The application aims to follow best practices for user experience and accessibility.

- **Semantic HTML**: Prefer semantic HTML5 elements (`<article>`, `<nav>`, `<footer>`) instead of generic `<div>` tags whenever appropriate.
- **Micro-UX Optimizations**: Include minor UX enhancements such as ARIA labels (`aria-label`, `aria-expanded`), intuitive focus states (`focus:ring`), and interactive hover effects (like scaling cards or color transitions).
- **Iconography**: Icons are supplied through `lucide-react` and `@icons-pack/react-simple-icons`. Provide screen-reader text or `aria-labels` for icon-only buttons.
