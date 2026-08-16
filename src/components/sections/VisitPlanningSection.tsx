"use client";

import React from "react";
import { Clock, MapPin, Plane, Train, Car, Calendar, Compass } from "lucide-react";

export const VisitPlanningSection: React.FC = () => {
  const safariZones = [
    {
      id: "dudhwa-core",
      name: "Dudhwa Core Zone",
      gate: "Jirauli & Dudhwa Main Gate",
      highlights: ["Sal Canopy Woods", "Sonaripur Phanta", "Rhino Rehabilitation Enclosure"],
      shifts: "Morning: 06:00–10:00 AM | Evening: 03:00–06:00 PM",
      vehicleQuota: "30 Gypsies / Shift",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "kishanpur",
      name: "Kishanpur Sanctuary",
      gate: "Mailani / Kataiya Gate",
      highlights: ["Jhadi Tal Wetland Lake", "High Tiger Density", "Migratory Avifauna"],
      shifts: "Morning: 06:00–10:00 AM | Evening: 03:00–06:00 PM",
      vehicleQuota: "25 Gypsies / Shift",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "katarniaghat",
      name: "Katarniaghat Sanctuary",
      gate: "Bichhia Gate",
      highlights: ["Girwa River Gharial Breeding", "Gangetic Dolphin", "Elephant Corridor"],
      shifts: "Morning: 06:00–10:00 AM | Evening: 03:00–06:00 PM",
      vehicleQuota: "20 Gypsies / Shift",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sathiana",
      name: "Sathiana Grasslands",
      gate: "Sathiana Forest Gate",
      highlights: ["Barasingha Herds", "Wet Grassland Phantas", "Colonial Forest Rest House"],
      shifts: "Morning: 06:30–10:30 AM | Evening: 02:30–05:30 PM",
      vehicleQuota: "15 Gypsies / Shift",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const travelModes = [
    {
      mode: "By Air",
      icon: Plane,
      primary: "Chaudhary Charan Singh International Airport, Lucknow (LKO)",
      distance: "238 km from Dudhwa Main Headquarters",
      details: "Lucknow is connected by daily flights from Delhi, Mumbai, Bengaluru, and major Indian cities. Taxis are readily available from Lucknow to Dudhwa (approx. 4.5 to 5 hours drive).",
    },
    {
      mode: "By Rail",
      icon: Train,
      primary: "Dudhwa (DWX) / Palia Kalan (PD) / Shahjahanpur (SPN)",
      distance: "Nearest major junction: Shahjahanpur (112 km) & Mailani (30 km)",
      details: "Express trains connect Delhi, Lucknow, and Kanpur to Shahjahanpur and Bareilly junctions. Local passenger trains connect Mailani and Palia Kalan directly to Dudhwa.",
    },
    {
      mode: "By Road",
      icon: Car,
      primary: "State Highway 90 & NH 730 Route via Lakhimpur Kheri",
      distance: "430 km from Delhi | 238 km from Lucknow",
      details: "Regular Uttar Pradesh State Road Transport Corporation (UPSRTC) buses run from Lucknow, Shahjahanpur, Lakhimpur, and Bareilly to Palia Kalan (10 km from Dudhwa).",
    },
  ];

  return (
    <section id="planning-zones" className="py-24 relative bg-[#F2EFF0] dark:bg-[#0E110F] transition-colors duration-500 border-t border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* SECTION 1: SAFARI ZONES */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 tracking-widest uppercase font-semibold">
              03 • SAFARI SANCTUARY ZONES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-serif tracking-tight">
              The 4 Core Safari Zones
            </h2>
            <p className="text-base text-neutral-700 dark:text-white/70 font-sans">
              Guided 4x4 Gypsy safaris are conducted under official forest permits across Dudhwa Core, Kishanpur, Katarniaghat, and Sathiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safariZones.map((zone) => (
              <div
                key={zone.id}
                className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-md dark:shadow-2xl hover:border-orange-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={zone.image}
                      alt={zone.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-amber-400">
                      Gate: {zone.gate}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-serif">{zone.name}</h3>

                    <div className="space-y-2">
                      <div className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-white/40 uppercase">
                        ZONE HIGHLIGHTS
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {zone.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs text-neutral-800 dark:text-white/90"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex justify-between items-center text-xs font-mono text-neutral-600 dark:text-white/50 border-t border-black/10 dark:border-white/10 mt-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    {zone.vehicleQuota}
                  </span>
                  <a href="#plan" className="text-orange-600 dark:text-orange-400 font-bold hover:underline">
                    Book Permit →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: BEST TIME TO VISIT */}
        <div id="planning-season" className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/15 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl transition-colors duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 tracking-widest uppercase font-semibold">
                VISITOR SEASONAL CALENDAR
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-serif">
                Best Time to Visit Dudhwa
              </h3>
              <p className="text-sm text-neutral-700 dark:text-white/80 leading-relaxed font-sans">
                Dudhwa National Park is open annually for visitors from <span className="font-bold text-orange-600 dark:text-orange-400">15th November to 15th June</span>. The park remains strictly closed during monsoon months (16th June to 14th November) for animal breeding and forest regeneration.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 rounded-2xl space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">WINTER (NOV – FEB)</span>
                  <span className="text-xs font-mono text-neutral-500 dark:text-white/50">10°C to 20°C</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-white/70">Misty morning fogs over phantas, prime birdwatching for 450+ migratory species.</p>
              </div>

              <div className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 rounded-2xl space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">SPRING & SUMMER (MAR – JUN)</span>
                  <span className="text-xs font-mono text-neutral-500 dark:text-white/50">25°C to 38°C</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-white/70">Highest tiger & rhino sighting probabilities around water holes and Jhadi Tal lake.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: HOW TO REACH */}
        <div id="planning-reach" className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 tracking-widest uppercase font-semibold">
              TRAVEL & ROUTE ACCESS
            </span>
            <h3 className="text-3xl font-extrabold text-neutral-900 dark:text-white font-serif">
              How to Reach Dudhwa National Park
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelModes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 p-6 rounded-2xl space-y-4 shadow-sm hover:border-orange-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center text-orange-500">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-orange-600 dark:text-orange-400 font-semibold">{item.mode}</span>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white font-serif">{item.primary}</h4>
                  <p className="text-xs font-mono text-neutral-500 dark:text-white/50 mt-1">{item.distance}</p>
                </div>
                <p className="text-xs text-neutral-600 dark:text-white/70 font-sans leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
