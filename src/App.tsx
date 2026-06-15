import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCatalog from "./components/ProductCatalog";
import SolutionsMatrix from "./components/SolutionsMatrix";
import ClientSection from "./components/ClientSection";
import AiConsultant from "./components/AiConsultant";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import { ABOUT_TEXT, DOMAIN_EXPERTISE, COMPOSITION_DATA, DYNAMIC_GALLERY } from "./data";
import { ShieldCheck, Award } from "lucide-react";

export default function App() {

  const [activeSection, setActiveSection] = useState("hero");
  const [galleryFilter, setGalleryFilter] = useState("All");

  // Filter gallery items
  const galleryFilters = ["All", "Epoxy Flooring", "Coving & Epoxy", "Antistatic ESD", "Heavy-Duty Mortar", "Anti-Corrosive Coating", "PU Screed Flooring"];

  const filteredGallery = galleryFilter === "All"
    ? DYNAMIC_GALLERY
    : DYNAMIC_GALLERY.filter(item => item.category === galleryFilter);

  // Dynamic Scroll Highlighting logic
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // Highlight navbar item when 25% scrolled in view
      threshold: 0.1,
    });

    const sections = ["hero", "products", "industries", "why-epoxy", "matrix", "ai-advisor", "get-quote"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for header bar heights
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-editorial-bg font-sans text-editorial-ink min-h-screen selection:bg-editorial-accent/25 selection:text-editorial-ink">

      {/* Top Floating Header */}
      <Header onScrollTo={handleScrollToSection} activeSection={activeSection} />

      {/* Hero Block */}
      <Hero onScrollTo={handleScrollToSection} />

      {/* CORE ABOUT COMPANY PANEL (OCR Page 2 & Page 11 Details) */}
      <section id="about" className="py-24 bg-white text-editorial-ink relative border-b border-editorial-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Visual Box Left (cols: 5) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 bg-editorial-border rounded-xl blur-sm opacity-50" />
              <div className="relative bg-editorial-cream border border-editorial-border rounded-xl overflow-hidden p-6 sm:p-8 space-y-6">

                <h4 className="text-[10px] font-bold text-editorial-accent uppercase tracking-widest">
                  Domain Expertise
                </h4>
                <p className="text-xs text-editorial-dark-gray leading-relaxed font-semibold">
                  {DOMAIN_EXPERTISE}
                </p>

                {/* Team structures row checklist corresponding to Page 11 */}
                <div className="space-y-3 pt-4 border-t border-editorial-border">
                  <span className="text-[10px] font-bold text-editorial-muted uppercase tracking-wider block">
                    Engineering Operations Division:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {COMPOSITION_DATA.map((role) => (
                      <span
                        key={role}
                        className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white border border-editorial-border hover:bg-editorial-beige text-editorial-ink py-1 px-3 rounded transition-colors"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Paragraph Text Right (cols: 7) */}
            <div className="lg:col-span-7 space-y-6">

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-editorial-beige border border-editorial-border text-editorial-accent rounded-full text-[10px] font-bold uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                Delhi NCR Standard Class Group
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light">
                About <span className="not-italic font-semibold">KPN Enterprises</span>
              </h2>

              <p className="text-xs sm:text-sm text-editorial-dark-gray leading-relaxed max-w-2xl font-medium">
                {ABOUT_TEXT}
              </p>

              {/* Badges block confirming parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-editorial-border">
                <div className="flex items-start gap-2.5 text-xs text-editorial-dark-gray font-semibold">
                  <ShieldCheck className="w-5 h-5 text-editorial-accent shrink-0 mt-0.5" />
                  <span>Resistant to heat, organic acids, bacteria, and slips</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-editorial-dark-gray font-semibold">
                  <ShieldCheck className="w-5 h-5 text-editorial-accent shrink-0 mt-0.5" />
                  <span>Prioritize high durability, strict costings, and timely execution</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION: PRODUCT CATALOG SYSTEMS */}
      <ProductCatalog />

      {/* SECTION: INDUSTRIES SERVED / WHY CHOOSE EPOXY / REGISTRY WALL */}
      <ClientSection />

      {/* SECTION: EXPERT MATRICES SOLUTIONS INDEX (Page 9 index table) */}
      <SolutionsMatrix />

      {/* PORTFOLIO TRANSFORMATIONS GALLERY (OCR Page 10) */}
      <section id="gallery" className="py-24 bg-editorial-bg text-editorial-ink border-b border-editorial-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title group */}
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light">
              Our <span className="not-italic font-semibold">Flooring Installations</span>
            </h2>
            <p className="text-[10px] sm:text-xs text-editorial-accent font-extrabold uppercase tracking-[0.25em] leading-none mt-1">
              “INDUSTRIAL-GRADE DURABILITY. DESIGNER-GRADE FINISH.”
            </p>
            <p className="text-xs sm:text-sm text-editorial-dark-gray leading-relaxed font-semibold">
              Showcasing premium epoxy and polymer lining installations across actual warehousing, cleanrooms, and automated testing workspaces:
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-editorial-border hover:border-editorial-accent/60 rounded-xl overflow-hidden group shadow-sm flex flex-col justify-between"
              >
                {/* Visual crop box */}
                <div className="h-52 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-editorial-ink text-white text-[9px] font-bold px-3 py-1.5 rounded-md uppercase tracking-widest leading-none shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 space-y-1.5 bg-white">
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-editorial-ink group-hover:text-editorial-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-editorial-dark-gray leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE AI FLOORING ADVISOR ROOM */}
      <AiConsultant />

      {/* LEAD QUOTE REQUEST PORTAL AND DIGITAL INSPECTION */}
      <QuoteForm />

      {/* FOOTER COORDINATES MAP */}
      <Footer />

    </div>
  );
}
