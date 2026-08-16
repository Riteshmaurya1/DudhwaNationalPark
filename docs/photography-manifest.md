# MASTER ASSET & PHOTOGRAPHY MANIFEST SPECIFICATION
## Dudhwa National Park Digital Experience — Permanent Mandate

### 1. Absolute Image Provenance Rule
This instruction is permanent and active across **all current and future development phases**:
- **Mandate**: The website must exclusively use authentic, real, high-quality Dudhwa-specific photography.
- **Strict Prohibition**: Never use AI-generated wildlife photographs, generic Indian stock imagery presented as Dudhwa, or big cat photographs from other parks (Ranthambore, Bandhavgarh, Kanha, Corbett, Kaziranga) labeled as Dudhwa.

---

### 2. 10-Tier Source Reliability Hierarchy
```
1. Official Government Sources (UP Forest Dept, Ministry of Environment)
2. Official UP Eco-Tourism / Forest Sources (upecotourism.in, upecoboard.up.gov.in)
3. District Lakhimpur Kheri Government Sources (kheri.nic.in)
4. Reputable Wildlife Organizations (Wildlife Institute of India, WWF India, IUCN)
5. Professional Wildlife Photographers (Accredited Terai naturalists)
6. Licensed Photography Collections
7. Wikimedia Commons / Open-License Sources (CC-BY, CC-BY-SA)
8. Reputable Documentary / Travel Publications (Sanctuary Asia, NatGeo India)
9. YouTube / Vloggers for visual discovery & location verification
10. Pinterest for visual discovery (Subject to strict license verification)
```

---

### 3. Pinterest & YouTube Verification Pipeline

```
Discovery (Pinterest / YouTube)
           │
           ▼
Locate Original Author / Photographer
           │
           ▼
Verify License Status (CC-BY / Public / Permission)
           │
           ▼
Logged into src/data/media/images.ts Manifest
           │
           ▼
Assigned PRODUCTION READY status
```

---

### 4. Licensing & Usage Taxonomy
Every asset in `src/data/media/images.ts` is assigned one of three operational states:
1. `PRODUCTION READY`: Verified Dudhwa provenance with official, licensed, or open-license clearance.
2. `LICENSE / PERMISSION REQUIRED`: Identified high-quality Dudhwa asset awaiting author response.
3. `REFERENCE ONLY`: Development placeholder; excluded from production deployment builds.

---

### 5. Centralized Data Architecture (`PhotoAsset`)

All media components (`PhotoCredit.tsx`, `ImageWrapper.tsx`) consume the unified `PhotoAsset` contract:
```typescript
interface PhotoAsset {
  id: string;
  src: string;
  alt: string;
  photographer?: string;
  title?: string;
  sourceUrl: string;
  sourceName: string;
  location: string;
  usageStatus: "official" | "licensed" | "open-license" | "permission-granted" | "reference-only";
  license?: string;
  credit?: string;
  dateDiscovered?: string;
}
```

---

### 6. Authenticity Before Spectacle
When choosing between a dramatic but unverified wildlife photograph and a verified real Dudhwa image:
**Always select the verified real Dudhwa image.**
Authenticity and editorial integrity supersede visual spectacle.
