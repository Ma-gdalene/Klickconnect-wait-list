import React from 'react';
import { FOUNDERS } from '../data/mockData';
import { Sparkles } from 'lucide-react';

export default function FoundersSection() {
  return (
    <section id="founders" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow-luxury">Executive Leadership</span>
            <h2 className="font-editorial text-4xl font-bold text-[#1F1F1F] sm:text-5xl md:text-6xl">
              The visionaries behind <span className="gold-gradient-text italic font-normal">KlickConnect</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#666666]">
            Founded in Ghana to elevate Africa's creative economy and bridge top talent with global commercial demand.
          </p>
        </div>

        {/* Founders Cards - Typographic Crest Badges (Zero Images Attached) */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-3xl border border-[#1F1F1F]/10 bg-white p-8 transition-all duration-300 hover:border-[#C8A25A]/60 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  {/* Luxury Typographic Crest */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0E5D9] border border-[#C8A25A]/40 font-editorial text-2xl font-bold text-[#7A4B2D] shadow-xs transition-transform duration-300 group-hover:scale-105">
                    {founder.initials}
                  </div>
                  <span className="rounded-full border border-[#C8A25A]/30 bg-[#F5E9DD] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7A4B2D]">
                    {founder.crest}
                  </span>
                </div>

                <h3 className="mt-6 font-editorial text-2xl font-bold text-[#1F1F1F] leading-tight">
                  {founder.name}
                </h3>
                <p className="text-xs font-semibold text-[#8A5E3B] mt-1">{founder.role}</p>

                <p className="mt-4 text-xs leading-relaxed text-[#666666]">
                  "{founder.bio}"
                </p>
              </div>

              <div className="mt-8 border-t border-[#1F1F1F]/[0.08] pt-4 flex items-center justify-between text-[11px] text-[#999999]">
                <span>Executive Board</span>
                <Sparkles className="h-4 w-4 text-[#C5834D]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
