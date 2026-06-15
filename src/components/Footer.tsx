import React from "react";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { REPRESENTATIVE_CONTACT } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-editorial-ink text-white pt-16 pb-8 relative overflow-hidden border-t border-editorial-border">
      
      {/* Background elegant radial light glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 relative z-10">
        
        {/* Left Column (Brand info): cols: 4 */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-serif font-light italic text-editorial-ink text-base">
              K
            </div>
            <div>
              <span className="text-base font-bold tracking-tighter uppercase block">
                KPN <span className="font-light text-editorial-cream text-xs">Enterprises</span>
              </span>
              <span className="text-[9px] text-[#FAF9F6]/60 tracking-[4px] uppercase font-bold leading-none block">
                Industrial Floors
              </span>
            </div>
          </div>
          
          <p className="text-xs text-[#FAF9F6]/75 leading-relaxed max-w-sm font-medium">
            Delhi&apos;s leading professional team specializing in premium floor-wall polymeric systems: Epoxy self-leveling, antistatic conductive ESD, chemical protective coatings, and polyurethane screen installations.
          </p>
          
          <div className="flex items-center gap-2 text-editorial-accent text-[10px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>ISO 9001:2015 & FDA GMP Certified Teams</span>
          </div>
        </div>

        {/* Center Column (Coordinates): cols: 4 */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.25em]">CORPORATE DETAILS</h4>
          <ul className="space-y-3 pl-0 text-xs text-[#FAF9F6]/85 font-semibold">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-editorial-accent shrink-0 mt-0.5" />
              <span className="leading-relaxed">{REPRESENTATIVE_CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-editorial-accent shrink-0" />
              <span>{REPRESENTATIVE_CONTACT.phones[0]}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-editorial-accent shrink-0" />
              <span>{REPRESENTATIVE_CONTACT.email}</span>
            </li>
          </ul>
        </div>

        {/* Right Column (Regional coverages): cols: 4 */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.25em]">NATIONAL DIVISION CAPABILITY</h4>
          <p className="text-xs text-[#FAF9F6]/75 leading-relaxed font-semibold">
            Headquartered in New Delhi (Okhla Industrial Estate), KPN Enterprises delivers custom formulations and laying services to manufacturing centers across North India.
          </p>
          <div className="pt-2 flex gap-1.5 flex-wrap">
            {["New Delhi", "Gurugram", "Noida", "Faridabad", "Ghaziabad"].map((city) => (
              <span
                key={city}
                className="text-[9px] font-bold uppercase bg-white/5 border border-white/10 hover:bg-white/10 px-2.5 py-1 rounded text-[#FAF9F6]/80 tracking-widest"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Copy-row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-white/40 font-bold uppercase tracking-[0.25em]">
        <span>© {currentYear} KPN Enterprises. All Rights Reserved.</span>
        <span>Laying Perfection PAN India</span>
      </div>

    </footer>
  );
}
