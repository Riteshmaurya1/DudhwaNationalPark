# COLOR SYSTEM TOKENS & TAILWIND INTEGRATION
## Dudhwa Design System Color Definitions

### CSS Custom Properties (`src/styles/tokens.css`)

```css
:root {
  /* Brand Core Foundation */
  --color-black: #050505;
  --color-near-black: #111111;
  --color-white: #FFFFFF;
  --color-soft-white: #F5F5F0;
  
  /* Brand Primary Accents */
  --color-orange-primary: #F97316;
  --color-orange-deep: #EA580C;
  --color-orange-soft: #FB923C;

  /* Interaction & State Accents */
  --color-green-forest: #1F6F4A;
  --color-green-deep: #124734;

  /* Neutrals & Borders */
  --color-border-gray: #D9D9D2;
  --color-muted-gray: #777777;

  /* Semantic Mappings */
  --bg-primary: var(--color-black);
  --bg-surface: var(--color-near-black);
  --text-primary: var(--color-white);
  --text-muted: var(--color-muted-gray);
  --border-default: #222222;
  --border-hover: var(--color-green-forest);
  --accent-cta: var(--color-orange-primary);
}
```

---

### Tailwind CSS Extension Config (`tailwind.config.ts`)

```typescript
const config = {
  theme: {
    extend: {
      colors: {
        dudhwa: {
          orange: {
            DEFAULT: '#F97316',
            deep: '#EA580C',
            soft: '#FB923C',
          },
          black: {
            DEFAULT: '#050505',
            near: '#111111',
          },
          white: {
            DEFAULT: '#FFFFFF',
            soft: '#F5F5F0',
          },
          green: {
            forest: '#1F6F4A',
            deep: '#124734',
          },
          gray: {
            border: '#D9D9D2',
            muted: '#777777',
          }
        }
      }
    }
  }
}
```
