export const tokens = {
  colors: {
    // Brand Core Foundation
    black: "#050505",
    nearBlack: "#111111",
    cardBlack: "#161616",
    white: "#FFFFFF",
    softWhite: "#F5F5F0",

    // Primary Brand Accent
    orangePrimary: "#F97316",
    orangeDeep: "#EA580C",
    orangeSoft: "#FB923C",

    // Neutrals & Borders
    borderGray: "#D9D9D2",
    subtleGray: "#262626",
    mutedGray: "#777777",
  },
  typography: {
    fontDisplay: "var(--font-bricolage), serif",
    fontBody: "var(--font-manrope), sans-serif",
    scale: {
      hero: "text-[clamp(3.5rem,8vw,8rem)] font-extrabold tracking-tight leading-[1.02]",
      display: "text-[clamp(2.75rem,6vw,6rem)] font-extrabold tracking-tight leading-[1.05]",
      h1: "text-[clamp(2.25rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.1]",
      h2: "text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-snug leading-[1.15]",
      h3: "text-[clamp(1.25rem,2.2vw,2rem)] font-semibold leading-[1.25]",
      bodyLarge: "text-lg md:text-xl font-normal leading-relaxed text-dudhwa-white/90",
      body: "text-base font-normal leading-relaxed text-dudhwa-white/80",
      small: "text-sm font-normal leading-normal text-dudhwa-gray-muted",
      metadata: "text-xs font-medium tracking-widest uppercase text-dudhwa-gray-muted font-mono",
    },
  },
  spacing: {
    xs: "0.25rem",  // 4px
    sm: "0.5rem",   // 8px
    md: "0.75rem",  // 12px
    base: "1rem",   // 16px
    lg: "1.5rem",   // 24px
    xl: "2rem",     // 32px
    "2xl": "3rem",  // 48px
    "3xl": "4rem",  // 64px
    "4xl": "5rem",  // 80px
    "5xl": "6rem",  // 96px
    "6xl": "8rem",  // 128px
  },
  radii: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    image: "16px",
    full: "9999px",
  },
  layout: {
    maxWidth: "1440px",
    readingWidth: "720px",
    gridColumnsDesktop: 12,
    gridColumnsTablet: 8,
    gridColumnsMobile: 4,
  },
  animation: {
    durationFast: "0.2s",
    durationMedium: "0.4s",
    durationSlow: "0.8s",
    easeCinematic: "cubic-bezier(0.25, 1, 0.5, 1)",
  },
  brand: {
    name: "Dudhwa National Park",
    subTitle: "Terai Arc Landscape • Uttar Pradesh, India",
    establishedYear: 1977,
    tigerReserveYear: 1987,
    tagline: "Dudwa is not a tourism product. It is a living landscape.",
  },
};
