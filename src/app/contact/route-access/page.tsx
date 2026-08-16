import React from "react";
import Link from "next/link";
import { dudhwaParkData } from "@/data/dudhwaParkData";
import {
  ArrowLeft,
  MapPin,
  Navigation,
  Plane,
  Train,
  Car,
  Compass,
  CheckCircle,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

export const metadata = {
  title: "Route & Access Information | Dudhwa National Park",
  description:
    "Complete directions to reach Dudhwa National Park via Air (Lucknow Airport), Rail (Shahjahanpur/Mailani/Palia), and Road, plus entrance gate locations.",
};

export default function RouteAccessPage() {
  const gates = [
    {
      name: "Jirauli & Dudhwa Main Gate",
      sanctuary: "Dudhwa Core National Park",
      location: "Gadeneya / Dudhwa HQ (10 km from Palia Kalan)",
      accessFor: "Dudhwa Core Safari, Sonaripur Phanta, Kakraha Rhino RRA, FRH Accommodations",
    },
    {
      name: "Mailani & Kataiya Gate",
      sanctuary: "Kishanpur Wildlife Sanctuary",
      location: "Kataiya Range (30 km from Palia Kalan / Mailani Junction)",
      accessFor: "Jhadi Tal Wetland Safari, High Tiger Density Zone",
    },
    {
      name: "Bichhia Gate",
      sanctuary: "Katarniaghat Wildlife Sanctuary",
      location: "Bahraich District (90 km from Dudhwa HQ)",
      accessFor: "Girwa River Boat Safari, Gharial Breeding Sanctuary, Dolphin Spotting",
    },
    {
      name: "Sathiana Gate",
      sanctuary: "Sathiana Buffer & Grasslands",
      location: "Sathiana Range (15 km from Dudhwa Main HQ)",
      accessFor: "Barasingha Swamp Deer Phantas, Elephant Migration Corridor",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F9F8F6] dark:bg-[#090B0A] text-neutral-900 dark:text-[#F4F2EC] transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-neutral-600 dark:text-white/60 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <span className="opacity-30">/</span>
          <span className="text-orange-600 dark:text-orange-400 font-semibold">Contact Us</span>
          <span className="opacity-30">/</span>
          <span className="text-neutral-900 dark:text-white">Route & Access Information</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
            <Navigation className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            GEOGRAPHIC ACCESS & ENTRANCE GATES
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-neutral-900 dark:text-white">
            Route & Entrance Access Guide
          </h1>
          <p className="text-base text-neutral-600 dark:text-white/70">
            Dudhwa National Park is located in Lakhimpur Kheri district, Uttar Pradesh, near the Indo-Nepal border. Nearby gateway city: <strong className="text-neutral-900 dark:text-white font-mono font-bold">Palia Kalan (10 km)</strong>.
          </p>
        </div>

        {/* 1. Travel Modes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase">BY AIR</span>
              <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-white">Lucknow Airport (LKO)</h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-white/50 mt-1">Distance: 238 km (~4.5 to 5 hours drive)</p>
            </div>
            <p className="text-xs text-neutral-600 dark:text-white/70 font-sans leading-relaxed">
              Chaudhary Charan Singh International Airport in Lucknow is connected by daily direct flights from Delhi, Mumbai, Bengaluru, and Kolkata. Private taxis and state buses operate directly from Lucknow to Palia Kalan / Dudhwa.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
              <Train className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase">BY RAIL</span>
              <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-white">Shahjahanpur / Mailani / Palia</h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-white/50 mt-1">Nearest Junction: Shahjahanpur (112 km)</p>
            </div>
            <p className="text-xs text-neutral-600 dark:text-white/70 font-sans leading-relaxed">
              Major express trains connect Delhi, Lucknow, and Bareilly to Shahjahanpur (SPN) and Bareilly (BE). Local passenger trains run from Mailani Junction (30 km) and Palia Kalan (10 km) directly to Dudhwa Railway Station (DWX).
            </p>
          </div>

          <div className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase">BY ROAD</span>
              <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-white">State Highway 90 & NH 730</h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-white/50 mt-1">Delhi: 430 km | Lucknow: 238 km</p>
            </div>
            <p className="text-xs text-neutral-600 dark:text-white/70 font-sans leading-relaxed">
              Well-connected asphalt highways via Sitapur, Lakhimpur, and Khutar to Palia Kalan. UPSRTC state roadways buses run round-the-clock from Lucknow, Bareilly, and Delhi (Anand Vihar ISBT).
            </p>
          </div>
        </div>

        {/* 2. Entrance Gates Breakdown Cards */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase font-semibold">SANCTUARY ENTRY POINTS</span>
            <h2 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white">Dudhwa Reserve Entrance Gates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gates.map((gate, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-2xl p-6 shadow-sm space-y-3 hover:border-orange-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 uppercase font-bold">
                    {gate.sanctuary}
                  </span>
                  <MapPin className="w-4 h-4 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold font-serif text-neutral-900 dark:text-white">{gate.name}</h3>
                <p className="text-xs font-mono text-neutral-500 dark:text-white/60">{gate.location}</p>
                <div className="pt-2 border-t border-neutral-100 dark:border-white/5 text-xs text-neutral-700 dark:text-white/80">
                  <strong>Access to:</strong> {gate.accessFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Location Summary Banner */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-black text-white p-8 sm:p-10 rounded-3xl border border-white/15 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">GEOGRAPHIC GPS COORDINATES</span>
            <h3 className="text-2xl font-bold font-serif text-white">Gadeneya, Lakhimpur Kheri, UP 262902</h3>
            <p className="text-xs text-white/70">Coordinates: 28°18′ N to 28°42′ N | Altitude: 150m to 182m above mean sea level.</p>
          </div>
          <Link
            href="/contact/inquiry-form"
            className="px-6 py-3 rounded-full bg-orange-500 text-black font-extrabold text-xs uppercase hover:bg-orange-400 transition-colors flex-shrink-0"
          >
            Inquire For Route Assistance
          </Link>
        </div>
      </div>
    </div>
  );
}
