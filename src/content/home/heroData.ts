import { dudhwaImages } from "@/data/media/images";
import { PhotoAsset } from "@/types";

export interface HeroSlide {
  id: string;
  speciesName: string;
  scientificName: string;
  headline: string;
  subHeadline: string;
  famousDetails: {
    label: string;
    value: string;
  }[];
  description: string;
  badge: string;
  image: PhotoAsset;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-tiger",
    speciesName: "Royal Bengal Tiger",
    scientificName: "Panthera tigris",
    headline: "TIGER HAVEN",
    subHeadline: "Famous Tigers of Dudhwa & Kishanpur",
    famousDetails: [
      { label: "FAMOUS TIGER", value: "Tara the Tigress & Male T-101" },
      { label: "ESTIMATED AGE", value: "~8 Years Old" },
      { label: "DOMINANT TERRITORY", value: "Kishanpur & Suheli River" },
    ],
    description:
      "Apex predator of the Terai Arc Landscape. Legend of Billy Arjan Singh's tigress 'Tara' and the thriving 100–125+ tiger population patrolling the moist Sal woods.",
    badge: "01 • APEX PREDATOR",
    image: dudhwaImages.tigerFeatured,
  },
  {
    id: "slide-deer",
    speciesName: "Northern Swamp Deer (Barasingha)",
    scientificName: "Rucervus duvaucelii duvaucelii",
    headline: "BARAH SINGHA",
    subHeadline: "The Twelve-Tined Stags of Sathiana",
    famousDetails: [
      { label: "KEY FEATURE", value: "12-Tined Antlers on Stags" },
      { label: "HERD SIZE", value: "3,500+ Endemic Population" },
      { label: "PRIMARY PHANTA", value: "Sathiana & Sonaripur" },
    ],
    description:
      "The emblem species of Dudhwa National Park. Stags display magnificent 12-tined antlers across the wet grassland phantas of the Terai floodplains.",
    badge: "02 • EMBLEM FAUNA",
    image: dudhwaImages.barasinghaPhanta,
  },
  {
    id: "slide-rhino",
    speciesName: "Great One-Horned Rhinoceros",
    scientificName: "Rhinoceros unicornis",
    headline: "ONE-HORNED RHINO",
    subHeadline: "1984 Kakraha Reintroduction Program",
    famousDetails: [
      { label: "HERD CENSUS", value: "45+ Individuals (2022)" },
      { label: "PROTECTED AREA", value: "27 sq km Kakraha RRA" },
      { label: "REINTRODUCTION", value: "Assam & Nepal Translocation" },
    ],
    description:
      "Reintroduced to Uttar Pradesh in 1984 after 90 years of regional extinction. Protected inside the fenced Kakraha Rhino Rehabilitation Area.",
    badge: "03 • CONSERVATION LANDMARK",
    image: dudhwaImages.rhinoKakraha,
  },
  {
    id: "slide-elephant",
    speciesName: "Asian Elephant",
    scientificName: "Elephas maximus",
    headline: "TERAI GIANTS",
    subHeadline: "Trans-boundary Migratory Herds",
    famousDetails: [
      { label: "CORRIDOR", value: "Indo-Nepal International Route" },
      { label: "HERD BEHAVIOR", value: "Seasonal Riverine Crossing" },
      { label: "FAVORITE BASIN", value: "Girwa & Mohana Rivers" },
    ],
    description:
      "Migrates seasonally through Katarniaghat and Belrayan corridors connecting Dudhwa to Nepal's Suklaphanta and Bardia National Parks.",
    badge: "04 • MIGRATORY CORRIDOR",
    image: dudhwaImages.elephantCorridor,
  },
  {
    id: "slide-sloth-bear",
    speciesName: "Indian Sloth Bear",
    scientificName: "Melursus ursinus",
    headline: "SLOTH BEAR",
    subHeadline: "Shaggy Insectivore of the Sal Understory",
    famousDetails: [
      { label: "STATUS", value: "Vulnerable (IUCN Red List)" },
      { label: "DIET HABIT", value: "Termites, Ants & Mahua Fruits" },
      { label: "RANGE", value: "Belrayan & Sathiana Sal Tracts" },
    ],
    description:
      "A solitary, nocturnal insectivore that thrives in the dense Sal underbrush and mound-rich soils of the Dudhwa tiger reserve.",
    badge: "05 • SAL WOODLAND RESIDENT",
    image: dudhwaImages.slothBear,
  },
  {
    id: "slide-leopard",
    speciesName: "Indian Leopard",
    scientificName: "Panthera pardus",
    headline: "TERAI LEOPARD",
    subHeadline: "The Silent Canopy Hunter",
    famousDetails: [
      { label: "STATUS", value: "Vulnerable (Project Tiger)" },
      { label: "STALKING GROUND", value: "Katarniaghat Buffer & Cane Brakes" },
      { label: "ACTIVITY", value: "Crepuscular & Nocturnal Prowler" },
    ],
    description:
      "A silent stealth hunter inhabiting the thick riverine cane brakes and peripheral forest borders across Dudhwa and Katarniaghat.",
    badge: "06 • CANOPY PREDATOR",
    image: dudhwaImages.leopard,
  },
  {
    id: "slide-gharial",
    speciesName: "Indian Gharial",
    scientificName: "Gavialis gangeticus",
    headline: "RIVER GHARIAL",
    subHeadline: "Critically Endangered Fish-Eating Crocodilian",
    famousDetails: [
      { label: "STATUS", value: "Critically Endangered" },
      { label: "SANCTUARY", value: "Girwa River Aquatic Reserve" },
      { label: "POPULATION", value: "Top Breeding Nesting Sanctuary" },
    ],
    description:
      "One of the world's most endangered crocodilians. The pristine, unpolluted waters of the Girwa river host India's premier wild breeding gharial population.",
    badge: "07 • AQUATIC CONSERVATION",
    image: dudhwaImages.gharial,
  },
];

export const heroData = {
  eyebrow: "TERAI ARC LANDSCAPE • UTTAR PRADESH • INDIA",
  titleMain: "DUDHWA",
  titleSub: "ENTER THE WILD.",
  description:
    "A living, breathing landscape of ancient Sal canopies, marshy grassland phantas, nominate Barasingha herds, and the landmark 1984 One-Horned Rhinoceros sanctuary.",
  metadata: {
    location: "LAKHIMPUR KHERI & BAHRAICH",
    coordinates: "28°18′ N to 28°42′ N",
    status: "NATIONAL PARK & TIGER RESERVE",
  },
  primaryCta: {
    label: "EXPLORE DUDHWA",
    href: "#explore",
  },
  secondaryCta: {
    label: "PLAN YOUR VISIT",
    href: "#plan",
  },
  slides: heroSlides,
};