import React from "react";
import Link from "next/link";
import { dudhwaParkData } from "@/data/dudhwaParkData";
import { SectionHeading } from "@/components/contact/SectionHeading";
import { RateTable } from "@/components/contact/RateTable";
import { EntryFeeCard } from "@/components/contact/EntryFeeCard";
import { SafariRateCard } from "@/components/contact/SafariRateCard";
import { CancellationTimeline } from "@/components/contact/CancellationTimeline";
import { TrustPanel } from "@/components/contact/TrustPanel";
import {
  ArrowLeft,
  ShieldCheck,
  Table,
  FileText,
  CreditCard,
  CarFront,
  Phone,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Accommodation Tariffs & Booking Info | Dudhwa National Park",
  description:
    "Official government accommodation rates, cottage & dormitory tariffs, sanctuary entry fees, safari jeep charges, and booking cancellation policies.",
};

export default function BookingInfoPage() {
  const { official_ecotourism_website } = dudhwaParkData;

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F9F8F6] dark:bg-[#090B0A] text-neutral-900 dark:text-[#F4F2EC] transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
          <span className="text-orange-600 dark:text-orange-400 font-semibold">Accommodation</span>
          <span className="opacity-30">/</span>
          <span className="text-neutral-900 dark:text-white">Booking Info & Tariffs</span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            GOVERNMENT APPROVED TARIFFS & RULES
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-neutral-900 dark:text-white">
            Accommodation Tariffs & Fees
          </h1>
          <p className="text-base text-neutral-600 dark:text-white/70">
            Official government tariffs for Forest Rest Houses, single & double cottages, 10-bed dormitories, sanctuary entry permits, safari vehicle rates, and cancellation policies.
          </p>
        </div>

        {/* 1. Accommodation Rates Table */}
        <div id="room-tariffs" className="space-y-6">
          <SectionHeading
            eyebrow="ROOM RATES & RULES"
            title="Forest Rest House & Cottage Tariffs"
            description="Official tariffs for Indian and Foreign tourists for single cottages, double cottages, and dormitory wings."
            icon={Table}
          />

          <RateTable
            rates={official_ecotourism_website.accommodation_rates}
            rules={official_ecotourism_website.accommodation_rules}
          />
        </div>

        {/* 2. Sanctuary Entry Fees & Safari Vehicle Charges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <EntryFeeCard fees={official_ecotourism_website.sanctuary_entry_fees} />
          <SafariRateCard
            rates={official_ecotourism_website.safari_rates}
            inclusions={official_ecotourism_website.safari_rate_inclusions}
            rules={official_ecotourism_website.safari_rules}
          />
        </div>

        {/* 3. Cancellation Policy */}
        <CancellationTimeline
          policy={official_ecotourism_website.cancellation_policy}
          notes={official_ecotourism_website.cancellation_notes}
        />

        {/* 4. Verification Trust Panel */}
        <TrustPanel
          url={official_ecotourism_website.url}
          officialContacts={official_ecotourism_website.official_contacts}
        />
      </div>
    </div>
  );
}
