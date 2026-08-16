import { WildlifeSpecies } from "@/types";
import { dudhwaImages } from "@/data/media/images";

export const featuredTiger = {
  id: "featured-tiger",
  name: "Royal Bengal Tiger",
  scientificName: "Panthera tigris",
  conservationStatus: "Endangered" as const,
  population: "100–125+ across Reserve",
  description:
    "The apex predator of the Terai Arc Landscape. Dudhwa's tigers inhabit the dense Sal canopies, cane brakes, and riverine thickets along the Suheli and Mohana rivers.",
  imageSrc: dudhwaImages.tigerFeatured.src,
  photographer: dudhwaImages.tigerFeatured.photographer,
  location: dudhwaImages.tigerFeatured.location,
  sourceUrl: dudhwaImages.tigerFeatured.sourceUrl,
  sourceName: dudhwaImages.tigerFeatured.sourceName,
};

export const homepageSpecies: WildlifeSpecies[] = [
  {
    id: "barasingha",
    commonName: "Northern Swamp Deer (Barasingha)",
    scientificName: "Rucervus duvaucelii duvaucelii",
    category: "mammal",
    conservationStatus: "Vulnerable",
    populationEstimate: "3,500+ in Reserve",
    description:
      "Nominate subspecies endemic to the wet tall grasslands (phantas) of Sathiana and Sonaripur. Stags display magnificent 12-tined antlers.",
    habitat: "Sathiana & Sonaripur wet grasslands (phantas)",
    images: [dudhwaImages.barasinghaPhanta],
    keyFacts: [
      "Distinguishing 12-tined antlers on stags",
      "World's largest nominate population",
      "Controlled winter grass burning is critical for seasonal forage",
    ],
    sources: [
      {
        title: "Dudhwa National Park Official Portal",
        url: "https://www.dudhwanationalpark.in/",
        sourceType: "official",
        lastReviewed: "2026-08-15",
      },
    ],
  },
  {
    id: "rhino",
    commonName: "Great One-Horned Rhinoceros",
    scientificName: "Rhinoceros unicornis",
    category: "mammal",
    conservationStatus: "Vulnerable",
    populationEstimate: "45+ individuals (2022 census)",
    description:
      "Reintroduced in 1984 after 90 years of local extinction. Resides in the 27 sq km Kakraha Rhino Rehabilitation Area (RRA).",
    habitat: "Kakraha RRA (South Sonaripur Range)",
    images: [dudhwaImages.rhinoKakraha],
    keyFacts: [
      "1984: 5 rhinos translocated from Assam",
      "1985: 4 female rhinos translocated from Nepal",
      "Phase 2 expansion enclosure active in Belrayan",
    ],
    sources: [
      {
        title: "UP Ecotourism Board - Rhino Project",
        url: "https://upecoboard.up.gov.in/",
        sourceType: "official",
        lastReviewed: "2026-08-15",
      },
    ],
  },
  {
    id: "elephant",
    commonName: "Asian Elephant",
    scientificName: "Elephas maximus",
    category: "mammal",
    conservationStatus: "Endangered",
    populationEstimate: "Seasonal Migratory Herds",
    description:
      "Migrates seasonally across the Indo-Nepal international corridor connecting Dudhwa to Suklaphanta and Bardia National Parks.",
    habitat: "Katarniaghat & Belrayan riverine corridors",
    images: [dudhwaImages.elephantCorridor],
    keyFacts: [
      "Trans-boundary corridor movement",
      "Frequent visitor to Girwa & Mohana rivers",
      "Critical habitat connectivity protection",
    ],
    sources: [
      {
        title: "UP Eco-Tourism Official Portal",
        url: "https://upecotourism.in/",
        sourceType: "official",
        lastReviewed: "2026-08-15",
      },
    ],
  },
];
