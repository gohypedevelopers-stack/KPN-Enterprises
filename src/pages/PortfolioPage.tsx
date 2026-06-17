import React, { useState } from "react";
import { DYNAMIC_GALLERY } from "../data";
import { FadeIn } from "../components/ui/FadeIn";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function PortfolioPage() {
  const [galleryFilter, setGalleryFilter] = useState("All");
  const galleryFilters = ["All", "Epoxy Flooring", "Coving & Epoxy", "Antistatic ESD", "Heavy-Duty Mortar", "Anti-Corrosive Coating", "PU Screed Flooring"];

  const filteredGallery = galleryFilter === "All"
    ? DYNAMIC_GALLERY
    : DYNAMIC_GALLERY.filter(item => item.category === galleryFilter);

  return (
    <>
      <PageHero 
        title={<>Our <span className="not-italic font-semibold">Portfolio</span></>}
        subtitle="Explore our successful industrial flooring projects across diverse industries"
        imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Gallery Section */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-white border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="mb-16">
              <div className="flex flex-wrap gap-2 justify-center pb-8 border-b border-editorial-border">
                {galleryFilters.map((gf) => (
                  <button
                    key={gf}
                    onClick={() => setGalleryFilter(gf)}
                    className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-widest transition-all cursor-pointer ${
                      galleryFilter === gf
                        ? "bg-editorial-ink text-white shadow-sm"
                        : "bg-editorial-bg text-editorial-dark-gray hover:text-editorial-ink border border-editorial-border hover:bg-white"
                    }`}
                  >
                    {gf}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGallery.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col h-full border border-editorial-border"
                >
                  {/* Image Section */}
                  <div className="h-56 w-full overflow-hidden relative bg-editorial-bg">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-editorial-ink text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col flex-1">
                    <h4 className="text-xl font-serif italic font-semibold text-editorial-ink mb-3 group-hover:text-editorial-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-editorial-border">
                      <span className="text-xs font-semibold text-gray-500 group-hover:text-editorial-accent transition-colors uppercase tracking-widest">
                        Case Study
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-editorial-accent transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredGallery.length === 0 && (
              <div className="text-center py-16">
                <p className="text-editorial-dark-gray mb-4">No projects found in this category</p>
                <button
                  onClick={() => setGalleryFilter("All")}
                  className="text-editorial-accent hover:text-editorial-ink font-semibold transition-colors"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </section>
      </FadeIn>

      {/* Project Stats */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-editorial-bg border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "50+", label: "Expert Professionals" },
                { number: "100+", label: "Corporate Clients" },
                { number: "15+", label: "Years of Excellence" }
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-4xl font-bold text-editorial-ink">{stat.number}</p>
                  <p className="text-sm font-semibold text-editorial-dark-gray uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Categories Highlight */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-white border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-serif italic text-editorial-ink font-light">
                Solutions <span className="not-italic font-semibold">Delivered</span>
              </h2>
              <p className="text-editorial-dark-gray max-w-2xl mx-auto">Diverse flooring solutions across multiple industrial sectors</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Epoxy Flooring", desc: "High-gloss, durable finishes for warehouses and manufacturing facilities" },
                { title: "Coving & Epoxy", desc: "Seamless wall-to-floor transitions for cleanroom environments" },
                { title: "Antistatic ESD", desc: "Conductive flooring for sensitive electronic and lab environments" },
                { title: "Heavy-Duty Mortar", desc: "Ultra-strong underlays for extreme industrial conditions" },
                { title: "Anti-Corrosive Coating", desc: "Chemical-resistant protective coatings for harsh environments" },
                { title: "PU Screed Flooring", desc: "Waterproof, thermal-resistant surfaces for demanding facilities" }
              ].map((category, idx) => (
                <div key={idx} className="bg-editorial-bg rounded-xl p-8 border border-editorial-border hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-editorial-ink mb-3">{category.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{category.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-editorial-ink text-white border-t border-editorial-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl font-serif italic font-light">
              Impressed by Our <span className="not-italic font-semibold">Work?</span>
            </h2>
            <p className="text-lg text-gray-300">Let's create the next success story for your facility</p>
            <Link
              to="/contact"
              className="inline-flex gap-2 bg-white hover:bg-gray-100 text-editorial-ink font-bold py-4 px-8 rounded-lg transition-colors uppercase text-sm tracking-widest items-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
