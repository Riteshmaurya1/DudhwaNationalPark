# ACCESSIBILITY (A11Y) STANDARDS
## WCAG 2.1 AA Compliance Architecture

### Key Accessibility Mandates
1. **Contrast Ratios**: All text elements achieve a minimum 4.5:1 contrast ratio against their background surfaces (Pure Black `#050505` with Pure White `#FFFFFF` text = 21:1 ratio; Primary Orange `#F97316` on Black = 7.1:1 ratio).
2. **Keyboard Navigation**: Complete keyboard accessibility (`Tab`, `Shift+Tab`, `Space`, `Enter`, `Escape`) across all interactive cards, navigation menus, and modal dialogs. Visible 2px green focus ring (`outline: 2px solid #1F6F4A`).
3. **Screen Reader Support**: Semantic HTML5 tags (`<main>`, `<nav>`, `<article>`, `<header>`, `<footer>`), explicit `aria-label` attributes on icon-only buttons, and descriptive `alt` text on all wildlife photography.
4. **3D Non-Canvas Parity**: No factual information or species statistic exists solely inside a WebGL 3D canvas; all data is rendered in accessible DOM elements.
