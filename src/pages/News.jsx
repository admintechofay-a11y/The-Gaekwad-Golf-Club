import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Tag,
  ArrowRight,
  Clock,
  Trophy,
  Search,
  ChevronRight,
  X,
  FileText,
  UserCheck,
  Crown,
  Sparkles,
  Share2,
  BookOpen
} from 'lucide-react';
import UtilityStrip from '../components/layout/UtilityStrip';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { clubInfo } from '../data/coursesData';

const ARTICLES = [
  {
    id: 1,
    title: 'Gaekwad Baroda Invitational 2025: International Field Announced',
    category: 'Tournaments',
    date: 'March 18, 2025',
    readTime: '4 min read',
    image: '/images/golf/palace-golf-view.jpg',
    excerpt: 'Forty-eight invited players from premier royal and links golf clubs gather for the 36-hole medal competition competing for the prestigious Maharaja Pratapsinhrao Gaekwad Trophy.',
    content: `The Gaekwad Baroda Golf Club has finalized the international entry list for the 2025 Gaekwad Baroda Invitational. Staged across the historic 18-hole palace course, this year's championship brings together elite amateur champions and distinguished club captains from India, the United Kingdom, Singapore, and the United Arab Emirates.

Competitors will face the golf course at its championship length of 6,840 yards with Bermuda TifDwarf greens rolling at a testing 11.2 on the Stimpmeter.

"The Gaekwad Invitational has been the crown jewel of our competitive calendar since the 1930s," noted Club Captain Samarjitsinh Gaekwad. "With the palace facade illuminated behind the 18th green, walking down the home stretch on Sunday afternoon remains an unforgettable test of composure."

Spectator galleries are welcome on the grounds with complimentary access via Palace Gate #2. Live scoring updates will be broadcast continuously on the club noticeboard and digital bulletin.`,
  },
  {
    id: 2,
    title: 'Agronomy Dispatch: Winter Overseeding & TifDwarf Green Speed Protocols',
    category: 'Agronomy',
    date: 'March 10, 2025',
    readTime: '3 min read',
    image: '/images/golf/The-Gaekwad-Baroda-Golf-Club2.jpg',
    excerpt: 'Head Agronomist explains the cutting heights, moisture monitoring systems, and pot bunker revetting protocols preparing the fairways for peak championship condition.',
    content: `As Gujarat transitions into the spring golf season, the agronomy team at Gaekwad Golf Club has completed the annual transition schedule across all 18 greens complexes.

The Bermuda TifDwarf putting surfaces are now cut daily to 3.0mm, complemented by light vertical mowing and tournament-grade rolling to produce trueness of roll matching traditional British links standards.

Additionally, extensive maintenance has been executed on the revetted pot bunkers framing the 4th, 7th, and 17th holes. Indigenous sod layers have been meticulously stacked by hand to ensure crisp vertical faces, penalizing errant tee shots while rewarding precise iron play.

Water conservation protocols remain central to estate stewardship: four historic palace stepwells and balancing lagoons harvest seasonal rainwater, ensuring 100% sustainable fairway irrigation throughout the arid summer months.`,
  },
  {
    id: 3,
    title: 'Spring Culinary Season Opens at Sunset Terrace & Star of the South',
    category: 'Dining',
    date: 'February 28, 2025',
    readTime: '3 min read',
    image: '/images/dining/sunset-terrace.jpg',
    excerpt: 'Executive culinary team unveils refreshed menus featuring royal Gujarati recipes retrieved from palace archives, artisanal fairway grills, and sommelier wine pairings.',
    content: `The culinary brigade at Lukshmi Vilas Palace has unveiled its Spring Gastronomy Program across the club's primary dining venues.

Guests dining at the open-air Sunset Terrace can enjoy signature evening tasting menus as the floodlit palace towers glow under the night sky. Highlights include the royal mutton dum biryani prepared according to 19th-century Baroda court recipes, line-caught Arabian Sea kingfish, and organic heritage salads harvested directly from the estate's kitchen gardens.

Meanwhile, the Spike Bar and Golf View Terrace continue their continuous service for golfers, serving specialty espresso, hand-crafted club sandwiches, and chilled post-round refreshments overlooking the 9th and 18th greens.`,
  },
  {
    id: 4,
    title: 'TrackMan 4 Performance Studio Installed at Gaekwad Golf Academy',
    category: 'Academy',
    date: 'February 15, 2025',
    readTime: '4 min read',
    image: '/images/golf/The-Gaekwad-Baroda-Golf-Club-Gallery.jpg',
    excerpt: 'Dual radar tracking, high-speed biomechanics cameras, and custom club fitting protocols elevate player development on the royal practice grounds.',
    content: `The Gaekwad Golf Academy has expanded its performance infrastructure with the formal opening of the TrackMan 4 Indoor/Outdoor Launch Studio.

Equipped with dual radar tracking cameras, force plates, and SAM PuttLab ultrasonic putting measurement, the studio offers touring professionals and aspiring amateurs laboratory-level diagnostic data on ball speed, spin axis, attack angle, and club path.

"Integrating cutting-edge launch analytics with the authentic feel of hitting off natural turf fairways gives our students an unparalleled learning environment," stated Head PGA Professional Alistair Campbell.

Individual club fitting sessions and comprehensive swing analyses are now bookable through the Academy reservation desk.`,
  },
  {
    id: 5,
    title: 'Restoration of Historic 1890 Stepwell Hazards on 7th and 13th Holes',
    category: 'Heritage',
    date: 'January 29, 2025',
    readTime: '5 min read',
    image: '/images/palace/palace-facade.jpg',
    excerpt: 'Archaeological and landscape conservationists complete structural reinforcement of sandstone retaining walls bordering course water features.',
    content: `Under the guidance of the Baroda Heritage Trust, specialized stonemasons have completed a six-month restoration of the ornate sandstone retaining walls surrounding the stepwell water hazards on the 7th and 13th holes.

Originally constructed in the 1890s as part of Major Charles Mant's palace landscape master plan, the stepwells historically served as resting spots for royal equestrian riders before being incorporated into the golf course layout in the 1930s.

The stone carvings, water spillways, and surrounding neem trees have been fully preserved, ensuring that this unique intersection of royal Indian heritage and Scottish links golf continues to inspire generations of players.`,
  },
  {
    id: 6,
    title: 'Junior Royal Champions Clinic Begins 2025 Intake',
    category: 'Academy',
    date: 'January 14, 2025',
    readTime: '3 min read',
    image: '/images/palace/darbar-hall.jpg',
    excerpt: 'The 8-week developmental curriculum nurtures golf fundamentals, athletic mobility, and palace etiquette for young golfers aged 6 to 16.',
    content: `Registrations are now officially open for the Spring Intake of the Junior Royal Champions Program at Gaekwad Golf Club.

Supervised by Senior Coach Vikramjit Gaekwad, the 8-week curriculum provides young athletes with a comprehensive grounding in golf fundamentals, ball-striking biomechanics, bunker escape strategy, and the essential etiquette and sportsmanship expected on historic courses.

Classes are limited to eight students per cohort to guarantee individual attention. Graduates of previous terms have gone on to represent the state at national junior rankings.`,
  },
];

export function News() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState(null);

  const categories = [
    { id: 'ALL', label: 'All Dispatches' },
    { id: 'Tournaments', label: 'Tournaments & Medals' },
    { id: 'Agronomy', label: 'Course Agronomy' },
    { id: 'Dining', label: 'Dining & Banquets' },
    { id: 'Academy', label: 'Academy & Instruction' },
    { id: 'Heritage', label: 'Palace Heritage' },
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'ALL' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredArticle = ARTICLES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14241A]">
      <UtilityStrip />
      <Header />

      <main className="flex-1">
        {/* Full-bleed Luxury Hero */}
        <section
          className="relative py-28 sm:py-36 px-4 sm:px-8 text-center text-white overflow-hidden select-none bg-[#07170E]"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(7, 23, 14, 0.95) 0%, rgba(7, 23, 14, 0.75) 50%, rgba(7, 23, 14, 0.92) 100%), url('/images/golf/palace-golf-view.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-black/60 pointer-events-none" />

          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-body uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-md">
              <BookOpen size={14} className="text-gold-400" />
              <span>The Royal Dispatch &middot; Lukshmi Vilas Palace Estate Gazette</span>
            </div>

            <h1 className="font-cinzel font-bold text-3xl sm:text-6xl text-white tracking-wide leading-tight mb-6">
              The Gaekwad Gazette &amp; News
            </h1>

            <p className="font-display italic text-lg sm:text-2xl text-gold-100/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Championship dispatches, course agronomy updates, culinary chronicles, and tournament announcements from India&apos;s palace golf course.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search size={16} className="text-gold-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, tournaments, agronomy..."
                className="w-full bg-black/60 border border-gold-400/40 rounded-full pl-11 pr-4 py-3 text-xs text-white placeholder-zinc-300 focus:outline-none focus:border-gold-400 transition-colors backdrop-blur-md font-body"
              />
            </div>
          </div>
        </section>

        {/* Featured Story Banner */}
        {selectedCategory === 'ALL' && !searchQuery && (
          <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-white border border-gold-400/40 shadow-[0_10px_30px_rgba(10,41,22,0.06)] grid grid-cols-1 lg:grid-cols-12 royal-corner-box">
              <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-body font-bold tracking-widest bg-gold-500 text-[#07170E] shadow-sm">
                  Featured Headline
                </span>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-body text-[#526658] mb-3">
                    <span className="text-[#8C6D23] font-bold uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                    <span>&bull;</span>
                    <span>{featuredArticle.date}</span>
                    <span>&bull;</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h2 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#0A2916] leading-snug">
                    {featuredArticle.title}
                  </h2>

                  <p className="font-body text-xs sm:text-sm text-[#3D5245] mt-4 leading-relaxed font-normal">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E2D4]">
                  <button
                    type="button"
                    onClick={() => setReadingArticle(featuredArticle)}
                    className="gold-shimmer-btn text-[#07170E] font-body text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm inline-flex items-center gap-2"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filter Categories Bar */}
        <section className="py-6 px-4 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-body font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-[#07170E] font-bold shadow-sm'
                    : 'bg-white border border-[#E0D8C3] text-[#3D5245] hover:border-gold-500/40 hover:text-[#0A2916]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                className="rounded-3xl overflow-hidden bg-white border border-gold-400/30 hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(10,41,22,0.05)] hover:shadow-xl group royal-corner-box"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-body font-bold tracking-wider bg-black/70 backdrop-blur-md text-gold-300 border border-gold-500/30">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] font-body text-[#526658] mb-2 font-medium">
                      <Calendar size={12} className="text-gold-600" />
                      <span>{art.date}</span>
                      <span>&bull;</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="font-cinzel font-bold text-lg text-[#0A2916] group-hover:text-gold-700 transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="font-body text-xs text-[#526658] mt-2.5 line-clamp-3 leading-relaxed font-normal">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setReadingArticle(art)}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-gold-500 text-[#0A2916] hover:text-[#07170E] font-body text-xs font-bold uppercase tracking-wider border border-gold-400/50 hover:border-gold-500 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="font-cinzel text-lg text-[#526658]">No dispatches match your search parameters.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('ALL');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs font-body text-[#8C6D23] font-bold uppercase tracking-widest underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* FULL ARTICLE READER MODAL */}
        {readingArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className="bg-white rounded-3xl border border-gold-400/50 max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto text-[#14241A]">
              <button
                type="button"
                onClick={() => setReadingArticle(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200 flex items-center justify-center transition-colors z-20"
              >
                <X size={18} />
              </button>

              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 -mx-2 -mt-2">
                <img
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-body font-bold tracking-widest bg-gold-500 text-[#07170E] shadow-sm">
                  {readingArticle.category}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-body text-[#526658] mb-2 font-medium">
                <span>{readingArticle.date}</span>
                <span>&bull;</span>
                <span>{readingArticle.readTime}</span>
              </div>

              <h2 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#0A2916] mb-4 leading-snug">
                {readingArticle.title}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#3D5245] font-body leading-relaxed whitespace-pre-line border-t border-[#E8E2D4] pt-4 font-normal">
                {readingArticle.content}
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E2D4] flex justify-between items-center">
                <span className="text-[11px] text-[#526658] font-body">
                  Published by the Secretariat &middot; Gaekwad Golf Club
                </span>
                <button
                  type="button"
                  onClick={() => setReadingArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#0A2916] text-white font-body text-xs font-bold uppercase tracking-wider hover:bg-[#153E23] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

News.propTypes = {};

export default News;
