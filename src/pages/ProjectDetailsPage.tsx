import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { DYNAMIC_GALLERY } from "../data";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();

  // Find the project based on the id
  const project = DYNAMIC_GALLERY.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-editorial-bg min-h-screen pt-28 pb-32">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* Back Link */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-editorial-dark-gray hover:text-editorial-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Image */}
          <div className="lg:col-span-6 xl:col-span-7 h-full relative">
            <div className="lg:sticky lg:top-32">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10]">
                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-start">

            <div className="space-y-5">
              {/* Category */}
              <div className="text-editorial-accent text-[10px] font-extrabold uppercase tracking-[0.25em]">
                {project.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-editorial-ink font-normal leading-tight">
                {project.title.toUpperCase()}
              </h1>

              {/* Subtitle / Desc */}
              <p className="text-lg sm:text-xl font-serif italic text-editorial-dark-gray font-light">
                {project.desc}
              </p>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-editorial-accent my-6"></div>

              {/* Details Paragraph */}
              {project.details && (
                <div className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  <p>{project.details}</p>
                </div>
              )}

              {/* Benefits Text / Paragraphs */}
              {project.benefits && project.benefits.length > 0 && (
                <div className="pt-2">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    With extensive experience in {project.category}, we ensure that all our materials and installations meet the highest industry standards. From rigorous preparation to final execution, we provide tailored solutions that align perfectly with your requirements:
                  </p>
                  <ul className="grid grid-cols-1 gap-2.5 mt-5">
                    {project.benefits.map((benefit: string, bIdx: number) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-editorial-accent shrink-0 mt-0.5" />
                        <span className="text-base text-gray-700">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stats Section (matching the bottom 3 boxes of the reference) */}
              <div className="grid grid-cols-3 gap-4 pt-12 border-t border-gray-200 mt-12">
                <div className="flex flex-col space-y-1">
                  <div className="text-editorial-accent mb-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  </div>
                  <span className="text-2xl font-bold text-editorial-ink">300+</span>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400">Projects Completed</span>
                </div>
                <div className="flex flex-col space-y-1 border-l border-gray-200 pl-4">
                  <div className="text-editorial-accent mb-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span className="text-2xl font-bold text-editorial-ink">100%</span>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400">Client Satisfaction</span>
                </div>
                <div className="flex flex-col space-y-1 border-l border-gray-200 pl-4">
                  <div className="text-editorial-accent mb-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <span className="text-2xl font-bold text-editorial-ink">25+</span>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400">Expert Specialists</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- ADDED CONTENT START --- */}
        
        {/* Divider */}
        <div className="my-24 border-t border-gray-200"></div>

        {/* Additional Content: Related Projects */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif text-editorial-ink mb-2">Explore More Projects</h2>
              <p className="text-gray-500 font-serif italic">Discover other successful installations we've completed.</p>
            </div>
            <Link to="/" className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-editorial-accent hover:text-editorial-ink transition-colors uppercase tracking-widest mt-4 sm:mt-0">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DYNAMIC_GALLERY.filter(p => p.id !== project.id).slice(0, 3).map((related) => (
              <Link key={related.id} to={`/project/${related.id}`} className="group block">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                  <img 
                    src={related.url} 
                    alt={related.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <div className="text-editorial-accent text-[10px] font-extrabold uppercase tracking-[0.2em] mb-1">
                  {related.category}
                </div>
                <h3 className="text-lg font-serif text-editorial-ink group-hover:text-editorial-accent transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
          
          <Link to="/" className="sm:hidden inline-flex items-center gap-2 text-sm font-bold text-editorial-accent hover:text-editorial-ink transition-colors uppercase tracking-widest mt-8">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Additional Content: Call to Action */}
        <div className="mt-32 bg-editorial-ink rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 70%)' }}></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6 relative z-10">
            Ready to upgrade your flooring?
          </h2>
          <p className="text-gray-300 max-w-2xl text-lg sm:text-xl font-serif italic mb-10 relative z-10">
            Contact us today to discuss your industrial or commercial flooring requirements. Our experts are ready to provide a tailored solution.
          </p>
          <a 
            href="mailto:kpnenterprises31@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-editorial-accent text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-editorial-ink transition-all duration-300 shadow-lg hover:shadow-xl relative z-10"
          >
            Get a Quote
          </a>
        </div>
        {/* --- ADDED CONTENT END --- */}

      </div>
    </div>
  );
}
