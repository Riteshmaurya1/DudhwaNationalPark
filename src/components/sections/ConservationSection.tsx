"use client";

import React from "react";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export const ConservationSection: React.FC = () => {
  const milestones = [
    {
      year: "Before 1977",
      title: "Before Foundation of Dudhwa",
      description: "Originally preserved as royal hunting tracts. Dedicated conservation efforts by Billy Arjan Singh led to protecting the swamp deer (Barasingha) endemic habitat.",
    },
    {
      year: "1977",
      title: "Dudhwa National Park Established",
      description: "Officially gazetted as Dudhwa National Park over 490 sq km to protect the last remaining intact ecosystems of the Himalayan Terai.",
    },
    {
      year: "1984",
      title: "Landmark Rhino Reintroduction",
      description: "5 Great One-Horned Rhinoceros translocated from Assam and 4 from Nepal into Kakraha enclosure after 90 years of local extinction.",
    },
    {
      year: "1987",
      title: "Project Tiger Reserve Status",
      description: "Combined Dudhwa National Park and Kishanpur Sanctuary into Dudhwa Tiger Reserve, expanding protected tiger corridors.",
    },
  ];

  return (
    <section id="conservation" className="py-24 relative bg-[#F9F8F6] dark:bg-[#090B0A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 tracking-widest uppercase font-semibold">
              04 • HISTORY & CONSERVATION LEGACY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-serif tracking-tight">
              From Royal Forests to Global Landmark
            </h2>
            <p className="text-base text-neutral-700 dark:text-white/70 max-w-2xl font-sans">
              Dudhwa stands as a world-renowned conservation success story. From 9 translocated rhinos in 1984 to 45+ free-ranging rhinos and 100+ Royal Bengal Tigers today.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-sm">
              <Award className="w-10 h-10 text-orange-500 stroke-[1.5]" />
              <div>
                <div className="text-xs font-mono text-orange-600 dark:text-orange-400 uppercase font-semibold">RHINO CENSUS</div>
                <div className="text-lg font-bold text-neutral-900 dark:text-white">45+ One-Horned Rhinos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 p-6 rounded-2xl space-y-4 shadow-sm hover:border-orange-500/40 transition-colors"
            >
              <div className="text-2xl font-extrabold font-mono text-orange-600 dark:text-orange-400">{m.year}</div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-serif">{m.title}</h3>
              <p className="text-xs text-neutral-600 dark:text-white/70 font-sans leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>

        {/* Billy Arjan Singh & Rhino Story Feature */}
        <div className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/15 p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl transition-colors duration-500">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono font-semibold">
              <ShieldCheck className="w-4 h-4" />
              BILLY ARJAN SINGH & TIGER HAVEN LEGEND
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-serif">
              Billy Arjan Singh & The Legend of Tigress Tara
            </h3>
            <p className="text-sm text-neutral-700 dark:text-white/80 font-sans leading-relaxed">
              Honorary Wildlife Warden Billy Arjan Singh championed Dudhwa&apos;s establishment in 1977 and brought international acclaim through his rewilding experiment with hand-reared tigress &quot;Tara&quot; at Tiger Haven on the Soheli river bank.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-semibold text-neutral-900 dark:text-white">27 sq km Kakraha Rhino Enclosure</span>
            </div>
            <div className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-semibold text-neutral-900 dark:text-white">Phase-2 Belrayan Enclosure Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
