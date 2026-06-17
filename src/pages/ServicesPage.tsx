import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { PRODUCT_CATALOG, SOLUTIONS_MATRIX, EPOXY_ADVANTAGES } from "../data";
import { FadeIn } from "../components/ui/FadeIn";
import SolutionsMatrix from "../components/SolutionsMatrix";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { ShieldFill, Stars, DropletFill, LightningFill } from "react-bootstrap-icons";

export default function ServicesPage() {
  const [activeProductId, setActiveProductId] = useState(PRODUCT_CATALOG[0].id);
  const activeProduct = PRODUCT_CATALOG.find(p => p.id === activeProductId) || PRODUCT_CATALOG[0];

  return (
    <>
      <PageHero 
        title={<>Our <span className="not-italic font-semibold">Services & Solutions</span></>}
        subtitle="Comprehensive industrial flooring and coating solutions tailored to your industry needs"
        imageSrc="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Product Catalog */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-white border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-serif italic text-editorial-ink font-light">
                Product <span className="not-italic font-semibold">Catalog</span>
              </h2>
              <p className="text-editorial-dark-gray max-w-2xl mx-auto">Choose from our comprehensive range of industrial flooring solutions</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product List */}
              <div className="space-y-3">
                {PRODUCT_CATALOG.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveProductId(product.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      activeProductId === product.id
                        ? "border-editorial-accent bg-editorial-accent/10"
                        : "border-editorial-border hover:border-editorial-accent bg-white"
                    }`}
                  >
                    <h4 className={`font-bold text-sm uppercase tracking-widest ${
                      activeProductId === product.id ? "text-editorial-accent" : "text-editorial-ink"
                    }`}>
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">{product.subtitle}</p>
                  </button>
                ))}
              </div>

              {/* Product Details */}
              <div className="bg-editorial-bg rounded-2xl p-8 border border-editorial-border space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-editorial-ink mb-2">{activeProduct.name}</h3>
                  <p className="text-sm text-editorial-accent font-semibold mb-4">{activeProduct.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{activeProduct.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-editorial-ink mb-4">Key Benefits</h4>
                  <ul className="space-y-2">
                    {activeProduct.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-editorial-accent rounded-full mt-1.5 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-editorial-ink mb-3">Ideal For</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProduct.industries.map((industry, idx) => (
                      <span key={idx} className="bg-white border border-editorial-border rounded-full text-xs px-3 py-1 text-gray-600">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex gap-2 bg-editorial-ink hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-colors uppercase text-xs tracking-widest items-center mt-4"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Epoxy Advantages */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-editorial-bg border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-serif italic text-editorial-ink font-light">
                Why Choose Our <span className="not-italic font-semibold">Solutions</span>
              </h2>
              <p className="text-editorial-dark-gray max-w-2xl mx-auto">Comprehensive benefits across durability, aesthetics, hygiene, and performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Durability", icon: ShieldFill, iconColor: "text-blue-500", items: EPOXY_ADVANTAGES.durability },
                { title: "Aesthetics", icon: Stars, iconColor: "text-amber-500", items: EPOXY_ADVANTAGES.aesthetics },
                { title: "Hygiene", icon: DropletFill, iconColor: "text-pink-400", items: EPOXY_ADVANTAGES.hygiene },
                { title: "Performance", icon: LightningFill, iconColor: "text-orange-500", items: EPOXY_ADVANTAGES.performance }
              ].map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 border border-editorial-border hover:shadow-lg transition-shadow">
                    <div className="mb-6 flex">
                      <Icon className={`w-8 h-8 ${category.iconColor} drop-shadow-sm`} />
                    </div>
                    <h3 className="text-xl font-bold text-editorial-ink mb-6">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.slice(0, 5).map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-editorial-accent font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Solutions Matrix */}
      <FadeIn direction="up" delay={0.1}>
        <SolutionsMatrix />
      </FadeIn>

      {/* CTA Section */}
      <FadeIn direction="up" delay={0.1}>
        <section className="py-24 bg-editorial-ink text-white border-t border-editorial-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl font-serif italic font-light">
              Ready to Transform Your <span className="not-italic font-semibold">Space?</span>
            </h2>
            <p className="text-lg text-gray-300">Contact our team today for a professional consultation and customized quote</p>
            <Link
              to="/contact"
              className="inline-flex gap-2 bg-white hover:bg-gray-100 text-editorial-ink font-bold py-4 px-8 rounded-lg transition-colors uppercase text-sm tracking-widest items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
