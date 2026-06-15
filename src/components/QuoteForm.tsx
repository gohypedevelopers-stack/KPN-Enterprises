import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2, Sparkles, CheckCircle2, ShieldEllipsis, AlertCircle } from "lucide-react";
import { REPRESENTATIVE_CONTACT } from "../data";
import { InquiryFormState } from "../types";

export default function QuoteForm() {
  const [form, setForm] = useState<InquiryFormState>({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: "Automotive & Heavy Assembly",
    area: "",
    description: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<any | null>(null);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const industries = [
    "Automotive & Heavy Assembly",
    "Pharmaceutical Cleanrooms",
    "Food processing / Diaries",
    "IT Parks & Telecommunications Labs",
    "Warehouses / Logistics Parks",
    "Hospital & Operation Theaters",
    "Substations / Electrical rooms",
    "Roof / Basements Wet zones",
    "Other Commercial Bays"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setErrorStatus("Name and active contact phone number are required details.");
      return;
    }

    setErrorStatus(null);
    setIsLoading(true);

    try {
      // Post to our full stack API route built in server.ts
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        throw new Error("Unable to transmit inquiry. Please verify server connectivity.");
      }

      const data = await res.json();
      setSubmissionResult(data);
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err.message || "An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetForm = () => {
    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      industry: "Automotive & Heavy Assembly",
      area: "",
      description: ""
    });
    setSubmissionResult(null);
    setErrorStatus(null);
  };

  return (
    <section id="get-quote" className="py-24 bg-editorial-bg border-t border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Intro */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-editorial-beige border border-editorial-border text-editorial-accent rounded-full text-[10px] font-bold uppercase tracking-widest">
            <ShieldEllipsis className="w-3.5 h-3.5" />
            Quick Site Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light">
            Schedule a Free <span className="not-italic font-semibold">Delhi/NCR Site Inspection</span>
          </h2>
          <p className="text-xs sm:text-sm text-editorial-dark-gray max-w-2xl mx-auto leading-relaxed font-semibold">
            Provide your facility parameters below. Our chemists will configure material metrics matching your payload parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Active form / Result panel (cols: 7) */}
          <div className="lg:col-span-7 bg-white border border-editorial-border rounded-xl overflow-hidden shadow-sm p-6 sm:p-8 flex flex-col justify-center">
            
            {submissionResult ? (
              // Success result layout with smart recommendation calculations
              <div className="space-y-6 animate-fade-in text-editorial-ink">
                <div className="flex items-center gap-3 text-emerald-600">
                  <CheckCircle2 className="w-10 h-10 stroke-1 text-editorial-accent" />
                  <div>
                    <h3 className="text-lg font-serif italic text-editorial-ink leading-none">Inquiry Registered</h3>
                    <p className="text-[10px] text-editorial-muted mt-1 font-mono tracking-wider">REF ID: {submissionResult.refId}</p>
                  </div>
                </div>

                <div className="bg-editorial-cream border border-editorial-border rounded-lg p-5 space-y-3">
                  <div className="text-[10px] text-editorial-accent font-extrabold uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Layout Diagnosis
                  </div>
                  <div>
                    <div className="text-sm font-bold text-editorial-ink uppercase tracking-tight">{submissionResult.recommendation.solution}</div>
                    <p className="text-xs text-editorial-dark-gray mt-1 leading-relaxed">
                      {submissionResult.recommendation.details}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-editorial-ink uppercase tracking-widest">Next Operational Steps:</h4>
                  <ul className="space-y-2.5 pl-0">
                    {submissionResult.recommendation.nextSteps.map((step: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-editorial-dark-gray font-semibold">
                        <span className="w-5 h-5 bg-editorial-beige text-editorial-ink border border-editorial-border font-bold text-[10px] rounded-full shrink-0 flex items-center justify-center font-mono">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleResetForm}
                  className="w-full sm:w-auto bg-editorial-ink hover:bg-editorial-accent text-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-widest transition border border-editorial-ink"
                >
                  Submit another site quote draft
                </button>
              </div>
            ) : (
              // Lead Intake Form
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-editorial-muted uppercase tracking-widest">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Nitin Kumar"
                      className="w-full bg-editorial-cream border border-editorial-border hover:border-editorial-muted focus:border-editorial-accent focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-editorial-ink placeholder-editorial-muted font-medium"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-editorial-muted uppercase tracking-widest">Organization & Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. Acme Industries Ltd."
                      className="w-full bg-editorial-cream border border-editorial-border hover:border-editorial-muted focus:border-editorial-accent focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-editorial-ink placeholder-editorial-muted font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-editorial-muted uppercase tracking-widest">Contact Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +91 9318351774"
                      className="w-full bg-editorial-cream border border-editorial-border hover:border-editorial-muted focus:border-editorial-accent focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-editorial-ink placeholder-editorial-muted font-medium"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-editorial-muted uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. contact@yourfirm.com"
                      className="w-full bg-editorial-cream border border-editorial-border hover:border-editorial-muted focus:border-editorial-accent focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-editorial-ink placeholder-editorial-muted font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-editorial-muted uppercase tracking-widest">Sector Segment *</label>
                    <select
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full bg-editorial-cream border border-editorial-border hover:border-editorial-muted focus:border-editorial-accent focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-editorial-ink cursor-pointer font-bold"
                    >
                      {industries.map((ind, i) => (
                        <option key={i} value={ind} className="bg-white text-editorial-ink font-semibold">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-editorial-muted uppercase tracking-widest">Estimate Area (Sq. Ft.)</label>
                    <input
                      type="text"
                      value={form.area}
                      onChange={(e) => setForm({ ...form, area: e.target.value })}
                      placeholder="e.g., 10,000 to 25,000"
                      className="w-full bg-editorial-cream border border-editorial-border hover:border-editorial-muted focus:border-editorial-accent focus:outline-none rounded-lg px-3.5 py-2.5 text-xs text-editorial-ink placeholder-editorial-muted font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold text-editorial-muted uppercase tracking-widest">Subfloor Conditions / Exposures</label>
                  <textarea
                    rows={3}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Provide details: New concrete vs damaged older floorings, temperature extremes during washdowns, continuous acids, etc."
                    className="w-full bg-editorial-cream border border-editorial-border hover:border-editorial-muted focus:border-editorial-accent focus:outline-none rounded-lg p-3.5 text-xs text-editorial-ink placeholder-editorial-muted font-medium resize-none h-20"
                  />
                </div>

                {errorStatus && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg flex items-center gap-2 font-semibold uppercase tracking-wide">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                    <span>{errorStatus}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-editorial-ink hover:bg-editorial-accent disabled:bg-editorial-muted text-white font-bold py-3.5 rounded-full text-xs uppercase tracking-widest shadow-sm transition-all active:scale-[0.98] cursor-pointer flex justify-center items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting secure parameters...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-editorial-beige" />
                      <span>Transmit Layout Parameters</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Business card / representative coordinator detail panel (cols: 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* The business card with deep black-editorial layout matching Pages cover style backing */}
            <div className="relative bg-editorial-ink border border-editorial-border rounded-xl shadow-lg p-6 sm:p-8 space-y-6 overflow-hidden flex flex-col justify-between text-white">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full filter blur-xl pointer-events-none" />

              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="text-[9px] text-[#FAF9F6] font-bold uppercase tracking-[0.25em] leading-none opacity-80">
                    Certified Specialist Coordinator
                  </div>
                  <h3 className="text-2xl font-serif italic text-white font-light">
                    {REPRESENTATIVE_CONTACT.name}
                  </h3>
                  <p className="text-xs text-[#FAF9F6]/60 font-medium">
                    Owner & Coordinator | KPN Enterprises
                  </p>
                </div>

                <div className="w-10 h-10 bg-white/10 border border-white/20 rounded flex items-center justify-center text-xs font-black text-white font-serif italic">
                  KPN
                </div>
              </div>

              {/* Coordinates block exact to Card OCR */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                
                <a
                  href={`tel:${REPRESENTATIVE_CONTACT.phones[0]}`}
                  className="flex items-center gap-3.5 group text-xs text-editorial-cream hover:text-white transition"
                >
                  <div className="w-8.5 h-8.5 rounded-full bg-white/5 group-hover:bg-white/10 hover:border-white/30 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-editorial-accent" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest leading-none">Primary Direct Office</div>
                    <div className="font-mono text-[11px] font-semibold">{REPRESENTATIVE_CONTACT.phones[0]}</div>
                  </div>
                </a>

                <a
                  href={`tel:${REPRESENTATIVE_CONTACT.phones[1]}`}
                  className="flex items-center gap-3.5 group text-xs text-editorial-cream hover:text-white transition"
                >
                  <div className="w-8.5 h-8.5 rounded-full bg-white/5 group-hover:bg-white/10 hover:border-white/30 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-editorial-accent" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest leading-none">WhatsApp / Estimations desk</div>
                    <div className="font-mono text-[11px] font-semibold">{REPRESENTATIVE_CONTACT.phones[1]}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${REPRESENTATIVE_CONTACT.email}`}
                  className="flex items-center gap-3.5 group text-xs text-editorial-cream hover:text-white transition"
                >
                  <div className="w-8.5 h-8.5 rounded-full bg-white/5 group-hover:bg-white/10 hover:border-white/30 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-editorial-accent" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest leading-none">Corporate Mailbox</div>
                    <div className="font-mono text-[11px] font-semibold">{REPRESENTATIVE_CONTACT.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 text-xs text-editorial-cream">
                  <div className="w-8.5 h-8.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-editorial-accent" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest leading-none">Corporate HQ Address</div>
                    <div className="leading-relaxed text-[11px] font-semibold text-[#FAF9F6]/80">{REPRESENTATIVE_CONTACT.address}</div>
                  </div>
                </div>

              </div>

              {/* Bottom tag validating credibility */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[9px] text-[#FAF9F6]/40 uppercase tracking-widest font-bold">
                <span>GST Registered Contractor</span>
                <span>PAN India Division</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
