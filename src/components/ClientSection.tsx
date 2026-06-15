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
    { label: "Durability & Strength", key: "durability" as const, desc: "Extreme point load structures, wear absorption, and aggregate support." },
    { label: "Aesthetics & Reflection", key: "aesthetics" as const, desc: "Seamless textures, glossy light deflection, and clean layout patterns." },
    { label: "Hygiene & FDA Compliance", key: "hygiene" as const, desc: "Antimicrobial zero-bacteria transitions compliant with GMP guidelines." },
    { label: "Smart Value Delivery", key: "performance" as const, desc: "Fast application parameters, minimized downtimes, and active warranties." }
  ];

  return (
    <section id="why-epoxy" className="py-24 bg-editorial-cream text-editorial-ink relative border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* SECTION 1: INDUSTRIES WE SERVE */}
        <div id="industries" className="space-y-14">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEF2FF] border border-editorial-border text-[#7C3AED] rounded-full text-[10px] font-bold uppercase tracking-widest">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.id}
                className="bg-white border border-editorial-border hover:border-[#7C3AED]/40 rounded-xl p-6 space-y-4 hover:shadow-md transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center border border-editorial-border text-[#7C3AED] font-extrabold text-[#7C3AED] text-base select-none">
                    {ind.iconName === "Apple" && <span className="text-lg">🍎</span>}
                    {ind.iconName === "Car" && <span className="text-lg">🚗</span>}
                    {ind.iconName === "Cpu" && <span className="text-lg">💻</span>}
                    {ind.iconName === "ShoppingBag" && <span className="text-lg">🛒</span>}
                    {ind.iconName === "Warehouse" && <span className="text-lg">🏢</span>}
                    {ind.iconName === "Hospital" && <span className="text-lg">🏥</span>}
                  </div>
                  <span className="text-[9px] font-extrabold text-[#1669D8] uppercase tracking-[0.2em] pl-2">KPN Core</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-editorial-ink group-hover:text-[#7C3AED] transition-colors uppercase tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-editorial-muted leading-relaxed font-semibold">
                    {ind.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-3.5 border-t border-editorial-border">
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEF2FF] border border-editorial-border text-[#7C3AED] rounded-full text-[10px] font-bold uppercase tracking-widest">
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
                <button
                  key={ct.key}
                  onClick={() => setActiveAdvantageTab(ct.key)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                    activeAdvantageTab === ct.key
                      ? "bg-black border-black text-white shadow-md scale-[1.01]"
                      : "bg-white hover:bg-[#EEF2FF]/50 border-editorial-border text-editorial-dark-gray"
                  }`}
                >
                  <div className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${activeAdvantageTab === ct.key ? "text-white" : "text-editorial-ink group-hover:text-[#7C3AED]"}`}>
                    {ct.label}
                  </div>
                  <div className={`text-[10px] mt-1 line-clamp-1 font-medium ${activeAdvantageTab === ct.key ? "text-[#EEF2FF]/85" : "text-editorial-muted"}`}>
                    {ct.desc}
                  </div>
                </button>
              ))}
            </div>

            {/* List Right */}
            <div className="lg:col-span-8 bg-white border border-editorial-border rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-center">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-black uppercase tracking-widest font-sans">
                    {categoriesTabs.find((ct) => ct.key === activeAdvantageTab)?.label} Metrics
                  </h4>
                  <p className="text-[11px] text-editorial-muted font-semibold leading-relaxed">
                    Corporate specifications validated and completed during layout executions:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-editorial-border">
                  {EPOXY_ADVANTAGES[activeAdvantageTab].map((adv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-editorial-dark-gray font-semibold">
                      <div className="w-5 h-5 rounded-full bg-[#EEF2FF] border border-editorial-border text-[#7C3AED] flex items-center justify-center font-bold text-[10px]">
                        ✓
                      </div>
                      <span>{adv}</span>
                    </div>
                  ))}
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
                className="bg-white border border-editorial-border hover:bg-[#EEF2FF]/20 p-5 rounded-xl space-y-2 hover:border-[#7C3AED] transition duration-150"
              >
                <div className="flex items-center gap-2 text-xs text-[#7C3AED] font-extrabold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#7C3AED] shrink-0" />
                  <span>{wp.title}</span>
                </div>
                <p className="text-xs text-editorial-dark-gray font-medium leading-relaxed pl-6">
                  {wp.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* SECTION 4: CLIENT CAROUSEL & LIVE UPLOADER */}
        <div className="space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEF2FF] border border-editorial-border text-[#7C3AED] rounded-full text-[10px] font-bold uppercase tracking-widest">
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

          {/* DYNAMIC SCROLLING CAROUSEL MARQUEE */}
          <div className="relative w-full overflow-hidden bg-black py-8 rounded-2xl shadow-xl border border-neutral-800">
            
            {/* Background Glows */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="text-center mb-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#1669D8] px-3 py-1 rounded bg-[#1669D8]/10 border border-[#1669D8]/25">
                ✦ LIVE REGISTERED CLIENT FLOW ✦
              </span>
            </div>

            {/* Marquee Track */}
            <div className="flex gap-4 items-center overflow-x-auto no-scrollbar scroll-smooth py-2 px-6">
              {/* Duplicate contents to allow wide scrolling flow */}
              {[...dynamicClients, ...dynamicClients].map((client, idx) => {
                const initials = client.name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
                return (
                  <div
                    key={`${client.name}-${idx}`}
                    className="flex-shrink-0 min-w-[200px] bg-neutral-900 border border-neutral-850 hover:border-[#7C3AED] rounded-xl p-4 flex items-center gap-3 transition-all duration-300 group select-none"
                  >
                    {client.logoUrl ? (
                      <img
                        src={client.logoUrl}
                        alt={client.name}
                        className="w-10 h-10 object-cover rounded-lg border border-neutral-750"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#1669D8] text-white flex items-center justify-center font-bold text-xs select-none">
                        {initials || "KPN"}
                      </div>
                    )}
                    <div className="text-left">
                      <div className="text-[9px] text-[#1669D8] font-bold uppercase tracking-wider">{client.category}</div>
                      <div className="text-xs text-white font-semibold uppercase tracking-tight truncate max-w-[140px]">{client.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-3 font-mono">
              ← Left click and drag or swipe to scroll through our dynamic roster of {dynamicClients.length} verified companies →
            </p>
          </div>

          {/* FILTER VIEW & DYNAMIC UPLOADER PORTLET CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Filterable Table / List Column (Cols 7) */}
            <div className="lg:col-span-7 bg-white border border-editorial-border rounded-xl p-6 space-y-6">
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-editorial-border pb-4">
                <h3 className="text-base font-bold text-black uppercase tracking-tight">
                  Verify Cooperation Registry
                </h3>
                
                {/* Category selectors */}
                <select
                  value={selectedSubSector}
                  onChange={(e) => setSelectedSubSector(e.target.value)}
                  className="bg-editorial-cream border border-editorial-border rounded-lg text-xs font-semibold px-3 py-2 text-editorial-ink focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                >
                  {["Automobiles", "Food, Pharma & Healthcare", "Chemical & Fertilizer", "Auto Engine Parts & Engineering"].map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Grid of clients registered in selected tab */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {activeClientLogoSet.companies.length > 0 ? (
                  activeClientLogoSet.companies.map((client, idx) => {
                    const initials = client.name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
                    return (
                      <div
                        key={idx}
                        className="bg-editorial-cream border border-editorial-border rounded-lg p-3 hover:bg-white hover:border-[#7C3AED] transition-all duration-150 flex items-center gap-2.5"
                      >
                        {client.logoUrl ? (
                          <img src={client.logoUrl} alt={client.name} className="w-8 h-8 rounded object-cover" />
                        ) : (
                          <div className="w-8 h-8 rounded bg-[#7C3AED] text-white flex items-center justify-center font-mono font-bold text-[10px]">
                            {initials || "KP"}
                          </div>
                        )}
                        <div className="text-left text-xs text-editorial-ink font-bold uppercase truncate tracking-tight">
                          {client.name}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-full py-8 text-center text-xs text-editorial-muted">
                    No custom uploads for this category yet. Upload one below!
                  </div>
                )}
              </div>
            </div>

            {/* Client Brand Upload Form (Cols 5) */}
            <div className="lg:col-span-5 bg-white border border-editorial-border rounded-xl p-6 space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-widest block">
                  Interactive Sandbox Tool
                </span>
                <h3 className="text-base font-bold text-black uppercase tracking-tight">
                  Upload Corporate Partner
                </h3>
                <p className="text-xs text-editorial-muted">
                  Simulate adding your own client's corporate signature or logo to test our live rendering speed.
                </p>
              </div>

              <form onSubmit={handleAddClient} className="space-y-4">
                
                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-editorial-muted">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maruti Suzuki, Pfizer India, etc."
                    value={newClientName}
                    onChange={(e) => setNewClientName(e.target.value)}
                    className="w-full bg-editorial-cream border border-editorial-border rounded-lg text-xs p-3 text-editorial-ink focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                  />
                </div>

                {/* Category Selection */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-editorial-muted">
                    Industrial Sector
                  </label>
                  <select
                    value={newClientCategory}
                    onChange={(e) => setNewClientCategory(e.target.value)}
                    className="w-full bg-editorial-cream border border-editorial-border rounded-lg text-xs p-3 text-editorial-ink focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
                  >
                    <option value="Automobiles">Automobiles Sector</option>
                    <option value="Food, Pharma & Healthcare">Food, Pharma & Healthcare</option>
                    <option value="Chemical & Fertilizer">Chemical & Fertilizer</option>
                    <option value="Auto Engine Parts & Engineering">Auto Engineering</option>
                  </select>
                </div>

                {/* Logo Image File Picker */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-editorial-muted block">
                    Upload Company Icon / Logo (Optional)
                  </label>
                  
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 bg-editorial-cream hover:bg-[#EEF2FF] text-xs font-semibold px-4 py-2.5 rounded-lg border border-editorial-border text-editorial-ink cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-[#7C3AED]" />
                      Browse Image...
                    </button>
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleLogoFileChange}
                      className="hidden"
                    />

                    {newClientLogoUrl ? (
                      <div className="flex items-center gap-1.5 bg-[#EEF2FF] text-[#7C3AED] px-2.5 py-1 text-[11px] font-bold rounded">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Ready</span>
                      </div>
                    ) : (
                      <span className="text-[10px] text-editorial-muted italic">Defaulting to color initials</span>
                    )}
                  </div>
                </div>

                {/* Success Alert */}
                {uploadSuccess && (
                  <div className="flex items-center gap-2 text-xs bg-emerald-50 text-emerald-800 p-3 rounded-lg border border-emerald-200">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Success! Appended instantly to scrolling flow.</span>
                  </div>
                )}

                {/* CTA Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black hover:bg-[#7C3AED] text-white font-bold py-3 px-5 rounded-lg text-xs uppercase tracking-widest transition-all duration-300 active:scale-[0.98] cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Append to Carousel
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
