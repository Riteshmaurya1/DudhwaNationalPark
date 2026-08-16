# 🌿 Dudhwa National Park & Tiger Reserve Portal

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

An independent open-source digital portal celebrating **Dudhwa National Park & Tiger Reserve**, located in Lakhimpur Kheri, Uttar Pradesh, India. Built with Next.js 14, TypeScript, Tailwind CSS, and GSAP, this project blends natural history journalism with modern web technology.

---

## 🌲 About the Project

The **Dudhwa National Park & Tiger Reserve** web portal is an independent, community-driven digital project created to explore and showcase one of India's richest biodiversity hotspots in the Terai Arc Landscape.

Dudhwa spans over 1,280 square kilometers of ancient Sal forests (*Shorea robusta*), flooded grasslands (*phantas*), and vibrant wetlands. It is home to Royal Bengal Tigers, Nominate Barasingha (Swamp Deer), Great One-Horned Rhinoceroses, Asian Elephants, Fishing Cats, Bengal Floricans, and over 450 species of birds.

---

## 📚 History & Legacy

The project also aims to document and present information about:
- The history of Dudhwa
- Conservation efforts
- Important historical figures (such as Billy Arjan Singh)
- Wildlife reintroduction initiatives (1984 Rhinoceros Reintroduction Project)
- Development of the protected landscape

All historical and factual content should be supported by reliable research and sources.

---

## 🛠️ Tech Stack

The project is being built using modern web technologies:
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP
- **Icons:** Lucide React
- **UI Architecture:** Reusable React Components

Additional technologies such as Three.js and React Three Fiber may be explored where they provide meaningful value to the user experience.

> Technologies listed in this README should always reflect the actual project dependencies and implementation.

---

## 📂 Project Structure

```text
DudhwaNationalPark/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── assets/
│
├── src/
│   ├── app/
│   │   ├── contact/
│   │   ├── accommodation/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── config/
│   ├── content/
│   ├── data/
│   ├── lib/
│   └── types/
│
├── docs/
├── research/
│
├── .gitignore
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

The structure may evolve as the application grows.

---

## 🎨 Design Philosophy

The design direction for this project is:

**Cinematic · Editorial · Authentic · Wild**

The goal is to avoid generic tourism website patterns and instead create an immersive digital experience inspired by:
- Natural history
- Wildlife photography
- Editorial design
- Modern storytelling
- Landscape exploration

### Key Principles
- **Clean typography**
- **Strong visual hierarchy**
- **Responsive layouts**
- **Purposeful animation**
- **Accessible interactions**
- **Performance-conscious development**
- **Authentic Dudhwa-focused visuals**

---

## 📸 Photography & Image Policy

Visual authenticity is important to this project.

When using Dudhwa-specific images:
- Prioritize authentic photographs of Dudhwa
- Preserve photographer attribution where required
- Respect copyright and licensing
- Prefer official, government, reputable photographer, or properly licensed sources
- Do not present generic wildlife images as Dudhwa wildlife
- Do not use AI-generated wildlife images as factual representations of Dudhwa

Image sources and licensing information should be documented whenever possible.

---

## ♿ Accessibility

The project aims to follow accessibility best practices.

Areas of focus include:
- Semantic HTML
- Keyboard navigation
- Sufficient color contrast
- Responsive typography
- Accessible interactive components
- Reduced motion considerations
- Meaningful image alt text

Accessibility improvements and contributions are always welcome.

---

## ⚡ Performance

The project aims to provide a fast and efficient experience.

Performance considerations include:
- Next.js optimization
- Responsive images
- Lazy loading
- Code splitting
- Minimizing unnecessary JavaScript
- Optimized animations
- Progressive enhancement
- Fallbacks for advanced visual features

Advanced visual effects should never prevent users from accessing important information.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js 18 or later
- npm, pnpm, or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/Riteshmaurya1/DudhwaNationalPark.git
cd DudhwaNationalPark
```

### Install Dependencies

Using npm:
```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server supports hot reloading.

### Build for Production

```bash
npm run build
```

To start the production build:
```bash
npm run start
```

### 🧪 Linting

Run the project's linting configuration:
```bash
npm run lint
```

---

## 🌿 Research & Information

Accuracy matters.

This project may collect and organize information from reliable sources such as:
- Government departments
- Official tourism platforms
- Wildlife and conservation organizations
- Research institutions
- Scientific publications
- Reputable historical records

**However:**
> Information on this website should not be considered an official source for permits, bookings, regulations, fees, or real-time visitor information.

Whenever possible, factual information should include or reference its original source.

---

## 🗺️ Roadmap

The project is evolving, but the general roadmap includes:

### Phase 1 — Foundation
- [x] Project initialization & repository setup
- [x] Basic application architecture & layout
- [x] Navigation & page router setup
- [x] Initial responsive design & editorial styling

### Phase 2 — Content & Information
- [ ] Comprehensive wildlife profiles & classification
- [ ] Photography & licensing guidelines integration
- [ ] Travel routes & access logistics
- [ ] Accommodation & Forest Rest House guide
- [ ] Historical timeline & conservation legacy

### Phase 3 — Experience
- [ ] Advanced scroll & interactive animations
- [ ] Interactive map & zone exploration
- [ ] Enhanced visual storytelling
- [ ] Dark/Light theme polish
- [ ] Performance optimization & Lighthouse audits

### Phase 4 — Community
- [x] Contribution guidelines ([CONTRIBUTING.md](CONTRIBUTING.md))
- [x] Code of Conduct ([CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md))
- [ ] Issue & Feature request templates
- [ ] Research contribution pipeline
- [ ] Documentation improvements

---

## 🤝 Contributing

Contributions are welcome. You do not need to belong to an organization to contribute. Developers, designers, researchers, photographers, wildlife enthusiasts, students, writers, and open-source contributors are all welcome.

You can help by:
- 🐛 Reporting bugs
- 💡 Suggesting features
- 🔧 Improving code
- 🎨 Improving UI and UX
- ♿ Improving accessibility
- ⚡ Improving performance
- 📚 Improving documentation
- 🔬 Contributing verified research
- 📝 Correcting information
- 🧪 Adding tests

### How to Contribute

1. **Fork the repository** (Click the Fork button on GitHub)
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/DudhwaNationalPark.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** (Keep changes focused and readable)
5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add wildlife information section"
   ```
6. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** explaining what you changed and why.

For more details, see [**CONTRIBUTING.md**](CONTRIBUTING.md) and [**CODE_OF_CONDUCT.md**](CODE_OF_CONDUCT.md).

---

## 💬 Community

This project is not backed by a large organization. It is an independent project built with curiosity, experimentation, and a belief in the open-source community.

If you find this project useful or interesting, you can support it by:
- ⭐ Starring the repository
- 🍴 Forking the project
- 🐛 Opening an issue
- 💡 Sharing ideas
- 🔀 Submitting a Pull Request
- 📢 Sharing the project
- 📚 Helping improve documentation

Every contribution, issue report, suggestion, and discussion helps. Open source grows through people who choose to build, share, learn, and contribute together.

---

## 👨‍💻 Creator

**Ritesh Kumar**  
Independent Software Developer and Open-Source Enthusiast  
GitHub: [@Riteshmaurya1](https://github.com/Riteshmaurya1)

*This project is independently created and maintained as an open-source initiative.*

---

## 🌍 Why This Project Exists

Dudhwa is an important landscape with incredible biodiversity, history, and potential for exploration. The purpose of this project is to experiment with a different type of digital experience around that information.

As an independent developer without a large organization behind this project, the goal is to build in public, learn through the process, and create something that can eventually benefit:
- Visitors
- Photographers
- Students
- Developers
- Designers
- Wildlife enthusiasts
- The wider open-source community

This is also an opportunity to demonstrate how developers can use modern technology to build meaningful experiences around real-world places and topics.

---

## ⚠️ Data & Information Responsibility

Information related to wildlife, tourism, travel, accommodation, permits, regulations, and park operations can change.

Contributors should:
- Avoid presenting unverified information as fact
- Prefer reliable and authoritative sources
- Document sources where possible
- Clearly identify information that may change
- Avoid copying copyrighted content without permission
- Respect image licensing and attribution requirements

> For official decisions and current regulations, users should always refer to the appropriate official authority.

---

## 📄 License

This project is distributed under the [MIT License](LICENSE).

```text
MIT License
Copyright (c) 2026 Ritesh Kumar
```

You are free to use, modify, distribute, fork, and build upon the project under the terms of the MIT License.

---

## 🙌 Support the Project

If you like this project:
- ⭐ Star the repository
- 🍴 Fork it
- 🐛 Report issues
- 💡 Suggest improvements
- 🔀 Submit a Pull Request

The project is open-source, independent, and growing. Let's build something useful together. 🌿🐅💻