import React, { useState, useEffect, useRef } from "react";
import { Trophy, Users, ShieldCheck, Zap, Upload, Sparkles, Plus, Image as ImageIcon, ChevronRight, Check } from "lucide-react";
import { CLIENT_LOGOS, EPOXY_ADVANTAGES, WHY_PARTNER_KPN, INDUSTRIES_SERVED } from "../data";

interface StatefulClient {
  name: string;
  category: string;
  logoUrl?: string; // Base64 uploaded client image
}

export default function ClientSection() {
  const [selectedSubSector, setSelectedSubSector] = useState<string>("Automobiles");
  const [activeAdvantageTab, setActiveAdvantageTab] = useState<"durability" | "aesthetics" | "hygiene" | "performance">("durability");

  // State to hold dynamic clients
  const [dynamicClients, setDynamicClients] = useState<StatefulClient[]>(() => {
    const initialClients: StatefulClient[] = [];
    CLIENT_LOGOS.forEach((categoryBlock) => {
      categoryBlock.companies.forEach((companyName) => {
        initialClients.push({
          name: companyName,
          category: categoryBlock.category,
        });
      });
    });
    return initialClients;
  });

  // Upload fields state
  const [newClientName, setNewClientName] = useState("");
  const [newClientCategory, setNewClientCategory] = useState("Automobiles");
  const [newClientLogoUrl, setNewClientLogoUrl] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle local image file parsing for upload
  const handleLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setNewClientLogoUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit client profile
  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName.trim()) return;

    const newClient: StatefulClient = {
      name: newClientName,
      category: newClientCategory,
      logoUrl: newClientLogoUrl || undefined,
    };

    setDynamicClients((prev) => [newClient, ...prev]);
    setNewClientName("");
    setNewClientLogoUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  // Filter state for active list view
  const activeClientLogoSet = {
    category: selectedSubSector,
    companies: dynamicClients.filter((c) => c.category === selectedSubSector)
  };

  const categoriesTabs = [
    { label: "Durability & Strength", key: "durability" as const, desc: "Extreme point load structures, wear absorption, and aggregate support.", imageUrl: "/gallery/epoxy_durability.png" },
    { label: "Aesthetics & Reflection", key: "aesthetics" as const, desc: "Seamless textures, glossy light deflection, and clean layout patterns.", imageUrl: "/gallery/epoxy_aesthetics.png" },
    { label: "Hygiene & FDA Compliance", key: "hygiene" as const, desc: "Antimicrobial zero-bacteria transitions compliant with GMP guidelines.", imageUrl: "/gallery/epoxy_hygiene.png" },
    { label: "Smart Value Delivery", key: "performance" as const, desc: "Fast application parameters, minimized downtimes, and active warranties.", imageUrl: "/gallery/epoxy_smart_value.png" }
  ];

  return (
    <section id="why-epoxy" className="py-24 bg-white text-editorial-ink relative border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* SECTION 1: INDUSTRIES WE SERVE */}
        <div id="industries" className="space-y-14">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEF2FF] border border-editorial-border text-[#1669D8] rounded-full text-[10px] font-bold uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5" />
              Sectors of Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light">
              Industries <span className="not-italic font-semibold">We Serve</span>
            </h2>
            <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-semibold">
              Architecting tailored polymer solutions to fulfill health, layout, and safety regulations for key manufacturing facilities.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.id}
                className="w-[160px] md:w-auto flex-none snap-start bg-white border border-editorial-border hover:border-[#1669D8]/40 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 hover:shadow-md transition-all duration-300 relative group flex flex-col md:block items-center text-center md:text-left"
              >
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                  <div className="w-10 h-10 md:w-10 md:h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center border border-editorial-border text-[#1669D8] font-extrabold text-base select-none mx-auto md:mx-0">
                    {ind.iconName === "Apple" && <i className="bi bi-apple text-[18px]"></i>}
                    {ind.iconName === "Car" && <i className="bi bi-car-front-fill text-[18px]"></i>}
                    {ind.iconName === "Cpu" && <i className="bi bi-cpu-fill text-[18px]"></i>}
                    {ind.iconName === "ShoppingBag" && <i className="bi bi-shop text-[18px]"></i>}
                    {ind.iconName === "Warehouse" && <i className="bi bi-buildings-fill text-[18px]"></i>}
                    {ind.iconName === "Hospital" && <i className="bi bi-hospital-fill text-[18px]"></i>}
                  </div>
                  <span className="hidden md:inline-block text-[9px] font-extrabold text-[#1669D8] uppercase tracking-[0.2em] pl-2">KPN Core</span>
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col justify-center w-full">
                  <h3 className="text-[11px] md:text-base font-bold text-editorial-ink group-hover:text-[#1669D8] transition-colors uppercase tracking-tight leading-snug">
                    {ind.name}
                  </h3>
                  <p className="hidden md:block text-xs text-editorial-muted leading-relaxed font-semibold">
                    {ind.description}
                  </p>
                </div>

                <ul className="hidden md:block space-y-2 pt-3.5 border-t border-editorial-border">
                  {ind.requirements.map((req, rid) => (
                    <li key={rid} className="flex items-center gap-2.5 text-[11px] text-editorial-dark-gray font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#1669D8] rounded-full shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* SECTION 2: WHY CHOOSE EPOXY */}
        <div className="space-y-14">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEF2FF] border border-editorial-border text-[#1669D8] rounded-full text-[10px] font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 animate-pulse text-[#1669D8]" />
              Material Benchmark
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light">
              Why Choose <span className="not-italic font-semibold">Epoxy Flooring?</span>
            </h2>
            <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-semibold">
              Analyzing the physical mechanics that validate resin flooring solutions over un-coated concrete.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">

            {/* Category tabs Left */}
            <div className="lg:col-span-4 flex flex-col gap-2.5 justify-center">
              {categoriesTabs.map((ct) => (
                <div key={ct.key} className="flex flex-col">
                  <button
                    onClick={() => setActiveAdvantageTab(ct.key)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 relative group cursor-pointer ${activeAdvantageTab === ct.key
                      ? "bg-black border-black text-white shadow-md scale-[1.01]"
                      : "bg-white hover:bg-[#EEF2FF]/50 border-editorial-border text-editorial-dark-gray"
                      }`}
                  >
                    <div className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${activeAdvantageTab === ct.key ? "text-white" : "text-editorial-ink group-hover:text-[#1669D8]"}`}>
                      {ct.label}
                    </div>
                    <div className={`text-[10px] mt-1 line-clamp-1 font-medium ${activeAdvantageTab === ct.key ? "text-[#EEF2FF]/85" : "text-editorial-muted"}`}>
                      {ct.desc}
                    </div>
                  </button>

                  {/* Mobile Accordion Dropdown */}
                  <div 
                    className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                      activeAdvantageTab === ct.key ? 'max-h-[800px] opacity-100 mt-2.5 mb-1.5' : 'max-h-0 opacity-0 m-0'
                    }`}
                  >
                    <div className="bg-white border border-editorial-border rounded-xl p-5 shadow-sm flex flex-col gap-6">
                      
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-black uppercase tracking-widest font-sans">
                            {ct.label} Metrics
                          </h4>
                          <p className="text-[11px] text-editorial-muted font-semibold leading-relaxed">
                            Corporate specifications validated and completed during layout executions:
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-3 pt-3 border-t border-editorial-border">
                          {EPOXY_ADVANTAGES[ct.key].map((adv, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-[11px] text-editorial-dark-gray font-semibold">
                              <div className="w-4 h-4 rounded-full bg-[#EEF2FF] border border-editorial-border text-[#1669D8] flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
                                ✓
                              </div>
                              <span className="leading-relaxed">{adv}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="w-full h-40 rounded-lg overflow-hidden relative bg-editorial-bg border border-editorial-border">
                        <img
                          src={ct.imageUrl}
                          alt={ct.label}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* List Right (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-8 bg-white border border-editorial-border rounded-xl p-6 shadow-sm overflow-hidden flex-col justify-center">
              <div className="grid grid-cols-2 gap-8 items-center h-full">

                {/* Content Side */}
                <div className="space-y-5 py-2">
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-black uppercase tracking-widest font-sans">
                      {categoriesTabs.find((ct) => ct.key === activeAdvantageTab)?.label} Metrics
                    </h4>
                    <p className="text-xs text-editorial-muted font-semibold leading-relaxed">
                      Corporate specifications validated and completed during layout executions:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 pt-4 border-t border-editorial-border">
                    {EPOXY_ADVANTAGES[activeAdvantageTab].map((adv, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-editorial-dark-gray font-semibold">
                        <div className="w-5 h-5 rounded-full bg-[#EEF2FF] border border-editorial-border text-[#1669D8] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="leading-relaxed">{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full h-48 md:h-full min-h-[220px] rounded-lg overflow-hidden relative bg-editorial-bg border border-editorial-border">
                  <img
                    src={categoriesTabs.find((ct) => ct.key === activeAdvantageTab)?.imageUrl}
                    alt={categoriesTabs.find((ct) => ct.key === activeAdvantageTab)?.label}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                  />
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* SECTION 3: CREDIBILITY */}
        <div className="space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif italic text-editorial-ink font-light">
              Why Leaders <span className="not-italic font-semibold">Choose KPN</span>
            </h2>
            <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-semibold">
              Delivering professional-grade performance and on-time completion based on custom mixing calculations:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_PARTNER_KPN.map((wp, i) => (
              <div
                key={i}
                className="bg-white border border-editorial-border hover:bg-[#EEF2FF]/20 p-5 rounded-xl space-y-2 hover:border-[#1669D8] transition duration-150"
              >
                <div className="flex items-center gap-2 text-xs text-[#1669D8] font-extrabold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#1669D8] shrink-0" />
                  <span>{wp.title}</span>
                </div>
                <p className="text-xs text-editorial-dark-gray font-medium leading-relaxed pl-6">
                  {wp.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div> {/* Close the main max-w-7xl wrapper */}

      {/* SECTION 4: CLIENT CAROUSEL & LIVE UPLOADER (FULL WIDTH EXTRACT) */}
      <div className="w-full mt-24 mb-0">

        <div className="text-center space-y-3 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEF2FF] border border-editorial-border text-[#1669D8] rounded-full text-[10px] font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5 text-[#1669D8]" />
            Enterprise Carousel
          </div>
          <h2 className="text-3xl font-serif italic text-editorial-ink font-light">
            Esteemed <span className="not-italic font-semibold">Corporate Clients</span>
          </h2>
          <p className="text-xs sm:text-sm text-editorial-muted leading-relaxed font-semibold">
            Review our scrolling corporate portfolio of India's major automakers, labs, pharmacies, and logistic hubs.
          </p>
        </div>

        {/* DYNAMIC SCROLLING CAROUSEL MARQUEE - FULL WIDTH */}
        <div className="relative w-full overflow-hidden bg-white py-8 mt-12 hover:pause-animation group cursor-default">

          {/* Background Glows */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee flex gap-4 items-center pl-4 w-max">
            {/* Duplicate contents heavily to allow smooth continuous flow on ultra-wide screens */}
            {[...dynamicClients, ...dynamicClients, ...dynamicClients, ...dynamicClients].map((client, idx) => {
              const initials = client.name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();

              // Hardcoded reliable image URLs for major brands
              const KNOWN_LOGOS: Record<string, string> = {
                "Honda": "https://cdn.worldvectorlogo.com/logos/honda-2.svg",
                "Toyota": "https://cdn.worldvectorlogo.com/logos/toyota.svg",
                "Tata Motors": "https://cdn.worldvectorlogo.com/logos/tata.svg",
                "Mahindra": "https://cdn.worldvectorlogo.com/logos/mahindra.svg",
                "Suzuki": "https://cdn.worldvectorlogo.com/logos/suzuki.svg",
                "Hyundai": "https://cdn.worldvectorlogo.com/logos/hyundai.svg",
                "Hero": "https://cdn.worldvectorlogo.com/logos/hero-1.svg",
                "Eicher": "https://cdn.worldvectorlogo.com/logos/eicher-1.svg",
                "Hindustan Unilever Limited": "https://cdn.worldvectorlogo.com/logos/unilever-1.svg",
                "Cipla": "https://cdn.worldvectorlogo.com/logos/cipla.svg",
                "Patanjali": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Patanjali_Ayurved_logo.svg"
              };

              const tryUrl = client.logoUrl || KNOWN_LOGOS[client.name] || `https://logo.clearbit.com/${client.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;

              return (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex-shrink-0 w-[300px] h-[150px] flex items-center justify-center transition-all duration-300 select-none px-6 group-hover/card:opacity-100"
                >
                  <img
                    src={tryUrl}
                    alt={client.name}
                    className="max-w-[240px] max-h-[100px] object-contain transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-2xl font-black text-editorial-muted tracking-tighter opacity-50 select-none text-center leading-tight">
                    {client.name.toUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[10px] text-editorial-muted text-center mt-6 font-mono relative z-20 transition-opacity opacity-50 group-hover:opacity-100">
            Hover to pause scrolling
          </p>
        </div>
      </div>


    </section>
  );
}
