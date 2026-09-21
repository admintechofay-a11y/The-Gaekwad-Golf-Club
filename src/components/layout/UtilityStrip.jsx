import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, PhoneCall, Sparkles, Wind, Sun, Clock } from 'lucide-react';
import { clubInfo } from '../../data/coursesData';

export function UtilityStrip() {
  const [estateTime, setEstateTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setEstateTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      aria-label="Estate Status & Utility Links"
      className="bg-[#081F12] text-[11px] font-body text-[#D4E2D8] border-b border-gold-500/30 py-1.5 px-4 sm:px-6 lg:px-8 relative z-50 select-none"
    >
      <div className="max-w-[1520px] mx-auto flex flex-wrap items-center justify-between gap-y-1">
        {/* Left: Estate location & Heritage badge */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-gold-400 font-medium tracking-wide">
            <Sparkles size={11} className="text-gold-400 animate-pulse" />
            <span className="hidden xs:inline">Lukshmi Vilas Palace Estate &middot;</span> Vadodara, India
          </span>
          {estateTime && (
            <>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <span className="hidden sm:flex items-center gap-1 text-zinc-300 font-mono text-[10.5px]">
                <Clock size={11} className="text-gold-400" />
                {estateTime} IST
              </span>
            </>
          )}
          <span className="hidden md:inline text-zinc-600">|</span>
          <span className="hidden md:flex items-center gap-1 text-zinc-400">
            <Compass size={11} className="text-gold-400/80" />
            Gate #2, J.N. Marg
          </span>
        </div>

        {/* Center: Live Course Conditions Ticker */}
        <div className="hidden lg:flex items-center gap-4 text-[11px] tracking-wide">
          <span className="flex items-center gap-1.5 bg-royal-900/90 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-emerald-400 font-medium shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            {clubInfo.liveConditions.status}
          </span>
          <span className="flex items-center gap-1 text-zinc-300">
            <Sun size={12} className="text-amber-400" />
            {clubInfo.liveConditions.weather}
          </span>
          <span className="text-zinc-600">&bull;</span>
          <span className="text-zinc-300">Greens: {clubInfo.liveConditions.greens}</span>
          <span className="text-zinc-600">&bull;</span>
          <span className="flex items-center gap-1 text-zinc-300">
            <Wind size={12} className="text-blue-300" />
            {clubInfo.liveConditions.wind}
          </span>
        </div>

        {/* Right: Concierge Phone & Member Login */}
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <a
            href="tel:+918511411155"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-gold-300 transition-colors"
          >
            <PhoneCall size={11} className="text-gold-400" />
            <span className="hidden sm:inline">+91 85114 11155</span>
            <span className="sm:hidden">Call</span>
          </a>
          <span className="text-zinc-700">|</span>
          <Link
            to="/membership"
            className="text-gold-300 hover:text-white transition-colors font-medium flex items-center gap-1"
          >
            Members Portal &rarr;
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default UtilityStrip;
