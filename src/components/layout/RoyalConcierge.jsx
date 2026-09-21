import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, X, Phone, Compass, Calendar, Sparkles, ShieldCheck, Sun, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RoyalConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-[#0E2917] via-[#091C10] to-[#040C07] border border-gold-400/60 shadow-lg hover:border-gold-300 transition-all duration-300"
          aria-label="Open Royal Concierge"
        >
          {/* Ambient Glow Pulse */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-gold-400 to-amber-600 opacity-30 blur-sm group-hover:opacity-70 transition duration-500" />
          
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 flex items-center justify-center text-royal-950 shadow-md">
            <Crown className="w-4 h-4 text-royal-950 fill-royal-950/20" />
          </div>

          <div className="relative hidden sm:flex flex-col items-start pr-1 text-left">
            <span className="font-cinzel text-[11px] font-bold tracking-[0.16em] text-gold-300 group-hover:text-white transition-colors">
              ROYAL CONCIERGE
            </span>
            <span className="font-body text-[9px] tracking-wider text-zinc-300">
              Lukshmi Vilas Estate
            </span>
          </div>
        </motion.button>
      </div>

      {/* Royal Concierge Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full sm:max-w-md max-h-[85vh] overflow-y-auto bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl border border-gold-400/40 p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(10,41,22,0.25)] text-[#14241A] scrollbar-hide z-10"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-5 border-b border-[#E8E2D4]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 flex items-center justify-center text-royal-950 shadow-md">
                    <Crown className="w-6 h-6 fill-royal-950/20" />
                  </div>
                  <div>
                    <span className="font-cinzel text-lg font-bold text-[#0A2916] tracking-wide block">
                      Royal Concierge
                    </span>
                    <span className="font-body text-[11px] text-[#8C6D23] font-semibold uppercase tracking-widest">
                      24/7 Estate Secretariat
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-zinc-200 text-zinc-500 hover:text-[#0A2916] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Royal Seal Watermark */}
              <div className="mt-5 p-4 rounded-2xl bg-white border border-[#E0D8C3] flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-[10px] uppercase font-cinzel text-[#8C6D23] font-bold tracking-widest block">
                    Estate Live Conditions
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span className="text-xs text-[#0A2916] font-semibold">28°C · Vadodara Clear Sky</span>
                  </div>
                </div>
                <div className="text-right border-l border-[#E8E2D4] pl-4">
                  <span className="text-[10px] uppercase font-cinzel text-[#8C6D23] font-bold tracking-widest block">
                    Stimpmeter
                  </span>
                  <span className="text-xs text-[#0A2916] font-bold tracking-wider">10.8 Championship</span>
                </div>
              </div>

              {/* Quick Actions List */}
              <div className="mt-6 space-y-3">
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-gold-400/40 hover:border-gold-500 shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold-600" />
                    <div className="text-left">
                      <p className="font-cinzel text-xs font-bold text-[#0A2916] group-hover:text-gold-600">
                        Reserve Championship Tee Time
                      </p>
                      <p className="text-[11px] text-[#526658]">18 or 9 Holes with Royal Caddie</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:+912652433011"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E0D8C3] hover:border-gold-400 shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-600" />
                    <div className="text-left">
                      <p className="font-cinzel text-xs font-bold text-[#0A2916] group-hover:text-gold-600">
                        Caddie Master & Pro Shop
                      </p>
                      <p className="text-[11px] text-[#526658]">+91 (0265) 243 3011 / 241 1234</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-gold-600" />
                </a>

                <Link
                  to="/dining"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E0D8C3] hover:border-gold-400 shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-gold-600" />
                    <div className="text-left">
                      <p className="font-cinzel text-xs font-bold text-[#0A2916] group-hover:text-gold-600">
                        Palace Banquet & High Tea
                      </p>
                      <p className="text-[11px] text-[#526658]">8 Historic Venues & Cellar Reserve</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E0D8C3] hover:border-gold-400 shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-gold-600" />
                    <div className="text-left">
                      <p className="font-cinzel text-xs font-bold text-[#0A2916] group-hover:text-gold-600">
                        Gate #2 Palace Security Access
                      </p>
                      <p className="text-[11px] text-[#526658]">Chauffeur & Helipad Guidelines</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Protocol Notice */}
              <div className="mt-6 pt-4 border-t border-[#E8E2D4] text-center">
                <div className="flex items-center justify-center gap-2 text-[#8C6D23] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold">
                    Dress Code Enforced
                  </span>
                </div>
                <p className="text-[11px] text-[#526658] leading-relaxed">
                  Collared golf shirts, tailored trousers or bermudas, and soft spikes are strictly mandatory across all palace greens and club lounges.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default RoyalConcierge;
