import React from "react";
import { ShieldCheck, Phone, ExternalLink, Info } from "lucide-react";

interface TrustPanelProps {
  url: string;
  officialContacts: { phone: string; office: string }[];
}

export const TrustPanel: React.FC<TrustPanelProps> = ({ url, officialContacts }) => {
  return (
    <div className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 dark:border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          <div>
            <h4 className="text-lg font-bold font-serif text-neutral-900 dark:text-white">
              Uttar Pradesh Forest Department Eco-Tourism Portal
            </h4>
            <p className="text-xs text-neutral-500 dark:text-white/60">
              Government verification & official tariff authority
            </p>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto"
        >
          Verify Tariff on Official Site
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-neutral-700 dark:text-white/80">
        <div className="space-y-1">
          <div className="font-mono text-neutral-400 text-[10px] uppercase font-bold">Official Helplines:</div>
          <div className="flex flex-wrap gap-4 font-mono font-bold">
            {officialContacts.map((c, i) => (
              <a
                key={i}
                href={`tel:${c.phone}`}
                className="text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-orange-500" />
                {c.phone}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-2 text-[11px] text-neutral-500 dark:text-white/60 pt-1">
          <Info className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
          <span>
            Notice: All rates, sanctuary entry permits, and room tariffs are subject to government revision. The tariff applicable on your visit date will apply.
          </span>
        </div>
      </div>
    </div>
  );
};
