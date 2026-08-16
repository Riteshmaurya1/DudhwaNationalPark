"use client";

import React from "react";
import { featuredTiger, homepageSpecies } from "@/content/home/wildlifeData";
import { Feather, Compass } from "lucide-react";

export const WildlifeSection: React.FC = () => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "Critically Endangered":
        return "bg-red-500/20 border-red-500/40 text-red-700 dark:text-red-400";
      case "Endangered":
        return "bg-orange-500/20 border-orange-500/40 text-orange-700 dark:text-orange-400";
      case "Vulnerable":
        return "bg-amber-500/20 border-amber-500/40 text-amber-700 dark:text-amber-400";
      default:
        return "bg-emerald-500/20 border-emerald-500/40 text-emerald-700 dark:text-emerald-400";
    }
  };

  const additionalWildlife = [
    {
      id: "birds",
      name: "Birds of Dudhwa",
      scientificName: "450+ Avian Species",
      category: "Avifauna",
      status: "Protected",
      description: "Home to Bengal Florican, Great Hornbill, Swamp Francolin, Fishing Eagle, and migratory waterfowl across Jhadi Tal & Suheli river basins.",
      habitat: "Wetlands, Phantas & Sal Canopy",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "leopard-gharial",
      name: "Indian Leopard & Aquatic Crocodilians",
      scientificName: "Panthera pardus & Gavialis gangeticus",
      category: "Predators & Reptiles",
      status: "Critically Endangered",
      description: "Silent canopy stealth leopards inhabit riverine cane brakes, while the pristine Girwa river hosts India's premier wild breeding gharial population.",
      habitat: "Katarniaghat Sanctuary & Girwa River",
      image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="wildlife" className="py-24 relative bg-[#F9F8F6] dark:bg-[#090B0A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 tracking-widest uppercase font-semibold">
              02 • ICONIC FAUNA OF DUDHWA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-serif tracking-tight">
              Apex Predators & Emblem Species
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-white/70 max-w-md font-sans">
            Protecting 38+ mammal species, 450+ bird species, and rare aquatic reptiles across the intact Himalayan Terai Arc landscape.
          </p>
        </div>

        {/* Featured Tiger Card */}
        <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#121513] border border-black/10 dark:border-white/15 shadow-2xl transition-colors duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative h-72 lg:h-auto">
              <img
                src={featuredTiger.imageSrc}
                alt={featuredTiger.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full border text-xs font-mono tracking-wider ${getStatusColor(
                      featuredTiger.conservationStatus
                    )}`}
                  >
                    {featuredTiger.conservationStatus}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 dark:text-white/50">{featuredTiger.scientificName}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-serif">
                  {featuredTiger.name}
                </h3>

                <p className="text-sm text-neutral-700 dark:text-white/80 font-sans leading-relaxed">
                  {featuredTiger.description}
                </p>

                <div className="bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 rounded-xl space-y-1">
                  <div className="text-[10px] font-mono text-orange-600 dark:text-orange-400 uppercase font-semibold">RESERVE POPULATION</div>
                  <div className="text-base font-bold text-neutral-900 dark:text-white">{featuredTiger.population}</div>
                </div>
              </div>

              <div className="text-xs font-mono text-neutral-500 dark:text-white/50 border-t border-black/10 dark:border-white/10 pt-4 flex justify-between">
                <span>Location: {featuredTiger.location}</span>
                <span>{featuredTiger.sourceName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Species Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homepageSpecies.map((species) => {
            const imageAsset = species.images?.[0];
            return (
              <div
                key={species.id}
                className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all group flex flex-col justify-between shadow-md dark:shadow-none"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={imageAsset?.src || "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80"}
                      alt={species.commonName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-[11px] font-mono backdrop-blur-md ${getStatusColor(
                        species.conservationStatus
                      )}`}
                    >
                      {species.conservationStatus}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h4 className="text-xl font-bold text-neutral-900 dark:text-white font-serif">{species.commonName}</h4>
                      <p className="text-xs font-mono text-orange-600 dark:text-orange-400 font-semibold">{species.scientificName}</p>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-white/70 line-clamp-3">{species.description}</p>

                    <div className="bg-neutral-100 dark:bg-white/5 p-3 rounded-xl space-y-1">
                      <div className="text-[10px] font-mono text-neutral-500 dark:text-white/40">HABITAT & RANGE</div>
                      <div className="text-xs font-medium text-neutral-900 dark:text-white/90">{species.habitat}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="text-[11px] font-mono text-neutral-500 dark:text-white/40 border-t border-black/10 dark:border-white/10 pt-3">
                    Est. Population: {species.populationEstimate}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Birds & Reptiles Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalWildlife.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden p-6 flex flex-col md:flex-row gap-6 items-center shadow-md dark:shadow-none"
            >
              <div className="w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 uppercase font-semibold">
                  {item.category} • {item.status}
                </span>
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white font-serif">{item.name}</h4>
                <p className="text-xs text-neutral-600 dark:text-white/70">{item.description}</p>
                <div className="text-[11px] font-mono text-neutral-500 dark:text-white/40 pt-1">
                  Habitat: {item.habitat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
