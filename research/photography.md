# PHOTOGRAPHY ARCHITECTURE & VERIFIED SOURCE INDEX
## Dudhwa Field Photography & Asset Sourcing

### 1. Photographic Authenticity Mandate
To ensure absolute editorial credibility:
- **Strict Rule**: Images used for Dudhwa species showcases **must be authentic field photographs of Dudhwa / Terai wildlife**.
- **Prohibited Practice**: Stock photos of tigers from Ranthambore, Bandhavgarh, Kanha, or Corbett must **NEVER** be labeled as Dudhwa wildlife.
- **Reference Labeling**: If a non-Dudhwa photograph is used for temporary UI prototyping, it must be explicitly tagged with `usageStatus: "reference-only"` and labeled as a non-Dudhwa placeholder in metadata.

---

### 2. Verified Photography Sources

1. **Wikimedia Commons Open Licenses (CC-BY / CC-BY-SA)**:
   - Verified Dudhwa landscape shots, Barasingha in Sonaripur, Rhino in Kakraha, Sarus Cranes in Suheli.
2. **UP Eco Tourism Official Media Gallery**:
   - Official press assets and sanctuary landscapes.
3. **Field Photographers & Naturalists**:
   - Accredited Dudhwa safari guides, conservation researchers, and wildlife vloggers with geotagged Terai media.

---

### 3. Subject Classification & Metadata Fields

Each photography asset in `src/data/photography.ts` must maintain:
```typescript
interface PhotographyAsset {
  id: string;
  src: string;
  photographer: string;
  sourceUrl: string;
  subject: string;
  location: string;
  licenseOrPermission: string;
  usageStatus: "official" | "open-license" | "permission-required" | "reference-only";
  credit: string;
}
```
