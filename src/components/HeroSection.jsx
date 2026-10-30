import React from 'react';
import { ArrowUpRight, Camera, Video, Palette, UserCheck, Sparkles, ShieldCheck } from 'lucide-react';
import { HERO_MOMENTS } from '../data/mockData';

export default function HeroSection({ onOpenWaitlist, onOpenBrief }) {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-20">
      
      {/* Background Decorative Blur */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#f2b49b]/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 rounded-full bg-[#e4bda2]/25 blur-3xl" />

      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="flex flex-col items-start">
            
            {/* Live Counter Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#273234]/15 bg-white/60 px-4 py-1.5 text-xs font-bold text-[#536061] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d96b45] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d96b45]"></span>
              </span>
              <span>1,840+ Creatives & Clients on the Waitlist</span>
            </div>

            {/* Eyebrow */}
            <p className="eyebrow mb-3 text-[#d96b45]">
              Your people are out there.
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-[#273234] sm:text-6xl md:text-7xl lg:text-[5rem]">
              A creative marketplace in the making for people looking for <em className="not-italic text-[#d96b45]">unforgettable moments</em>.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#536061] sm:text-lg">
              KlickConnect brings people looking for creative services together with the photographers, videographers, makeup artists, models, stylists, and event creatives who make moments happen.
            </p>

            {/* Dual CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenWaitlist('client')}
                className="inline-flex items-center gap-2 rounded-full bg-[#d96b45] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#273234] hover:shadow-xl"
              >
                <span>Join Client Waitlist</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onOpenWaitlist('creative')}
                className="inline-flex items-center gap-2 rounded-full border border-[#273234]/20 bg-white/70 px-7 py-3.5 text-sm font-bold text-[#273234] transition-all duration-300 hover:border-[#d96b45] hover:text-[#d96b45]"
              >
                <span>Join Creative Waitlist</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            {/* Trust Markers */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#273234]/10 pt-6 text-xs text-[#536061]">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="h-4 w-4 text-[#d96b45]" />
                <span>Verified Creative Portfolios</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Sparkles className="h-4 w-4 text-[#d96b45]" />
                <span>Smart Match Algorithm</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <UserCheck className="h-4 w-4 text-[#d96b45]" />
                <span>Direct Client Bookings</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {HERO_MOMENTS.map((moment, idx) => (
                <div
                  key={moment.id}
                  className={`group relative overflow-hidden rounded-3xl bg-[#415253] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                    idx % 2 === 1 ? 'mt-6 sm:mt-10' : ''
                  }`}
                >
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="h-64 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 sm:h-72"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#273234]/90 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="rounded-full bg-[#d96b45] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      {moment.category}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-bold leading-tight">
                      {moment.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/70">
                      {moment.creator} • {moment.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Highlight Badge */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-[#273234] p-4 text-white shadow-2xl sm:flex sm:items-center sm:gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d96b45]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#f2b49b]">Matching Engine</p>
                <p className="text-sm font-semibold">Match with top creators in seconds</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
