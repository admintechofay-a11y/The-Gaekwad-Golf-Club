import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Utensils,
  Wine,
  Coffee,
  Users,
  Maximize,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  Layers,
  Crown,
  ChevronRight,
  X,
  FileText
} from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { diningVenues, clubInfo } from '../data/coursesData';

export function Dining() {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVenueForModal, setSelectedVenueForModal] = useState('');
  
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    venue: 'star-of-the-south',
    eventType: 'Golf Tournament Banquet',
    date: '',
    guestCount: '50-100',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const filterCategories = [
    { id: 'ALL', label: 'All Palace Venues', count: 8 },
    { id: 'INDOOR', label: 'Indoor Ballrooms & Halls', count: 3 },
    { id: 'TERRACE', label: 'Golf Terraces & Lounges', count: 3 },
    { id: 'OUTDOOR', label: 'Estate Lawns & Poolside', count: 2 },
  ];

  const filteredVenues = diningVenues.filter((venue) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'INDOOR') {
      return venue.id === 'star-of-the-south' || venue.id === 'eugenie-hall' || venue.id === 'darbar-hall';
    }
    if (selectedFilter === 'TERRACE') {
      return venue.id === 'sunset-terrace' || venue.id === 'golf-view-terrace' || venue.id === 'raja-ravi-verma';
    }
    if (selectedFilter === 'OUTDOOR') {
      return venue.id === 'sunken-garden' || venue.id === 'pool-side-lawns';
    }
    return true;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  const openEnquiryModal = (venueId) => {
    if (venueId) {
      setEnquiryForm((prev) => ({ ...prev, venue: venueId }));
      setSelectedVenueForModal(venueId);
    }
    setIsModalOpen(true);
    setSubmitted(false);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.email || !enquiryForm.phone) {
      alert('Please provide your name, email address, and contact number.');
      return;
    }
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
            backgroundImage: `linear-gradient(to top, rgba(7, 23, 14, 0.95) 0%, rgba(7, 23, 14, 0.75) 50%, rgba(7, 23, 14, 0.92) 100%), url('/images/dining/star-of-the-south.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-black/60 pointer-events-none" />

          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-body uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-md">
              <Crown size={14} className="text-gold-400" />
              <span>Palace Banqueting &amp; Clubhouse Gastronomy &middot; Lukshmi Vilas Palace Estate</span>
            </div>

            <h1 className="font-cinzel font-bold text-3xl sm:text-6xl text-white tracking-wide leading-tight mb-6">
              Royal Banqueting, Terraces &amp; Grand Dining
            </h1>

            <p className="font-display italic text-lg sm:text-2xl text-gold-100/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Where century-old royal state rooms meet panoramic 18th fairway vistas, offering an extraordinary fusion of Baroda royal culinary recipes and international haute cuisine.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openEnquiryModal('star-of-the-south')}
                className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm flex items-center gap-2"
              >
                <Sparkles size={16} />
                <span>Enquire For Private Banquet</span>
              </button>

              <a
                href="#venues"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-body text-xs font-semibold uppercase tracking-wider border border-white/25 transition-all flex items-center gap-2"
              >
                <span>Explore 8 Royal Venues</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Quick Highlights Bar */}
        <section className="border-b border-[#E8E2D4] bg-white py-6 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#0A2916]">8 Venues</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Indoor &amp; Outdoor</span>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C6D23]">2,000+</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Gala Lawn Capacity</span>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#0A2916]">1890 Est.</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">State Dining Heritage</span>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C6D23]">18th Green</span>
              <span className="block text-[11px] font-body uppercase tracking-wider text-[#526658] mt-1 font-semibold">Panoramic Fairway Views</span>
            </div>
          </div>
        </section>

        {/* Culinary Philosophy Editorial */}
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block">
                The Heritage Table
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#0A2916] leading-tight">
                Authentic Royal Hospitality In The Footsteps of Kings
              </h2>
              <p className="font-body text-[#3D5245] text-sm sm:text-base leading-relaxed">
                Culinary traditions at Gaekwad Golf Club are anchored in the imperial court feasts of the Baroda dynasty. Our kitchens bring together heritage Maratha and Gujarati royal preparations, coastal seafood from the Arabian Sea, and continental bistro classics for discerning golfers.
              </p>
              <p className="font-body text-[#526658] text-xs sm:text-sm leading-relaxed">
                Whether savouring a crisp post-round brew in the 19th Hole Spike Bar, dining under starlight on the Sunset Terrace overlooking the illuminated Lukshmi Vilas Palace, or hosting a high-stakes corporate gala in the pillar-free Star of the South ballroom, every event is rendered with royal majesty.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8E2D4]">
                <div className="p-4 rounded-xl bg-white border border-gold-400/30 shadow-sm">
                  <Utensils size={20} className="text-gold-600 mb-2" />
                  <h4 className="font-cinzel text-xs font-bold text-[#0A2916]">Baroda Thali</h4>
                  <p className="text-[11px] text-[#526658] mt-1">Curated seasonal palace recipes.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gold-400/30 shadow-sm">
                  <Wine size={20} className="text-gold-600 mb-2" />
                  <h4 className="font-cinzel text-xs font-bold text-[#0A2916]">The Cellar</h4>
                  <p className="text-[11px] text-[#526658] mt-1">Rare malts &amp; fine international vintages.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gold-400/30 shadow-sm">
                  <Coffee size={20} className="text-gold-600 mb-2" />
                  <h4 className="font-cinzel text-xs font-bold text-[#0A2916]">High Tea</h4>
                  <p className="text-[11px] text-[#526658] mt-1">Served daily at 4 PM on the terrace.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-gold-400/30 shadow-sm group">
                  <img
                    src="/images/dining/sunset-terrace.jpg"
                    alt="Sunset Terrace Dining"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold-400/30 shadow-sm group">
                  <img
                    src="/images/dining/eugenie-hall.jpg"
                    alt="Eugenie Hall Banquet"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden border border-gold-400/30 shadow-sm group">
                  <img
                    src="/images/palace/darbar-hall.jpg"
                    alt="Historic Darbar Hall"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold-400/30 shadow-sm group">
                  <img
                    src="/images/dining/star-of-the-south.jpg"
                    alt="Star of the South Ballroom"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venues Showcase Section */}
        <section id="venues" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#E8E2D4]">
          <div className="text-center mb-12">
            <span className="font-body text-xs text-[#8C6D23] uppercase tracking-[0.2em] font-bold block mb-2">
              Estate Spaces &amp; Banqueting
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-[#0A2916]">
              The 8 Historic Venues
            </h2>
            <p className="font-body text-[#526658] text-xs sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              Explore our versatile portfolio of indoor ballrooms, open-air golf terraces, and monumental heritage amphitheatre lawns.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-body font-semibold transition-all duration-300 ${
                    selectedFilter === cat.id
                      ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-[#07170E] font-bold shadow-sm'
                      : 'bg-white border border-[#E0D8C3] text-[#3D5245] hover:border-gold-500/40 hover:text-[#0A2916]'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue) => (
              <div
                key={venue.id}
                className="group rounded-3xl overflow-hidden bg-white border border-gold-400/30 hover:border-gold-500/60 transition-all duration-500 flex flex-col justify-between shadow-[0_10px_30px_rgba(10,41,22,0.06)] hover:shadow-xl royal-corner-box"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase font-body font-bold tracking-wider bg-black/70 backdrop-blur-md text-gold-300 border border-gold-500/30">
                        {venue.floor}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-white font-body bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                        <Users size={13} className="text-gold-400" />
                        <span>{venue.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-body bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                        <Maximize size={13} className="text-gold-400" />
                        <span>{venue.area.split('(')[0].trim()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] uppercase font-body tracking-[0.2em] text-[#8C6D23] font-bold block mb-1">
                      {venue.type}
                    </span>
                    <h3 className="font-cinzel font-bold text-xl text-[#0A2916] group-hover:text-gold-700 transition-colors">
                      {venue.name}
                    </h3>
                    <p className="font-body text-xs text-[#526658] mt-2.5 line-clamp-3 leading-relaxed font-normal">
                      {venue.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#E8E2D4] text-[11px] text-[#526658] flex items-center justify-between font-body">
                      <span>Dimensions:</span>
                      <span className="text-[#0A2916] font-mono text-[10px] font-semibold">{venue.dimensions}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(venue.id)}
                    className="w-full py-3 rounded-xl bg-white hover:bg-gold-500 text-[#0A2916] hover:text-[#07170E] font-body text-xs font-bold uppercase tracking-wider border border-gold-400/50 hover:border-gold-500 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Enquire This Venue</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Banquets Booking CTA Banner */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-[#0A2916] via-[#0E351D] to-[#0A2916] border border-gold-400/50 p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(10,41,22,0.25)] relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 w-64 h-64 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

            <Crown size={32} className="text-gold-400 mx-auto mb-4" />
            <h2 className="font-cinzel font-bold text-2xl sm:text-4xl text-white tracking-wide">
              Host An Unforgettable Royal Celebration
            </h2>
            <p className="font-display italic text-lg sm:text-xl text-gold-100/90 max-w-2xl mx-auto mt-2 mb-8">
              From golf society dinners to international conferences and fairy-tale palace weddings against the floodlit Lukshmi Vilas Palace facade.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openEnquiryModal('sunken-garden')}
                className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm"
              >
                Request Custom Proposal
              </button>
              <a
                href={`tel:${clubInfo.phone.split('/')[0].trim()}`}
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-body text-xs font-semibold uppercase tracking-wider border border-white/25 transition-all flex items-center gap-2"
              >
                <Phone size={14} className="text-gold-400" />
                <span>Call Banquet Concierge</span>
              </a>
            </div>
          </div>
        </section>

        {/* BANQUET ENQUIRY MODAL */}
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

              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-body tracking-[0.25em] text-[#8C6D23] font-bold block mb-1">
                      Event Concierge
                    </span>
                    <h3 className="font-cinzel font-bold text-2xl text-[#0A2916]">
                      Palace Banquet &amp; Dining Enquiry
                    </h3>
                    <p className="font-body text-xs text-[#526658] mt-1 font-normal">
                      Our Royal Events Officer will respond with custom floorplans and catering menus within 4 hours.
                    </p>
                  </div>

                  <form onSubmit={handleEnquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={enquiryForm.name}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. Vikramaditya Singh"
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
                          value={enquiryForm.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={enquiryForm.email}
                        onChange={handleInputChange}
                        required
                        placeholder="vikram@royalestate.in"
                        className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Preferred Palace Venue
                        </label>
                        <select
                          name="venue"
                          value={enquiryForm.venue}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        >
                          {diningVenues.map((v) => (
                            <option key={v.id} value={v.id} className="text-[#14241A]">
                              {v.name} ({v.capacity})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Event Classification
                        </label>
                        <select
                          name="eventType"
                          value={enquiryForm.eventType}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        >
                          <option value="Golf Tournament Banquet">Golf Tournament Banquet</option>
                          <option value="Corporate Gala & Conference">Corporate Gala &amp; Conference</option>
                          <option value="Royal Wedding Celebration">Royal Wedding Celebration</option>
                          <option value="Private Family Milestone">Private Family Milestone</option>
                          <option value="VIP High-Tea & Sundowner">VIP High-Tea &amp; Sundowner</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Proposed Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={enquiryForm.date}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                          Estimated Guest Count
                        </label>
                        <select
                          name="guestCount"
                          value={enquiryForm.guestCount}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors font-body"
                        >
                          <option value="Under 50 Guests">Under 50 Guests</option>
                          <option value="50-100 Guests">50-100 Guests</option>
                          <option value="100-250 Guests">100-250 Guests</option>
                          <option value="250-500 Guests">250-500 Guests</option>
                          <option value="500-2,000+ Gala Guests">500-2,000+ Gala Guests</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-body tracking-wider text-[#8C6D23] mb-1 font-bold">
                        Specific Catering or Setup Requirements
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={enquiryForm.notes}
                        onChange={handleInputChange}
                        placeholder="Mention bar preferences, dietary specifications, AV requirements, or tournament prize setup..."
                        className="w-full bg-[#FAF8F5] border border-[#E0D8C3] text-[#14241A] text-xs rounded-xl p-3 focus:outline-none focus:border-gold-500 transition-colors resize-none font-body"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2"
                      >
                        <Sparkles size={15} />
                        <span>Transmit Banquet Dossier Request</span>
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
                    Request Received By Banquet Office
                  </h3>
                  <p className="font-body text-xs text-[#526658] mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0A2916]">{enquiryForm.name}</strong>. The Lukshmi Vilas Palace Estate Banquet Concierge has logged your dossier for the{' '}
                    <strong>{diningVenues.find((v) => v.id === enquiryForm.venue)?.name || 'venue'}</strong>.
                  </p>
                  <p className="font-mono text-xs text-[#8C6D23] font-bold mt-3">
                    Reference: GGC-EVT-{Math.floor(1000 + Math.random() * 9000)}
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

Dining.propTypes = {};

export default Dining;
