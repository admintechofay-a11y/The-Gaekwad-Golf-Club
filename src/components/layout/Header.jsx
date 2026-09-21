import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Calendar, ChevronRight, Phone, Shield } from 'lucide-react';
import useScrollHeader from '../../hooks/useScrollHeader';

export function Header() {
  const { scrolled } = useScrollHeader();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'The Course', href: '/course' },
    { label: '18 Holes', href: '/holes' },
    { label: 'Dining', href: '/dining' },
    { label: 'Academy', href: '/academy' },
    { label: 'Membership', href: '/membership' },
    { label: 'Heritage', href: '/about' },
    { label: 'Tournaments', href: '/news' },
    { label: '360° Tour', href: '/tour' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 bg-white/95 backdrop-blur-xl border-b border-[#E8E2D4] ${
          scrolled ? 'shadow-[0_10px_30px_rgba(10,41,22,0.06)]' : 'shadow-sm'
        }`}
      >
        {/* Top Metallic Gold Accent Hairline */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4">
          {/* Brand Logo & Royal Monogram */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group focus:outline-none flex-shrink-0"
            aria-label="Gaekwad Golf Club Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-gold-500/40 p-0.5 bg-[#FAF8F5] flex-shrink-0 shadow-sm group-hover:border-gold-500 transition-colors">
              <img
                src="/images/palace/lvp-crest.jpg"
                alt="Gaekwad Royal Crest"
                className="w-full h-full object-cover object-center rounded-full scale-105 group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 rounded-full border border-gold-400/30 pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.16em] text-[#0A2916] group-hover:text-gold-600 transition-colors leading-none">
                GAEKWAD GOLF CLUB
              </span>
              <span className="font-body text-[9px] sm:text-[9.5px] tracking-[0.22em] text-[#8C6D23] uppercase font-semibold mt-1">
                Lukshmi Vilas Palace Estate &middot; Est. 1890
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 flex-shrink-0">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `relative whitespace-nowrap font-cinzel text-[11.5px] xl:text-[12px] 2xl:text-[12.5px] tracking-[0.12em] uppercase transition-all duration-300 py-1 px-1.5 ${
                    isActive
                      ? 'text-[#0A2916] font-bold border-b-2 border-gold-500 pb-0.5'
                      : 'text-[#243B2C] hover:text-gold-600 font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Reserve CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/booking"
              className="gold-shimmer-btn hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[#07170E] font-body text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap flex-shrink-0"
            >
              <Calendar size={14} className="text-[#07170E] flex-shrink-0" />
              <span className="whitespace-nowrap">Book Tee Time</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open Navigation Menu"
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 text-[#0A2916] hover:text-gold-600 bg-[#FAF8F5] border border-[#E8E2D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 flex-shrink-0"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.aside
              aria-label="Mobile Navigation Menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-[#FAF8F5] border-l border-[#E8E2D4] p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto text-[#14241A]"
            >
              <div>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E8E2D4]">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/palace/lvp-crest.jpg"
                      alt="Crest"
                      className="w-9 h-9 rounded-full border border-gold-400/50 object-cover"
                    />
                    <div>
                      <h2 className="font-cinzel text-sm font-bold text-[#0A2916] tracking-widest">
                        GAEKWAD GOLF
                      </h2>
                      <span className="font-body text-[9px] uppercase tracking-widest text-[#8C6D23]">
                        Lukshmi Vilas Palace Estate
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Close Navigation"
                    onClick={() => setDrawerOpen(false)}
                    className="p-2 text-zinc-500 hover:text-[#0A2916] bg-white rounded-full border border-[#E8E2D4]"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="mt-6 flex flex-col gap-1">
                  {navLinks.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-3 px-3.5 rounded-xl font-cinzel text-xs tracking-widest uppercase transition-colors ${
                          isActive
                            ? 'bg-white text-[#0A2916] font-bold border border-gold-400/40 shadow-sm'
                            : 'text-[#243B2C] hover:bg-white hover:text-gold-600'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={14} className="text-gold-500" />
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Bottom Actions in Drawer */}
              <div className="pt-6 border-t border-[#E8E2D4] space-y-3">
                <Link
                  to="/booking"
                  onClick={() => setDrawerOpen(false)}
                  className="gold-shimmer-btn w-full py-3.5 rounded-xl text-[#07170E] font-body text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar size={15} />
                  <span>Reserve Tee Time</span>
                </Link>

                <a
                  href="tel:+918511411155"
                  className="w-full py-3 rounded-xl bg-white hover:bg-zinc-50 text-[#14241A] font-body text-xs flex items-center justify-center gap-2 transition-colors border border-[#E8E2D4]"
                >
                  <Phone size={14} className="text-gold-600" />
                  <span>Club Concierge: +91 85114 11155</span>
                </a>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 pt-1">
                  <Shield size={11} className="text-gold-600" />
                  <span>Traditional Golf Dress Code Enforced</span>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
