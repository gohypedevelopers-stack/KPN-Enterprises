import React from "react";
import { Check, Award, Users, Target, ArrowRight } from "lucide-react";
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
      {/* CORE ABOUT COMPANY PANEL */}
      <FadeIn direction="up">
        <section id="about" className="py-24 bg-white text-editorial-ink relative border-b border-editorial-border">
          <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-24 space-y-24">
            {/* Top Block: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Image */}
              <div className="relative overflow-hidden h-[400px] lg:h-[500px] rounded-2xl shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800"
                  alt="Professional facility"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Text */}
              <div className="space-y-6">
                <div className="text-sm font-bold text-editorial-accent uppercase tracking-widest">
                  Delhi NCR Standard Class Group
                </div>
                <h2 className="text-4xl sm:text-5xl font-serif italic text-editorial-ink font-light">
                  About <span className="not-italic font-semibold">KPN Enterprises</span>
                </h2>
                <div className="font-bold text-sm sm:text-base text-gray-800">
                  Resistant to heat, organic acids, bacteria, and slips. Prioritize high durability, strict costings, and timely execution.
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {ABOUT_TEXT}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex bg-[#1669D8] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded items-center justify-center gap-2 uppercase text-xs tracking-wider transition-colors mt-8"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bottom Block: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left Text */}
              <div className="space-y-8 lg:pr-8">
                <h2 className="text-4xl sm:text-5xl font-serif italic text-editorial-ink font-light">
                  Domain <span className="not-italic font-semibold">Expertise</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {DOMAIN_EXPERTISE}
                </p>

                <ul className="space-y-4 pt-2">
                  {COMPOSITION_DATA.map((role, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-800 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-700">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Image */}
              <div className="relative overflow-hidden h-[400px] lg:h-[500px] rounded-2xl shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  alt="Domain expertise"
                  className="w-full h-full object-cover"
                />
              </div>
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




    </>
  );
}
