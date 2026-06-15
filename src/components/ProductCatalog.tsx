import React, { useState } from "react";
import { Check, ShieldCheck, ArrowUpRight, ArrowRight, Layers } from "lucide-react";
import { PRODUCT_CATALOG } from "../data";

export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_CATALOG[0].id);

  const activeProduct = PRODUCT_CATALOG.find((p) => p.id === selectedProduct) || PRODUCT_CATALOG[0];

  return (
    <section id="products" className="py-24 bg-editorial-bg border-b border-editorial-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-editorial-beige border border-editorial-border text-editorial-accent rounded-full text-[10px] font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            Detailed Solutions Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light">
            Our <span className="not-italic font-semibold">Specialized Flooring</span> Systems
          </h2>
          <p className="text-xs sm:text-sm text-editorial-dark-gray leading-relaxed font-medium max-w-2xl mx-auto">
            Formulated inside certified development labs to support continuous heavy wheel loading, aggregate abrasion, and aggressive sanitation washdowns.
          </p>
        </div>

        {/* Tab System Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Product quick tabs (cols: 4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-editorial-muted uppercase tracking-[0.25em] mb-4 pl-1">
              Select Treatment Formula
            </div>
            {PRODUCT_CATALOG.map((p) => {
              const worksAsActive = p.id === selectedProduct;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProduct(p.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative group flex justify-between items-center cursor-pointer ${
                    worksAsActive
                      ? "bg-editorial-ink border-editorial-ink text-white shadow-sm"
                      : "bg-editorial-cream hover:bg-editorial-beige border-editorial-border hover:border-editorial-muted/30 text-editorial-ink"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${worksAsActive ? "text-white" : "text-editorial-ink"}`}>
                      {p.name}
                    </div>
                    <div className={`text-[10px] truncate max-w-[240px] font-medium ${worksAsActive ? "text-editorial-beige/80" : "text-editorial-dark-gray"}`}>
                      {p.subtitle}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${worksAsActive ? "text-editorial-accent translate-x-1" : "text-editorial-muted group-hover:text-editorial-ink"}`} />
                </button>
              );
            })}
          </div>

          {/* Active Product Detailed View Card (cols: 8) */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-editorial-border rounded-xl overflow-hidden shadow-sm relative">
              
              {/* Subtle top indicator bar */}
              <div className="h-1.5 w-full bg-editorial-accent" />

              <div className="p-8 space-y-8">
                
                {/* Product Title Group */}
                <div className="space-y-4">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif italic text-editorial-ink leading-tight">{activeProduct.name}</h3>
                      <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-editorial-accent mt-1">
                        {activeProduct.subtitle}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-editorial-beige text-editorial-ink border border-editorial-border text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest leading-none">
                      <ShieldCheck className="w-3.5 h-3.5 text-editorial-accent" />
                      Tested & Certified
                    </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-editorial-dark-gray leading-relaxed font-sans font-medium">
                    {activeProduct.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-editorial-border">
                  
                  {/* Left Column: Key Benefits */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-editorial-ink uppercase tracking-widest flex items-center gap-2 font-sans">
                      <span className="w-1.5 h-1.5 bg-editorial-accent rounded-full" />
                      Material Advantage
                    </h4>
                    <ul className="space-y-3.5 pl-0 z-10 relative">
                      {activeProduct.keyBenefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-editorial-dark-gray font-medium leading-relaxed">
                          <Check className="w-4 h-4 text-editorial-accent shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Applicable Sectors */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-editorial-ink uppercase tracking-widest flex items-center gap-2 font-sans">
                      <span className="w-1.5 h-1.5 bg-editorial-accent rounded-full" />
                      Target Sectors
                    </h4>
                    <p className="text-[11px] text-editorial-muted leading-relaxed font-semibold">
                      Custom manufactured to meet parameters optimized for the Indian subcontinent:
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {activeProduct.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] uppercase font-bold bg-editorial-cream text-editorial-ink border border-editorial-border transition-colors duration-150 hover:bg-editorial-beige py-1.5 px-3 rounded"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom CTA within catalog */}
                <div className="pt-6 border-t border-editorial-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="text-[11px] text-editorial-dark-gray font-medium font-mono">
                    LAYING THICKNESS BOUNDS: <span className="text-editorial-ink font-bold">1.5MM TO 4.5MM</span> SREEDS
                  </div>
                  <a
                    href="#get-quote"
                    className="flex items-center gap-1.5 text-xs text-editorial-ink hover:text-editorial-accent transition duration-150 font-bold uppercase tracking-widest group"
                  >
                    <span>Request Technical Datasheet</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-editorial-accent" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
