import React from "react";
import { Check, Award, Users, Target } from "lucide-react";
import { ABOUT_TEXT, DOMAIN_EXPERTISE, COMPOSITION_DATA, WHY_PARTNER_KPN, REPRESENTATIVE_CONTACT } from "../data";
import { FadeIn } from "../components/ui/FadeIn";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title={<>About <span className="not-italic font-semibold">KPN Enterprises</span></>}
        subtitle="Delhi's premier industrial flooring solutions provider since establishment"
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
      />


      {/* Core Company Story */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-white border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div className="relative overflow-hidden h-[450px] rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800"
                  alt="KPN Enterprises facility"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-editorial-accent uppercase tracking-widest mb-4">
                    Our Foundation
                  </h3>
                  <h2 className="text-4xl font-serif italic text-editorial-ink font-light mb-6">
                    Quality Industrial <span className="not-italic font-semibold">Flooring Solutions</span>
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {ABOUT_TEXT}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  {[
                    { label: "Years of Experience", value: "15+" },
                    { label: "Projects Completed", value: "500+" },
                    { label: "Expert Team", value: "50+" },
                    { label: "Client Satisfaction", value: "99%" }
                  ].map((stat, idx) => (
                    <div key={idx} className="border border-editorial-border rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-editorial-ink">{stat.value}</p>
                      <p className="text-xs font-bold text-editorial-dark-gray uppercase tracking-widest mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Domain Expertise */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-editorial-bg border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-sm font-bold text-editorial-accent uppercase tracking-widest mb-4">
                    Our Strength
                  </h3>
                  <h2 className="text-4xl font-serif italic text-editorial-ink font-light mb-6">
                    Domain <span className="not-italic font-semibold">Expertise</span>
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {DOMAIN_EXPERTISE}
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-bold text-editorial-ink uppercase text-xs tracking-widest">Our Team Composition</h4>
                  {COMPOSITION_DATA.map((role, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-editorial-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="relative overflow-hidden h-[450px] rounded-2xl shadow-lg order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  alt="Expert team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Why Partner With KPN */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-white border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-serif italic text-editorial-ink font-light">
                Why Partner With <span className="not-italic font-semibold">KPN Enterprises</span>
              </h2>
              <p className="text-editorial-dark-gray max-w-2xl mx-auto">We deliver comprehensive industrial flooring solutions backed by expertise and dedication</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {WHY_PARTNER_KPN.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-editorial-bg rounded-xl p-8 border border-editorial-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-editorial-ink rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-editorial-ink mb-3">{reason.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Company Values */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-editorial-ink text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Award, label: "Quality First", desc: "Uncompromising standards in every project" },
                { icon: Target, label: "On-Time Delivery", desc: "Strict scheduling for minimal downtime" },
                { icon: Users, label: "Expert Team", desc: "Skilled professionals with proven track record" },
                { icon: Check, label: "Customer Focus", desc: "Transparent communication and support" }
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="space-y-4">
                    <Icon className="w-12 h-12 mx-auto text-editorial-accent" />
                    <h3 className="font-bold text-lg">{value.label}</h3>
                    <p className="text-sm text-gray-300">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Contact Section */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-white border-t border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif italic text-editorial-ink font-light mb-6">
                    Get In <span className="not-italic font-semibold">Touch</span>
                  </h2>
                  <p className="text-gray-600 mb-8">Ready to transform your industrial space? Contact our team today for a consultation.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-editorial-ink uppercase text-xs tracking-widest mb-2">Direct Contact</h4>
                    <p className="text-editorial-accent font-semibold text-lg">{REPRESENTATIVE_CONTACT.phones[0]}</p>
                    <p className="text-gray-600 text-sm mt-1">{REPRESENTATIVE_CONTACT.phones[1]}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-editorial-ink uppercase text-xs tracking-widest mb-2">Email</h4>
                    <a href={`mailto:${REPRESENTATIVE_CONTACT.email}`} className="text-editorial-accent hover:text-editorial-ink transition-colors">
                      {REPRESENTATIVE_CONTACT.email}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-bold text-editorial-ink uppercase text-xs tracking-widest mb-2">Office Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{REPRESENTATIVE_CONTACT.address}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-block bg-editorial-ink hover:bg-gray-900 text-white font-bold py-3 px-6 rounded transition-colors uppercase text-xs tracking-widest"
                >
                  Request a Quote
                </Link>
              </div>

              {/* Contact Form */}
              <div className="bg-editorial-bg rounded-2xl p-8 border border-editorial-border">
                <form className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full border border-editorial-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-editorial-accent" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" className="w-full border border-editorial-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-editorial-accent" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">Phone</label>
                    <input type="tel" className="w-full border border-editorial-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-editorial-accent" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">Project Details</label>
                    <textarea rows={4} className="w-full border border-editorial-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-editorial-accent resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-editorial-ink hover:bg-gray-900 text-white font-bold py-3 rounded-lg transition-colors uppercase text-xs tracking-widest">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
