import React, { useState } from "react";
import Hero from "../components/Hero";
import ProductCatalog from "../components/ProductCatalog";
import ClientSection from "../components/ClientSection";
import QuoteForm from "../components/QuoteForm";
import { ABOUT_TEXT, DOMAIN_EXPERTISE, COMPOSITION_DATA, DYNAMIC_GALLERY } from "../data";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/ui/FadeIn";

export default function HomePage() {
  const [galleryFilter, setGalleryFilter] = useState("All");
  const galleryFilters = ["All", "Epoxy Flooring", "Coving & Epoxy", "Antistatic ESD", "Heavy-Duty Mortar", "Anti-Corrosive Coating", "PU Screed Flooring"];

  const filteredGallery = galleryFilter === "All"
    ? DYNAMIC_GALLERY
    : DYNAMIC_GALLERY.filter(item => item.category === galleryFilter);

  return (
    <>
      {/* Hero Block */}
      <Hero onScrollTo={() => { }} />

      {/* CORE ABOUT COMPANY PANEL */}
      <FadeIn direction="up">
        <section id="about" className="py-24 bg-white text-editorial-ink relative border-b border-editorial-border">
          <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-24 space-y-24">
          {/* Top Block: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image */}
            <div className="relative overflow-hidden h-[400px] lg:h-[500px] rounded-2xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800"
                alt="Professional facility"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="space-y-6">
              <div className="text-sm font-bold text-editorial-accent uppercase tracking-widest">
                Delhi NCR Standard Class Group
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif italic text-editorial-ink font-light">
                About <span className="not-italic font-semibold">KPN Enterprises</span>
              </h2>
              <div className="font-bold text-sm sm:text-base text-gray-800">
                Resistant to heat, organic acids, bacteria, and slips. Prioritize high durability, strict costings, and timely execution.
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {ABOUT_TEXT}
              </p>

              <Link
                to="/contact"
                className="inline-flex bg-[#1669D8] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded items-center justify-center gap-2 uppercase text-xs tracking-wider transition-colors mt-8"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bottom Block: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Text */}
            <div className="space-y-8 lg:pr-8">
              <h2 className="text-4xl sm:text-5xl font-serif italic text-editorial-ink font-light">
                Domain <span className="not-italic font-semibold">Expertise</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {DOMAIN_EXPERTISE}
              </p>

              <ul className="space-y-4 pt-2">
                {COMPOSITION_DATA.map((role, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-800 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden h-[400px] lg:h-[500px] rounded-2xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                alt="Domain expertise"
                className="w-full h-full object-cover"
              />
            </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* SECTION: PRODUCT CATALOG SYSTEMS */}
      <FadeIn direction="up" delay={0.1}>
        <ProductCatalog />
      </FadeIn>

      {/* SECTION: INDUSTRIES SERVED / WHY CHOOSE EPOXY */}
      <FadeIn direction="up" delay={0.1}>
        <ClientSection />
      </FadeIn>



      {/* PORTFOLIO TRANSFORMATIONS GALLERY */}
      <FadeIn direction="up" delay={0.1}>
        <section id="gallery" className="py-24 bg-editorial-bg text-editorial-ink border-b border-editorial-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title group */}
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light">
              Our <span className="not-italic font-semibold">Case Studies</span>
            </h2>
            <p className="text-sm text-editorial-dark-gray leading-relaxed">
              Explore our recent industrial flooring projects and successful installations.
            </p>
          </div>

          {/* Quick gallery filters */}
          <div className="flex flex-wrap gap-1.5 justify-center mb-10 pb-4 border-b border-editorial-border">
            {galleryFilters.map((gf) => (
              <button
                key={gf}
                onClick={() => setGalleryFilter(gf)}
                className={`px-3.5 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-widest transition-all cursor-pointer ${galleryFilter === gf
                  ? "bg-editorial-ink text-white font-bold shadow-sm"
                  : "bg-white text-editorial-dark-gray hover:text-editorial-ink border border-editorial-border hover:bg-editorial-cream"
                  }`}
              >
                {gf}
              </button>
            ))}
          </div>

          {/* Gallery masonry list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual crop box */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-editorial-ink text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-1 bg-white">
                  <h4 className="text-xl font-serif italic font-semibold text-editorial-ink mb-3 group-hover:text-editorial-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-editorial-dark-gray leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="text-sm font-semibold text-gray-400 group-hover:text-editorial-accent transition-colors">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
      </FadeIn>

      {/* LEAD QUOTE REQUEST PORTAL AND DIGITAL INSPECTION */}
      <FadeIn direction="up" delay={0.1}>
        <QuoteForm />
      </FadeIn>
    </>
  );
}
