import React from "react";
import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section className="w-full border-t border-editorial-border bg-editorial-bg relative">
      <div className="w-full h-[450px] relative overflow-hidden bg-gray-100">
        {/* Interactive Google Map centered on India */}
        <iframe
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Okhla%20Phase%20II,%20New%20Delhi+(KPN%20Enterprises)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-full h-full object-cover"
          title="KPN Enterprises Office Location"
        ></iframe>
        
        {/* Aesthetic Overlay Card */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-white p-6 rounded-xl shadow-2xl border border-editorial-border max-w-sm z-10 pointer-events-none">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center shrink-0">
               <MapPin className="w-5 h-5 text-editorial-accent" />
            </div>
            <div>
              <h3 className="font-bold text-editorial-ink text-lg">Pan-India Presence</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">Nationwide Service</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
            Operating from our headquarters in Delhi-NCR, we mobilize our specialized industrial flooring teams to facilities across the entire Indian subcontinent.
          </p>
        </div>
      </div>
    </section>
  );
}
