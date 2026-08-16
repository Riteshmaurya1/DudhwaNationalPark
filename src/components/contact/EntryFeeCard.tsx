import React from "react";
import { SanctuaryEntryFee } from "@/types/contact";
import { CreditCard, Users } from "lucide-react";

interface EntryFeeCardProps {
  fees: SanctuaryEntryFee[];
}

export const EntryFeeCard: React.FC<EntryFeeCardProps> = ({ fees }) => {
  return (
    <div className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-neutral-100 dark:border-white/10 pb-3">
        <div>
          <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase">
            SANCTUARY PERMITS
          </span>
          <h3 className="text-lg font-bold font-serif text-neutral-900 dark:text-white">
            Sanctuary Entry Fees
          </h3>
        </div>
        <CreditCard className="w-5 h-5 text-orange-500" />
      </div>

      <div className="space-y-3">
        {fees.map((fee, i) => (
          <div
            key={i}
            className="flex items-center justify-between text-xs border-b border-neutral-100 dark:border-white/5 pb-3 pt-1"
          >
            <div>
              <div className="font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-neutral-400" />
                {fee.visitor_category}
              </div>
              <div className="text-[10px] text-neutral-500 dark:text-white/50">{fee.unit}</div>
            </div>

            <div className="text-right font-mono">
              <div className="font-bold text-emerald-700 dark:text-emerald-400">
                ₹{fee.indian_tourist_fee_inr} <span className="text-[10px] font-normal text-neutral-400">(Indian)</span>
              </div>
              <div className="text-[11px] font-bold text-amber-700 dark:text-amber-400">
                ₹{fee.foreign_tourist_fee_inr} <span className="text-[10px] font-normal text-neutral-400">(Foreign)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
