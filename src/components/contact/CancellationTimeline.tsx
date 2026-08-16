import React from "react";
import { CancellationRule } from "@/types/contact";
import { FileText, AlertCircle, Info } from "lucide-react";

interface CancellationTimelineProps {
  policy: CancellationRule[];
  notes: string[];
}

export const CancellationTimeline: React.FC<CancellationTimelineProps> = ({ policy, notes }) => {
  const getBadgeStyle = (percentage: number) => {
    if (percentage === 100) {
      return "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400";
    } else if (percentage > 0) {
      return "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400";
    } else {
      return "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400";
    }
  };

  return (
    <div id="cancellation" className="bg-white dark:bg-[#121513] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3 border-b border-neutral-100 dark:border-white/10 pb-4">
        <FileText className="w-5 h-5 text-orange-500" />
        <div>
          <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase">
            REFUND TERMS & CONDITIONS
          </span>
          <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-white">
            Official Booking Cancellation Policy
          </h3>
        </div>
      </div>

      {/* 3-Step Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {policy.map((item, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border ${getBadgeStyle(
              item.refund_percentage
            )} space-y-2 flex flex-col justify-between`}
          >
            <div className="text-xs font-mono font-semibold uppercase opacity-80">
              {item.cancellation_period}
            </div>
            <div className="text-2xl font-extrabold font-mono">
              {item.refund_percentage}% Refund
            </div>
          </div>
        ))}
      </div>

      {/* Additional Notes Alert Card */}
      <div className="bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 p-5 rounded-2xl space-y-2 text-xs text-neutral-700 dark:text-white/80 font-sans">
        <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-mono font-semibold text-xs">
          <AlertCircle className="w-4 h-4" />
          CANCELLATION & PAYMENT DEDUCTION RULES
        </div>
        <ul className="space-y-2 pt-1">
          {notes.map((note, i) => (
            <li key={i} className="flex items-start gap-2 text-[11px] text-neutral-600 dark:text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
