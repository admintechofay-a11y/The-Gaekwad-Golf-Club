import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Crown, Award, ChevronRight, Users, Compass, Globe, Trophy } from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import CourseStats from '../components/sections/CourseStats';
import SplitEditorial from '../components/sections/SplitEditorial';
import HolesSection from '../components/sections/HolesSection';
import BookingCTA from '../components/sections/BookingCTA';
import EditorialCards from '../components/sections/EditorialCards';
import Newsletter from '../components/sections/Newsletter';
import { iconicLandmarks, diningVenues, packages } from '../data/coursesData';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14241A]">
      <UtilityStrip />
      <Header />

      <main className="flex-1">
        {/* Full-bleed Hero with carousel & quick booking bar */}
        <Hero />

        {/* 5-Metric Quick Stats Glass Bar */}
        <CourseStats />

        {/* Royal Privileges Quick Strip */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D4] bg-white">
          <div className="max-w-[1520px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-gold-400/30 shadow-sm">
              <Compass className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <div>
                <span className="font-cinzel text-xs font-bold text-[#0A2916] block">500 Royal Acres</span>
                <span className="text-[11px] text-[#526658]">Exclusive Palace Grounds</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-gold-400/30 shadow-sm">
              <Trophy className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <div>
                <span className="font-cinzel text-xs font-bold text-[#0A2916] block">10.8 Stimpmeter</span>
                <span className="text-[11px] text-[#526658]">Championship Tifdwarf</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-gold-400/30 shadow-sm">
              <Crown className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <div>
                <span className="font-cinzel text-xs font-bold text-[#0A2916] block">Royal Caddie Corps</span>
                <span className="text-[11px] text-[#526658]">Senior Estate Guides</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-gold-400/30 shadow-sm">
              <Globe className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <div>
                <span className="font-cinzel text-xs font-bold text-[#0A2916] block">Reciprocal Clubs</span>
                <span className="text-[11px] text-[#526658]">Worldwide Prestige Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Iconic Landmarks of the Palace Course */}
        <section aria-label="Iconic Course Landmarks" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D4] bg-[#FAF8F5]">
          <div className="max-w-[1520px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-body font-bold text-[#8C6D23] uppercase tracking-[0.2em] mb-2">
                <Crown size={14} className="text-gold-600" />
                <span>Living Sporting Monuments</span>
              </div>
              <h2 className="font-cinzel font-bold text-[#0A2916] text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Iconic Landmarks of <span className="text-[#8C6D23]">Gaekwad Golf Club</span>
              </h2>
              <div className="royal-divider">
                <span className="text-gold-600 text-xs">❖</span>
              </div>
              <p className="font-display italic text-[#455A4C] text-lg sm:text-xl max-w-2xl mx-auto font-normal">
                Forged over nearly a century of royal play, each fairway is framed by monumental treasures of the 500-acre Lukshmi Vilas Palace estate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {iconicLandmarks.map((landmark) => (
                <div
                  key={landmark.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gold-400/30 hover:border-gold-500 flex flex-col group hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-xl royal-corner-box"
                >
                  <div className="h-56 relative overflow-hidden bg-zinc-100">
                    <img
                      src={landmark.image}
                      alt={landmark.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                    <span className="absolute bottom-3 left-3 bg-black/80 text-gold-300 text-[10px] font-cinzel uppercase font-bold px-3 py-1 rounded-md tracking-widest border border-gold-400/40 backdrop-blur-md">
                      {landmark.hole}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#0A2916] group-hover:text-gold-600 transition-colors">
                        {landmark.name}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[#526658] mt-2.5 leading-relaxed font-normal">
                        {landmark.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternating Split Editorial Sections with Real Palace Photography */}
        <SplitEditorial />

        {/* Interactive 18-Hole Tabstrip & Yardage Breakdown */}
        <HolesSection />

        {/* The Palace Banquets & Grand Venues Showcase */}
        <section aria-label="Palace Banquets" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D4] bg-[#F5F2EB]">
          <div className="max-w-[1520px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-[0.2em] text-[#8C6D23] mb-2">
                  <Sparkles size={13} className="text-gold-600" />
                  <span>Grand Royal Banquets &amp; Dining</span>
                </div>
                <h2 className="font-cinzel font-bold text-[#0A2916] text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Venues Fit For <span className="text-[#8C6D23]">Emperors</span>
                </h2>
                <p className="font-display italic text-[#455A4C] text-lg sm:text-xl mt-3 max-w-xl font-normal">
                  From moonlit cocktails on the Sunset Terrace to galas in Star of the South, celebrate amidst royal grandeur.
                </p>
              </div>

              <Link
                to="/dining"
                className="gold-shimmer-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[#07170E] font-body text-xs font-bold uppercase tracking-wider shadow-md flex-shrink-0"
              >
                <span>Explore All 8 Venues</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {diningVenues.slice(0, 4).map((venue) => (
                <div
                  key={venue.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gold-400/30 hover:border-gold-500 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between royal-corner-box shadow-md hover:shadow-xl"
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={venue.image}
                        alt={venue.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-cinzel text-gold-300 border border-gold-400/40">
                        {venue.type}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#0A2916] group-hover:text-gold-600 transition-colors">
                        {venue.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[#8C6D23] mt-1 mb-2.5 font-semibold">
                        <Users size={13} />
                        <span>Capacity: {venue.capacity} Guests</span>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-[#526658] line-clamp-3 font-normal leading-relaxed">
                        {venue.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1">
                    <Link
                      to="/dining"
                      className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-[#8C6D23] hover:text-[#0A2916] transition-colors flex items-center gap-1.5"
                    >
                      <span>Reserve Venue</span>
                      <ChevronRight size={13} className="text-gold-600" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Privilege Showcase */}
        <section aria-label="Membership Tiers" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D4] bg-[#FAF8F5]">
          <div className="max-w-[1520px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-body font-bold text-[#8C6D23] uppercase tracking-[0.2em] mb-2">
                <Award size={14} className="text-gold-600" />
                <span>Patronage &amp; Fellowship</span>
              </div>
              <h2 className="font-cinzel font-bold text-[#0A2916] text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Exclusive <span className="text-[#8C6D23]">Fellowship Tiers</span>
              </h2>
              <div className="royal-divider">
                <span className="text-gold-600 text-xs">❖</span>
              </div>
              <p className="font-display italic text-[#455A4C] text-lg sm:text-xl font-normal">
                Join a rare fraternity with unrestricted access to the championship links, private estate lounges, and reciprocal privileges worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl p-8 border border-gold-400/40 hover:border-gold-500 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl relative group hover:-translate-y-1.5 royal-corner-box"
                >
                  {pkg.badge && (
                    <span className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-amber-600 text-black text-[10px] font-cinzel uppercase font-bold tracking-widest shadow-md">
                      {pkg.badge}
                    </span>
                  )}

                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[#0A2916] mb-1 group-hover:text-gold-600 transition-colors">
                      {pkg.title}
                    </h3>
                    <div className="font-body text-xs text-[#8C6D23] font-semibold mb-4 tracking-wide">
                      {pkg.subtitle}
                    </div>
                    <div className="font-cinzel text-2xl font-bold text-[#0A2916] mb-6 pb-6 border-b border-[#E8E2D4]">
                      {pkg.price}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[#455A4C] font-normal">
                          <ShieldCheck size={16} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/booking"
                    state={{ packageSelected: pkg.title }}
                    className="gold-shimmer-btn w-full py-3.5 rounded-xl text-[#07170E] font-body text-xs font-bold uppercase tracking-wider text-center shadow-md"
                  >
                    Select Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA Section */}
        <BookingCTA />

        {/* Editorial Clubhouse Cards */}
        <EditorialCards />

        {/* Newsletter Gazette */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
