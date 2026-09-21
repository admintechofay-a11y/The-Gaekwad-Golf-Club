import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ShieldCheck, Sparkles, ArrowRight, Clock, Award } from 'lucide-react';

export function BookingCTA() {
  const navigate = useNavigate();
  const todayString = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(todayString);
  const [players, setPlayers] = useState('2 Players');
  const [roundType, setRoundType] = useState('18 Holes Championship');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking', { state: { date, players, roundType } });
  };

  return (
    <section
      aria-labelledby="booking-cta-heading"
      className="relative py-24 px-4 sm:px-8 overflow-hidden select-none bg-[#081F12] border-t border-gold-500/20"
    >
      {/* Background Image with Royal Deep Green Vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('/images/palace/palace-night.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081F12] via-[#0A2916]/95 to-[#081F12]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Subtext (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-body uppercase tracking-[0.2em] font-semibold mb-6 backdrop-blur-sm">
              <Sparkles size={13} className="text-gold-400" />
              <span>Royal Tee Sheet Open Year-Round</span>
            </div>

            <h2
              id="booking-cta-heading"
              className="font-cinzel font-bold text-[#FCFAF5] leading-tight text-3xl sm:text-4xl lg:text-5xl"
            >
              Walk In The Footsteps Of Kings
            </h2>

            <p className="font-body text-[#D1DDD5] text-base sm:text-lg leading-relaxed mt-6 max-w-xl font-light">
              Experience the privilege of playing 18 championship holes through the private 500-acre estate of Lukshmi Vilas Palace. Visitors and members are welcomed daily with traditional royal hospitality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300 flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div className="text-xs">
                  <div className="text-white font-semibold">Tee Times</div>
                  <div className="text-emerald-100/70">06:30 AM – Sunset</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300 flex-shrink-0">
                  <Award size={16} />
                </div>
                <div className="text-xs">
                  <div className="text-white font-semibold">Heritage Caddies</div>
                  <div className="text-emerald-100/70">Available Every Round</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300 flex-shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div className="text-xs">
                  <div className="text-white font-semibold">Handicap Rule</div>
                  <div className="text-emerald-100/70">Max 36 Index</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Booking Crisp Light Luxury Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-500/35 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <h3 className="font-cinzel text-xl font-bold text-[#0A2916] mb-2">
                Reserve Your Royal Tee Time
              </h3>
              <p className="font-body text-xs text-[#55695B] mb-6">
                Direct online reservation via the official Gaekwad Golf Club booking engine.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] font-body uppercase tracking-widest text-[#55695B] font-bold mb-1.5 block">
                    Round Format
                  </label>
                  <select
                    value={roundType}
                    onChange={(e) => setRoundType(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D9D0BE] text-[#0A2916] font-semibold text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="18 Holes Championship">18 Holes Championship</option>
                    <option value="9 Holes Palace Loop">9 Holes Palace Loop</option>
                    <option value="The Maharaja's Fourball">The Maharaja's Fourball Package</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-body uppercase tracking-widest text-[#55695B] font-bold mb-1.5 block">
                    Date of Play
                  </label>
                  <input
                    type="date"
                    min={todayString}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-[#FAF8F5] border border-[#D9D0BE] text-[#0A2916] font-semibold text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-body uppercase tracking-widest text-[#55695B] font-bold mb-1.5 block">
                    Golfers Count
                  </label>
                  <select
                    value={players}
                    onChange={(e) => setPlayers(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D9D0BE] text-[#0A2916] font-semibold text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="1 Player">1 Player (Single)</option>
                    <option value="2 Players">2 Players (Pair)</option>
                    <option value="3 Players">3 Players</option>
                    <option value="4 Players">4 Players (Full Group)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="gold-shimmer-btn w-full py-4 rounded-xl text-[#0A1A0F] font-body text-xs font-bold uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
                >
                  <Calendar size={15} />
                  <span>Check Tee-Sheet Availability</span>
                  <ArrowRight size={14} />
                </button>

                <div className="flex items-center justify-between pt-3 text-[11px] text-[#718276] font-body">
                  <span>Instant digital pass issued</span>
                  <Link to="/booking" className="text-gold-700 font-semibold hover:underline">
                    View Green Fees &rarr;
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;

