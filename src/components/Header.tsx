import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import { REPRESENTATIVE_CONTACT } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", anchor: "#hero" },
    { name: "About", path: "/about", anchor: "#about" },
    { name: "Services", path: "/services", anchor: "#products" },
    { name: "Portfolio", path: "/portfolio", anchor: "#gallery" },
    { name: "Contact", path: "/contact", anchor: "#get-quote" }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-editorial-bg/95 backdrop-blur-md shadow-sm border-b border-editorial-border py-2"
        : "bg-transparent py-6"
        }`}
    >
      {/* Main NavBar */}
      <div className="w-full px-4 sm:px-8 lg:px-24">
        <div className="flex justify-between items-center h-16 relative">

          {/* Logo on the Left */}
          <Link
            to="/"
            className="flex items-center justify-center cursor-pointer group z-10"
            onClick={handleNavClick}
          >
            <div className="flex items-center justify-center">
              <img 
                src="/ChatGPT_Image_Jun_16__2026__03_26_32_PM-removebg-preview.png" 
                alt="KPN Enterprises" 
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Center Section: Navigation Links */}
          <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:gap-12 z-10">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] transition-all pb-1 ${
                    isActive
                      ? "text-blue-500 border-b-[1.5px] border-blue-500"
                      : scrolled 
                      ? "text-editorial-dark-gray hover:text-editorial-ink hover:opacity-70 border-b-[1.5px] border-transparent" 
                      : "text-gray-300 hover:text-white hover:opacity-70 border-b-[1.5px] border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Section: Contact Stack + Button */}
          <div className="hidden lg:flex items-center gap-6 z-10">
            <div className="flex flex-col text-right">
              <span className={`text-[8px] font-bold uppercase tracking-[0.3em] ${scrolled ? "text-editorial-muted" : "text-gray-400"}`}>
                Direct Line
              </span>
              <span className={`text-xs font-bold tracking-widest ${scrolled ? "text-editorial-ink" : "text-white"}`}>
                +91 93183 51774
              </span>
            </div>

            <Link
              to="/contact"
              className={`font-bold py-3.5 px-8 text-[10px] uppercase tracking-[0.25em] transition-all active:scale-95 shadow-sm whitespace-nowrap ${scrolled
                  ? "bg-editorial-ink hover:bg-editorial-accent text-white"
                  : "bg-white hover:bg-gray-100 text-black"
                }`}
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden ml-auto z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${scrolled
                ? "text-editorial-dark-gray hover:text-editorial-ink hover:bg-editorial-beige"
                : "text-white hover:text-gray-300"
                }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-editorial-bg border-b border-editorial-border p-4 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`block w-full text-left px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-editorial-beige text-editorial-ink border-l-4 border-editorial-accent"
                    : "text-editorial-dark-gray hover:text-editorial-ink hover:bg-editorial-beige/50"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 flex flex-col gap-2">
            <a
              href={`tel:${REPRESENTATIVE_CONTACT.phones[0]}`}
              className="flex items-center justify-center gap-2 bg-editorial-ink hover:bg-editorial-accent text-white font-bold py-3 px-4 rounded-full text-xs uppercase tracking-widest transition"
            >
              <Phone className="w-4 h-4" />
              Call +91 93183 51774
            </a>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 bg-editorial-beige hover:bg-editorial-border/60 text-editorial-ink border border-editorial-border font-bold py-3 px-4 rounded-full text-xs uppercase tracking-widest transition"
            >
              Consult Free
              <ArrowRight className="w-4 h-4 text-editorial-accent" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
