import React from "react";
import { ArrowRight, MessageSquareCode, Award, ShieldCheck, Sparkles } from "lucide-react";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-16 border-b border-editorial-border"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1600"
          alt="Premium Epoxy Industrial Floor"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay with purple and brochure light blue (#1669D8) / deep midnight (#050514) atmospheric gradient to guarantee perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050514] via-[#050514]/90 to-[#7C3AED]/30 z-10" />
      </div>

      {/* Centered Content Wrapper */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-8">
        
        {/* Badge - Purple & Light Blue Accent */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7C3AED]/20 border border-[#7C3AED]/50 text-[#EEF2FF] rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#1669D8]" />
          <span>India's Premium Industrial Flooring Leaders</span>
        </div>

        {/* Dynamic Centered Title */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] font-extrabold text-[#1669D8] block">
            ESTABLISHED IN 1993 • TRUSTED BY 200+ CONGLOMERATES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[68px] leading-[1.05] font-serif font-light text-[#FEFEFE]">
            Future-Proof <span className="italic font-normal text-[#1669D8]">Seamless</span> Polymers <br />
            <span className="font-semibold text-white">Laying the Groundwork</span> of Success.
          </h1>
        </div>

        {/* Elegant Description paragraph */}
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-sans">
          Delhi's <strong className="text-white font-semibold">KPN Enterprises</strong> architectures extreme-durability polymeric resins. Our customized self-leveling epoxy, PU, antistatic ESD, and waterproof layouts protect premium facility subfloors against heavy heavy-duty traffic and chemical washdowns.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
          <button
            onClick={() => onScrollTo("ai-advisor")}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 px-8 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.4)] active:scale-95"
          >
            <MessageSquareCode className="w-4 h-4 text-[#EEF2FF]" />
            Consult AI Advisor
          </button>
          
          <button
            onClick={() => onScrollTo("products")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/60 hover:border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-xs uppercase tracking-widest transition-all active:scale-95"
          >
            Our Solutions
            <ArrowRight className="w-4 h-4 text-[#1669D8]" />
          </button>
        </div>

        {/* Balanced Stats row centered below */}
        <div className="grid grid-cols-3 gap-8 sm:gap-16 pt-10 border-t border-white/10 max-w-3xl w-full">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-serif italic text-white font-light">
              <span className="text-[#1669D8] font-bold">200+</span> Brand
            </div>
            <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Client Factories</div>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-6 sm:pl-12">
            <div className="text-3xl sm:text-4xl font-serif italic text-white font-light">
              <span className="text-[#7C3AED] font-bold">0%</span> Seam
            </div>
            <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Bacterial Joints</div>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-6 sm:pl-12">
            <div className="text-3xl sm:text-4xl font-serif italic text-white font-light">
              <span className="text-[#1669D8] font-bold">100%</span> Spec
            </div>
            <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Execution Speed</div>
          </div>
        </div>

      </div>
    </section>
  );
}
