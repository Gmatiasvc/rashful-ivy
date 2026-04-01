## 2024-05-18 - Tooltips and i18n for Floating Buttons
**Learning:** Tooltips in this app's design system rely on `group-hover:opacity-100`, which makes them inaccessible to keyboard users. Also, floating action buttons sometimes use hardcoded `aria-label`s instead of the existing translation system (e.g., `t.whatsapp_text`).
**Action:** When adding or fixing tooltips, always pair `group-hover:opacity-100` with `group-focus-visible:opacity-100`. Always check if `aria-label`s can be mapped to the `translations.ts` dictionary instead of being hardcoded in a single language.
