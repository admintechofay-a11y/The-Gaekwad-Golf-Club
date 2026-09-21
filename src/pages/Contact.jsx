import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Car,
  Plane,
  Train,
  Crown,
  Sparkles,
  ArrowRight,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { clubInfo } from '../data/coursesData';

const DEPARTMENTS = [
  {
    name: 'Secretariat & Managing Committee',
    email: 'secretary@lvpalace.co.in',
    phone: '+91-8511411155',
    hours: 'Mon–Sat: 09:30 AM – 06:00 PM',
    desc: 'Membership admissions, reciprocal club arrangements, governance, and society charters.',
  },
  {
    name: 'Pro Shop & Starter Desk',
    email: 'golf@lvpalace.co.in',
    phone: '+91-8511116901',
    hours: 'Daily: 06:00 AM – 07:00 PM',
    desc: 'Daily tee times, equipment hire, heritage caddies, and visitor registrations.',
  },
  {
    name: 'Palace Banquets & Hospitality',
    email: 'sales@lvpalace.co.in',
    phone: '+91-8511411155',
    hours: 'Mon–Sun: 10:00 AM – 07:00 PM',
    desc: 'Corporate tournaments, galas, private dinners at Star of the South, and wedding hire.',
  },
  {
    name: 'Gaekwad Golf Academy',
    email: 'academy@lvpalace.co.in',
    phone: '+91-8511116901',
    hours: 'Tue–Sun: 06:30 AM – 06:30 PM',
    desc: 'TrackMan 4 radar sessions, SAM PuttLab lessons, and Junior Champions enrolment.',
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [docketNumber, setDocketNumber] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Pro Shop & Starter Desk',
    handicap: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill in your name, email, and inquiry message.');
      return;
    }
    const docket = 'GGC-SEC-' + Math.floor(1000 + Math.random() * 9000);
    setDocketNumber(docket);
    setSubmitted(true);
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
            backgroundImage: `linear-gradient(to top, rgba(7, 23, 14, 0.95) 0%, rgba(7, 23, 14, 0.75) 50%, rgba(7, 23, 14, 0.92) 100%), url('/images/palace/palace-night.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-black/60 pointer-events-none" />

          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-body uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-md">
              <Crown size={14} className="text-gold-400" />
              <span>The Royal Secretariat &middot; Lukshmi Vilas Palace Estate</span>
            </div>

            <h1 className="font-cinzel font-bold text-3xl sm:text-6xl text-white tracking-wide leading-tight mb-6">
              Contact &amp; Estate Access
            </h1>

            <p className="font-display italic text-lg sm:text-2xl text-gold-100/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Direct communication with the Club Secretariat, Pro Shop starter desk, banquet managers, and royal concierge.
            </p>
          </div>
        </section>

        {/* Primary Contact Pillar Cards */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-gold-400/30 flex flex-col justify-between shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl transition-all royal-corner-box">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-400/50 flex items-center justify-center text-gold-600 mb-6 shadow-sm">
                  <MapPin size={24} />
                </div>
                <h3 className="font-cinzel font-bold text-2xl text-[#0A2916] mb-2">
                  Estate Location
                </h3>
                <p className="font-body text-xs text-[#526658] leading-relaxed mb-4">
                  Lukshmi Vilas Palace Estate<br />
                  Gate #2, J.N. Marg (Rajmahal Road)<br />
                  Vadodara, Gujarat 390001, India
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E2D4] text-[11px] font-body text-[#8C6D23] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-gold-600" />
                <span>Gate #2 Security Clearance Required</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gold-400/30 flex flex-col justify-between shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl transition-all royal-corner-box">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-400/50 flex items-center justify-center text-gold-600 mb-6 shadow-sm">
                  <Phone size={24} />
                </div>
                <h3 className="font-cinzel font-bold text-2xl text-[#0A2916] mb-2">
                  Telephone Lines
                </h3>
                <div className="font-body text-xs text-[#526658] leading-relaxed mb-4 space-y-2">
                  <div>
                    <span className="text-[10px] text-[#8CA08E] uppercase tracking-wider block font-semibold">Clubhouse &amp; Banquets:</span>
                    <a href="tel:+918511411155" className="text-[#0A2916] font-bold hover:text-gold-600 text-sm">
                      +91-8511411155
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8CA08E] uppercase tracking-wider block font-semibold">Pro Shop &amp; Starter Desk:</span>
                    <a href="tel:+918511116901" className="text-[#0A2916] font-bold hover:text-gold-600 text-sm">
                      +91-8511116901
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E8E2D4] text-[11px] font-body text-[#526658] flex items-center gap-1.5 font-medium">
                <Clock size={13} className="text-gold-600" />
                <span>Daily Lines Open: 06:00 AM – 07:00 PM IST</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gold-400/30 flex flex-col justify-between shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl transition-all royal-corner-box">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-400/50 flex items-center justify-center text-gold-600 mb-6 shadow-sm">
                  <Mail size={24} />
                </div>
                <h3 className="font-cinzel font-bold text-2xl text-[#0A2916] mb-2">
                  Official Email
                </h3>
                <div className="font-body text-xs text-[#526658] leading-relaxed mb-4 space-y-2">
                  <div>
                    <span className="text-[10px] text-[#8CA08E] uppercase tracking-wider block font-semibold">Managing Secretary:</span>
                    <a href="mailto:secretary@lvpalace.co.in" className="text-[#8C6D23] font-bold hover:underline">
                      secretary@lvpalace.co.in
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8CA08E] uppercase tracking-wider block font-semibold">Banquets &amp; Galas:</span>
                    <a href="mailto:sales@lvpalace.co.in" className="text-[#8C6D23] font-bold hover:underline">
                      sales@lvpalace.co.in
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E8E2D4] text-[11px] font-body text-[#526658]">
                Guaranteed response within 4 business hours
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Department Directory */}
        <section className="py-16 px-4 sm:px-8 border-t border-[#E8E2D4] bg-[#F5F2EB]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-gold-400/30 shadow-[0_10px_30px_rgba(10,41,22,0.06)] royal-corner-box">
              <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
                Secretariat Dispatch
              </span>
              <h2 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#0A2916] mb-6">
                Send a Message to the Estate
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center">
                  <CheckCircle2 size={44} className="text-emerald-700 mx-auto mb-3" />
                  <h3 className="font-cinzel font-bold text-2xl text-[#0A2916] mb-1">
                    Correspondence Dispatched
                  </h3>
                  <p className="font-body text-xs text-[#526658] leading-relaxed mb-2">
                    Thank you, <strong className="text-[#0A2916]">{formState.name}</strong>. The Managing Secretary has received your message regarding{' '}
                    <strong>{formState.department}</strong> and will respond to <strong>{formState.email}</strong> promptly.
                  </p>
                  <p className="font-mono text-xs text-[#8C6D23] font-bold">
                    Docket ID: {docketNumber}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#0A2916] text-white font-body text-xs font-bold uppercase tracking-wider hover:bg-[#153E23] transition-colors"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="e.g. eleanor@estate.in"
                        className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                        Department
                      </label>
                      <select
                        name="department"
                        value={formState.department}
                        onChange={handleChange}
                        className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                      >
                        {DEPARTMENTS.map((d, idx) => (
                          <option key={idx} value={d.name} className="text-[#14241A]">
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                      Inquiry Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Please detail your tee time preference, reciprocal letter request, event dates, or membership interest..."
                      className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl p-3 focus:outline-none focus:border-gold-500 transition-colors resize-none font-body"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>Transmit Official Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Department Directory */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
                Department Directory
              </span>
              {DEPARTMENTS.map((dept, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#E8E2D4] hover:border-gold-500/50 transition-all duration-300 shadow-sm"
                >
                  <h3 className="font-cinzel font-bold text-base text-[#0A2916]">
                    {dept.name}
                  </h3>
                  <p className="font-body text-xs text-[#526658] mt-1 font-normal leading-relaxed">
                    {dept.desc}
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#E8E2D4] flex flex-wrap items-center justify-between text-xs font-body">
                    <a href={`mailto:${dept.email}`} className="text-[#8C6D23] font-bold hover:underline">
                      {dept.email}
                    </a>
                    <span className="text-[#0A2916] font-semibold">{dept.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation & Access Guide */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
              Arrival Concierge
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916]">
              Reaching Lukshmi Vilas Palace Estate
            </h2>
            <p className="font-body text-[#526658] text-xs sm:text-base mt-3 max-w-2xl mx-auto">
              Conveniently situated in the historic core of Vadodara, Gujarat with straightforward connections to airports, rail terminals, and national expressways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-white border border-gold-400/30 text-center shadow-[0_10px_30px_rgba(10,41,22,0.05)] royal-corner-box">
              <Plane size={32} className="text-gold-600 mx-auto mb-3" />
              <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">By Air</h3>
              <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                <strong className="text-[#0A2916]">Vadodara Airport (BDQ):</strong> 6.5 km / 15 minutes by private taxi.<br />
                <strong className="text-[#0A2916]">Ahmedabad Int&apos;l (AMD):</strong> 110 km / 90 minutes via NE-1 Expressway.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gold-400/30 text-center shadow-[0_10px_30px_rgba(10,41,22,0.05)] royal-corner-box">
              <Train size={32} className="text-gold-600 mx-auto mb-3" />
              <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">By Rail</h3>
              <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                <strong className="text-[#0A2916]">Vadodara Junction (BRC):</strong> 3.5 km / 10 minutes.<br />
                Direct Vande Bharat and Rajdhani express connections from Mumbai (4 hrs) and New Delhi (10 hrs).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gold-400/30 text-center shadow-[0_10px_30px_rgba(10,41,22,0.05)] royal-corner-box">
              <Car size={32} className="text-gold-600 mx-auto mb-3" />
              <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">By Road &amp; Gate Entry</h3>
              <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                Access is strictly via <strong className="text-[#0A2916]">Palace Gate #2 on Rajmahal Road (J.N. Marg)</strong>.<br />
                Security personnel will direct you to dedicated parking and clubhouse pro shop.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

Contact.propTypes = {};

export default Contact;
