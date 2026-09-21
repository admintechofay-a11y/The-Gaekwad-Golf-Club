import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Award,
  Target,
  Video,
  Activity,
  CheckCircle2,
  Phone,
  Mail,
  Crown,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  X
} from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { academyPrograms, clubInfo } from '../data/coursesData';

export function Academy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('PGA Individual Coaching');
  const [lessonBooked, setLessonBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    coach: 'Alistair Campbell, PGA Master',
    handicap: '18',
    date: '',
    timeSlot: 'Morning (08:00 - 11:00)',
    notes: '',
  });

  const coaches = [
    {
      name: 'Alistair Campbell',
      role: 'Head of Instruction & Master Professional',
      credential: 'Class A PGA Fellow &middot; 25 Yrs Experience',
      bio: 'Former European Tour coach specializing in links ball-striking, 3D biomechanics, and tournament course management under pressure.',
      specialties: ['TrackMan 4 Radar Analysis', 'Pot Bunker & Links Striking', 'Tournament Mental Routine'],
    },
    {
      name: 'Vikramjit Gaekwad',
      role: 'Senior Academy Coach & Junior Director',
      credential: 'TrackMan Master Certified &middot; Former National Amateur',
      bio: 'Architect of the 8-Week Junior Royal Champions program, nurturing emerging talent with video motion capture and athletic fundamentals.',
      specialties: ['Junior Development', 'SAM PuttLab Dynamics', 'Wedge Distance Matrix'],
    },
  ];

  const extendedPrograms = [
    ...academyPrograms,
    {
      id: 'ladies-clinic',
      title: "Ladies' Golf & High Tea Clinic",
      duration: 'Weekly 90 Min',
      rate: '₹3,200 / Session',
      desc: 'Welcoming group clinic covering full-swing fundamentals and putting, followed by afternoon tea on the Golf View Terrace.',
    },
  ];

  const handleOpenBooking = (programTitle) => {
    setSelectedProgram(programTitle);
    setIsModalOpen(true);
    setLessonBooked(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert('Please fill out all mandatory fields.');
      return;
    }
    const ref = 'GGC-ACAD-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(ref);
    setLessonBooked(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14241A]">
      <UtilityStrip />
      <Header />

      <main className="flex-1">
        {/* Full-bleed Luxury Hero */}
        <section
          className="relative py-28 sm:py-36 px-4 sm:px-8 text-center text-white overflow-hidden select-none bg-[#07170E]"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(7, 23, 14, 0.95) 0%, rgba(7, 23, 14, 0.75) 50%, rgba(7, 23, 14, 0.92) 100%), url('/images/dining/pool-side-lawns.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-black/60 pointer-events-none" />

          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-body uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-md">
              <Award size={14} className="text-gold-400" />
              <span>PGA Performance Center &middot; TrackMan 4 &middot; SAM PuttLab</span>
            </div>

            <h1 className="font-cinzel font-bold text-3xl sm:text-6xl text-white tracking-wide leading-tight mb-6">
              Gaekwad Golf Academy
            </h1>

            <p className="font-display italic text-lg sm:text-2xl text-gold-100/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Pairing centuries of golfing wisdom with modern radar telemetry, dedicated short-game complexes, and world-class PGA instruction.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenBooking('PGA Individual Coaching')}
                className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm flex items-center gap-2"
              >
                <Sparkles size={16} />
                <span>Reserve Assessment Session</span>
              </button>

              <a
                href="#curriculums"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-body text-xs font-semibold uppercase tracking-wider border border-white/25 transition-all flex items-center gap-2"
              >
                <span>Explore Curriculums</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Facilities Overview Grid */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
              World-Class Technology
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916]">
              The Training Grounds of Champions
            </h2>
            <p className="font-body text-[#526658] text-xs sm:text-base mt-3 leading-relaxed">
              Designed for tournament golfers and ambitious learners seeking scientific clarity, biomechanical optimization, and measurable score reductions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-gold-400/30 hover:border-gold-500/60 transition-all duration-300 shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl royal-corner-box">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-400/50 flex items-center justify-center text-gold-600 mb-4 shadow-sm">
                <Target size={24} />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">
                300-Yard Turf Range
              </h3>
              <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                Extensive natural Bermuda grass tees overlooking the palace canopy, with laser-calibrated target greens and Titleist Tour practice balls.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gold-400/30 hover:border-gold-500/60 transition-all duration-300 shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl royal-corner-box">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-400/50 flex items-center justify-center text-gold-600 mb-4 shadow-sm">
                <Video size={24} />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">
                TrackMan 4 Radar Studio
              </h3>
              <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                Dual radar telemetry tracking 28 ball-flight and club metrics simultaneously, integrated with 240fps multi-angle high-speed cameras.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gold-400/30 hover:border-gold-500/60 transition-all duration-300 shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl royal-corner-box">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-400/50 flex items-center justify-center text-gold-600 mb-4 shadow-sm">
                <Activity size={24} />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">
                SAM PuttLab Studio
              </h3>
              <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                Ultrasound analysis of face rotation, impact dynamics, launch consistency, and stroke tempo on tour-grade Bermuda TifDwarf putting surfaces.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gold-400/30 hover:border-gold-500/60 transition-all duration-300 shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl royal-corner-box">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-400/50 flex items-center justify-center text-gold-600 mb-4 shadow-sm">
                <Crown size={24} />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">
                Short Game Complex
              </h3>
              <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                A dedicated 4-acre sanctuary featuring revetted pot bunkers, tight fairway run-offs, and undulating chipping greens.
              </p>
            </div>
          </div>
        </section>

        {/* Structured Programs Section */}
        <section id="curriculums" className="py-20 px-4 sm:px-8 bg-[#F5F2EB] border-y border-[#E8E2D4]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
                Curated Instruction
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916]">
                Instruction Programs &amp; Masterclasses
              </h2>
              <p className="font-body text-[#526658] text-xs sm:text-base mt-3 leading-relaxed">
                Whether refining your tournament ball-flight or taking your first steps into the game, our certified PGA instructors offer personalized pathways.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {extendedPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="rounded-3xl p-6 bg-white border border-[#E0D8C3] hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-body mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-gold-50 border border-gold-400/40 text-[#8C6D23] font-bold">
                        {prog.duration}
                      </span>
                      <span className="font-cinzel font-bold text-[#0A2916] text-sm">
                        {prog.rate}
                      </span>
                    </div>

                    <h3 className="font-cinzel font-bold text-xl text-[#0A2916] mt-3 mb-2">
                      {prog.title}
                    </h3>

                    <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#E8E2D4]">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking(prog.title)}
                      className="w-full py-3 rounded-xl bg-white hover:bg-gold-500 text-[#0A2916] hover:text-[#07170E] font-body text-xs font-bold uppercase tracking-wider border border-gold-400/60 hover:border-gold-500 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Book Program</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PGA Coaching Faculty */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
              Faculty &amp; Mentorship
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916]">
              PGA Master Professionals
            </h2>
            <p className="font-body text-[#526658] text-xs sm:text-base mt-3 leading-relaxed">
              Learn under coaches certified by the British and Indian PGA, bringing international tour coaching methodologies to Vadodara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coaches.map((c, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-gold-400/30 hover:border-gold-500/60 transition-all duration-300 shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl royal-corner-box"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gold-50 border border-gold-400 flex items-center justify-center text-[#8C6D23] font-cinzel font-bold text-xl shadow-sm">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-xl text-[#0A2916]">
                      {c.name}
                    </h3>
                    <span className="text-[11px] font-body text-[#8C6D23] font-bold block">
                      {c.role}
                    </span>
                    <span
                      className="text-[10px] text-[#526658] font-body block mt-0.5"
                      dangerouslySetInnerHTML={{ __html: c.credential }}
                    />
                  </div>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#3D5245] leading-relaxed font-normal mb-5">
                  {c.bio}
                </p>

                <div className="pt-4 border-t border-[#E8E2D4]">
                  <span className="text-[10px] uppercase tracking-widest text-[#8C6D23] font-bold block mb-2">
                    Core Specializations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {c.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E0D8C3] text-[11px] text-[#3D5245] font-body"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className="bg-white rounded-3xl border border-gold-400/50 max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto text-[#14241A]">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>

              {!lessonBooked ? (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-body tracking-[0.25em] text-[#8C6D23] font-bold block mb-1">
                      Academy Concierge
                    </span>
                    <h3 className="font-cinzel font-bold text-2xl text-[#0A2916]">
                      Reserve Golf Tuition Session
                    </h3>
                    <p className="font-body text-xs text-[#526658] mt-1 font-normal">
                      Selected: <strong className="text-[#0A2916]">{selectedProgram}</strong>
                    </p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Golfer Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleFormChange}
                          required
                          placeholder="e.g. Rohaan Mehta"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleFormChange}
                          required
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleFormChange}
                          required
                          placeholder="rohaan@example.com"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Current Handicap / Level
                        </label>
                        <input
                          type="text"
                          name="handicap"
                          value={form.handicap}
                          onChange={handleFormChange}
                          placeholder="e.g. 15 or Beginner"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Preferred Coach
                        </label>
                        <select
                          name="coach"
                          value={form.coach}
                          onChange={handleFormChange}
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        >
                          <option value="Alistair Campbell, PGA Master">Alistair Campbell, PGA Master</option>
                          <option value="Vikramjit Gaekwad, Senior Coach">Vikramjit Gaekwad, Senior Coach</option>
                          <option value="First Available PGA Professional">First Available PGA Professional</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Time Slot Preference
                        </label>
                        <select
                          name="timeSlot"
                          value={form.timeSlot}
                          onChange={handleFormChange}
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        >
                          <option value="Early Morning (06:30 - 08:30)">Early Morning (06:30 - 08:30)</option>
                          <option value="Morning (08:30 - 11:30)">Morning (08:30 - 11:30)</option>
                          <option value="Afternoon (14:00 - 16:30)">Afternoon (14:00 - 16:30)</option>
                          <option value="Twilight Studio (16:30 - 18:30)">Twilight Studio (16:30 - 18:30)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                        Specific Focus Areas
                      </label>
                      <textarea
                        name="notes"
                        rows={2}
                        value={form.notes}
                        onChange={handleFormChange}
                        placeholder="e.g. Driver slice correction, green reading, short game distance control..."
                        className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl p-3 focus:outline-none focus:border-gold-500 transition-colors resize-none font-body"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2"
                      >
                        <ShieldCheck size={16} />
                        <span>Confirm Tuition Reservation</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-4 shadow-sm">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="font-cinzel font-bold text-2xl text-[#0A2916]">
                    Lesson Booking Confirmed
                  </h3>
                  <p className="font-body text-xs text-[#526658] mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0A2916]">{form.name}</strong>. Your session for{' '}
                    <strong>{selectedProgram}</strong> with <strong>{form.coach}</strong> has been slotted into the academy register.
                  </p>
                  <p className="font-mono text-xs text-[#8C6D23] font-bold mt-3">
                    Reference: {bookingRef}
                  </p>
                  <p className="font-body text-[11px] text-[#526658] mt-2">
                    Please arrive 15 minutes early at the TrackMan 4 Academy Desk to warm up on the turf range.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#0A2916] text-white font-body text-xs font-bold uppercase tracking-wider hover:bg-[#153E23] transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

Academy.propTypes = {};

export default Academy;
