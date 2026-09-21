import React from 'react';
import { Crown, Trophy, Trees, Compass, Feather } from 'lucide-react';

export function CourseStats() {
  const statsWithIcons = [
    { value: '18', label: 'Championship Holes', icon: Trophy, detail: 'Par 72 Standard' },
    { value: '6,400+', label: 'Yards Length', icon: Compass, detail: 'Black Championship Tees' },
    { value: '500', label: 'Royal Acres', icon: Trees, detail: 'Private Palace Grounds' },
    { value: '1890', label: 'Estate Founded', icon: Crown, detail: 'Maharaja Sayajirao III' },
    { value: '700+', label: 'Royal Peacocks', icon: Feather, detail: 'Protected Sanctuary' },
  ];

  return (
    <section aria-label="Course Key Statistics" className="relative -mt-8 z-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1520px] mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gold-500/35 shadow-[0_15px_40px_rgba(10,41,22,0.08)] royal-corner-box">
          {/* Top Accent Ribbon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-gold-500/60" />
            <span className="font-cinzel text-[10.5px] tracking-[0.25em] text-[#8C6D23] uppercase font-bold">
              ❖ Sovereign Golfing Benchmark ❖
            </span>
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-gold-500/60" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#E8E2D4]">
            {statsWithIcons.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center px-3 group ${
                    idx > 0 ? 'pt-5 md:pt-0' : ''
                  } ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFF9E6] to-[#F5EACB] border border-gold-400/60 flex items-center justify-center mb-3 text-[#8C6D23] group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Icon size={18} className="text-[#8C6D23]" />
                  </div>
                  <div className="font-cinzel font-bold text-3xl sm:text-4xl text-[#0A2916] tracking-tight group-hover:text-gold-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="font-cinzel text-[11px] font-bold text-[#8C6D23] mt-1.5 uppercase tracking-widest">
                    {stat.label}
                  </div>
                  <div className="font-body text-[11px] text-[#526658] mt-0.5 font-normal">
                    {stat.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseStats;
