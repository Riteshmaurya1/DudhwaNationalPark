import React from "react";
import { SafariRate } from "@/types/contact";
import { CarFront, ShieldAlert } from "lucide-react";

interface SafariRateCardProps {
  rates: SafariRate[];
  inclusions: string[];
  rules: { photography_charges: string };
}

export const SafariRateCard: React.FC<SafariRateCardProps> = ({ rates, inclusions, rules }) => {
  return (
    <div className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-neutral-100 dark:border-white/10 pb-3">
        <div>
          <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase">
            GYPSY VEHICLE CHARGES
          </span>
          <h3 className="text-lg font-bold font-serif text-neutral-900 dark:text-white">
            Safari Vehicle Rates (7-Seater)
          </h3>
        </div>
        <CarFront className="w-5 h-5 text-orange-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        {rates.map((rate, i) => (
          <div
            key={i}
            className="bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 p-4 rounded-2xl space-y-2"
          >
            <div className="font-bold text-neutral-900 dark:text-white font-serif">{rate.departure_point}</div>
            <div className="text-[10px] font-mono text-neutral-500 dark:text-white/50">Capacity: Max {rate.full_vehicle_capacity_people} Persons</div>
            <div className="pt-1 font-mono">
              <div className="text-base font-extrabold text-orange-600 dark:text-orange-400">
                ₹{rate.full_vehicle_rate_inr.toLocaleString()} <span className="text-[10px] font-normal text-neutral-500">/ vehicle</span>
              </div>
              <div className="text-[11px] text-neutral-600 dark:text-white/70">
                Offline Rate: ₹{rate.offline_per_person_rate_inr} / person
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-2xl space-y-1 text-xs">
        <div className="font-mono text-emerald-800 dark:text-emerald-400 font-semibold text-[11px]">
          RATE INCLUSIONS: {inclusions.join(" & ")}
        </div>
        <p className="text-[11px] text-neutral-600 dark:text-white/70">
          Note: {rules.photography_charges}. Photography is not included in room tariff.
        </p>
      </div>
    </div>
  );
};
