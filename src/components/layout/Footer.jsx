import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail, Award, Clock } from 'lucide-react';
import { clubInfo } from '../../data/coursesData';

export function Footer() {
  const sections = [
    {
      title: 'The Royal Course',
      links: [
        { label: 'Course Overview', href: '/course' },
        { label: '18-Hole Interactive Guide', href: '/holes' },
        { label: 'Iconic Landmarks', href: '/course' },
        { label: 'Official Scorecard', href: '/holes' },
        { label: 'Book a Tee Time', href: '/booking' },
      ],
    },
    {
      title: 'Palace Banquets',
      links: [
        { label: 'Star of the South Ballroom', href: '/dining' },
        { label: 'Sunset Terrace Dining', href: '/dining' },
        { label: 'Eugenie Regal Hall', href: '/dining' },
        { label: 'Sunken Garden Lawns', href: '/dining' },
        { label: 'Golf View Veranda', href: '/dining' },
      ],
    },
    {
      title: 'Academy & Club',
      links: [
        { label: 'PGA Individual Coaching', href: '/academy' },
        { label: 'Junior Champions Academy', href: '/academy' },
        { label: 'Royal Short Game Clinic', href: '/academy' },
        { label: 'Membership Tiers', href: '/membership' },
        { label: 'Gaekwad Invitational', href: '/news' },
      ],
    },
    {
      title: 'Heritage & Estate',
      links: [
        { label: 'Maharaja Sayajirao III (1890)', href: '/about' },
        { label: 'Pratapsinhrao Gaekwad (1930s)', href: '/about' },
        { label: 'Lukshmi Vilas Palace Estate', href: '/about' },
        { label: 'Palace Museum & Armory', href: '/about' },
        { label: 'Contact & Gate Access', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-[#081F12] text-[#D8E4DC] pt-20 pb-12 px-6 sm:px-10 md:px-16 border-t-2 border-gold-500/40 relative overflow-hidden">
      <div className="max-w-[1520px] mx-auto relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-white/15">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 md:pr-6">
            <Link to="/" className="flex items-center gap-3.5 group mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-400/50 p-0.5 bg-black/40 shadow-sm">
                <img
                  src="/images/palace/lvp-crest.jpg"
                  alt="Gaekwad Royal Crest"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-[0.16em] text-white group-hover:text-gold-300 transition-colors block">
                  GAEKWAD GOLF CLUB
                </span>
                <span className="font-body text-[10px] tracking-[0.22em] text-gold-400 uppercase font-semibold">
                  Lukshmi Vilas Palace Estate &middot; Vadodara
                </span>
              </div>
            </Link>

            <p className="font-body text-xs text-[#BED0C4] leading-relaxed mb-6 font-normal">
              India's only royal palace golf course. 18 championship holes traversing 500 private acres of the Lukshmi Vilas Palace Estate, beneath towering Indo-Saracenic minarets and century-old banyan groves.
            </p>

            {/* Estate address & contact */}
            <div className="space-y-2.5 text-xs text-[#D8E4DC]">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Lukshmi Vilas Palace Estate, Gate #2, J.N. Marg, Vadodara, Gujarat 390001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-gold-400 flex-shrink-0" />
                <span>+91 85114 11155 &nbsp;/&nbsp; +91 85111 16901</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-gold-400 flex-shrink-0" />
                <span>secretary@lvpalace.co.in</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3.5 mt-6">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-400 hover:text-white hover:border-gold-300 hover:bg-gold-500/20 transition-all duration-300"
                >
                  <item.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns (4 cols) */}
          {sections.map((sec) => (
            <div key={sec.title} className="flex flex-col">
              <h3 className="font-cinzel text-xs font-bold text-gold-400 uppercase tracking-[0.18em] mb-5 border-l-2 border-gold-500 pl-2.5">
                {sec.title}
              </h3>
              <ul className="flex flex-col gap-2.5 list-none">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-body text-xs text-[#CAD8CE] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dress code & affiliation banner */}
        <div className="py-6 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A8BEB0]">
          <div className="flex items-center gap-2">
            <Award size={15} className="text-gold-400" />
            <span>Historic Palaces &amp; Havellis of Gujarat &bull; Certified Heritage Sporting Landmark</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-gold-400" />
            <span>Tee Times: 06:30 AM – 06:00 PM Daily &bull; Traditional Collared Attire Mandatory</span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center flex-wrap gap-4 text-xs text-[#A8BEB0]">
          <p className="font-body text-center lg:text-left">
            &copy; {new Date().getFullYear()} Gaekwad Golf Club. Lukshmi Vilas Palace Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-gold-400 transition-colors">Royal Charter</Link>
            <span>&bull;</span>
            <Link to="/about" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/about" className="hover:text-gold-400 transition-colors">Course Etiquette</Link>
          </div>
          <p className="font-body text-center lg:text-right">
            Designed and Developed by{' '}
            <a
              href="https://techofay-global-ventures.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 font-medium underline underline-offset-4 decoration-gold-500/40 hover:decoration-gold-300 transition-colors"
            >
              Techofay Global Ventures
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
