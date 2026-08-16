# INFORMATION ARCHITECTURE & SITE HIERARCHY
## Dudhwa National Park Digital Experience

```
DUDHWA DIGITAL EXPERIENCE ARCHITECTURE
├── Home (Cinematic Landing, Brand Statement, 3D Hero Capability, Quick Portal)
├── Explore Dudhwa
│   ├── Park Overview (Geography, Ecosystem, Rivers, Phantas, Sal Forest)
│   ├── History (Billy Arjan Singh, Timeline, Royal Roots, Gazette Records)
│   └── Conservation (Rhino RRA, Barasingha Protection, Corridor Connectivity)
├── Wildlife Field Guide
│   ├── Species Showcase (Interactive Index, Mammals, Birds, Herpetofauna)
│   ├── Tiger (Bengal Tiger profile, habitat, territorial behavior)
│   ├── Rhinoceros (Kakraha RRA history, 1984 reintroduction, population)
│   ├── Barasingha (Swamp Deer 12-tined antlers, Sathiana phantas)
│   └── Elephant & Leopard (Terai migration corridors)
├── Safari & Field Guide
│   ├── Safari Overview & Code of Conduct
│   ├── Zones & Gates (Jirauli/Dudhwa, Sonaripur, Sathiana, Kishanpur, Katarniaghat)
│   ├── Timings & Seasons (Nov 15 - Jun 15, Shift timings, weather)
│   └── Booking & Tariff Rules (Official UP Ecotourism portal guidance)
├── Stay & Accommodation
│   ├── Forest Rest Houses (Dudhwa, Sathiana, Sonaripur, Bankatti, Salarhapur)
│   ├── Tharu Eco-Huts (Community homestays, culture, local gastronomy)
│   └── External Verified Stays
├── Plan Your Visit
│   ├── Best Time to Visit (Seasonal breakdown)
│   ├── How to Reach (Air, Rail, Road, Maps)
│   ├── Rules & Visitor Guidelines (Plastic ban, safety, permits)
│   └── Frequently Asked Questions (FAQ)
└── Journal & Community
    ├── Stories & Photo Essays (Editorial wildlife narratives)
    ├── Photography Gallery (Verified Dudhwa media, photographer directory)
    └── Research & Sources (Source reliability matrix, citation records)
```

---

### Structural Rules
1. **Clean Route Mapping**: Next.js App Router sub-directories map 1-to-1 with the architecture (`/explore`, `/wildlife`, `/safari`, `/stay`, `/plan`, `/journal`).
2. **Separation of Content**: All textual content, statistics, species facts, and safari rules reside in `src/content/` and `src/data/`, separate from visual layout components.
