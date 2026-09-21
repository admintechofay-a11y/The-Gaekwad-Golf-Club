import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setSubmitted(true);
      setError('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <section aria-labelledby="newsletter-heading" className="bg-[#F5F2EB] py-20 px-4 sm:px-8 border-b border-[#E0D8C3]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E0D8C3] shadow-[0_10px_35px_rgba(10,41,22,0.05)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Subtext (6 cols) */}
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] text-gold-700 font-bold mb-2">
              <Sparkles size={13} />
              <span>Privileged Dispatches</span>
            </div>
            <h2
              id="newsletter-heading"
              className="font-cinzel font-bold text-[#0A2916] text-3xl sm:text-4xl leading-tight"
            >
              The Royal Gaekwad Gazette
            </h2>
            <p className="font-body text-[#455A4C] text-sm mt-3 max-w-md leading-relaxed font-light">
              Invitations to the Gaekwad Invitational, seasonal banquet releases at Sunset Terrace, and royal course updates delivered directly to your correspondence.
            </p>
          </div>

          {/* Right Column: Form (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-center">
            {submitted ? (
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-[#0A2916]">
                <CheckCircle2 size={24} className="text-emerald-700 flex-shrink-0" />
                <div>
                  <div className="font-cinzel font-bold text-[#0A2916] text-sm">
                    Welcome to the Royal Correspondence
                  </div>
                  <div className="font-body text-xs text-[#55695B] mt-0.5">
                    Your dispatch confirmation has been registered for {email}.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="email"
                      aria-label="Email address"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      required
                      className="w-full bg-[#FAF8F5] border border-[#D9D0BE] pl-11 pr-4 py-3.5 text-[#0A2916] font-body text-xs sm:text-sm placeholder:text-stone-400 rounded-xl focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="gold-shimmer-btn text-[#0A1A0F] font-body text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform flex-shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                {error && (
                  <div className="font-body text-xs text-red-600 mt-2 font-medium">
                    {error}
                  </div>
                )}

                <p className="font-body text-[11px] text-[#718276] mt-3">
                  We respect your privacy. Royal correspondence is dispatched once monthly.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

