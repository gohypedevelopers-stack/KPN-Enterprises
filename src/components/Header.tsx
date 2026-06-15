import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { REPRESENTATIVE_CONTACT } from "../data";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollTo, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Products", id: "products" },
    { name: "Industries", id: "industries" },
    { name: "Epoxy Guide", id: "why-epoxy" },
    { name: "Solutions Matrix", id: "matrix" },
    { name: "AI Consultant", id: "ai-advisor" },
    { name: "Get Quote", id: "get-quote" },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-editorial-bg/95 backdrop-blur-md shadow-sm border-b border-editorial-border py-2"
          : "bg-editorial-bg/80 backdrop-blur-sm border-b border-editorial-border/30 py-4"
      }`}
    >
      {/* Top micro bar for corporate coordinates */}
      <div className="hidden sm:block border-b border-editorial-border/60 pb-2 mb-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] uppercase tracking-widest text-editorial-dark-gray font-medium">
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1.5 hover:text-editorial-ink transition">
              <Phone className="w-3.5 h-3.5 text-editorial-accent" />
              {REPRESENTATIVE_CONTACT.phones[0]}
            </span>
            <span className="flex items-center gap-1.5 hover:text-editorial-ink transition">
              <Mail className="w-3.5 h-3.5 text-editorial-accent" />
              {REPRESENTATIVE_CONTACT.email}
            </span>
          </div>
          <div className="flex items-center gap-2 text-editorial-accent font-semibold tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ISO & GMP Compliant Delhi/NCR Flooring Contract</span>
          </div>
        </div>
      </div>

      {/* Main NavBar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Stylized Brochure Logo - Aurelius Editorial block layout */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("hero")}
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-editorial-ink rounded-lg border border-editorial-border shadow-sm group-hover:bg-editorial-accent transition-all duration-300">
              <span className="text-base font-serif font-light italic text-white tracking-widest pl-0.5">
                K
              </span>
            </div>
            
            <div className="flex flex-col">
              <span id="header-brand-title" className="text-lg font-bold tracking-tighter uppercase text-editorial-ink">
                KPN <span className="font-light text-editorial-muted text-sm">Enterprises</span>
              </span>
              <span className="text-[9px] text-editorial-accent tracking-[5px] uppercase font-extrabold leading-none">
                Est 1993
              </span>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${
                  activeSection === item.id
                    ? "text-editorial-ink bg-editorial-beige border-b-2 border-editorial-ink shadow-sm"
                    : "text-editorial-dark-gray hover:text-editorial-ink hover:bg-editorial-beige/50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${REPRESENTATIVE_CONTACT.phones[0]}`}
              id="cta-call-header"
              className="flex items-center gap-2 bg-editorial-ink hover:bg-editorial-accent text-white font-bold py-2 px-5 rounded-full text-[11px] uppercase tracking-widest transition-all active:scale-95 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              Direct Line
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-editorial-dark-gray hover:text-editorial-ink hover:bg-editorial-beige focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-editorial-bg border-b border-editorial-border p-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeSection === item.id
                  ? "bg-editorial-beige text-editorial-ink border-l-4 border-editorial-accent"
                  : "text-editorial-dark-gray hover:text-editorial-ink hover:bg-editorial-beige/50"
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <a
              href={`tel:${REPRESENTATIVE_CONTACT.phones[0]}`}
              className="flex items-center justify-center gap-2 bg-editorial-ink hover:bg-editorial-accent text-white font-bold py-3 px-4 rounded-full text-xs uppercase tracking-widest transition"
            >
              <Phone className="w-4 h-4" />
              Call +91 93183 51774
            </a>
            <button
              onClick={() => handleNavClick("get-quote")}
              className="flex items-center justify-center gap-2 bg-editorial-beige hover:bg-editorial-border/60 text-editorial-ink border border-editorial-border font-bold py-3 px-4 rounded-full text-xs uppercase tracking-widest transition"
            >
              Consult Free
              <ArrowRight className="w-4 h-4 text-editorial-accent" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
