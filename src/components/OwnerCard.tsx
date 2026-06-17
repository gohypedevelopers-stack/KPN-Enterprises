import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { REPRESENTATIVE_CONTACT } from "../data";

export default function OwnerCard() {
  return (
    <div className="relative bg-editorial-ink border border-editorial-border rounded-xl shadow-lg p-6 sm:p-8 space-y-6 overflow-hidden flex flex-col justify-between text-white w-full h-full min-h-[400px]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full filter blur-xl pointer-events-none" />

      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="text-[9px] text-[#FAF9F6] font-bold uppercase tracking-[0.25em] leading-none opacity-80">
            Certified Specialist Coordinator
          </div>
          <h3 className="text-2xl font-serif italic text-white font-light">
            {REPRESENTATIVE_CONTACT.name}
          </h3>
          <p className="text-xs text-[#FAF9F6]/60 font-medium">
            Owner & Coordinator | KPN Enterprises
          </p>
        </div>

        <div className="w-10 h-10 bg-white/10 border border-white/20 rounded flex items-center justify-center text-xs font-black text-white font-serif italic">
          KPN
        </div>
      </div>

      {/* Coordinates block */}
      <div className="space-y-4 pt-6 border-t border-white/10">
        <a
          href={`tel:${REPRESENTATIVE_CONTACT.phones[0]}`}
          className="flex items-center gap-3.5 group text-xs text-editorial-cream hover:text-white transition"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 hover:border-white/30 border border-white/10 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-editorial-accent" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest leading-none">Primary Direct Office</div>
            <div className="font-mono text-[11px] font-semibold">{REPRESENTATIVE_CONTACT.phones[0]}</div>
          </div>
        </a>

        <a
          href={`tel:${REPRESENTATIVE_CONTACT.phones[1]}`}
          className="flex items-center gap-3.5 group text-xs text-editorial-cream hover:text-white transition"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 hover:border-white/30 border border-white/10 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-editorial-accent" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest leading-none">WhatsApp / Estimations desk</div>
            <div className="font-mono text-[11px] font-semibold">{REPRESENTATIVE_CONTACT.phones[1]}</div>
          </div>
        </a>

        <a
          href={`mailto:${REPRESENTATIVE_CONTACT.email}`}
          className="flex items-center gap-3.5 group text-xs text-editorial-cream hover:text-white transition"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 hover:border-white/30 border border-white/10 flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-editorial-accent" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest leading-none">Corporate Mailbox</div>
            <div className="font-mono text-[11px] font-semibold">{REPRESENTATIVE_CONTACT.email}</div>
          </div>
        </a>

        <div className="flex items-start gap-3.5 text-xs text-editorial-cream">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-editorial-accent" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest leading-none">Corporate HQ Address</div>
            <div className="leading-relaxed text-[11px] font-semibold text-[#FAF9F6]/80">{REPRESENTATIVE_CONTACT.address}</div>
          </div>
        </div>
      </div>

      {/* Bottom tag validating credibility */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[9px] text-[#FAF9F6]/40 uppercase tracking-widest font-bold">
        <span>GST Registered Contractor</span>
        <span>PAN India Division</span>
      </div>
    </div>
  );
}
