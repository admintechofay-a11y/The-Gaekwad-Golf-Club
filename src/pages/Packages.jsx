import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Star, ShieldCheck, Sparkles, Phone, Mail, Crown, ArrowRight, ChevronRight, Trophy } from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { packages, clubInfo } from '../data/coursesData';

export function Packages() {
  const navigate = useNavigate();

  const handleSelectPackage = (pkgTitle) => {
    navigate('/booking', { state: { packageSelected: pkgTitle } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14241A]">
      <UtilityStrip />
      <Header />

      <main className="flex-1">
        {/* Full-bleed Luxury Hero */}
        <section
          className="relative py-28 sm:py-36 px-4 sm:px-8 text-center text-white overflow-hidden select-none bg-royal-950"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(7, 23, 14, 0.95) 0%, rgba(7, 23, 14, 0.78) 50%, rgba(7, 23, 14, 0.92) 100%), url('/images/dining/sunset-terrace.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-black/60 pointer-events-none" />

          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-body uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-md">
              <Crown size={14} className="text-gold-400" />
              <span>Bespoke Royal Golf Itineraries &middot; Lukshmi Vilas Palace Estate</span>
            </div>

            <h1 className="font-cinzel font-bold text-3xl sm:text-6xl text-white tracking-wide leading-tight mb-6">
              Packages &amp; Special Experiences
            </h1>

            <p className="font-display italic text-lg sm:text-2xl text-gold-100/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Combine championship links golf with luxury palace hospitality, dedicated heritage caddies, and bespoke dining under the stars.
            </p>
          </div>
        </section>

        {/* Package Offerings Grid */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-[0.2em] text-[#8C6D23] mb-2">
              <Sparkles size={13} className="text-gold-600" />
              <span>Curated Royal Itineraries</span>
            </div>
            <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916]">
              Choose Your Royal Golf Journey
            </h2>
            <p className="font-body text-[#526658] text-xs sm:text-base mt-3 leading-relaxed">
              Tailored for traveling golfers, visiting couples, and corporate tournament hosts seeking the ultimate royal sporting retreat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => {
              const isPopular = pkg.badge === 'Most Popular';
              return (
                <div
                  key={pkg.id}
                  className={`flex flex-col justify-between p-8 rounded-3xl transition-all duration-500 relative overflow-hidden royal-corner-box ${
                    isPopular
                      ? 'bg-gradient-to-b from-[#0A2916] to-[#04150B] text-white border-2 border-gold-400 shadow-[0_20px_50px_rgba(10,41,22,0.25)] scale-[1.02]'
                      : 'bg-white text-[#14241A] border border-gold-400/30 hover:border-gold-500/50 shadow-[0_10px_30px_rgba(10,41,22,0.05)] hover:shadow-xl'
                  }`}
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <span className="absolute top-6 right-6 bg-gradient-to-r from-gold-500 to-amber-500 text-[#07170E] font-body text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-sm">
                      {pkg.badge}
                    </span>
                  )}

                  <div>
                    <h3 className={`font-cinzel font-bold text-2xl mb-1 ${isPopular ? 'text-white' : 'text-[#0A2916]'}`}>
                      {pkg.title}
                    </h3>
                    <p className={`font-body text-xs mb-6 font-normal ${isPopular ? 'text-gold-200/80' : 'text-[#526658]'}`}>
                      {pkg.subtitle}
                    </p>

                    <div className={`py-4 my-4 border-y ${isPopular ? 'border-white/15' : 'border-[#E8E2D4]'}`}>
                      <span className={`font-cinzel text-2xl sm:text-3xl font-bold block ${isPopular ? 'text-gold-300' : 'text-[#8C6D23]'}`}>
                        {pkg.price}
                      </span>
                      <span className={`font-body text-[11px] block mt-0.5 ${isPopular ? 'text-[#BED0C4]' : 'text-[#8CA08E]'}`}>
                        Taxes &amp; Green Fees Inclusive
                      </span>
                    </div>

                    <ul className={`space-y-3 my-6 list-none font-body text-xs ${isPopular ? 'text-[#D8E4DC]' : 'text-[#3D5245]'}`}>
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <Check size={16} className={`flex-shrink-0 mt-0.5 ${isPopular ? 'text-gold-400' : 'text-gold-600'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-6 border-t ${isPopular ? 'border-white/15' : 'border-[#E8E2D4]'}`}>
                    <button
                      type="button"
                      onClick={() => handleSelectPackage(pkg.title)}
                      className={`w-full py-3.5 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm ${
                        isPopular
                          ? 'gold-shimmer-btn text-[#07170E]'
                          : 'bg-white hover:bg-gold-500 text-[#0A2916] hover:text-[#07170E] border border-gold-400/60 hover:border-gold-500'
                      }`}
                    >
                      <span>Reserve This Experience</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Bespoke Outing Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-white border border-gold-400/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-wider text-[#8C6D23] font-bold mb-2">
                <Trophy size={14} className="text-gold-600" />
                <span>Custom Corporate &amp; Diplomatic Charters</span>
              </div>
              <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#0A2916]">
                Planning a Bespoke Royal Tournament?
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#526658] mt-2 leading-relaxed">
                We design fully private 18-hole tournaments, royal banquets at the Darbar Hall, helicopter arrivals via Palace Helipad, and customized trophy presentations.
              </p>
            </div>
            <Link
              to="/contact"
              className="gold-shimmer-btn text-[#07170E] px-8 py-4 rounded-full font-body text-xs font-bold uppercase tracking-wider flex-shrink-0 shadow-sm"
            >
              Inquire with Royal Secretariat
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

Packages.propTypes = {};

export default Packages;
