"use client";

import React, { useState } from "react";
import { Calendar, Clock, AlertTriangle, Send, CheckCircle, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const PlanSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    zone: "Dudhwa Core Zone",
    guests: "2 Adults",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const rules = [
    "Original Photo ID (Aadhaar / Passport / Driving License) mandatory at all entrance check-posts.",
    "Single-use plastic bottles and plastic wrappers are strictly prohibited inside core sanctuary zones.",
    "Loud music, mobile speakers, and smoking are punishable offenses under Wild Life Protection Act 1972.",
    "Visitors must stay inside the 4x4 Gypsy during safari shifts under all circumstances.",
    "Wear muted nature tones (Khaki, Olive Green, Brown); avoid bright fluorescent colors.",
  ];

  return (
    <section id="plan" className="py-24 relative bg-[#F2EFF0] dark:bg-[#0E110F] transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 tracking-widest uppercase font-semibold">
            07 • INQUIRY & PERMIT ASSISTANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-serif tracking-tight">
            Official Contact & Permit Form
          </h2>
          <p className="text-base text-neutral-700 dark:text-white/70 font-sans">
            Request official safari availability, forest rest house reservations, or group expedition permits.
          </p>
        </div>

        {/* Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Details & Rules */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Card */}
            <div className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 p-8 rounded-3xl space-y-6 shadow-md dark:shadow-2xl">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-serif">Field Headquarters</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-white/80 leading-relaxed font-sans">
                    Office of Field Director, Dudhwa Tiger Reserve, Lakhimpur Kheri & Bahraich, Uttar Pradesh 262701, India.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <a href="tel:+919084022166" className="text-neutral-900 dark:text-white font-bold hover:text-orange-600 dark:hover:text-orange-400">
                    +91 9084022166
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <a href="mailto:dudhwapark@gmail.com" className="text-neutral-900 dark:text-white font-bold hover:text-orange-600 dark:hover:text-orange-400">
                    dudhwapark@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Visitor Rules */}
            <div className="bg-white dark:bg-[#121513] border border-black/10 dark:border-white/10 p-8 rounded-3xl space-y-4 shadow-md dark:shadow-2xl">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white font-serif">Visitor Rules & Regulations</h4>
              </div>
              <ul className="space-y-3">
                {rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-neutral-700 dark:text-white/70 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121513] border border-black/10 dark:border-white/15 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
            <div>
              <span className="text-xs font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-wider">
                INQUIRY & PERMIT REQUEST
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-serif mt-1">
                Request Safari Permits & Lodging
              </h3>
              <p className="text-xs text-neutral-600 dark:text-white/60 font-sans mt-1">
                Fill out your travel details to receive official permit guidance and rest house availability.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-2xl text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white font-serif">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-neutral-700 dark:text-white/70">
                  Our Dudhwa Eco-Tourism team will contact you at <span className="text-orange-600 dark:text-orange-400 font-bold">{formData.phone}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white text-xs font-mono hover:bg-black/10 dark:hover:bg-white/20"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-700 dark:text-white/70">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-700 dark:text-white/70">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-700 dark:text-white/70">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-700 dark:text-white/70">PREFERRED SAFARI DATE *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-700 dark:text-white/70">SAFARI ZONE PREFERENCE</label>
                    <select
                      value={formData.zone}
                      onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-[#1A1E1B] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="Dudhwa Core Zone">Dudhwa Core Zone (Jirauli Gate)</option>
                      <option value="Kishanpur Sanctuary">Kishanpur Sanctuary (Mailani Gate)</option>
                      <option value="Katarniaghat Sanctuary">Katarniaghat Sanctuary (Bichhia Gate)</option>
                      <option value="Sathiana Range">Sathiana Grasslands Range</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-700 dark:text-white/70">NUMBER OF GUESTS</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-[#1A1E1B] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="1 Adult">1 Adult</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="3-6 Adults (Full Gypsy)">3-6 Adults (Full Gypsy)</option>
                      <option value="Family / Group (6+ Persons)">Family / Group (6+ Persons)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-700 dark:text-white/70">SPECIAL REQUESTS / REST HOUSE INQUIRY</label>
                  <textarea
                    rows={3}
                    placeholder="Mention lodging preference (FRH Sonaripur / Eco Cottage) or specific safari inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-black font-extrabold text-sm tracking-wider uppercase hover:shadow-xl hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                >
                  Submit Booking Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
