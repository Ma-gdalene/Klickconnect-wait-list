import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onScrollToForm }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#09090b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8">
        
        {/* Brand Wordmark & Emblem */}
        <a href="#hero" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gold-gradient-bg shadow-lg shadow-[#E5A855]/20 transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-2xl font-bold tracking-wide text-white">
              Klick<span className="text-[#E5A855]">Connect</span>
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E5A855]/80">
              Creative Operating System
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#creatives" className="text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-[#E5A855]">
            Featured Creatives
          </a>
          <a href="#ecosystem" className="text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-[#E5A855]">
            The Platform
          </a>
          <a href="#founders" className="text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-[#E5A855]">
            Founders
          </a>
          <a href="#faqs" className="text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-[#E5A855]">
            FAQ
          </a>
        </nav>

        {/* Live Region Badge & Waitlist Button */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium text-white/80 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Accra • Kumasi • Diaspora</span>
          </div>

          <button
            onClick={onScrollToForm}
            className="inline-flex items-center gap-2 rounded-full gold-gradient-bg px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-[#E5A855]/25 transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:shadow-[#E5A855]/30 cursor-pointer"
          >
            <span>Get Early Access</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
