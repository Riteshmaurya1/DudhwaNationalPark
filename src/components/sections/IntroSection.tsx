"use client";

import React from "react";
import { introData } from "@/content/home/introData";
import { Trees, MapPin, Calendar, Layers } from "lucide-react";

export const IntroSection: React.FC = () => {
  const icons = [MapPin, Layers, Trees, Calendar];

  return (
    <section id="intro" className="py-24 relative bg-[#F2EFF0] dark:bg-[#0E110F] border-t border-b border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 tracking-widest uppercase font-semibold">
                {introData.number} • {introData.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-serif tracking-tight leading-tight">
              {introData.title}
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-white/80 font-sans leading-relaxed">
              {introData.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {introData.metrics.map((metric, idx) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 rounded-2xl space-y-2 hover:border-orange-500/40 transition-colors shadow-sm"
                  >
                    <IconComponent className="w-5 h-5 text-orange-500" />
                    <div className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-white/50 uppercase">
                      {metric.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                      {metric.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Image & Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/15 shadow-2xl group">
              <img
                src={introData.introImage.src}
                alt={introData.introImage.alt}
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 space-y-1 text-white">
                <span className="text-xs font-mono text-orange-400">
                  {introData.introImage.location}
                </span>
                <p className="text-sm font-semibold text-white">
                  {introData.introImage.title}
                </p>
                <p className="text-[11px] text-white/60 font-mono">
                  {introData.introImage.credit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
