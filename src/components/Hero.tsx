import React from "react";
import { ArrowRight, MessageSquareCode, Award, ShieldCheck, Sparkles } from "lucide-react";

import InkReveal from "./ui/ink-reveal";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 border-b border-editorial-border"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Layer 0: After image (Revealed) */}
        <img
          src="/after_flooring.png"
          alt="Premium Epoxy Industrial Floor After"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Layer 1: InkReveal canvas. Draws the "Before" image and erases it to reveal the "After" image below. */}
        <InkReveal 
          imageSrc="/before_flooring.png"
          brushSize={250}
        />

        {/* Full-screen dark overlay for text contrast (pointer-events-none allows mouse to interact with canvas) */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
      </div>

      {/* Content Wrapper - Left Aligned to match new reference */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-16 h-full flex flex-col justify-center pt-24 pb-12 pointer-events-none">
        
        <div className="w-full flex flex-col items-start space-y-12">
          
          {/* Main Headline (Inheriting default font family) */}
          <h1 className="flex flex-col text-left font-serif">
            <span className="text-5xl sm:text-6xl lg:text-[90px] leading-[0.95] font-bold text-white uppercase tracking-tight drop-shadow-md">
              Future-Proof
            </span>
            <span className="text-5xl sm:text-6xl lg:text-[90px] leading-[0.95] font-light text-white uppercase tracking-wide drop-shadow-lg">
              Seamless <span className="text-editorial-accent italic normal-case">Polymers</span>
            </span>
          </h1>

          {/* Subtext and Button Layout */}
          <div className="w-full flex flex-col md:flex-row md:justify-between items-start gap-8 mt-16">
            
            {/* Left Column: Short text + Button */}
            <div className="flex flex-col items-start space-y-10 md:w-1/2">
              <p className="text-xl sm:text-2xl text-white font-bold leading-snug drop-shadow-sm max-w-md">
                Delhi's KPN Enterprises architectures extreme-durability polymeric resins.
              </p>
              
              <button
                onClick={() => onScrollTo("ai-advisor")}
                className="pointer-events-auto border border-white/80 hover:bg-white hover:text-black text-white font-bold py-4 px-8 text-xs uppercase tracking-[0.2em] transition-all duration-300"
              >
                Consult AI Advisor
              </button>
            </div>

            {/* Right Column: Longer descriptive text */}
            <div className="md:w-1/2 md:flex md:justify-end">
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans max-w-sm drop-shadow-sm text-right">
                Our customized self-leveling epoxy, PU, antistatic ESD, and waterproof layouts protect premium facility subfloors against heavy heavy-duty traffic and chemical washdowns.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
