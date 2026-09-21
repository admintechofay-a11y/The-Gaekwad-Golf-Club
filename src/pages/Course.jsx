import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Compass, Flag, Shield, Clock, Sparkles, Calendar } from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CourseStats from '../components/sections/CourseStats';
import { scorecard, courseSpecs } from '../data/coursesData';

export function Course() {
  const galleryImages = [
    { src: '/images/golf/palace-golf-view.jpg', caption: 'The 18th Fairway Approaching the Indo-Saracenic Facade' },
    { src: '/images/golf/The-Gaekwad-Baroda-Golf-Club-Banner.jpg', caption: 'Front Nine Fairway Bordered by Ancient Palace Banyan Trees' },
    { src: '/images/golf/The-Gaekwad-Baroda-Golf-Club-Gallery.jpg', caption: 'Bermuda TifDwarf Greens Guarded by Pot Bunkers' },
    { src: '/images/golf/The-Gaekwad-Baroda-Golf-Club1.jpg', caption: 'Lush Tree-Lined Corridors Along the Royal Estate Perimeter' },
    { src: '/images/golf/The-Gaekwad-Baroda-Golf-Club2.jpg', caption: 'Precision Approach Play on the Undulating Back Nine' },
    { src: '/images/palace/palace-facade.jpg', caption: 'The 18th Grandstand Green Directly Beneath the Royal Palace Towers' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14241A]">
      <UtilityStrip />
      <Header />

      <main className="flex-1">
        {/* Full-bleed Hero */}
        <section
          className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden select-none"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(250, 248, 245, 1) 0%, rgba(10, 41, 22, 0.75) 50%, rgba(5, 20, 11, 0.88) 100%), url('/images/golf/palace-golf-view.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-gold-400/40 backdrop-blur-md mb-6">
              <Sparkles size={13} className="text-gold-300" />
              <span className="font-body text-xs text-gold-200 uppercase tracking-[0.2em] font-semibold">
                Championship Links &amp; Parkland &middot; Est. 1930s
              </span>
            </div>
            <h1 className="font-cinzel font-bold text-white text-4xl sm:text-6xl leading-tight mb-6 tracking-wide drop-shadow-md">
              The Championship Course
            </h1>
            <p className="font-body text-[#E8EFE9] text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
              India&apos;s only authentic royal palace golf course, woven across 500 private acres of the Lukshmi Vilas Palace Estate in Vadodara.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                to="/holes"
                className="gold-shimmer-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[#07170E] font-body text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <Compass size={15} />
                <span>Explore 18 Holes Guide</span>
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-md font-body text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Calendar size={15} className="text-gold-300" />
                <span>Reserve Tee Time</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5-Metric Quick Stats Bar */}
        <CourseStats />

        {/* Deep Architectural & Historical Overview */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1520px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] text-[#8C6D23] font-bold mb-2">
              <Award size={13} className="text-gold-600" />
              <span>Royal Architecture</span>
            </div>
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A2916]">
              Where Royal Heritage Meets Strategic Golf
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-body text-[#455A4C] text-base leading-relaxed">
            <div className="bg-white p-8 rounded-3xl border border-[#E0D8C3] shadow-md royal-corner-box">
              <h3 className="font-cinzel text-xl font-bold text-[#0A2916] mb-4">
                The Conception of Maharaja Pratapsinhrao
              </h3>
              <p>
                Originally commissioned in the 1930s by <strong>Maharaja Pratapsinhrao Gaekwad</strong> within the royal compound of Lukshmi Vilas Palace (constructed in 1890 by Maharaja Sayajirao Gaekwad III), this historic 18-hole championship venue holds an unmatched stature in Asian golf. Unlike artificial modern resort layouts, these fairways follow centuries-old estate topography, natural stepwells, and ancient mango, neem, and tamarind canopies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E0D8C3] shadow-md royal-corner-box">
              <h3 className="font-cinzel text-xl font-bold text-[#0A2916] mb-4">
                Links Philosophy &amp; Royal Grandeur
              </h3>
              <p>
                Drawing strategic inspiration from the great links of the British Isles, the layout features fast-running hybrid Bermuda fairways, 54 revetted pot sand traps, and lightning-quick TifDwarf putting greens (cut to 3mm, running 10.8 on the Stimpmeter). The magnificent 500-room Indo-Saracenic palace &mdash; four times the size of Buckingham Palace &mdash; provides an imperial target line from almost every tee.
              </p>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 p-6 sm:p-8 bg-white rounded-3xl border border-gold-400/30 shadow-md">
            <div>
              <span className="font-body text-[10px] text-[#526658] uppercase tracking-widest font-semibold block">Greens Turf</span>
              <span className="font-cinzel text-lg sm:text-xl text-[#0A2916] font-bold mt-1 block">{courseSpecs.greens}</span>
            </div>
            <div>
              <span className="font-body text-[10px] text-[#526658] uppercase tracking-widest font-semibold block">Fairway Turf</span>
              <span className="font-cinzel text-lg sm:text-xl text-[#0A2916] font-bold mt-1 block">{courseSpecs.fairways}</span>
            </div>
            <div>
              <span className="font-body text-[10px] text-[#526658] uppercase tracking-widest font-semibold block">USGA Rating</span>
              <span className="font-cinzel text-lg sm:text-xl text-[#8C6D23] font-bold mt-1 block">{courseSpecs.courseRating} / Slope {courseSpecs.slope}</span>
            </div>
            <div>
              <span className="font-body text-[10px] text-[#526658] uppercase tracking-widest font-semibold block">Course Hazards</span>
              <span className="font-cinzel text-lg sm:text-xl text-[#0A2916] font-bold mt-1 block">{courseSpecs.bunkers}</span>
            </div>
          </div>
        </section>

        {/* Official 18-Hole Scorecard Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F2EB] border-y border-[#E8E2D4]">
          <div className="max-w-[1520px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] text-[#8C6D23] font-bold mb-2">
                <Flag size={13} className="text-gold-600" />
                <span>Official Yardages &amp; Stroke Indices</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0A2916]">
                Championship Scorecard
              </h2>
            </div>

            {/* Out (Front 9) Table */}
            <div className="mb-10 overflow-x-auto bg-white rounded-2xl border border-[#E0D8C3] shadow-md p-4">
              <h3 className="font-cinzel text-lg font-bold text-[#0A2916] mb-3 px-2">Out &mdash; Front Nine (Palace Loop)</h3>
              <table className="w-full text-center font-body text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E2D4] text-[#8C6D23] font-bold uppercase text-[11px]">
                    <th className="py-3 px-3 text-left">Hole</th>
                    {scorecard.out.map((h) => (
                      <th key={h.hole} className="py-3 px-2">{h.hole}</th>
                    ))}
                    <th className="py-3 px-4 bg-[#FAF8F5]">OUT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E2D4]">
                  <tr>
                    <td className="py-2.5 px-3 text-left font-semibold text-[#0A2916]">Black (Championship)</td>
                    {scorecard.out.map((h) => (
                      <td key={h.hole} className="py-2.5 px-2 text-[#455A4C]">{h.yardsBlack}</td>
                    ))}
                    <td className="py-2.5 px-4 font-bold text-[#8C6D23] bg-[#FAF8F5]">{scorecard.totals.out.black}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-left font-semibold text-[#0A2916]">White (Club)</td>
                    {scorecard.out.map((h) => (
                      <td key={h.hole} className="py-2.5 px-2 text-[#455A4C]">{h.yardsWhite}</td>
                    ))}
                    <td className="py-2.5 px-4 font-bold text-[#0A2916] bg-[#FAF8F5]">{scorecard.totals.out.white}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-left font-semibold text-[#0A2916]">Red (Forward)</td>
                    {scorecard.out.map((h) => (
                      <td key={h.hole} className="py-2.5 px-2 text-[#455A4C]">{h.yardsRed}</td>
                    ))}
                    <td className="py-2.5 px-4 font-bold text-[#455A4C] bg-[#FAF8F5]">{scorecard.totals.out.red}</td>
                  </tr>
                  <tr className="bg-[#FAF8F5] font-bold text-[#0A2916]">
                    <td className="py-2.5 px-3 text-left">Par</td>
                    {scorecard.out.map((h) => (
                      <td key={h.hole} className="py-2.5 px-2">{h.par}</td>
                    ))}
                    <td className="py-2.5 px-4 text-[#8C6D23]">{scorecard.totals.out.par}</td>
                  </tr>
                  <tr className="text-[#526658] text-[11px]">
                    <td className="py-2 px-3 text-left font-medium">Stroke Index</td>
                    {scorecard.out.map((h) => (
                      <td key={h.hole} className="py-2 px-2">{h.si}</td>
                    ))}
                    <td className="py-2 px-4">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* In (Back 9) Table */}
            <div className="overflow-x-auto bg-white rounded-2xl border border-[#E0D8C3] shadow-md p-4">
              <h3 className="font-cinzel text-lg font-bold text-[#0A2916] mb-3 px-2">In &mdash; Back Nine (Estate Run)</h3>
              <table className="w-full text-center font-body text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E2D4] text-[#8C6D23] font-bold uppercase text-[11px]">
                    <th className="py-3 px-3 text-left">Hole</th>
                    {scorecard.in.map((h) => (
                      <th key={h.hole} className="py-3 px-2">{h.hole}</th>
                    ))}
                    <th className="py-3 px-4 bg-[#FAF8F5]">IN</th>
                    <th className="py-3 px-4 bg-[#0A2916] text-white">TOTAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E2D4]">
                  <tr>
                    <td className="py-2.5 px-3 text-left font-semibold text-[#0A2916]">Black (Championship)</td>
                    {scorecard.in.map((h) => (
                      <td key={h.hole} className="py-2.5 px-2 text-[#455A4C]">{h.yardsBlack}</td>
                    ))}
                    <td className="py-2.5 px-4 font-bold text-[#8C6D23] bg-[#FAF8F5]">{scorecard.totals.in.black}</td>
                    <td className="py-2.5 px-4 font-bold text-white bg-[#0A2916]">{scorecard.totals.total.black}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-left font-semibold text-[#0A2916]">White (Club)</td>
                    {scorecard.in.map((h) => (
                      <td key={h.hole} className="py-2.5 px-2 text-[#455A4C]">{h.yardsWhite}</td>
                    ))}
                    <td className="py-2.5 px-4 font-bold text-[#0A2916] bg-[#FAF8F5]">{scorecard.totals.in.white}</td>
                    <td className="py-2.5 px-4 font-bold text-white bg-[#0A2916]">{scorecard.totals.total.white}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-left font-semibold text-[#0A2916]">Red (Forward)</td>
                    {scorecard.in.map((h) => (
                      <td key={h.hole} className="py-2.5 px-2 text-[#455A4C]">{h.yardsRed}</td>
                    ))}
                    <td className="py-2.5 px-4 font-bold text-[#455A4C] bg-[#FAF8F5]">{scorecard.totals.in.red}</td>
                    <td className="py-2.5 px-4 font-bold text-white bg-[#0A2916]">{scorecard.totals.total.red}</td>
                  </tr>
                  <tr className="bg-[#FAF8F5] font-bold text-[#0A2916]">
                    <td className="py-2.5 px-3 text-left">Par</td>
                    {scorecard.in.map((h) => (
                      <td key={h.hole} className="py-2.5 px-2">{h.par}</td>
                    ))}
                    <td className="py-2.5 px-4 text-[#8C6D23]">{scorecard.totals.in.par}</td>
                    <td className="py-2.5 px-4 font-bold text-gold-300 bg-[#0A2916]">{scorecard.totals.total.par}</td>
                  </tr>
                  <tr className="text-[#526658] text-[11px]">
                    <td className="py-2 px-3 text-left font-medium">Stroke Index</td>
                    {scorecard.in.map((h) => (
                      <td key={h.hole} className="py-2 px-2">{h.si}</td>
                    ))}
                    <td className="py-2 px-4">-</td>
                    <td className="py-2 px-4 font-bold text-[#455A4C]">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Visitor Etiquette & Guidelines */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1520px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] text-[#8C6D23] font-bold mb-2">
              <Shield size={13} className="text-gold-600" />
              <span>Playing Regulations</span>
            </div>
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#0A2916]">
              Visitor Golf Regulations &amp; Etiquette
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#E0D8C3] shadow-md royal-corner-box">
              <Shield size={26} className="text-gold-600 mb-4" />
              <h3 className="font-cinzel text-lg font-bold text-[#0A2916] mb-2">Handicap Index</h3>
              <p className="font-body text-xs sm:text-sm text-[#455A4C] leading-relaxed">
                All visiting golfers must possess an active handicap index of <strong>36 or below</strong>. Handicap cards or digital federation profiles from USGA, WHS, or national golf bodies should be presented upon check-in.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E0D8C3] shadow-md royal-corner-box">
              <Clock size={26} className="text-gold-600 mb-4" />
              <h3 className="font-cinzel text-lg font-bold text-[#0A2916] mb-2">Pace of Play</h3>
              <p className="font-body text-xs sm:text-sm text-[#455A4C] leading-relaxed">
                Target round time for an 18-hole fourball is <strong>3 hours 50 minutes</strong>. Course marshals coordinate groups to ensure an unhindered, majestic round for all players on the estate.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E0D8C3] shadow-md royal-corner-box">
              <Award size={26} className="text-gold-600 mb-4" />
              <h3 className="font-cinzel text-lg font-bold text-[#0A2916] mb-2">Attire &amp; Spikes</h3>
              <p className="font-body text-xs sm:text-sm text-[#455A4C] leading-relaxed">
                Traditional collared golf shirts and tailored trousers or bermuda shorts are required. Soft spikes only to protect the delicate Bermuda TifDwarf championship greens.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E8E2D4] bg-[#F5F2EB]">
          <div className="max-w-[1520px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#0A2916]">
                Course Photography Gallery
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden group relative min-h-[240px] border border-[#E0D8C3] shadow-md">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <p className="absolute bottom-3 left-3 right-3 text-xs text-white font-body">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Course;
