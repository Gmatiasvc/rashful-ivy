## 2024-05-18 - Tooltips and i18n for Floating Buttons
**Learning:** Tooltips in this app's design system rely on `group-hover:opacity-100`, which makes them inaccessible to keyboard users. Also, floating action buttons sometimes use hardcoded `aria-label`s instead of the existing translation system (e.g., `t.whatsapp_text`).
**Action:** When adding or fixing tooltips, always pair `group-hover:opacity-100` with `group-focus-visible:opacity-100`. Always check if `aria-label`s can be mapped to the `translations.ts` dictionary instead of being hardcoded in a single language.

## 2025-02-14 - Semantic HTML and False Affordances
**Learning:** Certain UI components, like the main Hero CTA button in Home, were implemented as `<div>` elements with visual hover effects (`hover:bg-white`). This creates a "false affordance" where it looks clickable to sighted users but lacks semantic meaning (like `<button>` or `<Link>`), missing functionality on click and completely hiding it from screen readers and keyboard navigation.
**Action:** When inspecting visual buttons, ensure they are wrapped in an appropriate semantic tag (`<button>`, `<a>`, or `<Link>`), have interactivity mapped, and include explicit focus states for keyboard users (`focus-visible`).

## 2025-04-03 - Add Active State with NavLink
**Learning:** React Router's `NavLink` provides built-in accessibility (`aria-current="page"`) while naturally offering visual feedback via the `isActive` render prop. This avoids manual URL matching and greatly enhances navigation clarity, making it a powerful micro-UX accessibility win.
**Action:** Use `NavLink` instead of `Link` for navigation menus to improve keyboard accessibility and visual hierarchy seamlessly.

## 2024-05-24 - Accessible State-Driven Dropdowns
**Learning:** Custom state-driven dropdown menus must explicitly handle closure events to be fully accessible. While an ARIA `aria-expanded` tag provides screen reader context, it doesn't provide keyboard users a way to exit the menu or pointer users an intuitive way to close it without clicking the toggle button again.
**Action:** Always implement `Escape` key (`keydown`) and outside-click (`mousedown` outside a `useRef` boundary) closure mechanisms via `useEffect` for all custom dropdown, modal, or flyout components to ensure both keyboard and pointer accessibility.

## 2025-04-06 - Interactive Element Target Area & False Affordances
**Learning:** Sometimes, hover/scale effects are incorrectly applied to a wrapper `div` while the semantic interactive element (`<Link>` or `<a>`) is placed inside it. This creates a disconnect where visual feedback happens for pointer devices, but keyboard navigation (which targets the inner element) fails to trigger the expected visual change or clear focus ring.
**Action:** Always verify that interactive visual styles (hover, scale, transition) and their paired focus states (`focus-visible`) are placed directly onto the semantic interactive element (`<button>`, `<a>`, `<Link>`) itself, not on an outer wrapping `div`, so both pointer and keyboard users get the intended visual feedback.
