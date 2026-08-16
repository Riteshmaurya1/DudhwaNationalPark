"use client";

import React from "react";
import { Hotel, Compass, CheckCircle2, ChevronRight } from "lucide-react";

export const AccommodationSection: React.FC = () => {
  const stayOptions = [
    {
      id: "frh-sonaripur",
      title: "Colonial Forest Rest Houses (FRH)",
      category: "Heritage Forest Lodging",
      location: "Sonaripur, Sathiana, Bankey Tal & Dudhwa HQ",
      description: "Heritage teakwood rest houses constructed by British forest engineers in the early 20th century. Situated inside core forest tracts surrounded by ancient Sal canopies.",
      amenities: ["Spacious Colonial Suites", "Forest Fireplaces", "In-house Officer Dining", "Solar Power Backups"],
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tharu-cottages",
      title: "Tharu Eco-Cottages",
      category: "Indigenous Cultural Stays",
      location: "Dudhwa Buffer & Sathiana Boundary",
      description: "Traditional bamboo and thatch eco-cottages operated in partnership with the local indigenous Tharu tribe, offering authentic organic meals and cultural performances.",
      amenities: ["Tharu Bamboo Architecture", "Organic Local Cuisine", "Cultural Evening Folk Music", "Nature Trails"],
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "dudhwa-resort",
      title: "Private Eco Resorts & Lodges",
      category: "Luxury Jungle Resorts",
      location: "Palia Kalan & Dudhwa Road Outer Buffer",
      description: "Modern eco-resorts featuring air-conditioned suites, swimming pools, private dining decks, and 4x4 safari Gypsy booking desks.",
      amenities: ["Air Conditioned Luxury Rooms", "Swimming Pool & Spa", "Specialized Wildlife Naturalists", "Buffet Dining"],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const packages = [
    {
      title: "2 Nights / 3 Days Classic Dudhwa Tiger Safari",
      includes: "2 Gypsies | FRH Stay | Meals | Expert Naturalist",
      highlights: "Covering Dudhwa Core & Kishanpur Jhadi Tal",
      target: "Best for First-time Visitors & Wildlife Enthusiasts",
    },
    {
      title: "3 Nights / 4 Days Rhino & Gharial Expedition",
      includes: "3 Safaris + Boat Ride | Katarniaghat + Sathiana",
      highlights: "Includes Kakraha Rhino RRA & Girwa River Boat Safari",
      target: "Best for Photographers & Birdwatchers",
    },
  ];

  return (
    <section id="accommodation" className="py-24 relative bg-[#F2EFF0] dark:bg-[#0E110F] transition-colors duration-500 border-t border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 tracking-widest uppercase font-semibold">
            05 • ACCOMMODATION & TOUR PACKAGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-serif tracking-tight">
            Stay Inside the Terai Wilderness
          </h2>
          <p className="text-base text-neutral-700 dark:text-white/70 font-sans">
            Choose between historic British Colonial Forest Rest Houses (FRH), indigenous Tharu eco-cottages, or luxury jungle resorts surrounding the reserve buffer.
          </p>
        </div>

        {/* Stay Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stayOptions.map((stay) => (
            <div
              key={stay.id}
              className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-md dark:shadow-2xl flex flex-col justify-between hover:border-orange-500/40 transition-all group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={stay.image}
                    alt={stay.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-amber-400">
                    {stay.category}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-serif">{stay.title}</h3>
                    <p className="text-xs font-mono text-orange-600 dark:text-orange-400 mt-0.5">{stay.location}</p>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-white/70 font-sans leading-relaxed">{stay.description}</p>

                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-white/40 uppercase">AMENITIES & INCLUSIONS</div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-neutral-800 dark:text-white/90">
                      {stay.amenities.map((a, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-black/10 dark:border-white/10 mt-4">
                <a
                  href="#plan"
                  className="flex items-center justify-between text-xs font-mono font-bold text-orange-600 dark:text-orange-400 hover:underline pt-3"
                >
                  <span>Reserve Forest Stay</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Packages Cards */}
        <div className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/15 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl transition-colors duration-500">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase">CURATED EXPERIENCES</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-serif">Official Dudhwa Tour Packages</h3>
            </div>
            <a
              href="#plan"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase shadow-md"
            >
              Custom Package Inquiry
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 rounded-2xl space-y-3">
                <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase">{pkg.target}</span>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white font-serif">{pkg.title}</h4>
                <p className="text-xs text-neutral-600 dark:text-white/70 font-mono">{pkg.includes}</p>
                <div className="text-xs font-medium text-emerald-800 dark:text-emerald-400">{pkg.highlights}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
