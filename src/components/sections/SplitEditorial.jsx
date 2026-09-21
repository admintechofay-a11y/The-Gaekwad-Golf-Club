import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { editorials as defaultEditorials } from '../../data/editorials';

export function SplitEditorial({ editorials = defaultEditorials }) {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {editorials.map((item, index) => {
        const isImageLeft = item.imagePosition === 'left';

        return (
          <section
            key={item.id}
            aria-labelledby={`editorial-heading-${item.id}`}
            className="py-16 md:py-24 border-b border-[#E8E2D4] last:border-b-0 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-[1520px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
                {/* Image Column (6 cols) */}
                <div
                  className={`md:col-span-6 relative min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden border border-gold-500/30 shadow-[0_15px_45px_rgba(10,41,22,0.1)] group ${
                    isImageLeft ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-gold-300 font-cinzel text-xs border border-gold-400/40">
                      Lukshmi Vilas Palace Estate
                    </span>
                  </div>
                </div>

                {/* Text Column (6 cols) */}
                <div
                  className={`md:col-span-6 flex flex-col justify-center ${
                    isImageLeft ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.22em] text-[#8C6D23] font-bold mb-3">
                    <Sparkles size={13} className="text-gold-600" />
                    <span>{item.eyebrow}</span>
                  </div>

                  {/* Heading */}
                  <h2
                    id={`editorial-heading-${item.id}`}
                    className="font-cinzel font-bold text-[#0A2916] leading-tight mb-5 text-2xl sm:text-3xl lg:text-4xl"
                  >
                    {item.heading}
                  </h2>

                  {/* Body */}
                  <p className="font-body text-[#455A4C] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {item.body}
                  </p>

                  {/* Link CTA */}
                  <div>
                    <Link
                      to={item.href}
                      className="gold-shimmer-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[#07170E] font-body text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default SplitEditorial;
