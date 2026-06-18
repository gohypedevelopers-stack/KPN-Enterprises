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
                <Link
                  key={item.id || idx}
                  to={`/project/${item.id}`}
                  className="text-left bg-white rounded-2xl overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col h-full"
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
                </Link>
              ))}
            </div>
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
