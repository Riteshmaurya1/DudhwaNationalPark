"use client";

import React, { useState, useEffect } from "react";
import { heroSlides } from "@/content/home/heroData";
import { ChevronLeft, ChevronRight, Shield, ArrowRight, BookOpen } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Image Carousel */}
      {heroSlides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <img
            src={s.image.src}
            alt={s.image.alt}
            className="w-full h-full object-cover object-center transform scale-105 animate-subtleZoom"
          />
          {/* Overlays for Light & Dark mode readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-[#F9F8F6]/50 to-transparent dark:from-[#090B0A] dark:via-[#090B0A]/60 dark:to-black/40 transition-colors duration-500" />
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Hero Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 text-orange-700 dark:text-orange-400 text-xs font-mono tracking-widest uppercase backdrop-blur-md font-semibold">
              <Shield className="w-3.5 h-3.5 text-orange-500" />
              {slide.badge}
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-950 dark:text-white font-serif tracking-tight leading-[1.05]">
                {slide.headline}
              </h1>
              <p className="text-lg sm:text-2xl font-serif text-amber-700 dark:text-amber-400 italic">
                {slide.subHeadline}
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-800 dark:text-white/85 max-w-2xl font-sans leading-relaxed font-normal">
              {slide.description}
            </p>

            {/* Spec Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              {slide.famousDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md p-3 rounded-xl space-y-1 shadow-sm"
                >
                  <div className="text-[10px] font-mono tracking-wider text-orange-700 dark:text-orange-400 uppercase font-semibold">
                    {detail.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#plan"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-black font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-orange-500/25 hover:scale-105 transition-all flex items-center gap-2"
              >
                Book Safari
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#conservation"
                className="px-6 py-3.5 rounded-full bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/20 text-neutral-900 dark:text-white font-bold text-xs tracking-wider uppercase hover:bg-white dark:hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <BookOpen className="w-4 h-4 text-orange-500" />
                Explore History
              </a>
            </div>
          </div>

          {/* Right Species Switcher Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between items-end space-y-6">
            <div className="w-full bg-white/80 dark:bg-[#121513]/90 border border-black/10 dark:border-white/15 backdrop-blur-xl p-6 rounded-3xl space-y-4 shadow-2xl transition-colors duration-500">
              <div className="flex justify-between items-center text-xs font-mono border-b border-black/10 dark:border-white/10 pb-3">
                <span className="text-orange-600 dark:text-orange-400 font-bold">
                  SPECIES {currentSlide + 1} OF {heroSlides.length}
                </span>
                <span className="text-neutral-600 dark:text-white/60">{slide.scientificName}</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-serif">{slide.speciesName}</h3>
                <p className="text-xs text-neutral-600 dark:text-white/70 font-mono">{slide.image.location}</p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide
                          ? "w-8 bg-orange-500"
                          : "w-2 bg-black/20 dark:bg-white/30 hover:bg-black/40 dark:hover:bg-white/50"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
                      )
                    }
                    className="p-2.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-orange-500 hover:text-black transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                    className="p-2.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-orange-500 hover:text-black transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
