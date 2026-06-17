import React from "react";
import { FadeIn } from "./ui/FadeIn";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  imageSrc: string;
}

export default function PageHero({ title, subtitle, imageSrc }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden border-b border-editorial-border bg-editorial-ink">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt="Hero background" 
          className="w-full h-full object-cover object-center opacity-40 grayscale"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-editorial-ink/80 via-editorial-ink/60 to-editorial-ink z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <FadeIn direction="up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-white font-light">
            {title}
          </h1>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2}>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
