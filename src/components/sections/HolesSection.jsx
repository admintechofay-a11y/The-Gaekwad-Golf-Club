import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Compass, Sparkles, ChevronLeft, ChevronRight, Flag, Target, AlertCircle } from 'lucide-react';
import { holes as allHoles } from '../../data/coursesData';

export function HolesSection() {
  const [filter, setFilter] = useState('all'); // 'all', 'out', 'in', 'signature'
  const [activeHoleNum, setActiveHoleNum] = useState(4); // Default to signature hole 4

  const filteredHoles = allHoles.filter((h) => {
    if (filter === 'out') return h.number <= 9;
    if (filter === 'in') return h.number > 9;
    if (filter === 'signature') return h.difficulty === 'Signature';
    return true;
  });

  const currentHole = allHoles.find((h) => h.number === activeHoleNum) || allHoles[0];

  const handlePrev = () => {
    const nextNum = activeHoleNum === 1 ? 18 : activeHoleNum - 1;
    setActiveHoleNum(nextNum);
  };

  const handleNext = () => {
    const nextNum = activeHoleNum === 18 ? 1 : activeHoleNum + 1;
    setActiveHoleNum(nextNum);
  };

  return (
    <section aria-labelledby="holes-heading" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2EB] relative overflow-hidden border-b border-[#E8E2D4]">
      <div className="max-w-[1520px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-[0.2em] text-[#8C6D23] mb-2">
              <Sparkles size={13} className="text-gold-600" />
              <span>Championship Layout &bull; 18 Holes</span>
            </div>
            <h2
              id="holes-heading"
              className="font-cinzel font-bold text-[#0A2916] text-3xl sm:text-4xl lg:text-5xl tracking-wide"
            >
              The Royal 18-Hole Course
            </h2>
            <p className="font-body text-[#526658] text-sm sm:text-base max-w-xl mt-3">
              Explore each strategic challenge sculpted across 500 royal acres beneath the Indo-Saracenic minarets of Lukshmi Vilas Palace.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E0D8C3] rounded-full overflow-x-auto scrollbar-hide shadow-sm">
            {[
              { id: 'all', label: 'All 18 Holes' },
              { id: 'out', label: 'Outward 9 (1-9)' },
              { id: 'in', label: 'Inward 9 (10-18)' },
              { id: 'signature', label: 'Signature Holes' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-body tracking-wider transition-all duration-200 whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-black font-bold shadow-md'
                    : 'text-[#526658] hover:text-[#0A2916] font-medium'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 18 Holes Carousel / Horizontal Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-4 mb-8">
          {filteredHoles.map((hole) => {
            const isActive = hole.number === activeHoleNum;
            return (
              <button
                key={hole.number}
                type="button"
                onClick={() => setActiveHoleNum(hole.number)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-body transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0A2916] border-gold-500 text-white shadow-md scale-105'
                    : 'bg-white border-[#E0D8C3] text-[#526658] hover:border-gold-500/50 hover:text-[#0A2916]'
                }`}
              >
                <span className={`font-cinzel font-bold text-sm ${isActive ? 'text-gold-300' : 'text-[#8C6D23]'}`}>
                  {String(hole.number).padStart(2, '0')}
                </span>
                <span className="hidden sm:inline font-medium text-[11px] truncate max-w-[90px]">
                  {hole.name}
                </span>
                {hole.difficulty === 'Signature' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Hole Hero Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHole.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl overflow-hidden border border-gold-500/35 shadow-[0_20px_50px_rgba(10,41,22,0.08)] royal-corner-box"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Hole Photography & Badge (7 cols) */}
              <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] overflow-hidden group">
                <img
                  src={currentHole.image}
                  alt={`Hole ${currentHole.number} - ${currentHole.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Overlays on Image */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-gold-300 font-cinzel text-xs font-bold border border-gold-500/40">
                    Hole {currentHole.number}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-body uppercase tracking-wider backdrop-blur-md border ${
                      currentHole.difficulty === 'Signature'
                        ? 'bg-amber-500/30 text-amber-200 border-amber-400'
                        : currentHole.difficulty === 'Testing'
                        ? 'bg-red-500/30 text-red-200 border-red-400'
                        : 'bg-emerald-500/30 text-emerald-200 border-emerald-400'
                    }`}
                  >
                    {currentHole.difficulty}
                  </span>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                    {currentHole.name}
                  </h3>
                </div>

                {/* Navigation arrows */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous Hole"
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-gold-500 text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next Hole"
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-gold-500 text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Right Column: Hole Metrics, Pro Tip & Description (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white text-[#14241A]">
                <div>
                  {/* Metric Chips Row */}
                  <div className="grid grid-cols-3 gap-3 pb-6 border-b border-[#E8E2D4] text-center">
                    <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E2D4]">
                      <div className="text-[10px] uppercase font-body text-[#526658] tracking-wider font-semibold">
                        Par
                      </div>
                      <div className="font-cinzel text-2xl font-bold text-[#0A2916] mt-0.5">
                        {currentHole.par}
                      </div>
                    </div>
                    <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E2D4]">
                      <div className="text-[10px] uppercase font-body text-[#526658] tracking-wider font-semibold">
                        Gold Yards
                      </div>
                      <div className="font-cinzel text-2xl font-bold text-[#8C6D23] mt-0.5">
                        {currentHole.yardage}
                      </div>
                    </div>
                    <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E2D4]">
                      <div className="text-[10px] uppercase font-body text-[#526658] tracking-wider font-semibold">
                        Stroke Index
                      </div>
                      <div className="font-cinzel text-2xl font-bold text-[#0A2916] mt-0.5">
                        {currentHole.si}
                      </div>
                    </div>
                  </div>

                  {/* Hole Description */}
                  <div className="py-5">
                    <h4 className="text-xs uppercase font-body tracking-wider text-[#8C6D23] font-bold mb-2">
                      Architectural Strategy
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#455A4C] leading-relaxed">
                      {currentHole.description}
                    </p>
                  </div>

                  {/* Pro Caddie Tip Box */}
                  <div className="p-4 rounded-xl bg-[#FFFDF5] border border-gold-400/40 text-xs font-body mb-4">
                    <div className="flex items-center gap-1.5 text-[#8C6D23] font-bold uppercase tracking-wider mb-1">
                      <Target size={13} className="text-gold-600" />
                      <span>Caddie Master Tip</span>
                    </div>
                    <p className="text-[#3F4F43] italic leading-relaxed">
                      &ldquo;{currentHole.caddieTip}&rdquo;
                    </p>
                  </div>

                  {/* Hazard Callout */}
                  <div className="flex items-start gap-2 text-xs text-[#526658] bg-[#F5F2EB] p-2.5 rounded-lg">
                    <AlertCircle size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Estate Hazards:</strong> {currentHole.hazards}</span>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-6 border-t border-[#E8E2D4] flex items-center justify-between gap-3 mt-4">
                  <Link
                    to="/holes"
                    className="text-xs font-body uppercase tracking-wider text-[#8C6D23] hover:text-[#0A2916] font-bold flex items-center gap-1"
                  >
                    <span>Full 18-Hole Guide</span>
                    <Compass size={13} />
                  </Link>

                  <Link
                    to="/booking"
                    className="gold-shimmer-btn text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full text-[#07170E] shadow-sm flex items-center gap-1.5"
                  >
                    <span>Play This Hole</span>
                    <Flag size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default HolesSection;
