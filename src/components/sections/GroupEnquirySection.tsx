"use client";

import React from "react";
import { Users, GraduationCap, Camera, Briefcase, ArrowRight } from "lucide-react";

export const GroupEnquirySection: React.FC = () => {
  const categories = [
    {
      title: "School & College Trips",
      icon: GraduationCap,
      description: "Educational nature camps, guided forest ecology walks, and student biodiversity awareness workshops approved by UP Ecotourism.",
      highlights: "Discounts for educational institutions | Certified Field Naturalists",
    },
    {
      title: "Corporate Group Expeditions",
      icon: Briefcase,
      description: "Team-building wilderness retreats, executive jungle safaris, and eco-lodge conference bookings surrounded by Sal woods.",
      highlights: "Private Gypsy fleet booking | Multi-day custom itineraries",
    },
    {
      title: "Wildlife Photography Groups",
      icon: Camera,
      description: "Customized multi-shift safaris focused on barasingha stag rutting, tiger tracking in Kishanpur, and aquatic bird photography.",
      highlights: "Prime hideouts & river boat slots | Dedicated expert trackers",
    },
    {
      title: "Custom Family & Travel Groups",
      icon: Users,
      description: "Personalized travel planning for large family reunions, senior citizen comfort safaris, and specialized buffer zone tours.",
      highlights: "Dedicated coordinator | Flexible rest house & meal arrangements",
    },
  ];

  return (
    <section id="group-enquiry" className="py-24 relative bg-[#F9F8F6] dark:bg-[#090B0A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 tracking-widest uppercase font-semibold">
            06 • GROUP ENQUIRY & DELEGATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-serif tracking-tight">
            Group Safaris & Institutional Expeditions
          </h2>
          <p className="text-base text-neutral-700 dark:text-white/70 font-sans">
            We coordinate large group permits, dedicated Gypsy fleets, student educational camps, and specialized photography delegations.
          </p>
        </div>

        {/* Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 p-8 rounded-3xl space-y-4 shadow-md dark:shadow-2xl hover:border-orange-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center text-orange-500">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-serif">{cat.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-white/80 font-sans leading-relaxed">{cat.description}</p>
              </div>

              <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-3">
                <div className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold">{cat.highlights}</div>
                <a
                  href="#plan"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-orange-600 dark:text-orange-400 hover:underline"
                >
                  Submit Group Inquiry
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
