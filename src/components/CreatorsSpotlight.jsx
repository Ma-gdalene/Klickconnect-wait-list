import React, { useState } from 'react';
import { CATEGORIES, CREATORS } from '../data/mockData';
import { Star, ShieldCheck, MapPin, Clock, ArrowUpRight, Camera } from 'lucide-react';

export default function CreatorsSpotlight({ onSelectCreator }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? CREATORS
    : CREATORS.filter(c => c.category === activeCategory);

  return (
    <section id="creatives" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow-luxury text-[#E5A855]">Curated Roster</span>
            <h2 className="font-editorial text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Meet the creators defining <span className="gold-gradient-text italic font-normal">African luxury</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            From editorial fashion campaigns to star-studded celebrations, discover top photographers, filmmakers, MUAs, and models ready for bookings.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 pb-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'gold-gradient-bg text-black shadow-lg shadow-[#E5A855]/20'
                  : 'border border-white/10 bg-[#121215] text-white/70 hover:border-[#E5A855]/50 hover:text-white'
              }`}
            >
              <span>{cat.label}</span>
              <span className="ml-2 opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map(creator => (
            <div
              key={creator.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#121215] transition-all duration-300 hover:-translate-y-1 hover:border-[#E5A855]/40 hover:shadow-2xl"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 w-full overflow-hidden bg-black/60">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-90" />
                  
                  {/* Rating Badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/10">
                    <Star className="h-3.5 w-3.5 fill-[#E5A855] text-[#E5A855]" />
                    <span>{creator.rating}</span>
                    <span className="text-white/50">({creator.reviewsCount})</span>
                  </div>

                  {/* Starting Rate */}
                  <div className="absolute right-4 top-4 rounded-full bg-[#E5A855]/20 backdrop-blur-md px-3 py-1 text-xs font-bold text-[#E5A855] border border-[#E5A855]/30">
                    {creator.startingRate}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-editorial text-2xl font-bold text-white">{creator.name}</h3>
                    {creator.verified && <ShieldCheck className="h-4 w-4 text-[#E5A855]" title="Verified KlickConnect Creator" />}
                  </div>

                  <p className="text-xs font-semibold text-[#E5A855]">{creator.role}</p>

                  <div className="mt-2.5 flex items-center gap-3 text-[11px] text-white/50">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-[#E5A855]" /> {creator.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-[#E5A855]" /> {creator.responseTime}</span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-white/60">
                    {creator.bio}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {creator.tags.map(t => (
                      <span key={t} className="rounded-md bg-white/[0.05] border border-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="border-t border-white/[0.06] p-4 bg-black/20">
                <button
                  onClick={() => onSelectCreator(creator)}
                  className="flex w-full items-center justify-between text-xs font-bold text-white transition-colors group-hover:text-[#E5A855] cursor-pointer"
                >
                  <span>View Full Lookbook</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
