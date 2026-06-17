import React, { useState } from "react";
import { Clock, Send } from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import PageHero from "../components/PageHero";
import OwnerCard from "../components/OwnerCard";
import MapSection from "../components/MapSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "general",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", projectType: "general", message: "" });
    }, 3000);
  };

  return (
    <>
      <PageHero 
        title={<>Get In <span className="not-italic font-semibold">Touch</span></>}
        subtitle="We're here to help. Reach out to discuss your industrial flooring needs."
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Main Contact Section */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-editorial-bg border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Contact Info & Owner Card */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light mb-6">
                    Direct <span className="not-italic font-semibold">Connect</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Have questions about our industrial flooring solutions? Reach out directly using the details below or fill out our inquiry form.
                  </p>
                </div>

                <div className="w-full">
                  <OwnerCard />
                </div>

                {/* Business Hours */}
                <div className="bg-white border border-editorial-border rounded-xl p-6 flex items-start gap-4 shadow-sm">
                  <Clock className="w-6 h-6 text-editorial-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest text-editorial-ink mb-2">Business Hours</h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      Mon - Fri: 9:00 AM - 6:00 PM<br/>
                      Sat: 10:00 AM - 4:00 PM<br/>
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-10 border border-editorial-border shadow-xl h-full flex flex-col">
                  
                  <div className="mb-8">
                     <h3 className="text-2xl font-bold text-editorial-ink mb-2">Send an Inquiry</h3>
                     <p className="text-sm text-gray-500 font-medium">Fill out the form below to receive a customized quote or professional consultation within 24 hours.</p>
                  </div>

                  {submitted ? (
                    <div className="flex-1 flex items-center justify-center min-h-[400px]">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-100">
                          <Send className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-editorial-ink">Inquiry Sent Successfully!</h3>
                        <p className="text-gray-600 text-sm max-w-xs mx-auto">We've received your message and our technical team will be in touch shortly.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6 flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-editorial-border bg-gray-50 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-editorial-accent transition-all"
                            placeholder="Your full name"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-editorial-border bg-gray-50 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-editorial-accent transition-all"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-editorial-border bg-gray-50 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-editorial-accent transition-all"
                            placeholder="your@email.com"
                          />
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full border border-editorial-border bg-gray-50 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-editorial-accent transition-all"
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      {/* Project Type */}
                      <div>
                        <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">
                          Project Requirement
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full border border-editorial-border bg-gray-50 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-editorial-accent transition-all"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="epoxy">Epoxy Flooring</option>
                          <option value="esd">ESD / Antistatic Solution</option>
                          <option value="cleanroom">Cleanroom Coating</option>
                          <option value="pu">PU Screed System</option>
                          <option value="repair">Maintenance / Repair</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-editorial-ink uppercase tracking-widest mb-2">
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full border border-editorial-border bg-gray-50 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-editorial-accent transition-all resize-none"
                          placeholder="Please provide details about area size, industry, and specific flooring needs..."
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-editorial-accent hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 mt-4"
                      >
                        Submit Request
                        <Send className="w-4 h-4" />
                      </button>

                      <p className="text-[11px] text-gray-500 text-center font-medium">
                        * Required fields. We respect your privacy and will never spam your inbox.
                      </p>
                    </div>
                  )}
                </form>
              </div>

            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <MapSection />
      </FadeIn>
    </>
  );
}
