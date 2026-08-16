# COMPONENT ARCHITECTURE & DIRECTORY BLUEPRINT
## Dudhwa Next.js App Router Architecture

### Component Hierarchy

```
src/
├── app/
│   ├── layout.tsx             # Root layout with font declarations, metadata, providers
│   ├── page.tsx               # Cinematic homepage shell
│   ├── globals.css            # Tailwind directives, CSS design tokens, custom font faces
│   └── (routes)/              # Modular route groups
├── components/
│   ├── 3d/                    # WebGL / Three.js Components
│   │   ├── Scene.tsx          # Main Canvas wrapper with lighting & camera controls
│   │   ├── ModelViewer.tsx    # Interactive viewer with orbit controls & fallback state
│   │   ├── WildlifeModel.tsx  # GLTF/GLB wildlife model loader
│   │   └── Fallback2D.tsx     # Non-WebGL 2D photographic fallback
│   ├── layout/                # Structural Shell Components
│   │   ├── Header.tsx         # Responsive brand header with transparent overlay & mobile menu
│   │   ├── Navigation.tsx     # Primary desktop navigation menu with active indicator
│   │   ├── Footer.tsx         # Editorial footer with logo, links, and license statements
│   │   ├── PageHero.tsx       # Reusable page banner with title, metadata, parallax background
│   │   └── Container.tsx      # Standardized responsive max-width wrapper
│   ├── ui/                    # Base UI Primitives (shadcn/ui customized)
│   │   ├── button.tsx         # Orange primary CTAs & Green interaction variants
│   │   ├── card.tsx           # Dark/Light editorial cards with Green hover borders
│   │   ├── badge.tsx          # Category, status, and conservation tags
│   │   └── dialog.tsx         # Modal popups for image lightbox & safari rules
│   ├── wildlife/              # Wildlife Feature Components
│   │   ├── SpeciesCard.tsx    # Species showcase card with typography & stats
│   │   ├── SpeciesGrid.tsx    # Filterable grid layout for fauna categories
│   │   └── HabitatBadge.tsx   # Phanta, Sal Forest, Wetland indicators
│   ├── safari/                # Safari & Travel Components
│   │   ├── ZoneCard.tsx       # Safari zone overview card with map pin
│   │   ├── TimingTable.tsx    # Responsive morning/evening safari schedule table
│   │   └── GateMap.tsx        # Interactive entrance gate finder
│   └── shared/                # Cross-cutting UI Components
│       ├── Typography.tsx     # Display headlines, subheadings, metadata text wrappers
│       ├── MediaImage.tsx     # next/image wrapper with blur placeholder & caption
│       └── SourceCitation.tsx # Interactive source reference badge
```

---

### Component Principles
1. **Composition over Monoliths**: Components are kept small, modular, and single-responsibility.
2. **Prop Transparency**: All components declare explicit TypeScript interface props.
3. **No Direct Hardcoded Data**: Components accept data via props derived from `src/content/` and `src/data/`.
