import React from "react";
import Link from "next/link";
import { dudhwaParkData } from "@/data/dudhwaParkData";
import { SectionHeading } from "@/components/contact/SectionHeading";
import { OfficialContactCard } from "@/components/contact/OfficialContactCard";
import { PrivateOperatorCard } from "@/components/contact/PrivateOperatorCard";
import { TrustPanel } from "@/components/contact/TrustPanel";
import {
  ArrowLeft,
  ShieldCheck,
  Phone,
  Building2,
  ChevronRight,
  Send,
  Table,
} from "lucide-react";

export const metadata = {
  title: "Official Contact Details | Dudhwa National Park",
  description:
    "Verified landline contact numbers and headquarters office locations for the Office of the Field Director and District Logging Officer (DLM) at Lakhimpur Kheri, Uttar Pradesh.",
};

export default function OfficialDetailsPage() {
  const { official_ecotourism_website, private_operator_website } = dudhwaParkData;

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F9F8F6] dark:bg-[#090B0A] text-neutral-900 dark:text-[#F4F2EC] transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 1. Header & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-neutral-600 dark:text-white/60 hover:text-orange-600 dark:hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md px-1 py-0.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
            <span className="opacity-30">/</span>
            <span className="text-orange-600 dark:text-orange-400 font-semibold">Contact Us</span>
            <span className="opacity-30">/</span>
            <span className="text-neutral-900 dark:text-white">Official Contact Details</span>
          </div>

          <div className="text-[11px] font-mono text-neutral-500 dark:text-white/50">
            Data Source: Uttar Pradesh Eco-Tourism / Government Official Portal
          </div>
        </div>

        {/* 2. Desktop 2-Column Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 p-8 sm:p-10 rounded-3xl shadow-sm">
          {/* Left Column Text & Subtitle */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Verified Government & Eco-Tourism Contacts
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-neutral-900 dark:text-white">
              Official Contact Details
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-white/80 leading-relaxed font-sans">
              Verified landline contact numbers and headquarters office locations for the Office of the Field Director and District Logging Officer (DLM) at Lakhimpur Kheri, Uttar Pradesh.
            </p>

            <div className="text-xs font-mono text-neutral-500 dark:text-white/50 pt-1">
              Official Data Source: Uttar Pradesh Eco-Tourism / Government Official Portal
            </div>
          </div>

          {/* Right Column Quick Actions Card */}
          <div className="lg:col-span-4 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-6 rounded-2xl space-y-3 shadow-sm">
            <div className="text-xs font-mono text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider">
              QUICK ACTIONS
            </div>

            <div className="space-y-2">
              <a
                href={`tel:${official_ecotourism_website.official_contacts[0].phone}`}
                className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-extrabold text-xs uppercase flex items-center justify-between transition-colors shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Field Director Office
                </span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact/inquiry-form"
                className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white font-bold text-xs uppercase flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-white/20 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Send className="w-3.5 h-3.5 text-orange-500" />
                  Submit Safari Inquiry
                </span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/accommodation/booking-info"
                className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white font-bold text-xs uppercase flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-white/20 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Table className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  View Room Tariffs & Fees
                </span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Official Government Contact Directory Cards */}
        <div className="space-y-6">
          <SectionHeading
            eyebrow="GOVERNMENT AUTHORITIES"
            title="Official Contact Directory"
            description="Verified landline contact numbers and headquarters office locations for the Office of the Field Director and District Logging Officer (DLM) at Lakhimpur Kheri, Uttar Pradesh."
            icon={Building2}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {official_ecotourism_website.official_contacts.map((contact, idx) => (
              <OfficialContactCard key={idx} contact={contact} />
            ))}
          </div>
        </div>

        {/* 4. Accommodation Info Banner Card */}
        <div className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold uppercase">
              ROOM TARIFFS & CANCELATION RULES
            </span>
            <h3 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white">
              Looking for Accommodation Rates & Entry Fees?
            </h3>
            <p className="text-xs text-neutral-600 dark:text-white/70">
              Government forest rest house tariffs, dormitory rates, sanctuary entry fees, safari charges, and refund rules are located under Accommodation.
            </p>
          </div>

          <Link
            href="/accommodation/booking-info"
            className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-black font-extrabold text-xs uppercase transition-colors shadow-md flex-shrink-0 flex items-center gap-2"
          >
            View Room Tariffs & Fees
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5. Visually Separated Private Operator Block */}
        <PrivateOperatorCard
          url={official_ecotourism_website.url}
          operatorName={private_operator_website.operator_name}
          phone={private_operator_website.contact.phone}
          email={private_operator_website.contact.email}
          city={private_operator_website.location_context.city}
          district={private_operator_website.location_context.district}
          state={private_operator_website.location_context.state}
          disclaimer={private_operator_website.disclaimer}
        />

        {/* 6. Verification & Trust Panel */}
        <TrustPanel
          url={official_ecotourism_website.url}
          officialContacts={official_ecotourism_website.official_contacts}
        />
      </div>
    </div>
  );
}
