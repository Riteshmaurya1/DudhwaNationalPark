# PERFORMANCE OPTIMIZATION STRATEGY
## High-Speed Digital Architecture

### Performance Milestones
- **Largest Contentful Paint (LCP)**: < 2.0s
- **First Input Delay (FID) / INP**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.05
- **Lighthouse Performance Score**: > 90+

---

### Key Technical Strategies
1. **Next.js Image Optimization**: Modern AVIF/WebP formats, responsive `srcset`, automatic width constraints, and blur-up placeholder generation.
2. **Font Subsetting**: Preloading `Bricolage Grotesque` and `Manrope` subsets using `next/font/google` with zero layout shift (`display: swap`).
3. **Dynamic Import & Code Splitting**: 3D canvases, heavy map libraries, and modal packages lazy-loaded via `next/dynamic` on user scroll or interaction.
4. **Static Generation & Caching**: Core editorial routes pre-rendered at build time (`generateStaticParams`) with Incremental Static Regeneration (ISR).
