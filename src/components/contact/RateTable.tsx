import React from "react";
import { AccommodationRate, AccommodationRules } from "@/types/contact";
import { Home, Clock, BedDouble, Baby, Info } from "lucide-react";

interface RateTableProps {
  rates: AccommodationRate[];
  rules: AccommodationRules;
}

export const RateTable: React.FC<RateTableProps> = ({ rates, rules }) => {
  return (
    <div className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 dark:border-white/10 pb-4">
        <div>
          <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase">
            GOVERNMENT TARIFF TABLE
          </span>
          <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-white">
            Accommodation Rates & Tariffs
          </h3>
        </div>
        <Home className="w-5 h-5 text-neutral-400" />
      </div>

      {/* Desktop & Mobile Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-sans">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-white/50 font-mono uppercase">
              <th className="py-3 px-3">Room Category</th>
              <th className="py-3 px-3">Occupancy</th>
              <th className="py-3 px-3">Indian Tourist Rate</th>
              <th className="py-3 px-3">Foreign Tourist Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-white/5 font-medium">
            {rates.map((rate, i) => (
              <tr key={i} className="hover:bg-neutral-50 dark:hover:bg-white/5">
                <td className="py-3.5 px-3 font-bold text-neutral-900 dark:text-white">{rate.type}</td>
                <td className="py-3.5 px-3 text-neutral-600 dark:text-white/70">{rate.occupancy}</td>
                <td className="py-3.5 px-3 text-emerald-700 dark:text-emerald-400 font-mono font-bold">
                  ₹{rate.indian_tourist_rate_inr_per_night.toLocaleString()} / night
                </td>
                <td className="py-3.5 px-3 text-amber-700 dark:text-amber-400 font-mono font-bold">
                  ₹{rate.foreign_tourist_rate_inr_per_night.toLocaleString()} / night
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Muted Information Rules Panel */}
      <div className="bg-neutral-50 dark:bg-white/5 p-5 rounded-2xl space-y-3 border border-neutral-100 dark:border-white/5 text-xs text-neutral-700 dark:text-white/80 font-sans">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-neutral-200 dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-500" />
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">CHECK-IN</div>
              <div className="font-bold text-neutral-900 dark:text-white font-mono">{rules.check_in} AM/PM</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-500" />
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">CHECK-OUT</div>
              <div className="font-bold text-neutral-900 dark:text-white font-mono">{rules.check_out} AM/PM</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <BedDouble className="w-4 h-4 text-orange-500" />
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">EXTRA BED LIMIT</div>
              <div className="font-bold text-neutral-900 dark:text-white font-mono">Max {rules.maximum_extra_beds_per_room} Bed</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Baby className="w-4 h-4 text-orange-500" />
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">FREE CHILD AGE</div>
              <div className="font-bold text-neutral-900 dark:text-white font-mono">Up to {rules.free_child_age_limit_years} Yrs</div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 pt-1 text-[11px] text-neutral-600 dark:text-white/70">
          <Info className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
          <span>
            {rules.free_child_condition} Extra bed charges: ₹{rules.extra_bed_rates_inr_per_night.indian_tourist} (Indian) / ₹{rules.extra_bed_rates_inr_per_night.foreign_tourist} (Foreigner). {rules.taxes}
          </span>
        </div>
      </div>
    </div>
  );
};
