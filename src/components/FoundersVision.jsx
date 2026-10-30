import React from 'react';
import { FOUNDERS } from '../data/mockData';
import { Sparkles } from 'lucide-react';

export default function FoundersVision({ onOpenWaitlist }) {
  return (
    <section id="founders" className="border-t border-[#273234]/10 bg-[#e4bda2]/25 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3 text-[#d96b45]">Vision & Co-founders</p>
            <h2 className="font-serif text-5xl font-bold leading-none tracking-tight text-[#273234] md:text-7xl">
              There's more <em className="not-italic text-[#d96b45]">coming</em>.
            </h2>
          </div>
          <div className="max-w-xs md:pb-2">
            <p className="text-lg font-serif font-bold text-[#273234]">And this is only the beginning.</p>
            <p className="mt-2 text-sm leading-relaxed text-[#536061]">
              Bring your curiosity, your camera roll, your brief or your next big idea. We're making room for all of it.
            </p>
          </div>
        </div>

        {/* Founders Spotlight Cards - Typographic Badges without images */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#273234]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d96b45] font-serif text-2xl font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    {founder.initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#273234]">{founder.name}</h3>
                    <p className="text-xs font-bold text-[#d96b45]">{founder.role}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#536061]">
                  "{founder.bio}"
                </p>
              </div>

              <div className="mt-6 border-t border-[#273234]/10 pt-4 flex items-center justify-between text-xs text-[#536061]">
                <span>Co-Founder</span>
                <Sparkles className="h-4 w-4 text-[#d96b45]" />
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Banner */}
        <div className="mt-20 rounded-[2.5rem] bg-[#d96b45] px-8 py-14 text-[#fffaf2] sm:px-12 md:px-20 md:py-20 shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow mb-4 text-[#fffaf2]/70">Your Next Step</p>
              <h3 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
                Whatever brought you here, there's a place for you.
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#fffaf2]/85">
                KlickConnect is being built for the people looking for unforgettable moments — and the people who make them happen.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                onClick={() => onOpenWaitlist('client')}
                className="rounded-full bg-[#273234] px-8 py-4 text-xs font-bold text-white shadow-lg transition-all hover:bg-white hover:text-[#273234]"
              >
                Join Client Waitlist →
              </button>
              <button
                onClick={() => onOpenWaitlist('creative')}
                className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#273234]"
              >
                Join Creative Waitlist →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
