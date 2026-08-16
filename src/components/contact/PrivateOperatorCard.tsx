import React from "react";
import { CopyButton } from "./CopyButton";
import { HelpCircle, Phone, Mail, MapPin, ExternalLink, ShieldAlert } from "lucide-react";

interface PrivateOperatorProps {
  url: string;
  operatorName: string;
  phone: string;
  email: string;
  city: string;
  district: string;
  state: string;
  disclaimer: string;
}

export const PrivateOperatorCard: React.FC<PrivateOperatorProps> = ({
  url,
  operatorName = "Jungle Safari Desk",
  phone = "+91 90840 22166",
  email = "dudhwapark@gmail.com",
  city = "Palia Kalan",
  district = "Lakhimpur Kheri",
  state = "Uttar Pradesh",
  disclaimer = "Private agency operator assistance desk, not directly affiliated with UP Forest Dept government portal.",
}) => {
  return (
    <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-white/15 shadow-xl relative overflow-hidden">
      {/* Disclaimer Header Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-mono font-semibold">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          Private Operator Assistance Desk
        </span>
        <span className="text-[11px] font-mono text-white/50">
          Private Agency Operator • Not Government Office
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold font-serif text-white">{operatorName}</h3>
        <p className="text-xs text-white/80 font-sans leading-relaxed">
          {disclaimer}
        </p>
      </div>

      {/* Details & Copy Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono bg-white/5 p-4 rounded-2xl border border-white/10">
        <div className="space-y-1.5">
          <div className="text-[10px] text-white/50 font-bold uppercase">Helpline Number</div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <a href={`tel:${phone}`} className="font-bold text-orange-400 hover:underline">
              {phone}
            </a>
            <CopyButton textToCopy={phone} label="Copy" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="text-[10px] text-white/50 font-bold uppercase">Email Support</div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-orange-400" />
            <a href={`mailto:${email}`} className="font-bold text-orange-400 hover:underline truncate">
              {email}
            </a>
            <CopyButton textToCopy={email} label="Copy" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-white/70 font-mono">
        <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
        <span>Location: {city}, {district}, {state}</span>
      </div>

      {/* Warning Notice & Official Portal CTA */}
      <div className="space-y-3 pt-3 border-t border-white/10">
        <div className="flex items-start gap-2 text-[11px] text-amber-300/90 font-sans">
          <ShieldAlert className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <span>
            Notice: For official tariff confirmation, permits, and government booking verification, contact the official offices above.
          </span>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
        >
          Visit Official UP Eco-Tourism Portal
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
