import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Crown,
  CheckCircle2,
  Globe,
  Shield,
  Users,
  Mail,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Phone,
  Calendar,
  Award,
  FileCheck,
  X,
  Compass
} from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { clubInfo } from '../data/coursesData';

export function Membership() {
  const [activeTab, setActiveTab] = useState('tiers');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('Full 7-Day Royal Playing');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [appForm, setAppForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    handicap: '14.2',
    homeClub: 'Bombay Gymkhana',
    profession: '',
    proposer1: '',
    proposer2: '',
    notes: '',
  });

  const categories = [
    {
      id: 'patron-resident',
      title: 'Patron Resident & Household',
      badge: 'Royal Apex',
      highlight: true,
      tagline: 'The paramount estate privilege for distinguished residents and families.',
      benefits: [
        'Unrestricted 365-day playing rights for primary member, spouse, and children under 21',
        'Personal engraved locker in the Royal Heritage Pavilion',
        'Complimentary private golf cart storage & palace battery charging suite',
        '24 VIP guest rounds per annum with complimentary heritage caddies',
        'Priority private hire rights for Darbar Hall, Star of the South, and Sunken Garden',
        'Guaranteed tee-time reservations up to 30 days in advance',
      ],
    },
    {
      id: 'royal-playing',
      title: 'Full 7-Day Royal Playing',
      badge: 'Individual Premier',
      highlight: false,
      tagline: 'Complete tournament eligibility and daily access for passionate golfers.',
      benefits: [
        'Unlimited championship golf across 18 holes at Lukshmi Vilas Palace Estate',
        'Official World Handicap System (WHS) and Indian Golf Union registry maintenance',
        'Full access to Gaekwad Golf Academy, TrackMan 4 studio, and 300-yard turf range',
        'Access to all club stroke-play medals, captain’s prizes, and match-play trophies',
        'Privileged dining and lounge booking across all 8 palace terraces and restaurants',
        'Reciprocal playing rights at esteemed royal and historic golf clubs worldwide',
      ],
    },
    {
      id: 'diplomatic-overseas',
      title: 'Diplomatic & Overseas Fellow',
      badge: 'International',
      highlight: false,
      tagline: 'Designed for non-resident golfers, international diplomats, and frequent globetrotters.',
      benefits: [
        '30 complimentary rounds per annum with full member signing privileges',
        'Personalized travel & estate stay concierge at the Palace Heritage Suites',
        'Complimentary guided Lukshmi Vilas Palace museum passes for member guests',
        'Reciprocal arrangement network access in 18 countries across Europe, Asia & the Americas',
        'Reserved invitations to the annual Gaekwad Baroda Invitational Gala Week',
        'Complimentary golf bag shipping and climate-controlled clubhouse storage',
      ],
    },
    {
      id: 'corporate-patron',
      title: 'Corporate Patron Ambassador',
      badge: 'Enterprise',
      highlight: false,
      tagline: 'Executive sporting diplomacy and unmatched palace entertaining for leading enterprises.',
      benefits: [
        'Four transferable senior executive corporate playing nominations',
        'One complimentary annual Corporate Golf Day on the course (up to 40 players)',
        'Exclusive hire privileges for Star of the South and Eugenie Terrace for shareholder banquets',
        'Branded corporate championship tee gifts and official tournament administration',
        'Access to private state dining salons for high-stakes business hosting',
        'Dedicated corporate concierge for bespoke client golf clinics and itineraries',
      ],
    },
  ];

  const reciprocalClubs = [
    {
      name: 'Royal Calcutta Golf Club',
      location: 'Kolkata, India &middot; Est. 1829',
      note: 'Oldest golf club outside the British Isles',
    },
    {
      name: 'Delhi Golf Club (Lodhi Course)',
      location: 'New Delhi, India &middot; Est. 1930',
      note: 'Historic sanctuary amidst 15th-century Mughal monuments',
    },
    {
      name: 'Bombay Gymkhana & Willingdon',
      location: 'Mumbai, India &middot; Est. 1875 / 1917',
      note: 'Premier sporting society institutions of western India',
    },
    {
      name: 'The Wentworth Club & St Andrews Ties',
      location: 'Surrey, UK &middot; Heritage Alliance',
      note: 'Reciprocal overseas courtesy arrangements for traveling members',
    },
  ];

  const handleOpenApplication = (tierTitle) => {
    setSelectedTier(tierTitle);
    setIsModalOpen(true);
    setApplicationSubmitted(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAppForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAppSubmit = (e) => {
    e.preventDefault();
    if (!appForm.fullName || !appForm.email || !appForm.phone) {
      alert('Please fill out all mandatory fields.');
      return;
    }
    setApplicationSubmitted(true);
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
            backgroundImage: `linear-gradient(to top, rgba(7, 23, 14, 0.95) 0%, rgba(7, 23, 14, 0.75) 50%, rgba(7, 23, 14, 0.92) 100%), url('/images/palace/grand-staircase.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-black/60 pointer-events-none" />

          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-body uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-md">
              <Crown size={14} className="text-gold-400" />
              <span>Elected Fellowship &middot; Lukshmi Vilas Palace Estate &middot; Established 1890</span>
            </div>

            <h1 className="font-cinzel font-bold text-3xl sm:text-6xl text-white tracking-wide leading-tight mb-6">
              Royal Palace Membership
            </h1>

            <p className="font-display italic text-lg sm:text-2xl text-gold-100/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Entry into an august fellowship of sporting gentlemen and gentlewomen who revere the etiquette, heritage, and camaraderie of golf amidst 500 royal acres.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenApplication('Full 7-Day Royal Playing')}
                className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm flex items-center gap-2"
              >
                <Sparkles size={16} />
                <span>Apply For Royal Candidacy</span>
              </button>

              <a
                href="#categories"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-body text-xs font-semibold uppercase tracking-wider border border-white/25 transition-all flex items-center gap-2"
              >
                <span>View Classifications</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Heritage Trust Strip */}
        <section className="border-b border-[#E8E2D4] bg-white py-6 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#0A2916]">1890</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Founding Charter</span>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C6D23]">Strictly 450</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Capped Active Roster</span>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#0A2916]">18 Countries</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Reciprocal Access</span>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C6D23]">500 Acres</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Private Royal Estate</span>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
              Elected Fellowship Tiers
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916]">
              Membership Classifications
            </h2>
            <p className="font-body text-[#526658] text-xs sm:text-base mt-3 leading-relaxed">
              Admission is governed by the Club Constitution through formal proposal by two voting members of the General Committee, ensuring the preservation of palace traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between relative overflow-hidden royal-corner-box ${
                  cat.highlight
                    ? 'bg-gradient-to-b from-[#0A2916] to-[#04150B] text-white border-2 border-gold-400 shadow-[0_20px_50px_rgba(10,41,22,0.25)]'
                    : 'bg-white text-[#14241A] border border-gold-400/30 hover:border-gold-500/50 shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl'
                }`}
              >
                {cat.highlight && (
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/20 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span
                        className={`text-[10px] font-body uppercase tracking-widest font-bold px-3 py-1 rounded-full inline-block mb-2 ${
                          cat.highlight
                            ? 'bg-gold-500 text-[#07170E]'
                            : 'bg-gold-50 text-[#8C6D23] border border-gold-400/40'
                        }`}
                      >
                        {cat.badge}
                      </span>
                      <h3 className={`font-cinzel font-bold text-2xl ${cat.highlight ? 'text-white' : 'text-[#0A2916]'}`}>
                        {cat.title}
                      </h3>
                    </div>
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${
                      cat.highlight ? 'bg-gold-500/20 border-gold-400 text-gold-300' : 'bg-gold-50 border-gold-400/50 text-gold-600'
                    }`}>
                      <Crown size={18} />
                    </div>
                  </div>

                  <p className={`font-body text-xs sm:text-sm mb-6 italic leading-relaxed ${cat.highlight ? 'text-gold-200/90' : 'text-[#526658]'}`}>
                    &ldquo;{cat.tagline}&rdquo;
                  </p>

                  <div className={`space-y-3 pt-4 border-t ${cat.highlight ? 'border-white/15' : 'border-[#E8E2D4]'}`}>
                    <h4 className={`font-cinzel text-[11px] uppercase tracking-widest font-bold mb-2 ${cat.highlight ? 'text-gold-300' : 'text-[#8C6D23]'}`}>
                      Exclusive Privileges
                    </h4>
                    {cat.benefits.map((b, idx) => (
                      <div key={idx} className={`flex items-start gap-2.5 text-xs font-body leading-relaxed ${cat.highlight ? 'text-[#D8E4DC]' : 'text-[#3D5245]'}`}>
                        <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${cat.highlight ? 'text-gold-400' : 'text-gold-600'}`} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-8 mt-6 border-t ${cat.highlight ? 'border-white/15' : 'border-[#E8E2D4]'}`}>
                  <button
                    type="button"
                    onClick={() => handleOpenApplication(cat.title)}
                    className={`w-full py-3.5 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm ${
                      cat.highlight
                        ? 'gold-shimmer-btn text-[#07170E]'
                        : 'bg-white hover:bg-gold-500 text-[#0A2916] hover:text-[#07170E] border border-gold-400/60 hover:border-gold-500'
                    }`}
                  >
                    <span>Request Candidacy Dossier</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admission Procedure Timeline */}
        <section className="py-20 px-4 sm:px-8 bg-[#F5F2EB] border-y border-[#E8E2D4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
                Traditional Protocol
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#0A2916]">
                The Royal Candidacy Protocol
              </h2>
              <p className="font-body text-[#526658] text-xs sm:text-base mt-3 max-w-xl mx-auto">
                In keeping with 135 years of royal sporting governance, the induction of new members follows a structured process of peer nomination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white border border-[#E0D8C3] text-center shadow-sm">
                <div className="w-12 h-12 mx-auto rounded-full bg-gold-50 border border-gold-400 text-[#8C6D23] font-cinzel font-bold flex items-center justify-center text-lg mb-4 shadow-sm">
                  01
                </div>
                <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">
                  Nomination &amp; Seconder
                </h3>
                <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                  A formal dossier must be proposed by an active member of at least five years&apos; standing and seconded by a member of the General Committee.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E0D8C3] text-center shadow-sm">
                <div className="w-12 h-12 mx-auto rounded-full bg-gold-50 border border-gold-400 text-[#8C6D23] font-cinzel font-bold flex items-center justify-center text-lg mb-4 shadow-sm">
                  02
                </div>
                <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">
                  Captain&apos;s Round &amp; Etiquette
                </h3>
                <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                  Prospective candidates play an introductory 9-hole round with the Club Captain or Vice-Captain to evaluate golf etiquette and sporting spirit.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E0D8C3] text-center shadow-sm">
                <div className="w-12 h-12 mx-auto rounded-full bg-gold-50 border border-gold-400 text-[#8C6D23] font-cinzel font-bold flex items-center justify-center text-lg mb-4 shadow-sm">
                  03
                </div>
                <h3 className="font-cinzel font-bold text-lg text-[#0A2916] mb-2">
                  Committee Balloting
                </h3>
                <p className="font-body text-xs text-[#526658] leading-relaxed font-normal">
                  The General Committee convenes quarterly for formal voting. Elected fellows are presented with the Club Blazer Crest and Royal Member Badge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reciprocal Clubs Network */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block">
                Worldwide Heritage Network
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#0A2916] leading-tight">
                Reciprocal Courtesy At Historic Sanctuaries
              </h2>
              <p className="font-body text-[#3D5245] text-xs sm:text-sm leading-relaxed">
                A Gaekwad Golf Club membership card unlocks privileged fairway courtesies and dining privileges across an international fraternity of peer royal institutions, dating back to the late 19th century.
              </p>
              <div className="p-4 rounded-xl bg-white border border-gold-400/40 shadow-sm">
                <span className="font-cinzel text-xs font-bold text-[#0A2916] block mb-1">
                  Letter of Introduction Service
                </span>
                <p className="font-body text-[11px] text-[#526658]">
                  Our Club Secretary office provides personalized Letters of Introduction to private clubs worldwide for traveling members.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reciprocalClubs.map((club, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#E8E2D4] hover:border-gold-500/50 shadow-sm transition-all duration-300"
                >
                  <Compass size={18} className="text-gold-600 mb-2" />
                  <h3 className="font-cinzel font-bold text-base text-[#0A2916]">
                    {club.name}
                  </h3>
                  <span
                    className="text-[11px] text-[#8C6D23] font-body block mt-0.5 font-semibold"
                    dangerouslySetInnerHTML={{ __html: club.location }}
                  />
                  <p className="font-body text-xs text-[#526658] mt-2 font-normal">
                    {club.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CANDIDACY APPLICATION MODAL */}
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

              {!applicationSubmitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-body tracking-[0.25em] text-[#8C6D23] font-bold block mb-1">
                      Membership Secretary
                    </span>
                    <h3 className="font-cinzel font-bold text-2xl text-[#0A2916]">
                      Candidacy Expression of Interest
                    </h3>
                    <p className="font-body text-xs text-[#526658] mt-1 font-normal">
                      Enrolling for: <strong className="text-[#0A2916]">{selectedTier}</strong>
                    </p>
                  </div>

                  <form onSubmit={handleAppSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Candidate Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={appForm.fullName}
                          onChange={handleFormChange}
                          required
                          placeholder="e.g. Samarjitsinh Gaekwad"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={appForm.phone}
                          onChange={handleFormChange}
                          required
                          placeholder="+91 98250 12345"
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
                          value={appForm.email}
                          onChange={handleFormChange}
                          required
                          placeholder="candidate@heritage.in"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Handicap Index / WHS
                        </label>
                        <input
                          type="text"
                          name="handicap"
                          value={appForm.handicap}
                          onChange={handleFormChange}
                          placeholder="e.g. 12.4 or Unofficial"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Primary Golf Club (If Any)
                        </label>
                        <input
                          type="text"
                          name="homeClub"
                          value={appForm.homeClub}
                          onChange={handleFormChange}
                          placeholder="e.g. Royal Calcutta / Willingdon"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Profession / Designation
                        </label>
                        <input
                          type="text"
                          name="profession"
                          value={appForm.profession}
                          onChange={handleFormChange}
                          placeholder="e.g. Managing Director / Advocate"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Proposer Name (Optional)
                        </label>
                        <input
                          type="text"
                          name="proposer1"
                          value={appForm.proposer1}
                          onChange={handleFormChange}
                          placeholder="Existing Member Name"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Seconder Name (Optional)
                        </label>
                        <input
                          type="text"
                          name="proposer2"
                          value={appForm.proposer2}
                          onChange={handleFormChange}
                          placeholder="Committee Member Name"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                        Brief Sporting Background
                      </label>
                      <textarea
                        name="notes"
                        rows={2}
                        value={appForm.notes}
                        onChange={handleFormChange}
                        placeholder="Years of playing golf, athletic achievements, or interests in club committees..."
                        className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl p-3 focus:outline-none focus:border-gold-500 transition-colors resize-none font-body"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2"
                      >
                        <FileCheck size={16} />
                        <span>Submit Royal Candidacy Form</span>
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
                    Candidacy Dossier Registered
                  </h3>
                  <p className="font-body text-xs text-[#526658] mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0A2916]">{appForm.fullName}</strong>. Your expression of interest for the{' '}
                    <strong>{selectedTier}</strong> has been received by the Club Secretary.
                  </p>
                  <p className="font-mono text-xs text-[#8C6D23] font-bold mt-3">
                    Application Docket: GGC-MEM-{Math.floor(1000 + Math.random() * 9000)}
                  </p>
                  <p className="font-body text-[11px] text-[#526658] mt-2">
                    The General Committee secretariat will review your credentials and contact you for the introductory Captain’s round.
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

Membership.propTypes = {};

export default Membership;
