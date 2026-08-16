"use client";

import React, { useState } from "react";
import Link from "next/link";
import { dudhwaParkData } from "@/data/dudhwaParkData";
import {
  ArrowLeft,
  Send,
  CheckCircle,
  Calendar,
  User,
  Phone,
  Mail,
  Compass,
  Calculator,
  ShieldCheck,
} from "lucide-react";

export default function InquiryFormPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    nationality: "Indian",
    zone: "Dudhwa Core Zone",
    guests: 2,
    stayType: "Cottage Double Occupancy",
    message: "",
  });

  const calculateEstimate = () => {
    const isForeign = formData.nationality === "Foreigner";
    const entryFeePerPerson = isForeign ? 2000 : 250;
    const totalEntryFee = entryFeePerPerson * formData.guests;
    const safariVehicleRate = 4000; // Standard 7-seater Gypsy
    return {
      entryFee: totalEntryFee,
      safariRate: safariVehicleRate,
      total: totalEntryFee + safariVehicleRate,
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F9F8F6] dark:bg-[#090B0A] text-neutral-900 dark:text-[#F4F2EC] transition-colors duration-500 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-neutral-600 dark:text-white/60 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <span className="opacity-30">/</span>
          <span className="text-orange-600 dark:text-orange-400 font-semibold">Contact Us</span>
          <span className="opacity-30">/</span>
          <span className="text-neutral-900 dark:text-white">Inquiry Form</span>
        </div>

        {/* Page Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border border-orange-500/30 text-xs font-mono font-semibold">
            <Compass className="w-4 h-4 text-orange-500" />
            DIRECT SAFARI PERMIT & AVAILABILITY REQUEST
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-neutral-900 dark:text-white">
            Safari & Lodging Inquiry
          </h1>
          <p className="text-sm text-neutral-600 dark:text-white/70">
            Submit your safari date and visitor details for official availability verification, permit assistance, and forest lodging rates.
          </p>
        </div>

        {/* Shadcn UI Style Compact Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Box (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-2xl text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-white">
                  Inquiry Registered Successfully!
                </h3>
                <p className="text-xs text-neutral-600 dark:text-white/70">
                  Your inquiry ID is <strong className="font-mono text-orange-600 dark:text-orange-400">DNP-2026-{(Math.random() * 8999 + 1000).toFixed(0)}</strong>. Our eco-tourism team will reach out at <span className="font-mono font-bold text-neutral-900 dark:text-white">{formData.phone}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white text-xs font-mono hover:bg-black/10 dark:hover:bg-white/20"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-neutral-700 dark:text-white/70 font-semibold">FULL NAME *</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-neutral-700 dark:text-white/70 font-semibold">PHONE NUMBER *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-neutral-700 dark:text-white/70 font-semibold">EMAIL ADDRESS</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-neutral-700 dark:text-white/70 font-semibold">SAFARI DATE *</label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Visitor & Zone Selections */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="font-mono text-neutral-700 dark:text-white/70 font-semibold">NATIONALITY</label>
                    <select
                      value={formData.nationality}
                      onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-[#1A1E1B] border border-neutral-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    >
                      <option value="Indian">Indian Tourist</option>
                      <option value="Foreigner">Foreign Tourist</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-neutral-700 dark:text-white/70 font-semibold">SAFARI ZONE</label>
                    <select
                      value={formData.zone}
                      onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-[#1A1E1B] border border-neutral-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    >
                      <option value="Dudhwa Core Zone">Dudhwa Core Zone</option>
                      <option value="Kishanpur Sanctuary">Kishanpur Sanctuary</option>
                      <option value="Katarniaghat Sanctuary">Katarniaghat Sanctuary</option>
                      <option value="Sathiana Range">Sathiana Range</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-neutral-700 dark:text-white/70 font-semibold">TOTAL GUESTS</label>
                    <input
                      type="number"
                      min={1}
                      max={7}
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                      className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-neutral-700 dark:text-white/70 font-semibold">ACCOMMODATION CATEGORY</label>
                  <select
                    value={formData.stayType}
                    onChange={(e) => setFormData({ ...formData, stayType: e.target.value })}
                    className="w-full bg-neutral-50 dark:bg-[#1A1E1B] border border-neutral-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  >
                    <option value="Cottage Single Occupancy">Cottage (Single Occupancy - ₹4,500/night)</option>
                    <option value="Cottage Double Occupancy">Cottage (Double Occupancy - ₹4,900/night)</option>
                    <option value="Dormitory Bed">Dormitory Bed (10-Bed Wing - ₹10,000/night)</option>
                    <option value="No Lodging Needed">Safari Only (No Lodging Needed)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-neutral-700 dark:text-white/70 font-semibold">ADDITIONAL NOTES / SPECIAL REQUESTS</label>
                  <textarea
                    rows={3}
                    placeholder="Mention shift preference (Morning 6am / Evening 3pm) or group details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl p-3 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                >
                  Submit Safari Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Live Tariff Estimate Box (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 p-6 rounded-3xl shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 border-b border-neutral-100 dark:border-white/10 pb-3">
              <Calculator className="w-5 h-5 text-orange-500" />
              <div>
                <h3 className="text-base font-bold font-serif text-neutral-900 dark:text-white">
                  Estimated Official Tariff
                </h3>
                <span className="text-[10px] font-mono text-neutral-500 dark:text-white/50">Based on UP Forest Dept Rules</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center border-b border-neutral-100 dark:border-white/5 pb-2">
                <span className="text-neutral-600 dark:text-white/70">Sanctuary Entry Fee ({formData.guests} {formData.nationality}):</span>
                <span className="font-mono font-bold text-neutral-900 dark:text-white">₹{estimate.entryFee.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center border-b border-neutral-100 dark:border-white/5 pb-2">
                <span className="text-neutral-600 dark:text-white/70">Safari Vehicle (7-Seater Gypsy):</span>
                <span className="font-mono font-bold text-neutral-900 dark:text-white">₹{estimate.safariRate.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center pt-2 text-sm font-bold border-t border-neutral-200 dark:border-white/10">
                <span className="text-neutral-900 dark:text-white">Est. Mandatory Fees:</span>
                <span className="font-mono text-orange-600 dark:text-orange-400">₹{estimate.total.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-white/5 p-3 rounded-2xl text-[11px] text-neutral-500 dark:text-white/60 space-y-1">
              <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                VERIFIED TARIFF NOTE
              </div>
              <p>Entry & vehicle rates are paid according to UP Forest Department rules on the date of visit. Guide & road fees included.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
