## 2026-03-30 - [Throttled Scroll Listeners]
**Learning:** In React applications, attaching state updates directly to `window.addEventListener('scroll', ...)` without throttling causes excessive re-renders (often >100 times per second during fast scrolling), which can block the main thread and degrade scroll performance.
**Action:** Always wrap scroll-based state updates inside `window.requestAnimationFrame` to limit updates to the browser's refresh rate (typically 60fps), and add `{ passive: true }` to the event listener options to prevent the browser from waiting for `e.preventDefault()`, ensuring smoother scrolling. Ensure cleanup of event listeners in `useEffect` returns.
## 2024-04-01 - Avoid Continuous Re-renders on Scroll with useRef
**Learning:** Found a specific performance bottleneck where scroll-based animations (like hero background zooming) were tied to React state (`useState`) and updating on every scroll tick. This resulted in excessive and continuous re-rendering of entire view components.
**Action:** Replace `useState` with `useRef` to point to the DOM node directly, and mutate its style (`ref.current.style.transform`) inside a `requestAnimationFrame` callback.
## 2026-04-03 - Avoid DOM Mutations on Off-Screen Elements
**Learning:** Even when using `useRef` and `requestAnimationFrame` for scroll-based animations (like hero background zooming), continuously mutating the style of an element that is no longer visible in the viewport unnecessarily triggers browser recalculation and painting.
**Action:** Always add a boundary check (e.g., `if (window.scrollY <= window.innerHeight)`) inside the scroll listener to skip DOM mutations for elements that have scrolled off-screen.
