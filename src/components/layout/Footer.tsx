"use client";

import React from "react";
import Link from "next/link";
import { Compass, Phone, Mail, MapPin, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EFECE6] text-neutral-800 dark:bg-[#060807] dark:text-white/70 border-t border-black/10 dark:border-white/10 pt-16 pb-12 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Description (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg">
                <Compass className="w-6 h-6 text-black stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white font-serif">
                  DUDHWA
                </span>
                <span className="text-[10px] font-mono tracking-widest text-orange-600 dark:text-orange-400 uppercase font-semibold">
                  NATIONAL PARK & TIGER RESERVE
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-600 dark:text-white/70 leading-relaxed max-w-sm">
              Situated in the Himalayan Terai Arc landscape along the Indo-Nepal international border. Protecting over 1,280 sq km of moist Sal forests, wet grassland phantas, Royal Bengal Tigers, nominate Barasingha herds, and the landmark 1984 One-Horned Rhinoceros sanctuary.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400/90 pt-1 font-medium">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              UP FOREST DEPARTMENT • TERAI ARC LANDSCAPE
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-neutral-900 dark:text-white uppercase border-b border-black/10 dark:border-white/10 pb-2 font-bold">
              NAVIGATION SITEMAP
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#intro" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Landscape & Terai Ecosystem
                </a>
              </li>
              <li>
                <a href="#wildlife" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Iconic Wildlife & Tigers
                </a>
              </li>
              <li>
                <a href="#planning-zones" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Safari Experience & 4 Zones
                </a>
              </li>
              <li>
                <a href="#conservation" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  History & Billy Arjan Singh
                </a>
              </li>
              <li>
                <a href="#accommodation" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Accommodation & Tour Packages
                </a>
              </li>
              <li>
                <a href="#group-enquiry" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Group Enquiry & Expeditions
                </a>
              </li>
              <li>
                <a href="#plan" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Contact & Safari Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Official Field Contacts (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-neutral-900 dark:text-white uppercase border-b border-black/10 dark:border-white/10 pb-2 font-bold">
              FIELD HEADQUARTERS & CONTACTS
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700 dark:text-white/80">
                  Office of Field Director, Dudhwa Tiger Reserve, Lakhimpur Kheri & Bahraich, Uttar Pradesh 262701, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="tel:+919084022166" className="font-bold hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  +91 9084022166
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:dudhwapark@gmail.com" className="font-bold hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  dudhwapark@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-neutral-600 dark:text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Dudhwa National Park. Official Terai Reserve Portal.</p>
          <p>Designed for Luxury Eco-Tourism & Wildlife Conservation Awareness.</p>
        </div>
      </div>
    </footer>
  );
};
