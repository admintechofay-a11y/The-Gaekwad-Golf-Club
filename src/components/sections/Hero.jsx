import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Compass, ArrowRight, Sparkles, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: '/images/golf/palace-golf-view.jpg',
    badge: 'ESTATE SANCTUARY · HOLE 18 APPROACH',
    title: 'Where Royalty Meets The Fairway',
    subtitle: '18 championship holes sculpted beneath the grand minarets and Belgian stained glass of Lukshmi Vilas Palace.',
    statNumber: '1890',
    statLabel: 'Royal Dynasty Founding',
  },
  {
    image: '/images/golf/The-Gaekwad-Baroda-Golf-Club-Banner.jpg',
    badge: 'PRIVATE PALACE RESERVE · 500 ACRES',
    title: 'A Living Sporting Monument',
    subtitle: 'Conceived by Maharaja Pratapsinhrao Gaekwad for visiting nobility, international champions, and royal guests.',
    statNumber: '500',
    statLabel: 'Pristine Palace Acres',
  },
  {
    image: '/images/palace/palace-facade.jpg',
    badge: 'INDO-SARACENIC CROWN JEWEL',
    title: 'Four Times The Size Of Buckingham',
    subtitle: 'An architectural marvel designed by Major Charles Mant and Robert Chisholm with Venetian mosaics and Italian marble.',
    statNumber: '700+',
    statLabel: 'Protected Royal Peacocks',
  },
  {
    image: '/images/golf/The-Gaekwad-Baroda-Golf-Club-Gallery.jpg',
    badge: 'CHAMPIONSHIP SPECIFICATIONS',
    title: 'St Andrews Precision & Royal Grace',
    subtitle: 'Pristine Tifdwarf putting surfaces rolling at 10.8 Stimpmeter, guarded by deep revetted sand traps and tamarind groves.',
    statNumber: '6,400+',
    statLabel: 'Championship Yardage',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const oscRef = useRef([]);
  const navigate = useNavigate();

  // Quick booking state
  const todayStr = new Date().toISOString().split('T')[0];
  const [quickDate, setQuickDate] = useState(todayStr);
  const [quickRound, setQuickRound] = useState('18 Holes Championship');
  const [quickPlayers, setQuickPlayers] = useState('2 Players');
  const [quickTime, setQuickTime] = useState('08:00');

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Web Audio API Palace Ambience Generator (Harmonic Chimes & Breeze)
  const togglePalaceAmbience = () => {
    if (isAudioPlaying) {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setIsAudioPlaying(false);
    } else {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioContextRef.current = ctx;

        const notes = [220, 277.18, 329.63, 440, 554.37];
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.015, ctx.currentTime);
        gainNode.connect(ctx.destination);

        const oscillators = notes.map((freq, i) => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.15 + i * 0.05, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(2.5, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          osc.connect(gainNode);
          osc.start();
          return osc;
        });

        oscRef.current = oscillators;
        setIsAudioPlaying(true);
      } catch (err) {
        console.warn('Audio context unavailable:', err);
      }
    }
  };

  const handleQuickBook = (e) => {
    e.preventDefault();
    navigate('/booking', {
      state: {
        date: quickDate,
        roundType: quickRound,
        players: quickPlayers,
        selectedTime: quickTime,
      },
    });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0A2615] select-none">
      {/* Dynamic Background Carousel with Ken-Burns Motion */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.01 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${HERO_SLIDES[currentSlide].image})`,
            }}
          />
        </AnimatePresence>

        {/* Multi-layered Vignette Overlay dissolving into #FAF8F5 at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#05180C]/65 to-[#020A04]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030E07]/85 via-transparent to-[#030E07]/50" />
      </div>

      {/* Floating Palace Ambience & Slide Progress Controls */}
      <div className="absolute top-6 right-6 sm:right-10 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={togglePalaceAmbience}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-body transition-all duration-300 border backdrop-blur-md ${
            isAudioPlaying
              ? 'bg-gold-500/30 border-gold-400 text-gold-300 shadow-md'
              : 'bg-black/50 border-white/20 text-zinc-200 hover:text-white hover:border-gold-400'
          }`}
          title="Toggle Palace Estate Atmosphere Sound"
        >
          {isAudioPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
              <span className="text-gold-200">Palace Ambience &bull; Active</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-zinc-300" />
              <span>Palace Ambience</span>
            </>
          )}
        </button>

        {/* Slide Progress Indicators */}
        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-2 rounded-full border border-white/20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === idx
                  ? 'w-6 bg-gradient-to-r from-gold-300 to-amber-500'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Hero Showcase */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Royal Seal Category Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-gold-400/40 backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles size={13} className="text-gold-300 animate-pulse" />
            <span className="font-cinzel text-[10.5px] sm:text-xs font-semibold tracking-[0.22em] text-gold-200 uppercase">
              {HERO_SLIDES[currentSlide].badge}
            </span>
          </motion.div>

          {/* Majestic Title & Subtitle with AnimatePresence */}
          <div className="min-h-[160px] sm:min-h-[190px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-cinzel font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.14] tracking-wide drop-shadow-md">
                  {HERO_SLIDES[currentSlide].title}
                </h1>
                <p className="font-display italic text-lg sm:text-2xl text-[#E8EFE9] mt-4 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Metrics Bar & Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6">
            <Link
              to="/booking"
              className="gold-shimmer-btn inline-flex items-center gap-3 px-8 py-4 rounded-full text-[#07170E] font-body text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all whitespace-nowrap flex-shrink-0"
            >
              <Calendar size={16} />
              <span>Reserve Royal Tee Time</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/holes"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-body text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              <Compass size={16} className="text-gold-300" />
              <span>18-Hole Course Guide</span>
            </Link>

            {/* Slide Highlight Metric */}
            <div className="hidden md:flex items-center gap-3 border-l border-white/20 pl-6 my-1">
              <div>
                <span className="font-cinzel text-xl font-bold text-white block leading-none">
                  {HERO_SLIDES[currentSlide].statNumber}
                </span>
                <span className="font-body text-[10px] uppercase tracking-widest text-gold-300 mt-0.5 block">
                  {HERO_SLIDES[currentSlide].statLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luminous Light Royal Quick Booking Console */}
      <div className="relative z-20 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gold-500/35 shadow-[0_20px_50px_rgba(10,41,22,0.12)] royal-corner-box"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E2D4]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping inline-block" />
              <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.18em] text-[#0A2916] uppercase">
                Royal Tee-Sheet Priority Reservation
              </span>
            </div>
            <div className="flex items-center gap-4 text-[#526658] text-[11px] hidden sm:flex">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-gold-600" />
                PGA Caddie Included
              </span>
              <span>&bull;</span>
              <span>10.8 Stimpmeter Greens</span>
              <span>&bull;</span>
              <span className="text-emerald-700 font-semibold">Slots Available Today</span>
            </div>
          </div>

          <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* Format */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-cinzel tracking-widest text-[#8C6D23] font-bold mb-1.5">
                Round Format
              </label>
              <select
                value={quickRound}
                onChange={(e) => setQuickRound(e.target.value)}
                className="bg-[#FAF8F5] border border-[#E0D8C3] text-[#0A2916] font-medium text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-gold-500 transition-colors"
              >
                <option value="18 Holes Championship">18 Holes Championship (₹3,500)</option>
                <option value="9 Holes Twilight">9 Holes Twilight (₹2,200)</option>
                <option value="The Maharaja's Fourball">The Maharaja's Fourball (₹12,000)</option>
                <option value="Junior / Cadet Round">Junior / Cadet Round (₹1,500)</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-cinzel tracking-widest text-[#8C6D23] font-bold mb-1.5">
                Tee Date
              </label>
              <input
                type="date"
                min={todayStr}
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="bg-[#FAF8F5] border border-[#E0D8C3] text-[#0A2916] font-medium text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            {/* Players */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-cinzel tracking-widest text-[#8C6D23] font-bold mb-1.5">
                Golfer Count
              </label>
              <select
                value={quickPlayers}
                onChange={(e) => setQuickPlayers(e.target.value)}
                className="bg-[#FAF8F5] border border-[#E0D8C3] text-[#0A2916] font-medium text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-gold-500 transition-colors"
              >
                <option value="1 Player">1 Single Player</option>
                <option value="2 Players">2 Players (Pair)</option>
                <option value="3 Players">3 Players</option>
                <option value="4 Players">4 Players (Full Fourball)</option>
              </select>
            </div>

            {/* Preferred Time Window */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-cinzel tracking-widest text-[#8C6D23] font-bold mb-1.5">
                Time Window
              </label>
              <select
                value={quickTime}
                onChange={(e) => setQuickTime(e.target.value)}
                className="bg-[#FAF8F5] border border-[#E0D8C3] text-[#0A2916] font-medium text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-gold-500 transition-colors"
              >
                <option value="06:30">06:30 AM &middot; Dawn Prime</option>
                <option value="08:00">08:00 AM &middot; Morning Championship</option>
                <option value="10:30">10:30 AM &middot; Mid-Morning</option>
                <option value="14:00">02:00 PM &middot; Afternoon Links</option>
                <option value="15:45">03:45 PM &middot; Royal Golden Hour</option>
              </select>
            </div>

            {/* Action CTA */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="gold-shimmer-btn w-full py-3 rounded-xl text-[#07170E] font-body text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Check Availability</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
