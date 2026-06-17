import React from "react";
import { ArrowRight, Cog, Zap, Users } from "lucide-react";
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

      {/* 1. Our Story */}
      <FadeIn direction="up">
        <section id="story" className="py-24 bg-white text-editorial-ink relative border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Image */}
              <div className="relative overflow-hidden h-[400px] lg:h-[500px] rounded-2xl shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800"
                  alt="Industrial Flooring Construction"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-editorial-ink/10" />
              </div>

              {/* Right Text */}
              <div className="space-y-6">
                <div className="text-xs font-bold text-[#1669D8] uppercase tracking-[0.25em]">
                  Part 01
                </div>
                <h2 className="text-4xl sm:text-5xl font-serif italic text-editorial-ink font-light">
                  Our <span className="not-italic font-semibold">Story</span>
                </h2>
                <div className="w-12 h-1 bg-[#1669D8]" />
                <p className="text-sm sm:text-base text-editorial-dark-gray leading-relaxed font-semibold">
                  Delhi's KPN Enterprises has been offering premium industrial epoxy, ESD, PU, and waterproof floor-wall coatings. These long-lasting solutions are resistant to heat, chemicals, bacteria, and slips.
                </p>
                <p className="text-sm sm:text-base text-editorial-dark-gray leading-relaxed font-medium">
                  We prioritise quality, cost, and timely delivery under the direction of skilled experts. Even the hardest floors in the country are completed flawlessly by our crew using the newest equipment. We collaborate with clients to fulfil particular requirements while guaranteeing quality in each and every project.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 2. Journey */}
      <FadeIn direction="up" delay={0.1}>
        <section id="journey" className="py-24 bg-editorial-bg text-editorial-ink relative border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Text */}
              <div className="space-y-6 lg:pr-8 order-2 lg:order-1">
                <div className="text-xs font-bold text-[#1669D8] uppercase tracking-[0.25em]">
                  Part 02
                </div>
                <h2 className="text-4xl sm:text-5xl font-serif italic text-editorial-ink font-light">
                  Our <span className="not-italic font-semibold">Journey</span>
                </h2>
                <div className="w-12 h-1 bg-[#1669D8]" />
                <p className="text-sm sm:text-base text-editorial-dark-gray leading-relaxed font-semibold">
                  We offer faultless, prompt solutions because of our vast experience in industrial painting, logistics, and procurement.
                </p>
                <p className="text-sm sm:text-base text-editorial-dark-gray leading-relaxed font-medium">
                  To ensure quality, our knowledgeable staff uses cutting-edge technology and excellent techniques. Our solid reputation in the Indian market has been established by a committed service culture that guarantees great pleasure through enduring relationships and expert care that satisfies all of our clients' needs.
                </p>
                <p className="text-sm sm:text-base text-editorial-dark-gray leading-relaxed font-medium">
                  From industrial warehouses to designer showrooms, we've established a reputation for reliability, excellence, and long-lasting, gorgeous finishes.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative overflow-hidden h-[400px] lg:h-[500px] rounded-2xl shadow-sm order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  alt="Corporate layout"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-editorial-ink/10" />
              </div>

            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. What Sets Us Apart */}
      <FadeIn direction="up" delay={0.1}>
        <section id="edge" className="py-24 bg-white text-editorial-ink relative border-b border-editorial-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="text-xs font-bold text-[#1669D8] uppercase tracking-[0.25em]">
                Part 03
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif italic text-editorial-ink font-light">
                What Sets <span className="not-italic font-semibold">Us Apart</span>
              </h2>
              <div className="w-12 h-1 bg-[#1669D8] mx-auto" />
              <p className="text-sm sm:text-base text-editorial-dark-gray leading-relaxed pt-2">
                <strong>OUR EDGE: EXPERTISE, INNOVATION & COMMITMENT.</strong><br/>
                Our dominance stems from a potent combination of foresight, deep customer understanding, and continuous innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Users, 
                  title: "Skilled Employees", 
                  desc: "200+ dedicated professionals with technical qualifications and customer focus." 
                },
                { 
                  icon: Cog, 
                  title: "Total Solution Approach", 
                  desc: "From manufacturing to troubleshooting, our experience ensures a complete solution." 
                },
                { 
                  icon: Zap, 
                  title: "Value-Added Services", 
                  desc: "High-tech solutions in quality, cost, and time, leveraging global best practices." 
                }
              ].map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div key={idx} className="bg-editorial-bg border border-editorial-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="w-14 h-14 bg-white border border-editorial-border text-[#1669D8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-editorial-ink mb-3">{adv.title}</h3>
                    <p className="text-sm text-editorial-dark-gray leading-relaxed font-medium">
                      {adv.desc}
                    </p>
                  </div>
                )
              })}
            </div>

          </div>
        </section>
      </FadeIn>

      {/* 4. Vision */}
      <FadeIn direction="up" delay={0.1}>
        <section id="vision" className="relative py-32 bg-[#0a2537] text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=2000" 
              alt="Industrial Vision" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2537]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="text-xs font-bold text-editorial-accent uppercase tracking-[0.25em]">
              Part 04
            </div>
            <h2 className="text-5xl sm:text-6xl font-serif italic text-white font-light">
              Our <span className="not-italic font-semibold">Vision</span>
            </h2>
            <div className="w-16 h-1 bg-editorial-accent mx-auto" />
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-semibold max-w-3xl mx-auto pt-2">
              "Customer satisfaction is our passion."
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              We increase Asset Utilisation & Aesthetics, Cost Avoidance & Reduction, Superior Quality & Advanced Technology, and Exceptional Applicators & Supervisors through a potent combination of high-quality application and cutting-edge technology.
            </p>
            <p className="text-lg sm:text-xl text-white leading-relaxed font-serif italic max-w-3xl mx-auto pt-4">
              Together, we can create a floor that will enhance your area and endure.
            </p>

            <div className="pt-10">
              <Link
                to="/contact"
                className="inline-flex bg-[#1669D8] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded items-center justify-center gap-2 uppercase text-sm tracking-widest transition-all hover:scale-105 shadow-xl"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

    </>
  );
}
