# GSAP & SCROLLTRIGGER ANIMATION STRATEGY
## Cinematic Motion System

### 1. Motion Principles
- **Subtle & Purposeful**: Animations exist to guide reader attention and communicate scale; never block navigation or cause scroll lag.
- **Performance First**: Animate exclusively hardware-accelerated CSS properties (`transform: translate3d/scale`, `opacity`). Avoid animating `width`, `height`, or `margin`.
- **Accessibility Safeguard**: Honor OS preferences (`prefers-reduced-motion: reduce`) by disabling complex ScrollTrigger pins and parallax effects.

---

### 2. Core Animation Orchestration (`src/lib/gsap.ts`)

1. **Hero Reveal**: Staggered fade-up and character reveal for main headlines.
2. **Scroll Parallax**: Multi-layered background parallax for imagery and forest landscapes (`yPercent: -15` to `-30`).
3. **Card Interaction**: Smooth 0.3s cubic-bezier border transition to **Forest Green (`#1F6F4A`)** on cursor enter.
4. **Pinned Storytelling**: Horizontal scroll pin for conservation timelines and rhino reintroduction milestone steps.
