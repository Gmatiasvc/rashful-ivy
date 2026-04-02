## 2024-05-18 - Tooltips and i18n for Floating Buttons
**Learning:** Tooltips in this app's design system rely on `group-hover:opacity-100`, which makes them inaccessible to keyboard users. Also, floating action buttons sometimes use hardcoded `aria-label`s instead of the existing translation system (e.g., `t.whatsapp_text`).
**Action:** When adding or fixing tooltips, always pair `group-hover:opacity-100` with `group-focus-visible:opacity-100`. Always check if `aria-label`s can be mapped to the `translations.ts` dictionary instead of being hardcoded in a single language.

## 2025-02-14 - Semantic HTML and False Affordances
**Learning:** Certain UI components, like the main Hero CTA button in Home, were implemented as `<div>` elements with visual hover effects (`hover:bg-white`). This creates a "false affordance" where it looks clickable to sighted users but lacks semantic meaning (like `<button>` or `<Link>`), missing functionality on click and completely hiding it from screen readers and keyboard navigation.
**Action:** When inspecting visual buttons, ensure they are wrapped in an appropriate semantic tag (`<button>`, `<a>`, or `<Link>`), have interactivity mapped, and include explicit focus states for keyboard users (`focus-visible`).
