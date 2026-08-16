export interface SourceReference {
  title: string;
  url: string;
  sourceType:
    | "official"
    | "research"
    | "publication"
    | "photographer"
    | "video"
    | "secondary";
  lastReviewed: string;
}

export interface PhotoAsset {
  id: string;
  src: string;
  alt: string;
  photographer?: string;
  title?: string;
  sourceUrl: string;
  sourceName: string;
  location: string;
  usageStatus:
    | "official"
    | "licensed"
    | "open-license"
    | "permission-granted"
    | "reference-only";
  license?: string;
  credit?: string;
  dateDiscovered?: string;
}

export interface WildlifeSpecies {
  id: string;
  commonName: string;
  scientificName?: string;
  category: "mammal" | "bird" | "reptile" | "butterfly" | "other";
  description: string;
  habitat?: string;
  conservationStatus?: "Critically Endangered" | "Endangered" | "Vulnerable" | "Near Threatened" | "Least Concern";
  populationEstimate?: string;
  images?: PhotoAsset[];
  keyFacts: string[];
  sources: SourceReference[];
}

export interface SafariZone {
  id: string;
  name: string;
  entranceGate: string;
  sanctuaryUnit: "Dudhwa Core" | "Kishanpur" | "Katarniaghat" | "Sathiana";
  highlights: string[];
  terrain: string;
  morningShift: string;
  eveningShift: string;
  maxVehiclesPerShift: number;
  sources: SourceReference[];
}

export interface Accommodation {
  id: string;
  name: string;
  type: "Forest Rest House" | "Tharu Eco Cottage" | "Private Resort";
  location: string;
  roomCount: number;
  description: string;
  amenities: string[];
  historicalNote?: string;
  bookingChannel: string;
  sources: SourceReference[];
}

export interface Photographer {
  id: string;
  name: string;
  bio: string;
  portfolioUrl?: string;
  verifiedDudhwaContributor: boolean;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  publishedDate: string;
  category: "Wildlife" | "Conservation" | "History" | "Photography";
  contentMarkdown: string;
  heroImage: PhotoAsset;
  sources: SourceReference[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "Safari" | "Stay" | "Travel" | "Rules" | "General";
}

export interface TravelRoute {
  id: string;
  mode: "Air" | "Rail" | "Road";
  from: string;
  distanceKm: number;
  travelTime: string;
  routeDetails: string;
}

export interface ConservationStory {
  id: string;
  title: string;
  initiative: "Rhino Reintroduction" | "Barasingha Phanta Protection" | "Corridor Connectivity" | "Tharu Coexistence";
  yearStarted: number;
  summary: string;
  milestones: { year: number; achievement: string }[];
  sources: SourceReference[];
}

export interface VisitorReview {
  id: string;
  visitorName: string;
  visitDate: string;
  safariZone: string;
  rating: number;
  reviewText: string;
  verifiedVisitor: boolean;
}
