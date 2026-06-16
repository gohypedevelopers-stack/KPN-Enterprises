import React from "react";
import { PRODUCT_CATALOG } from "../data";

// Add some relevant placeholder images for the catalog items since they don't have them in data.ts
const placeholderImages = [
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800", // Epoxy
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", // PU
  "https://images.unsplash.com/photo-1565624795393-2cebd59e4bb7?auto=format&fit=crop&q=80&w=800", // Anti-slip
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800", // ESD
  "https://images.unsplash.com/photo-1580983546595-dfb1df0fec9d?auto=format&fit=crop&q=80&w=800", // Coving
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800", // Marking
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800"  // Anti-corrosive
];

export default function ProductCatalog() {
  return (
    <section id="products" className="py-24 bg-[#0a2537]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="text-purple-400 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] leading-none">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif italic text-white font-light leading-tight">
            We provide <span className="not-italic font-semibold">Expert Flooring Services</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium max-w-2xl mx-auto pt-2">
            Formulated inside certified development labs to support continuous heavy wheel loading, aggregate abrasion, and aggressive sanitation washdowns.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATALOG.slice(0, 3).map((p, idx) => (
            <div 
              key={p.id}
              className="bg-white rounded-lg overflow-hidden border border-purple-600/30 hover:border-purple-500 shadow-xl transition-colors duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="h-64 w-full relative">
                <img 
                  src={placeholderImages[idx]} 
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 text-center flex-1 flex flex-col justify-start bg-white">
                <h3 className="text-xl sm:text-2xl font-serif italic text-editorial-ink font-semibold mb-4 leading-snug">
                  {p.name}
                </h3>
                <p className="text-xs sm:text-sm text-editorial-dark-gray leading-relaxed font-medium">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
