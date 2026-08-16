import React from "react";
import { OfficialContact } from "@/types/contact";
import { CopyButton } from "./CopyButton";
import { Phone, MapPin, ShieldCheck, Building } from "lucide-react";

interface OfficialContactCardProps {
  contact: OfficialContact;
}

export const OfficialContactCard: React.FC<OfficialContactCardProps> = ({ contact }) => {
  return (
    <div className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-orange-500/40 transition-all space-y-5 relative flex flex-col justify-between">
      <div className="space-y-3">
        {/* Government Badge & Role */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-mono text-emerald-800 dark:text-emerald-400 uppercase font-semibold">
            {contact.role}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            Official Government Contact
          </span>
        </div>

        {/* Office Title & Location */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-white">
              {contact.office}
            </h3>
          </div>
          <p className="text-xs text-neutral-600 dark:text-white/60 font-sans flex items-center gap-1.5 pl-7">
            <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
            Location: {contact.location}, Uttar Pradesh
          </p>
        </div>
      </div>

      {/* Phone Number & Actions */}
      <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-0.5">
          <span className="text-[10px] font-mono text-neutral-400 uppercase font-medium">
            Landline Helpline
          </span>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-500" />
            <span className="text-base font-bold font-mono text-neutral-900 dark:text-white">
              {contact.phone}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <CopyButton textToCopy={contact.phone} label="Copy Phone" />

          <a
            href={`tel:${contact.phone}`}
            aria-label={`Call ${contact.office} at ${contact.phone}`}
            className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-extrabold text-xs font-mono uppercase transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Office
          </a>
        </div>
      </div>
    </div>
  );
};
