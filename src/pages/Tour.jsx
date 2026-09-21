import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Compass,
  Eye,
  Maximize2,
  Sparkles,
  MapPin,
  ChevronRight,
  ArrowRight,
  Crown,
  Layers,
  Camera
} from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const VANTAGE_POINTS = [
  {
    id: 'palace-vista',
    name: 'Hole 4 Fairway & Palace Vista',
    category: 'Championship Course',
    image: '/images/golf/palace-golf-view.jpg',
    description: 'A magnificent panorama directly down the velvet fairway of the 4th hole. In the background, the 300-foot towers and Venetian arches of Lukshmi Vilas Palace rise majestically into the sky, serving as your alignment line.',
    coordinates: '22°17\'38.2"N 73°11\'30.4"E',
    elevation: '115 ft Above Sea Level',
  },
  {
    id: 'sunset-terrace',
    name: 'Sunset Terrace & 17th Road Hole',
    category: 'Clubhouse & Dining',
    image: '/images/dining/sunset-terrace.jpg',
    description: 'Standing on the first-floor open-air terrace. Look left to observe golfers navigating the 17th fairway; look right across the illuminated palace lawns as dusk descends upon Vadodara.',
    coordinates: '22°17\'40.1"N 73°11\'28.9"E',
    elevation: '142 ft Above Sea Level',
  },
  {
    id: 'darbar-hall',
    name: 'The Historic Darbar Throne Hall',
    category: 'Palace State Rooms',
    image: '/images/palace/darbar-hall.jpg',
    desc: 'The monumental royal state room featuring authentic Venetian mosaic tiled floors, Belgian stained-glass windows, and ornate crystal chandeliers where Maharaja Sayajirao Gaekwad III held formal state durbars.',
    description: 'The monumental royal state room featuring authentic Venetian mosaic tiled floors, Belgian stained-glass windows, and ornate crystal chandeliers where Maharaja Sayajirao Gaekwad III held formal state durbars.',
    coordinates: 'Palace Central Wing',
    elevation: 'State Level',
  },
  {
    id: 'moti-baug',
    name: 'Moti Baug Pavilion & 3rd Hole Bunkers',
    category: 'Championship Course',
    image: '/images/dining/moti-baug-pavilion.jpg',
    description: 'Looking toward the 3rd hole green with its steep revetted pot bunkers. Framed by centuries-old banyan and neem trees on the historic Moti Baug perimeter.',
    coordinates: '22°17\'32.5"N 73°11\'34.1"E',
    elevation: '112 ft Above Sea Level',
  },
  {
    id: 'grand-staircase',
    name: 'Grand Carrara Marble Staircase',
    category: 'Palace State Rooms',
    image: '/images/palace/grand-staircase.jpg',
    description: 'The sweeping Italian Carrara marble staircase lined with historic royal sporting trophies, antique hickory golf clubs, and royal portraits painted by Raja Ravi Varma.',
    coordinates: 'Palace Grand Foyer',
    elevation: 'State Foyer',
  },
  {
    id: 'pool-side',
    name: 'Pool Side Lawns & 12th Water Feature',
    category: 'Estate Lawns',
    image: '/images/dining/pool-side-lawns.jpg',
    description: 'An open-sky panorama overlooking the azure swimming pool and private royal dressing suites, bordering the water hazard guarding the approach to the 12th green.',
    coordinates: '22°17\'45.0"N 73°11\'22.3"E',
    elevation: '110 ft Above Sea Level',
  },
];

export function Tour() {
  const [activePoint, setActivePoint] = useState(VANTAGE_POINTS[0]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14241A]">
      <UtilityStrip />
      <Header />

      <main className="flex-1">
        {/* Full-bleed Luxury Hero */}
        <section
          className="relative py-28 sm:py-36 px-4 sm:px-8 text-center text-white overflow-hidden select-none bg-royal-950"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(10, 41, 22, 0.92) 0%, rgba(10, 41, 22, 0.75) 50%, rgba(5, 20, 11, 0.9) 100%), url('/images/golf/palace-golf-view.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-black/60 pointer-events-none" />

          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-gold-400/40 text-gold-300 text-xs font-body uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-md">
              <Compass size={14} className="text-gold-400" />
              <span>Interactive Estate Exploration &middot; Lukshmi Vilas Palace</span>
            </div>

            <h1 className="font-cinzel font-bold text-3xl sm:text-6xl text-white tracking-wide leading-tight mb-6 drop-shadow-md">
              Virtual Estate Vantage Tour
            </h1>

            <p className="font-cormorant italic text-lg sm:text-2xl text-gold-100/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Explore pivotal vistas where 19th-century royal Indo-Saracenic architecture meets five hundred acres of manicured championship golf links.
            </p>
          </div>
        </section>

        {/* Interactive Vantage Viewer */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Viewer Stage (8 cols) */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-white border border-[#E0D8C3] shadow-[0_15px_40px_rgba(10,41,22,0.06)] royal-corner-box">
              <div className="relative h-[400px] sm:h-[500px] overflow-hidden group">
                <img
                  src={activePoint.image}
                  alt={activePoint.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-gold-300 border border-gold-500/40 shadow-sm">
                    {activePoint.category}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="font-cinzel font-bold text-2xl sm:text-3xl text-white drop-shadow-md">
                    {activePoint.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-body text-zinc-200 mt-2">
                    <span className="flex items-center gap-1 text-gold-300 font-medium">
                      <MapPin size={13} /> {activePoint.coordinates}
                    </span>
                    <span className="text-gold-400/60">&bull;</span>
                    <span>{activePoint.elevation}</span>
                  </div>
                </div>
              </div>

              {/* Narrative Panel */}
              <div className="p-6 sm:p-8 bg-white border-t border-[#E8E2D4]">
                <span className="text-xs uppercase font-body tracking-[0.2em] text-[#8C6D23] font-bold block mb-2">
                  Historical &amp; Strategic Context
                </span>
                <p className="font-body text-sm sm:text-base text-[#3D5245] leading-relaxed">
                  {activePoint.description}
                </p>

                <div className="mt-8 pt-6 border-t border-[#E8E2D4] flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to="/booking"
                    className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md flex items-center gap-2"
                  >
                    <span>Book A Round Across These Grounds</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to="/dining"
                    className="px-6 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#F5F0E4] text-[#0A2916] font-body text-xs font-bold uppercase tracking-wider border border-[#D5CAAF] transition-all shadow-sm"
                  >
                    Explore Banquets
                  </Link>
                </div>
              </div>
            </div>

            {/* Vantage Switcher Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
                Select Vantage Point ({VANTAGE_POINTS.length})
              </span>

              <div className="space-y-3">
                {VANTAGE_POINTS.map((point) => (
                  <button
                    key={point.id}
                    type="button"
                    onClick={() => setActivePoint(point)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 ${
                      activePoint.id === point.id
                        ? 'bg-[#FFFDF5] border-2 border-[#B69225] shadow-md ring-2 ring-gold-400/20'
                        : 'bg-white border border-[#E0D8C3] hover:border-gold-500/50 hover:bg-[#FAF8F5] shadow-sm'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E0D8C3]">
                      <img
                        src={point.image}
                        alt={point.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] uppercase font-body text-[#8C6D23] font-bold block truncate">
                        {point.category}
                      </span>
                      <h3 className="font-cinzel font-bold text-sm text-[#0A2916] truncate">
                        {point.name}
                      </h3>
                      <span className="text-[11px] text-[#526658] font-body block truncate mt-0.5">
                        {point.coordinates}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

Tour.propTypes = {};

export default Tour;
