import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Crown,
  Landmark,
  Compass,
  History,
  Shield,
  MapPin,
  Clock,
  Award,
  ChevronRight,
  ArrowRight,
  Sparkles,
  TreePine,
  Feather
} from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { clubInfo } from '../data/coursesData';

const TIMELINE = [
  {
    year: '1890',
    title: 'The Palace Rises',
    subtitle: 'Major Charles Mant & Robert Fellows Chisholm',
    desc: 'Commissioned by the visionary Maharaja Sayajirao Gaekwad III, Lukshmi Vilas Palace is completed in the Indo-Saracenic architectural style. Spanning over 500 rooms and estimated at four times the size of Buckingham Palace, it stands as the grandest private residence constructed in the 19th century.',
    image: '/images/palace/palace-facade.jpg',
  },
  {
    year: '1900',
    title: 'The Golden Age of Royal Art',
    subtitle: 'Raja Ravi Varma Studio at the Palace',
    desc: 'The legendary master painter Raja Ravi Varma establishes his royal studio on the palace grounds upon invitation of the Maharaja, creating immortal masterworks of mythological epics and royal portraiture that still grace the state rooms and Maharaja Fatehsingh Museum today.',
    image: '/images/dining/raja-ravi-verma.jpg',
  },
  {
    year: '1930s',
    title: 'Fairways Amidst the Domes',
    subtitle: 'Maharaja Pratapsinhrao Gaekwad',
    desc: 'Avid sportsman Maharaja Pratapsinhrao Gaekwad lays out the first private golf links amidst the palace grounds, weaving fairways between royal tamarind groves, banyan canopies, and historic water stepwells for royal matches and visiting international ambassadors.',
    image: '/images/golf/palace-golf-view.jpg',
  },
  {
    year: '1990s',
    title: 'Championship Re-engineering',
    subtitle: 'Maharaja Samarjitsinh Gaekwad',
    desc: 'Under the guidance of Maharaja Samarjitsinh Gaekwad, a distinguished Ranji Trophy cricketer and championship golfer, the layout is expertly re-engineered into an 18-hole championship test with tournament Bermuda greens and revetted pot bunkers.',
    image: '/images/palace/palace-night.jpg',
  },
  {
    year: 'Today',
    title: 'A Living Royal Sanctuary',
    subtitle: 'Gaekwad Golf Club & Palace Estate',
    desc: 'India\'s only golf course woven through active royal palace grounds. The estate balances world-class links golf with architectural conservation, heritage tourism, and the continuing residence of the Gaekwad royal family.',
    image: '/images/palace/darbar-hall.jpg',
  },
];

const ARCHITECTURAL_WONDERS = [
  {
    title: 'The Indo-Saracenic Facade',
    category: 'Architecture',
    image: '/images/palace/palace-facade.jpg',
    desc: 'A breathtaking synthesis of Mughal domes, Hindu stone chhatris, Gothic lancet arches, and Venetian balconies constructed from Makrana marble and Agra red sandstone.',
  },
  {
    title: 'The Darbar Throne Hall',
    category: 'State Rooms',
    image: '/images/palace/darbar-hall.jpg',
    desc: 'The monumental royal courtroom featuring intricate Venetian mosaic floors laid by Italian craftsmen, Belgian stained-glass windows depicting royal legends, and crystal chandeliers.',
  },
  {
    title: 'Grand Marble Staircase',
    category: 'Palace Interior',
    image: '/images/palace/grand-staircase.jpg',
    desc: 'A monumental Italian Carrara marble staircase flanked by historic bronze sculptures by Felici and cases preserving centuries of royal sporting memorabilia and hickory golf clubs.',
  },
  {
    title: 'The Royal Dynastic Crest',
    category: 'Dynastic Insignia',
    image: '/images/palace/sayajirao-statue.jpg',
    desc: 'The official insignia of the Gaekwad Dynasty, featuring royal swords and Sanskrit inscriptions that symbolize duty, courage, and selfless royal stewardship for Baroda.',
  },
];

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14241A]">
      <UtilityStrip />
      <Header />

      <main className="flex-1">
        {/* Full-bleed Luxury Hero */}
        <section
          className="relative py-28 sm:py-36 px-4 sm:px-8 text-center text-white overflow-hidden select-none bg-[#07170E]"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(7, 23, 14, 0.95) 0%, rgba(7, 23, 14, 0.75) 50%, rgba(7, 23, 14, 0.92) 100%), url('/images/palace/palace-facade.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-black/60 pointer-events-none" />

          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-body uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-md">
              <Crown size={14} className="text-gold-400" />
              <span>1890 &bull; Gaekwad Dynasty &bull; Lukshmi Vilas Palace Estate</span>
            </div>

            <h1 className="font-cinzel font-bold text-3xl sm:text-6xl text-white tracking-wide leading-tight mb-6">
              The Royal Heritage of Gaekwad Golf Club
            </h1>

            <p className="font-display italic text-lg sm:text-2xl text-gold-100/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Four times the size of Buckingham Palace. 500 royal acres. The untold chronicle of how an 1890 princely palace became home to India&apos;s most extraordinary golf course.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/booking"
                className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm flex items-center gap-2"
              >
                <Sparkles size={16} />
                <span>Walk In The Footsteps of Kings</span>
              </Link>

              <a
                href="#timeline"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-body text-xs font-semibold uppercase tracking-wider border border-white/25 transition-all flex items-center gap-2"
              >
                <span>Explore Royal Timeline</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Heritage Key Metrics */}
        <section className="border-b border-[#E8E2D4] bg-white py-6 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#0A2916]">1890</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Palace Completed</span>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C6D23]">500 Rooms</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">World&apos;s Grandest Residence</span>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#0A2916]">500 Acres</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Royal Estate Canopy</span>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C6D23]">18 Holes</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Active Palace Links</span>
            </div>
          </div>
        </section>

        {/* Royal Dynastic Narrative */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block">
                The Dynastic Story
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#0A2916] leading-tight">
                Where Progressive Rulers Celebrated The Royal Game
              </h2>
              <p className="font-body text-[#3D5245] text-sm sm:text-base leading-relaxed">
                Lukshmi Vilas Palace is not a relic frozen in time; it is the vibrant, beating heart of the Gaekwad family and Baroda&apos;s proud civic identity. Built by the progressive reformer Maharaja Sayajirao Gaekwad III &mdash; a monarch who championed free universal education, public libraries, and fine arts &mdash; the estate was envisioned as a monument of modern enlightenment.
              </p>
              <p className="font-body text-[#526658] text-xs sm:text-sm leading-relaxed">
                In the 1930s, his successor Maharaja Pratapsinhrao Gaekwad transformed these sprawling estate grounds into a golfing sanctuary, sculpting fairways around historic water stepwells and beneath the gaze of 300-foot palace towers. Today, under the patronage of Maharaja Samarjitsinh Gaekwad, the golf course stands among the finest private sporting clubs in Asia.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-gold-400/50 shadow-md">
                <img
                  src="/images/palace/sayajirao-statue.jpg"
                  alt="Maharaja Sayajirao Gaekwad III"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-widest text-gold-300 font-body block font-semibold">
                    The Founding Visionary
                  </span>
                  <h3 className="font-cinzel font-bold text-xl text-white mt-1">
                    H.H. Maharaja Sayajirao Gaekwad III
                  </h3>
                  <p className="font-display italic text-xs text-gold-200/90 mt-1">
                    Architect of modern Baroda and commissioner of Lukshmi Vilas Palace (1890).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chronological Heritage Timeline */}
        <section id="timeline" className="py-20 px-4 sm:px-8 bg-[#F5F2EB] border-y border-[#E8E2D4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
                Century of Sporting Lore
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916]">
                Chronicles of the Estate
              </h2>
              <p className="font-body text-[#526658] text-xs sm:text-base mt-3 max-w-xl mx-auto">
                Tracing 135 years from architectural blueprints to India&apos;s most prestigious royal golf institution.
              </p>
            </div>

            <div className="space-y-12">
              {TIMELINE.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                    idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`md:col-span-5 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="rounded-2xl overflow-hidden border border-gold-400/40 shadow-sm group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className={`md:col-span-7 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gold-400/30 shadow-[0_10px_30px_rgba(10,41,22,0.06)] royal-corner-box">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-cinzel font-bold text-2xl sm:text-3xl text-[#8C6D23]">
                          {item.year}
                        </span>
                        <span className="h-px w-8 bg-gold-500/50" />
                        <span className="text-[11px] uppercase font-body tracking-wider text-[#0A2916] font-bold">
                          {item.subtitle}
                        </span>
                      </div>
                      <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-[#0A2916] mb-3">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[#3D5245] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architectural Marvels Grid */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
              Indo-Saracenic Magnificence
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916]">
              Architectural Wonders
            </h2>
            <p className="font-body text-[#526658] text-xs sm:text-base mt-3 max-w-2xl mx-auto">
              Every detail across the estate reflects royal grandeur, hand-crafted by Italian mosaic artisans, British architects, and master Indian stone sculptors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARCHITECTURAL_WONDERS.map((wonder, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-white border border-gold-400/30 hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl group royal-corner-box"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={wonder.image}
                      alt={wonder.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-body font-bold tracking-wider bg-black/70 text-gold-300 border border-gold-500/30">
                      {wonder.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-cinzel font-bold text-lg text-[#0A2916] group-hover:text-gold-700 transition-colors">
                      {wonder.title}
                    </h3>
                    <p className="font-body text-xs text-[#526658] mt-2 leading-relaxed font-normal">
                      {wonder.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Living Wildlife & Peacocks Section */}
        <section className="py-16 px-4 sm:px-8 border-t border-[#E8E2D4]">
          <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-gold-400/40 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-gold-50 border border-gold-400 flex items-center justify-center text-gold-600 shrink-0 shadow-sm">
              <Feather size={36} />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] uppercase font-body tracking-[0.25em] text-[#8C6D23] font-bold block">
                Living Nature Reserve
              </span>
              <h3 className="font-cinzel font-bold text-2xl text-[#0A2916]">
                The Sacred Peacocks &amp; Centuries-Old Tree Canopy
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#3D5245] leading-relaxed font-normal">
                Over 300 wild Indian peacocks roam freely across the fairways and greens of Gaekwad Golf Club. The course is protected as an ecological sanctuary, preserving century-old neem, tamarind, and banyan trees that have shaded kings for over a hundred years.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

About.propTypes = {};

export default About;
