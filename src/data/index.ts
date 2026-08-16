import {
  WildlifeSpecies,
  SafariZone,
  Accommodation,
  SourceReference,
} from "../types";
import { dudhwaImages } from "./media/images";

export const officialSources: SourceReference[] = [
  {
    title: "Dudhwa National Park Official Portal",
    url: "https://www.dudhwanationalpark.in/",
    sourceType: "official",
    lastReviewed: "2026-08-15",
  },
  {
    title: "UP Eco Tourism Dudhwa Reserve Page",
    url: "https://upecotourism.in/DudhwaNationalPark.aspx",
    sourceType: "official",
    lastReviewed: "2026-08-15",
  },
  {
    title: "Lakhimpur Kheri NIC District Administration",
    url: "https://kheri.nic.in/tourist-place/dudhwa-national-park/",
    sourceType: "official",
    lastReviewed: "2026-08-15",
  },
];

export const flagshipSpecies: WildlifeSpecies[] = [
  {
    id: "barasingha",
    commonName: "Northern Swamp Deer (Barasingha)",
    scientificName: "Rucervus duvaucelii duvaucelii",
    category: "mammal",
    conservationStatus: "Vulnerable",
    populationEstimate: "3,500+ in Dudhwa Reserve",
    description:
      "The nominate subspecies of swamp deer characterized by 12-tined antlers on mature stags. Endemic to the wet tall grasslands (phantas) of the Terai region.",
    habitat: "Sathiana & Sonaripur wet grasslands (phantas), marshy floodplains",
    images: [dudhwaImages.barasinghaPhanta],
    keyFacts: [
      "Distinguishing 12-tined antlers on stags ('Barasingha' = 12 tines)",
      "Sathiana and Sonaripur contain world's largest nominate population",
      "Controlled winter grass burning is critical for seasonal forage",
    ],
    sources: officialSources,
  },
  {
    id: "tiger",
    commonName: "Royal Bengal Tiger",
    scientificName: "Panthera tigris",
    category: "mammal",
    conservationStatus: "Endangered",
    populationEstimate: "100–125+ in Reserve landscape",
    description:
      "Apex predator of the Terai Arc Landscape. Frequent visitor to the dense Sal canopy and Suheli river tracts.",
    habitat: "Sal forests, riverine thickets, cane brakes along Suheli & Mohana",
    images: [dudhwaImages.tigerFeatured],
    keyFacts: [
      "Project Tiger reserve since 1987",
      "Kishanpur and Katarniaghat serve as vital breeding sanctuaries",
      "Cross-border movement into Nepal's Suklaphanta & Bardia parks",
    ],
    sources: officialSources,
  },
  {
    id: "rhino",
    commonName: "Great One-Horned Rhinoceros",
    scientificName: "Rhinoceros unicornis",
    category: "mammal",
    conservationStatus: "Vulnerable",
    populationEstimate: "45+ individuals (2022 census)",
    description:
      "Reintroduced in 1984 under a landmark conservation initiative after 90 years of regional extinction. Resides in Kakraha enclosure.",
    habitat: "South Sonaripur Kakraha Rhino Rehabilitation Area (27 sq km RRA)",
    images: [dudhwaImages.rhinoKakraha],
    keyFacts: [
      "1984: 5 rhinos translocated from Pobitora/Assam",
      "1985: 4 female rhinos translocated from Chitwan/Nepal",
      "Phase 2 expansion enclosure active in Belrayan range",
    ],
    sources: officialSources,
  },
];

export const safariZones: SafariZone[] = [
  {
    id: "dudhwa-core",
    name: "Dudhwa Core Zone (Jirauli Gate)",
    entranceGate: "Jirauli Gate",
    sanctuaryUnit: "Dudhwa Core",
    highlights: ["Dense Sal Canopy", "Kakraha Rhino Area", "Sonaripur Phanta"],
    terrain: "Moist Deciduous Sal Forest & Tall Grassland",
    morningShift: "06:00 AM - 10:00 AM",
    eveningShift: "03:00 PM - 06:00 PM",
    maxVehiclesPerShift: 30,
    sources: officialSources,
  },
  {
    id: "kishanpur-zone",
    name: "Kishanpur Wildlife Sanctuary",
    entranceGate: "Kataiya Gate / Mailani",
    sanctuaryUnit: "Kishanpur",
    highlights: ["High Tiger Density", "Jhadi Tal Migratory Birds", "Teak & Sal Mix"],
    terrain: "Wetland Lagoon & Dense Forest",
    morningShift: "06:00 AM - 10:00 AM",
    eveningShift: "03:00 PM - 06:00 PM",
    maxVehiclesPerShift: 25,
    sources: officialSources,
  },
];

export const accommodations: Accommodation[] = [
  {
    id: "dudhwa-frh",
    name: "Dudhwa Colonial Forest Rest House",
    type: "Forest Rest House",
    location: "Main Park Headquarters",
    roomCount: 12,
    description:
      "Historic British colonial style forest rest house surrounded by ancient Sal trees inside the core campus.",
    amenities: ["Solar Power", "Dining Hall", "Guide Allocation Counter"],
    historicalNote: "Established during colonial forest administration; host to Billy Arjan Singh.",
    bookingChannel: "UP Ecotourism Official Portal",
    sources: officialSources,
  },
  {
    id: "tharu-huts",
    name: "Tharu Tribal Heritage Eco-Cottages",
    type: "Tharu Eco Cottage",
    location: "Hathnapur / Buffer Fringes",
    roomCount: 8,
    description:
      "Traditional eco-lodges managed in partnership with indigenous Tharu villagers, showcasing local art and cuisine.",
    amenities: ["Organic Local Gastronomy", "Cultural Dance Showcase", "Handicrafts"],
    bookingChannel: "UP Eco Tourism Board",
    sources: officialSources,
  },
];
