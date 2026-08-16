"use client";

import React from "react";
import { Compass, Clock, MapPin, Car, Shield, AlertCircle } from "lucide-react";

export const SafariSection: React.FC = () => {
  const zones = [
    {
      id: "dudhwa-core",
      name: "Dudhwa Core Zone",
      gate: "Jirauli & Dudhwa Main Gate",
      sanctuary: "Dudhwa National Park",
      highlights: ["Sal Canopies", "Sonaripur Phanta", "Rhino Area", "Tiger Sightings"],
      terrain: "Moist Deciduous Forest & Tall Grasslands",
      morningShift: "06:00 AM – 10:00 AM",
      eveningShift: "03:00 PM – 06:00 PM",
      maxVehicles: 30,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "kishanpur",
      name: "Kishanpur Sanctuary",
      gate: "Mailani / Kataiya Gate",
      sanctuary: "Kishanpur Wildlife Sanctuary",
      highlights: ["Jhadi Tal Wetland", "High Tiger Density", "Migratory Birds", "Wild Boar & Chital"],
      terrain: "Dense Woodlands & Perennial Lake Basins",
      morningShift: "06:00 AM – 10:00 AM",
      eveningShift: "03:00 PM – 06:00 PM",
      maxVehicles: 25,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "katarniaghat",
      name: "Katarniaghat Sanctuary",
      gate: "Bichhia Gate",
      sanctuary: "Katarniaghat Wildlife Sanctuary",
      highlights: ["Girwa River Gharial", "Gangetic Dolphin", "Elephant Corridor", "River Boat Safari"],
      terrain: "Riverine Ecosystem & Trans-boundary Forests",
      morningShift: "06:00 AM – 10:00 AM",
      eveningShift: "03:00 PM – 06:00 PM",
      maxVehicles: 20,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sathiana",
      name: "Sathiana Range",
      gate: "Sathiana Forest Gate",
      sanctuary: "Dudhwa Buffer & Grasslands",
      highlights: ["Barasingha Herds", "Elephant Trail", "Birdwatching", "Historic Rest House"],
      terrain: "Open Wet Phantas & River Floodplains",
      morningShift: "06:30 AM – 10:30 AM",
      eveningShift: "02:30 PM – 05:30 PM",
      maxVehicles: 15,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="safari" className="py-24 relative bg-[#090909] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-orange-500 tracking-widest uppercase">
            03 • SAFARI SANCTUARY ZONES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            Explore the 4 Key Safari Zones
          </h2>
          <p className="text-base text-white/70 font-sans">
            Safaris are conducted in authorized 4x4 open-top Gypsies accompanied by certified registered guides.
            Advance permit registration is mandatory via official Uttar Pradesh Ecotourism.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className="bg-black/60 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={zone.image}
                    alt={zone.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-amber-400">
                    Gate: {zone.gate}
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <div>
                    <span className="text-xs font-mono text-orange-400/90 uppercase">
                      {zone.sanctuary}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-serif">{zone.name}</h3>
                    <p className="text-xs text-white/60 font-sans mt-1">{zone.terrain}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                      ZONE HIGHLIGHTS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {zone.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/90"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timings & Quotas */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/5 border border-white/10 p-3 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-orange-400">
                        <Clock className="w-3 h-3" />
                        MORNING SHIFT
                      </div>
                      <div className="text-xs font-bold text-white">{zone.morningShift}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-3 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-orange-400">
                        <Clock className="w-3 h-3" />
                        EVENING SHIFT
                      </div>
                      <div className="text-xs font-bold text-white">{zone.eveningShift}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex justify-between items-center text-xs font-mono text-white/50 border-t border-white/10">
                <span className="flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-orange-400" />
                  Max {zone.maxVehicles} Gypsies/Shift
                </span>
                <a
                  href="#plan"
                  className="text-orange-400 hover:text-white transition-colors font-bold"
                >
                  Permit Rules →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
