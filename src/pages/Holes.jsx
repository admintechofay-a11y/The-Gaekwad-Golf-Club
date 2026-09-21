import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Calendar, ArrowRight, Sparkles, Flag, Trophy } from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HolesSection from '../components/sections/HolesSection';

export function Holes() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#19271E]">
      <UtilityStrip />
      <Header />

      <main className="flex-1">
        {/* Full-bleed Hero with Palace Course Imagery */}
        <section
          className="relative py-28 sm:py-36 px-4 sm:px-8 text-center text-white overflow-hidden select-none"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(8, 31, 18, 0.88) 0%, rgba(10, 41, 22, 0.85) 60%, #FAF8F5 100%), url('/images/golf/palace-golf-view.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-gold-400/40 backdrop-blur-md mb-6 shadow-sm">
              <Sparkles size={13} className="text-gold-400" />
              <span className="font-body text-xs text-gold-300 uppercase tracking-[0.2em] font-bold">
                Official Strategic Hole-by-Hole Guide
              </span>
            </div>
            <h1 className="font-cinzel font-bold text-white text-4xl sm:text-6xl leading-tight mb-6 tracking-wide drop-shadow-md">
              The 18-Hole Championship Course
            </h1>
            <p className="font-body text-[#E2ECE5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Every hole at Gaekwad Golf Club poses a distinct tactical riddle. Read the subtle fairway fall, avoid the 54 revetted pot bunkers, and take in the majestic palace minarets.
            </p>
          </div>
        </section>

        {/* Quick Out/In Summary Strip */}
        <section className="py-12 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-[#E0D8C3] shadow-[0_8px_25px_rgba(10,41,22,0.04)]">
              <span className="font-body text-[10px] text-[#718276] uppercase tracking-widest font-bold block">
                Outward Nine (Holes 1 &ndash; 9)
              </span>
              <span className="font-cinzel text-2xl font-bold text-[#0A2916] mt-1 block">
                Par 36 &middot; 3,390 Yds
              </span>
              <span className="font-body text-xs text-gold-700 font-semibold mt-1 block">
                Framing Moti Baug &amp; Royal Gateway
              </span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E0D8C3] shadow-[0_8px_25px_rgba(10,41,22,0.04)]">
              <span className="font-body text-[10px] text-[#718276] uppercase tracking-widest font-bold block">
                Inward Nine (Holes 10 &ndash; 18)
              </span>
              <span className="font-cinzel text-2xl font-bold text-[#0A2916] mt-1 block">
                Par 36 &middot; 3,450 Yds
              </span>
              <span className="font-body text-xs text-gold-700 font-semibold mt-1 block">
                Featuring 17th Terrace Road &amp; Palace Finish
              </span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E0D8C3] shadow-[0_8px_25px_rgba(10,41,22,0.04)]">
              <span className="font-body text-[10px] text-[#718276] uppercase tracking-widest font-bold block">
                Total Championship Standard
              </span>
              <span className="font-cinzel text-2xl font-bold text-gold-700 mt-1 block">
                Par 72 &middot; 6,840 Yds
              </span>
              <span className="font-body text-xs text-[#55695B] mt-1 block">
                Slope 128 &middot; Rating 73.2
              </span>
            </div>
          </div>
        </section>

        {/* Interactive 18 Hole Section */}
        <HolesSection />

        {/* Bottom CTA to Book */}
        <section className="py-20 px-4 sm:px-8 bg-[#F5F2EB] text-center border-t border-[#E0D8C3]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0A2916] mb-4">
              Ready to Test Your Skill on the Palace Links?
            </h2>
            <p className="font-body text-sm text-[#455A4C] max-w-xl mx-auto mb-8 leading-relaxed font-light">
              Reserve your tee time online or contact the Royal Secretary's office for private bookings and tournament inquiries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/booking"
                className="gold-shimmer-btn text-black font-body font-bold px-8 py-3.5 text-xs uppercase tracking-wider rounded-full shadow-gold-glow flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <Calendar size={15} />
                <span>Reserve a Tee Time</span>
              </Link>
              <Link
                to="/course"
                className="px-8 py-3.5 text-xs uppercase tracking-wider rounded-full bg-white hover:bg-[#FAF8F5] text-[#0A2916] border border-[#0A2916]/30 font-body font-bold transition-colors shadow-sm"
              >
                View Scorecard &amp; Ratings
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Holes;

