"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  Compass,
  Menu,
  X,
  Shield,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
  Facebook,
  Twitter,
  Instagram,
  Home as HomeIcon,
  BookOpen,
  Hotel,
  Users,
  Send,
} from "lucide-react";

interface SubMenuItem {
  label: string;
  href: string;
  description?: string;
}

interface MenuItem {
  label: string;
  href: string;
  icon: React.ElementType;
  dropdownItems?: SubMenuItem[];
}

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileAccordion, setExpandedMobileAccordion] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: "#hero",
      icon: HomeIcon,
    },
    {
      label: "History",
      href: "#conservation",
      icon: BookOpen,
      dropdownItems: [
        { label: "Before Foundation of Dudhwa", href: "#intro", description: "Historical hunting reserves to protected sanctuary" },
        { label: "Dudhwa Established in 1977", href: "#conservation", description: "Gazetted National Park & Project Tiger status" },
        { label: "Tiger Reserve Development", href: "#conservation", description: "Integrating Dudhwa & Kishanpur sanctuaries" },
        { label: "Billy Arjan Singh", href: "#conservation", description: "Legend of 'Tara' the tigress & Tiger Haven" },
        { label: "Conservation Legacy", href: "#conservation", description: "1984 Rhino reintroduction & Barasingha protection" },
      ],
    },
    {
      label: "Accommodation",
      href: "#accommodation",
      icon: Hotel,
      dropdownItems: [
        { label: "Stay Options", href: "#accommodation", description: "Overview of forest lodges, eco-cottages & resorts" },
        { label: "Dudhwa Resort / Forest Stay", href: "#accommodation", description: "Heritage FRH Sonaripur, Sathiana & Dudhwa HQ" },
        { label: "Tour Packages", href: "#accommodation", description: "All-inclusive wildlife & safari itineraries" },
        { label: "Booking Info & Tariffs", href: "/accommodation/booking-info", description: "Official room tariffs, entry fees & cancellation policy" },
      ],
    },
    {
      label: "Group Enquiry",
      href: "#group-enquiry",
      icon: Users,
      dropdownItems: [
        { label: "Group Booking", href: "#group-enquiry", description: "Large group safari permits & Gypsy logistics" },
        { label: "School / College Trips", href: "#group-enquiry", description: "Educational nature camps & guided forest walks" },
        { label: "Wildlife Photography Groups", href: "#group-enquiry", description: "Custom photography & naturalist workshops" },
        { label: "Custom Travel Planning", href: "#group-enquiry", description: "Tailored corporate retreats & family packages" },
      ],
    },
    {
      label: "Contact Us",
      href: "/contact/official-details",
      icon: Send,
      dropdownItems: [
        { label: "Official Contact Details", href: "/contact/official-details", description: "Office of Field Director, Lakhimpur Kheri & tariffs" },
        { label: "Inquiry Form", href: "/contact/inquiry-form", description: "Direct safari availability & permit request form" },
        { label: "Route & Access Information", href: "/contact/route-access", description: "Travel directions & entrance gate access" },
      ],
    },
  ];

  return (
    <>
      {/* Lightweight Top Utility Strip */}
      <div className="bg-[#EFECE6] text-neutral-700 dark:bg-[#060807] dark:text-neutral-400 text-xs py-2 px-4 border-b border-black/5 dark:border-white/5 transition-colors duration-500 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="mailto:dudhwapark@gmail.com"
              className="flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              dudhwapark@gmail.com
            </a>
            <span className="opacity-30">|</span>
            <a
              href="tel:+919084022166"
              className="flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              +91 9084022166
            </a>
          </div>

          <div className="flex items-center gap-6">
            {/* UP Forest / Conservation Trust Badge */}
            <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-emerald-800 dark:text-emerald-400/90 font-medium">
              <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              UP FOREST DEPARTMENT • TERAI ARC LANDSCAPE
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-3 border-l border-black/10 dark:border-white/10 pl-6 opacity-60">
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Frosted Glass Header */}
      <header
        className={`fixed top-0 md:top-6 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-transparent border-none py-2"
            : "bg-[#F2EFF0]/80 dark:bg-[#121513]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10 py-4 md:py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Brand Logo & Title (Hides when scrolled) */}
          <Link
            href="/"
            className={`flex items-center gap-3.5 group transition-all duration-300 ${
              isScrolled
                ? "opacity-0 scale-90 pointer-events-none w-0 overflow-hidden"
                : "opacity-100 scale-100 w-auto"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <Compass className="w-6 h-6 text-black stroke-[2.5]" />
            </div>
            <div className="flex flex-col flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white font-serif leading-none group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                DUDHWA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-orange-600 dark:text-orange-400 uppercase mt-0.5 font-medium">
                NATIONAL PARK & RESERVE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Centered Floating Glass Pill when scrolled) */}
          <nav
            className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-2xl transition-all duration-500 ${
              isScrolled
                ? "mx-auto bg-[#EAE8E1]/95 dark:bg-[#0E110F]/95 border border-black/15 dark:border-white/15 shadow-2xl"
                : "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
            }`}
          >
            {menuItems.map((item) => {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold transition-all rounded-full ${
                      isOpen
                        ? "bg-black/10 dark:bg-white/10 text-orange-600 dark:text-orange-400"
                        : "text-neutral-800 dark:text-white/90 hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    {item.dropdownItems && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-orange-500" : "opacity-50"
                        }`}
                      />
                    )}
                  </a>

                  {/* Floating Glass Dropdown Panel */}
                  {item.dropdownItems && isOpen && (
                    <div className="absolute top-full left-0 mt-2.5 w-80 bg-[#F4F2EC]/95 dark:bg-[#0E110F]/95 border border-black/10 dark:border-white/15 backdrop-blur-2xl rounded-2xl p-2.5 shadow-2xl animate-fadeIn z-50">
                      <div className="space-y-1">
                        {item.dropdownItems.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors group/sub"
                          >
                            <div className="flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-white group-hover/sub:text-orange-600 dark:group-hover/sub:text-orange-400">
                              <span>{sub.label}</span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all text-orange-500" />
                            </div>
                            {sub.description && (
                              <p className="text-[11px] text-neutral-600 dark:text-white/50 font-sans mt-0.5 line-clamp-1">
                                {sub.description}
                              </p>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Cluster (Hides when scrolled) */}
          <div
            className={`flex items-center gap-3 transition-all duration-300 ${
              isScrolled
                ? "opacity-0 scale-90 pointer-events-none w-0 overflow-hidden hidden lg:hidden"
                : "opacity-100 scale-100 w-auto"
            }`}
          >
            {/* Light/Dark Mode Toggle Pill */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 p-2 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-all text-xs font-mono"
              aria-label="Toggle theme"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span className="hidden sm:inline-block pr-1 text-[11px]">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-emerald-700 animate-pulse" />
                  <span className="hidden sm:inline-block pr-1 text-[11px]">Dark</span>
                </>
              )}
            </button>

            {/* Primary CTA */}
            <a
              href="#plan"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-black dark:text-black font-extrabold text-xs tracking-wider uppercase shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 transition-all"
            >
              Book Safari
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle (Always accessible) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F6]/95 dark:bg-[#090B0A]/95 backdrop-blur-2xl lg:hidden pt-28 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-fadeIn transition-colors duration-500">
          <div className="space-y-4">
            {/* Header in Mobile Menu */}
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-3">
              <span className="text-xs font-mono tracking-widest text-orange-600 dark:text-orange-400 uppercase font-medium">
                MAIN NAVIGATION MENU
              </span>

              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs font-mono text-neutral-800 dark:text-white"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2">
              {menuItems.map((item) => {
                const isExpanded = expandedMobileAccordion === item.label;
                return (
                  <div
                    key={item.label}
                    className="border-b border-black/5 dark:border-white/10 pb-2 overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedMobileAccordion(isExpanded ? null : item.label)
                      }
                      className="w-full flex items-center justify-between py-2.5 text-left text-lg font-serif text-neutral-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <item.icon className="w-4 h-4 text-orange-500" />
                        {item.label}
                      </span>
                      {item.dropdownItems && (
                        <ChevronDown
                          className={`w-5 h-5 opacity-60 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-orange-500 opacity-100" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Accordion Sub-items */}
                    {item.dropdownItems && isExpanded && (
                      <div className="pl-4 pt-1 pb-2 space-y-2 bg-black/5 dark:bg-white/5 rounded-xl p-3 mt-1">
                        {item.dropdownItems.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 transition-colors group"
                          >
                            <div className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                              {sub.label}
                            </div>
                            {sub.description && (
                              <div className="text-[11px] text-neutral-600 dark:text-white/50">
                                {sub.description}
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-black/10 dark:border-white/10 mt-6">
            <a
              href="#plan"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-black font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-orange-500/20"
            >
              Book Safari Permit
              <ChevronRight className="w-4 h-4" />
            </a>

            <div className="text-xs text-neutral-600 dark:text-white/60 space-y-1 text-center font-mono">
              <p>Helpline: +91 9084022166</p>
              <p>Email: dudhwapark@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
