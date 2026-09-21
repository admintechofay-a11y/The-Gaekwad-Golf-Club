import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Crown,
  CreditCard,
  QrCode,
  Printer,
  Flag
} from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TEE_TIMES_MORNING = [
  '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'
];

const TEE_TIMES_AFTERNOON = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
];

const UNAVAILABLE_TIMES = ['08:00', '10:30', '14:00'];

export function Booking() {
  const location = useLocation();
  const todayString = new Date().toISOString().split('T')[0];

  // Step state (1: Format & Time, 2: Golfer Details, 3: Addons & Summary, 4: Confirmed Pass)
  const [step, setStep] = useState(1);

  // Step 1: Format & Time
  const [date, setDate] = useState(location.state?.date || todayString);
  const [roundType, setRoundType] = useState(location.state?.roundType || '18 Holes Championship');
  const [players, setPlayers] = useState(location.state?.players || '2 Players');
  const [caddieOption, setCaddieOption] = useState('Heritage Caddie');
  const [selectedTime, setSelectedTime] = useState(location.state?.selectedTime || '08:30');
  const [packageNote, setPackageNote] = useState(location.state?.packageSelected || '');
  const [step1Error, setStep1Error] = useState('');

  // Step 2: Golfer Details & Handicap
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [homeClub, setHomeClub] = useState('');
  const [handicap, setHandicap] = useState('18');
  const [golferType, setGolferType] = useState('Visitor');
  const [errors, setErrors] = useState({});

  // Step 3: Addons
  const [addRentalClubs, setAddRentalClubs] = useState(false);
  const [addHalfwayPack, setAddHalfwayPack] = useState(false);

  // Confirmation state
  const [bookingRef] = useState(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = 'GGC-';
    for (let i = 0; i < 6; i += 1) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  });
  const [booked, setBooked] = useState(false);

  // Price Calculation
  const playerCount = parseInt(players, 10) || 2;
  const baseRate = roundType.includes('9 Holes') ? 2200 : 4200;
  const caddieRate = caddieOption === 'Heritage Caddie' ? 900 : caddieOption === 'Buggy & Cart' ? 1400 : 500;
  const rentalRate = addRentalClubs ? 1500 * playerCount : 0;
  const refreshmentRate = addHalfwayPack ? 650 * playerCount : 0;
  const subtotal = baseRate * playerCount + caddieRate * Math.ceil(playerCount / 2) + rentalRate + refreshmentRate;
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!selectedTime) {
      setStep1Error('Please select a starting tee-sheet time.');
      return;
    }
    setStep1Error('');
    setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!name.trim()) err.name = 'Lead golfer name is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) err.email = 'Valid email address is required.';
    if (!phone.trim()) err.phone = 'Contact phone number is required.';
    if (!homeClub.trim()) err.homeClub = 'Home golf club / association is required.';
    const hcp = parseFloat(handicap);
    if (isNaN(hcp) || hcp < 0 || hcp > 36) {
      err.handicap = 'Official handicap index must be 36 or below.';
    }

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setErrors({});
    setStep(3);
  };

  const handleFinalConfirm = () => {
    setBooked(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14241A]">
      <UtilityStrip />
      <Header />

      <main className="flex-1 py-14 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Title */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-400/40 text-[#8C6D23] text-xs font-body uppercase tracking-[0.2em] font-semibold mb-3 shadow-sm">
              <Sparkles size={13} className="text-gold-600" />
              <span>Official Reservation Engine &middot; Lukshmi Vilas Palace Estate</span>
            </div>
            <h1 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916] tracking-wide">
              Gaekwad Golf Club Reservations
            </h1>
            <p className="font-body text-[#526658] text-sm sm:text-base max-w-xl mx-auto mt-2">
              Book your championship round on India's premier private royal palace course.
            </p>
            {packageNote && (
              <div className="inline-block mt-3 px-4 py-1 rounded-full bg-gold-100/70 border border-gold-400/50 text-[#8C6D23] font-body text-xs font-semibold">
                Active Package Selection: <strong>{packageNote}</strong>
              </div>
            )}
          </div>

          {/* Stepper Navigation */}
          {!booked && (
            <div className="mb-10">
              <div className="flex items-center justify-between relative max-w-2xl mx-auto px-4">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#E8E2D4] -translate-y-1/2 -z-0" />
                <div
                  className="absolute top-1/2 left-0 h-0.5 bg-gold-500 -translate-y-1/2 -z-0 transition-all duration-500"
                  style={{ width: step === 1 ? '15%' : step === 2 ? '50%' : '100%' }}
                />

                {[
                  { num: 1, label: 'Tee Slot & Format' },
                  { num: 2, label: 'Golfer Profile' },
                  { num: 3, label: 'Review & Billing' },
                ].map((s) => (
                  <div key={s.num} className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-cinzel text-xs font-bold transition-all duration-300 ${
                        step >= s.num
                          ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-[#07170E] shadow-sm'
                          : 'bg-white border border-[#D5CBB5] text-[#526658]'
                      }`}
                    >
                      {s.num}
                    </div>
                    <span
                      className={`text-[11px] font-body mt-2 font-semibold tracking-wider hidden sm:block ${
                        step >= s.num ? 'text-[#0A2916]' : 'text-[#8CA08E]'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Luxury Card Container */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-[0_15px_45px_rgba(10,41,22,0.06)] royal-corner-box">
            {/* STEP 1: DATE, ROUND TYPE & TEE TIME */}
            {step === 1 && (
              <form onSubmit={handleStep1Submit} className="space-y-8">
                <div className="border-b border-[#E8E2D4] pb-4">
                  <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#0A2916]">
                    Step 1 &mdash; Select Round Format &amp; Starting Tee Slot
                  </h2>
                  <p className="font-body text-xs text-[#526658] mt-1 font-normal">
                    Choose your game style, date of play, player count, and caddie service.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Round Format */}
                  <div>
                    <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-1.5 block">
                      Round Format
                    </label>
                    <select
                      value={roundType}
                      onChange={(e) => setRoundType(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-gold-500 transition-colors font-body"
                    >
                      <option value="18 Holes Championship">18 Holes Championship (₹4,200)</option>
                      <option value="9 Holes Palace Loop">9 Holes Palace Loop (₹2,200)</option>
                      <option value="The Maharaja's Fourball">The Maharaja's Fourball (₹18,500)</option>
                    </select>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-1.5 block">
                      Round Date
                    </label>
                    <input
                      type="date"
                      min={todayString}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-gold-500 transition-colors cursor-pointer font-body"
                    />
                  </div>

                  {/* Players Select */}
                  <div>
                    <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-1.5 block">
                      Number of Golfers
                    </label>
                    <select
                      value={players}
                      onChange={(e) => setPlayers(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-gold-500 transition-colors font-body"
                    >
                      <option value="1 Player">1 Single Golfer</option>
                      <option value="2 Players">2 Golfers (Twosome)</option>
                      <option value="3 Players">3 Golfers (Threesome)</option>
                      <option value="4 Players">4 Golfers (Fourball)</option>
                    </select>
                  </div>
                </div>

                {/* Caddie & Cart Options */}
                <div>
                  <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-2.5 block">
                    Caddie &amp; Buggy Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'Heritage Caddie', label: 'Royal Heritage Caddie', desc: '1-on-1 bag carrier & green reader (+₹900)' },
                      { id: 'Forecaddie', label: 'Forecaddie Group Service', desc: 'Assists full group on landing lines (+₹500)' },
                      { id: 'Buggy & Cart', label: 'Electric Golf Cart Rental', desc: '2-seater golf buggy with cooler (+₹1,400)' },
                    ].map((opt) => (
                      <label
                        key={opt.id}
                        className={`p-4 rounded-xl border cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                          caddieOption === opt.id
                            ? 'bg-[#FFFDF5] border-2 border-gold-500 shadow-sm'
                            : 'bg-[#FAF8F5] border-[#E0D8C3] hover:border-gold-400/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-body text-xs font-bold text-[#0A2916]">{opt.label}</span>
                          <input
                            type="radio"
                            name="caddieOption"
                            value={opt.id}
                            checked={caddieOption === opt.id}
                            onChange={(e) => setCaddieOption(e.target.value)}
                            className="accent-gold-600"
                          />
                        </div>
                        <span className="font-body text-[11px] text-[#526658] font-normal leading-relaxed">{opt.desc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Simulated Tee Time Grid */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold">
                      Morning Starting Slots (06:30 &ndash; 11:00)
                    </label>
                    <span className="text-[11px] text-[#526658] font-body">
                      Selected: <strong className="text-[#0A2916] font-mono font-bold">{selectedTime}</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
                    {TEE_TIMES_MORNING.map((time) => {
                      const isUnavailable = UNAVAILABLE_TIMES.includes(time);
                      const isSelected = selectedTime === time;

                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={isUnavailable}
                          onClick={() => {
                            setSelectedTime(time);
                            setStep1Error('');
                          }}
                          className={`py-3 px-2 rounded-xl font-body text-xs text-center transition-all duration-200 border ${
                            isUnavailable
                              ? 'opacity-40 cursor-not-allowed border-zinc-200 text-zinc-400 line-through bg-zinc-100'
                              : isSelected
                              ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-[#07170E] font-bold border-gold-400 shadow-sm'
                              : 'border-[#E0D8C3] text-[#243B2C] hover:border-gold-500/50 bg-[#FAF8F5] hover:bg-white hover:text-[#0A2916]'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>

                  <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-2.5 block mt-4">
                    Afternoon Starting Slots (12:00 &ndash; 16:30)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {TEE_TIMES_AFTERNOON.map((time) => {
                      const isUnavailable = UNAVAILABLE_TIMES.includes(time);
                      const isSelected = selectedTime === time;

                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={isUnavailable}
                          onClick={() => {
                            setSelectedTime(time);
                            setStep1Error('');
                          }}
                          className={`py-3 px-2 rounded-xl font-body text-xs text-center transition-all duration-200 border ${
                            isUnavailable
                              ? 'opacity-40 cursor-not-allowed border-zinc-200 text-zinc-400 line-through bg-zinc-100'
                              : isSelected
                              ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-[#07170E] font-bold border-gold-400 shadow-sm'
                              : 'border-[#E0D8C3] text-[#243B2C] hover:border-gold-500/50 bg-[#FAF8F5] hover:bg-white hover:text-[#0A2916]'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>

                  {step1Error && (
                    <span className="font-body text-xs text-rose-600 mt-2 block font-medium">{step1Error}</span>
                  )}
                </div>

                {/* Continue button */}
                <div className="pt-4 border-t border-[#E8E2D4] flex justify-end">
                  <button
                    type="submit"
                    className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm flex items-center gap-2"
                  >
                    <span>Proceed to Golfer Details</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: PERSONAL DETAILS & HANDICAP CERTIFICATION */}
            {step === 2 && (
              <form onSubmit={handleStep2Submit} className="space-y-8">
                <div className="border-b border-[#E8E2D4] pb-4">
                  <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#0A2916]">
                    Step 2 &mdash; Golfer Verification &amp; Handicap
                  </h2>
                  <p className="font-body text-xs text-[#526658] mt-1 font-normal">
                    All visiting players must hold an official handicap index of 36 or lower.
                  </p>
                </div>

                {/* Golfer Classification */}
                <div>
                  <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-3 block">
                    Golfer Classification
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Visitor', 'Member', 'Reciprocal Royal Club', 'Corporate Guest'].map((type) => (
                      <label
                        key={type}
                        className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                          golferType === type
                            ? 'bg-gold-50 border-2 border-gold-500 text-[#0A2916] font-bold shadow-sm'
                            : 'bg-[#FAF8F5] border-[#E0D8C3] text-[#3D5245] hover:border-gold-500/40'
                        }`}
                      >
                        <span>{type}</span>
                        <input
                          type="radio"
                          name="golferType"
                          value={type}
                          checked={golferType === type}
                          onChange={(e) => setGolferType(e.target.value)}
                          className="accent-gold-600"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-1.5 block">
                    Lead Golfer Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Maharaja Samarjitsinh Gaekwad"
                    className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors font-body"
                  />
                  {errors.name && <span className="font-body text-xs text-rose-600 mt-1 block font-medium">{errors.name}</span>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-1.5 block">
                      Email Address (Pass Sent Here) *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="golfer@domain.com"
                      className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors font-body"
                    />
                    {errors.email && <span className="font-body text-xs text-rose-600 mt-1 block font-medium">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-1.5 block">
                      Contact Telephone *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+91 98250 12345"
                      className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors font-body"
                    />
                    {errors.phone && <span className="font-body text-xs text-rose-600 mt-1 block font-medium">{errors.phone}</span>}
                  </div>
                </div>

                {/* Home Club & Handicap */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 rounded-2xl bg-[#FAF8F5] border border-gold-400/30">
                  <div>
                    <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-1.5 block">
                      Home Golf Club / Federation *
                    </label>
                    <input
                      type="text"
                      value={homeClub}
                      onChange={(e) => setHomeClub(e.target.value)}
                      required
                      placeholder="e.g. Royal Calcutta / Delhi GC / WHS"
                      className="w-full bg-white border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                    />
                    {errors.homeClub && <span className="font-body text-xs text-rose-600 mt-1 block font-medium">{errors.homeClub}</span>}
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-body tracking-widest text-[#8C6D23] font-bold mb-1.5 block">
                      Handicap Index (&le; 36) *
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="36"
                      value={handicap}
                      onChange={(e) => setHandicap(e.target.value)}
                      required
                      className="w-full bg-white border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                    />
                    {errors.handicap && <span className="font-body text-xs text-rose-600 mt-1 block font-medium">{errors.handicap}</span>}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#E8E2D4] flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-full border border-[#E0D8C3] bg-white text-[#3D5245] hover:text-[#0A2916] hover:bg-[#FAF8F5] font-body text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <ChevronLeft size={15} />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm flex items-center gap-2"
                  >
                    <span>Continue to Add-ons &amp; Review</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: REVIEW & LIVE ESTIMATE */}
            {step === 3 && (
              <div>
                {!booked ? (
                  <div className="space-y-8">
                    <div className="border-b border-[#E8E2D4] pb-4">
                      <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#0A2916]">
                        Step 3 &mdash; Luxury Add-ons &amp; Reservation Confirmation
                      </h2>
                      <p className="font-body text-xs text-[#526658] mt-1 font-normal">
                        Review your reservation parameters, select palace amenities, and confirm your tee-sheet reservation.
                      </p>
                    </div>

                    {/* Luxury Add-ons */}
                    <div className="space-y-4">
                      <h3 className="font-cinzel text-sm uppercase tracking-widest text-[#8C6D23] font-bold">
                        Palace Amenities &amp; Services
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label
                          className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                            addRentalClubs
                              ? 'bg-[#FFFDF5] border-2 border-gold-500 shadow-sm'
                              : 'bg-[#FAF8F5] border-[#E0D8C3] hover:border-gold-400/50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={addRentalClubs}
                            onChange={(e) => setAddRentalClubs(e.target.checked)}
                            className="mt-1 accent-gold-600"
                          />
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-cinzel text-sm font-bold text-[#0A2916]">
                                Callaway / TaylorMade Rental Set
                              </span>
                            </div>
                            <p className="font-body text-xs text-[#526658] mt-0.5 leading-relaxed">
                              Tour-grade titanium woods, forged irons &amp; Odyssey putter.
                            </p>
                            <span className="font-cinzel text-xs text-[#8C6D23] font-bold block mt-1.5">
                              +&#8377;1,500 / player
                            </span>
                          </div>
                        </label>

                        <label
                          className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                            addHalfwayPack
                              ? 'bg-[#FFFDF5] border-2 border-gold-500 shadow-sm'
                              : 'bg-[#FAF8F5] border-[#E0D8C3] hover:border-gold-400/50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={addHalfwayPack}
                            onChange={(e) => setAddHalfwayPack(e.target.checked)}
                            className="mt-1 accent-gold-600"
                          />
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-cinzel text-sm font-bold text-[#0A2916]">
                                Royal Pavilion Halfway Hamper
                              </span>
                            </div>
                            <p className="font-body text-xs text-[#526658] mt-0.5 leading-relaxed">
                              Fresh coconut water, gourmet sandwiches, electrolytes &amp; chilled fruit at 9th green.
                            </p>
                            <span className="font-cinzel text-xs text-[#8C6D23] font-bold block mt-1.5">
                              +&#8377;650 / player
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Reservation Summary Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gold-400/30">
                        <h4 className="font-cinzel text-xs uppercase tracking-widest text-[#0A2916] font-bold mb-3 pb-2 border-b border-[#E8E2D4]">
                          Flight Specifications
                        </h4>
                        <div className="space-y-2.5 text-xs font-body">
                          <div className="flex justify-between">
                            <span className="text-[#526658]">Date of Play:</span>
                            <span className="text-[#0A2916] font-semibold">{date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#526658]">Tee Time:</span>
                            <span className="text-[#8C6D23] font-bold">{selectedTime} IST</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#526658]">Format:</span>
                            <span className="text-[#0A2916] font-semibold">{roundType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#526658]">Party Size:</span>
                            <span className="text-[#0A2916] font-semibold">{players}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#526658]">Caddie Protocol:</span>
                            <span className="text-[#0A2916] font-semibold">{caddieOption}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#526658]">Lead Golfer:</span>
                            <span className="text-[#0A2916] font-semibold">{name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#526658]">Home Club / WHS:</span>
                            <span className="text-[#0A2916] font-semibold">{homeClub} (HCP {handicap})</span>
                          </div>
                        </div>
                      </div>

                      {/* Transparent Cost Breakdown */}
                      <div className="p-5 rounded-2xl bg-[#FFFDF5] border border-gold-400/40 flex flex-col justify-between shadow-sm">
                        <div>
                          <h4 className="font-cinzel text-xs uppercase tracking-widest text-[#8C6D23] font-bold mb-3 pb-2 border-b border-[#E8E2D4]">
                            Transparent Clubhouse Tariff
                          </h4>
                          <div className="space-y-2 text-xs font-body">
                            <div className="flex justify-between">
                              <span className="text-[#526658]">
                                Green Fee ({playerCount} {playerCount === 1 ? 'Golfer' : 'Golfers'}):
                              </span>
                              <span className="text-[#0A2916] font-semibold">&#8377;{(baseRate * playerCount).toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#526658]">
                                Caddie Service ({caddieOption}):
                              </span>
                              <span className="text-[#0A2916] font-semibold">&#8377;{(caddieRate * Math.ceil(playerCount / 2)).toLocaleString('en-IN')}</span>
                            </div>
                            {rentalRate > 0 && (
                              <div className="flex justify-between">
                                <span className="text-[#526658]">Rental Equipment:</span>
                                <span className="text-[#0A2916] font-semibold">&#8377;{rentalRate.toLocaleString('en-IN')}</span>
                              </div>
                            )}
                            {refreshmentRate > 0 && (
                              <div className="flex justify-between">
                                <span className="text-[#526658]">Halfway Pavilion Refreshments:</span>
                                <span className="text-[#0A2916] font-semibold">&#8377;{refreshmentRate.toLocaleString('en-IN')}</span>
                              </div>
                            )}
                            <div className="flex justify-between text-[#8CA08E]">
                              <span>Clubhouse GST (18%):</span>
                              <span>&#8377;{gst.toLocaleString('en-IN')}</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gold-400/30 mt-4 flex items-baseline justify-between">
                          <div>
                            <span className="text-xs uppercase font-body tracking-wider text-[#8C6D23] font-bold block">
                              Total Estimated Tariff
                            </span>
                            <span className="text-[10px] text-[#526658]">Payable at Clubhouse Pro Shop</span>
                          </div>
                          <div className="text-right">
                            <span className="font-cinzel text-2xl font-bold text-[#0A2916]">
                              &#8377;{grandTotal.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="pt-4 border-t border-[#E8E2D4] flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-full border border-[#E0D8C3] bg-white text-[#3D5245] hover:text-[#0A2916] hover:bg-[#FAF8F5] font-body text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <ChevronLeft size={15} />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleFinalConfirm}
                        className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm flex items-center gap-2"
                      >
                        <Crown size={16} />
                        <span>Confirm &amp; Issue Royal Pass</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* BOOKED CONFIRMATION VOUCHER */
                  <div className="py-6">
                    <div className="max-w-2xl mx-auto rounded-3xl bg-gradient-to-b from-[#0A2916] to-[#04150B] border-2 border-gold-400/60 p-6 sm:p-10 shadow-[0_20px_50px_rgba(10,41,22,0.3)] relative overflow-hidden text-white">
                      {/* Decorative Gold Header Ribbon */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-24 bg-gold-500/20 rounded-full blur-2xl" />

                      <div className="text-center pb-6 border-b border-gold-400/30 relative z-10">
                        <div className="w-14 h-14 mx-auto rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300 mb-3 shadow-gold-glow">
                          <CheckCircle2 size={32} />
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.3em] font-body text-gold-400 font-semibold block mb-1">
                          Reservation Confirmed
                        </span>
                        <h2 className="font-cinzel font-bold text-2xl sm:text-3xl text-white">
                          Official Royal Tee Pass
                        </h2>
                        <p className="font-display italic text-gold-200/90 text-base mt-1">
                          Lukshmi Vilas Palace Estate &middot; Established 1890
                        </p>
                      </div>

                      {/* Reference Badge */}
                      <div className="my-6 p-4 rounded-2xl bg-black/50 border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-[#BED0C4] font-body block">
                            Booking Pass Code
                          </span>
                          <span className="font-mono text-2xl font-bold text-gold-300 tracking-wider">
                            {bookingRef}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-white text-black">
                            <QrCode size={40} />
                          </div>
                          <div className="text-right sm:text-left">
                            <span className="text-[10px] uppercase tracking-widest text-[#BED0C4] block font-body">Status</span>
                            <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                              <ShieldCheck size={14} /> Confirmed on Sheet
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Key Details Matrix */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-body py-4 border-y border-white/15">
                        <div>
                          <span className="text-emerald-200/70 uppercase text-[10px] tracking-wider block">Lead Golfer</span>
                          <span className="text-white font-semibold mt-0.5 block">{name}</span>
                        </div>
                        <div>
                          <span className="text-emerald-200/70 uppercase text-[10px] tracking-wider block">Date of Play</span>
                          <span className="text-white font-semibold mt-0.5 block">{date}</span>
                        </div>
                        <div>
                          <span className="text-emerald-200/70 uppercase text-[10px] tracking-wider block">Tee Slot</span>
                          <span className="text-gold-300 font-bold mt-0.5 block">{selectedTime} IST</span>
                        </div>
                        <div>
                          <span className="text-emerald-200/70 uppercase text-[10px] tracking-wider block">Players</span>
                          <span className="text-white font-semibold mt-0.5 block">{players}</span>
                        </div>
                        <div>
                          <span className="text-emerald-200/70 uppercase text-[10px] tracking-wider block">Caddie Service</span>
                          <span className="text-white font-semibold mt-0.5 block">{caddieOption}</span>
                        </div>
                        <div>
                          <span className="text-emerald-200/70 uppercase text-[10px] tracking-wider block">Est. Tariff</span>
                          <span className="text-gold-300 font-bold mt-0.5 block">&#8377;{grandTotal.toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      {/* Arrival Directives */}
                      <div className="mt-6 p-4 rounded-xl bg-black/40 border border-gold-400/25 text-[11px] text-[#D8E4DC] space-y-1 font-body">
                        <div className="flex items-center gap-1.5 text-gold-300 font-semibold uppercase tracking-wider text-[10px] mb-1">
                          <Crown size={12} />
                          <span>Guest Etiquette &amp; Entry Guidelines</span>
                        </div>
                        <p>&bull; Enter via <strong>Gate #2, Lukshmi Vilas Palace Estate</strong> (Rajmahal Road).</p>
                        <p>&bull; Report to the Pro Shop desk 30 minutes prior to your tee-off time.</p>
                        <p>&bull; Strict dress code: Collared polo shirts, tailored golf shorts/trousers, and soft spikes.</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <button
                          type="button"
                          onClick={() => window.print()}
                          className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-body text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/20"
                        >
                          <Printer size={15} />
                          <span>Print Royal Pass</span>
                        </button>

                        <Link
                          to="/"
                          className="w-full sm:w-auto gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-full text-center shadow-sm"
                        >
                          Clubhouse Home
                        </Link>

                        <Link
                          to="/dining"
                          className="w-full sm:w-auto px-6 py-3 rounded-full border border-gold-400/40 text-gold-300 hover:bg-gold-500/10 font-body text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                        >
                          Palace Dining
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

Booking.propTypes = {};

export default Booking;
