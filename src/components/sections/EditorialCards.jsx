import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { cards as defaultCards } from '../../data/cards';

export function EditorialCards({ cards = defaultCards }) {
  return (
    <section aria-labelledby="clubhouse-cards-heading" className="bg-[#FAF8F5] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D4]">
      <div className="max-w-[1520px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-[0.2em] text-[#8C6D23] mb-2">
              <Sparkles size={13} className="text-gold-600" />
              <span>Gazette &middot; Estate Life</span>
            </div>
            <h2
              id="clubhouse-cards-heading"
              className="font-cinzel font-bold text-[#0A2916] text-3xl sm:text-4xl lg:text-5xl tracking-wide"
            >
              From The Royal Clubhouse
            </h2>
          </div>
          <Link
            to="/news"
            className="text-xs font-body uppercase tracking-wider text-[#8C6D23] hover:text-[#0A2916] font-bold transition-colors flex items-center gap-1.5"
          >
            <span>All Club Bulletins</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link
              key={card.id}
              to={card.href}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E0D8C3] hover:border-gold-500 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-gold-300 font-body text-[11px] font-semibold uppercase tracking-wider border border-gold-400/40">
                    {card.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-body text-[#8C6D23] font-semibold mb-2">
                    <Calendar size={12} className="text-gold-600" />
                    <span>{card.date}</span>
                  </div>
                  <h3 className="font-cinzel font-bold text-[#0A2916] text-xl leading-snug mb-3 group-hover:text-gold-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#526658] line-clamp-3 leading-relaxed">
                    {card.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-1 text-xs font-body font-bold text-[#8C6D23] uppercase tracking-wider group-hover:text-[#0A2916] transition-colors">
                <span>Read Dispatch</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EditorialCards;
