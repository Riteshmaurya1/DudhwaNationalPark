# 🤝 Contributing to Dudhwa National Park & Tiger Reserve Portal

First off, thank you for considering contributing to the **Dudhwa National Park & Tiger Reserve** web portal! Projects like this rely on community contributions from developers, designers, conservation enthusiasts, content writers, and researchers.

Whether you're fixing a bug, enhancing 3D canvas performance, improving responsive design, adding verified ecological data, or translating content, your help is warmly welcomed.

---

## 📜 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#-development-setup)
- [Branching & Commit Guidelines](#-branching--commit-guidelines)
  - [Branch Naming Strategy](#branch-naming-strategy)
  - [Commit Message Format](#commit-message-format)
- [Coding & Architectural Standards](#-coding--architectural-standards)
  - [Next.js App Router & Server Components](#1-nextjs-app-router--server-components)
  - [TypeScript Guidelines](#2-typescript-guidelines)
  - [Tailwind CSS & Design Tokens](#3-tailwind-css--design-tokens)
  - [Three.js & WebGL Fallbacks](#4-threejs--webgl-fallbacks)
  - [Data & Research Integrity](#5-data--research-integrity)
- [Pull Request Checklist](#-pull-request-checklist)
- [Questions & Support](#-questions--support)

---

## 📜 Code of Conduct

We are committed to providing a welcoming, inclusive, and harassment-free environment for everyone.
- Be respectful and constructive in all discussions, issues, and pull request reviews.
- Focus on what is best for the project, conservation awareness, and the user community.
- Gracefully accept constructive feedback and maintain professional standards.

---

## 💡 How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check existing [GitHub Issues](https://github.com/Riteshmaurya1/DudhwaNationalPark/issues) to ensure it hasn't already been reported.

When creating a bug report, please include:
- **Use a clear and descriptive title**.
- **Steps to reproduce**: Detailed steps to recreate the issue.
- **Expected vs. Actual Behavior**: Describe what you expected to happen vs. what actually occurred.
- **Environment Details**: Browser version, OS (Windows/macOS/Linux), screen resolution, and Node.js version.
- **Screenshots / Console Errors**: Attach relevant browser console errors or visual screenshots.

### Suggesting Features

We welcome ideas for new features, interactive visualizations, safari planning calculators, or educational modules!

When proposing a feature:
- Explain **why** this feature would be useful to visitors, researchers, or wildlife enthusiasts.
- Detail **how** it fits within our existing [Design System](docs/design-system.md) and [Component Architecture](docs/component-architecture.md).
- Provide visual mockups or UI references if available.

### Submitting Pull Requests

1. Search open Pull Requests before starting work to avoid duplicate effort.
2. Fork the repository and create a new feature branch from `main`.
3. Keep your PR focused on a single responsibility (e.g., fix one bug or add one feature).
4. Run `npm run lint` and `npm run build` locally before submitting.
5. Provide a comprehensive PR description detailing your changes and verification steps.

---

## 💻 Development Setup

### 1. Fork and Clone
Fork the repository on GitHub, then clone your fork locally:
```bash
git clone https://github.com/<your-username>/DudhwaNationalPark.git
cd DudhwaNationalPark
```

### 2. Install Dependencies
Install all required Node modules using `npm`:
```bash
npm install
```

### 3. Start Development Server
Launch Next.js with hot reload enabled:
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to preview your changes.

### 4. Verify Build and Linting
Ensure there are no build breaks or lint errors:
```bash
npm run lint
npm run build
```

---

## 🌿 Branching & Commit Guidelines

### Branch Naming Strategy

Always create descriptive branch names prefixed with the appropriate category:

| Category | Prefix | Example |
| :--- | :--- | :--- |
| **New Feature** | `feat/` | `feat/safari-permit-calculator` |
| **Bug Fix** | `fix/` | `fix/navbar-mobile-overlay` |
| **Documentation** | `docs/` | `docs/update-contributing-guide` |
| **Refactoring** | `refactor/` | `refactor/hero-section-gsap-timeline` |
| **Performance** | `perf/` | `perf/optimize-threejs-bundle` |
| **Chore / Maintenance** | `chore/` | `chore/upgrade-tailwind` |

### Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```text
<type>(<scope>): <short description>

[optional body describing why the change was made]
```

#### Examples:
- `feat(wildlife): add filter tabs for mammal and avian species`
- `fix(accommodation): correct FRH booking gate distance calculation`
- `docs(readme): add detailed architecture diagram and quickstart`
- `perf(3d): implement lightweight 2D canvas fallback for mobile screens`

---

## 🎨 Coding & Architectural Standards

### 1. Next.js App Router & Server Components
- Default to **React Server Components (RSC)** whenever possible for optimal SEO and fast initial page loads.
- Use `'use client'` strictly at the top of components requiring browser APIs, state (`useState`, `useContext`), or animation hooks (`useEffect`, GSAP, Three.js canvas).
- Keep component files under `src/components/` modular and single-responsibility.

### 2. TypeScript Guidelines
- All props, state, and data objects must have explicit TypeScript types or interfaces.
- Place shared types inside `src/types/`.
- Avoid using `any`. Use strict generic types, union types, or `unknown` when handling dynamic data.

### 3. Tailwind CSS & Design Tokens
- Follow the official [Color System](docs/color-system.md) and [Design System](docs/design-system.md):
  - **Primary CTA Accent**: Terai Orange (`#F97316` / `orange-500`)
  - **Interaction Accent**: Forest Green (`#1F6F4A` / `emerald-700`)
  - **Background**: Deep Obsidian (`#090B0A`) / Linen (`#F9F8F6`)
- Avoid arbitrary inline colors. Use Tailwind utility classes or custom CSS variables defined in `src/app/globals.css`.
- Ensure dark/light mode responsiveness using `dark:` variant classes.

### 4. Three.js & WebGL Fallbacks
- 3D models and canvases must be isolated in `src/components/3d/` (or dynamic client imports).
- **Mandatory 2D Fallback**: Always provide a photographic 2D fallback component (`Fallback2D.tsx`) for browsers without WebGL support or for low-power mobile devices.

### 5. Data & Research Integrity
- Data should be driven from `src/data/` or `src/content/` rather than hardcoded inline inside presentation components.
- Maintain ecological accuracy:
  - Format scientific species names in italics (e.g., *Panthera tigris*, *Rucervus duvaucelii*).
  - Verify historical and logistical facts against the dossiers in `research/` or official UP Forest Department publications.

---

## ✅ Pull Request Checklist

Before marking your PR as ready for review, please confirm:

- [ ] Code compiles without errors (`npm run build` succeeds).
- [ ] ESLint passes without errors (`npm run lint`).
- [ ] TypeScript type checks pass (`npx tsc --noEmit`).
- [ ] Tested on both desktop and mobile viewports.
- [ ] Checked both **Dark Mode** and **Light Mode** visual appearance.
- [ ] Followed conventional commit messages.
- [ ] Documented any new props, configuration parameters, or research sources.

---

## ❓ Questions & Support

If you have questions or need guidance while setting up your environment or working on a PR:
- Open a discussion topic or question issue on GitHub.
- Reach out to the maintainer: **Ritesh Kumar** ([@Riteshmaurya1](https://github.com/Riteshmaurya1)).

Thank you for helping us preserve, showcase, and celebrate the wild heritage of **Dudhwa National Park**! 🐯🌾
