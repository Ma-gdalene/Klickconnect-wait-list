import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navbar({ onScrollToForm }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1F1F1F]/[0.08] bg-[#F9F7F2]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8">
        
        {/* Brand Logo & Wordmark using Official KlickConnect Emblem */}
        <a href="#hero" className="group flex items-center gap-3">
          <img
            src="/favicon.svg"
            alt="KlickConnect Logo"
            className="h-10 w-10 rounded-xl object-contain shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-editorial text-2xl font-bold tracking-tight text-[#1F1F1F]">
              Klick<span className="text-[#C5834D]">Connect</span>
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8A5E3B]">
              Creator Operating System
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#creatives" className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]/70 transition-colors hover:text-[#C5834D]">
            Featured Creatives
          </a>
          <a href="#ecosystem" className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]/70 transition-colors hover:text-[#C5834D]">
            The Platform
          </a>
          <a href="#founders" className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]/70 transition-colors hover:text-[#C5834D]">
            Founders
          </a>
          <a href="#faqs" className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]/70 transition-colors hover:text-[#C5834D]">
            FAQ
          </a>
        </nav>

        {/* Live Region Badge & Waitlist Button */}
        <div className="flex items-center gap-3.5">
          <div className="hidden items-center gap-2 rounded-full border border-[#1F1F1F]/10 bg-white/70 px-3.5 py-1.5 text-[11px] font-medium text-[#1F1F1F]/80 lg:flex shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
            </span>
            <span>Accra • Kumasi • Diaspora</span>
          </div>

          <button
            onClick={onScrollToForm}
            className="inline-flex items-center gap-2 rounded-full btn-primary-luxury px-5 py-2.5 text-xs font-bold shadow-md cursor-pointer"
          >
            <span>Get Early Access</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#C8A25A]" />
          </button>
        </div>

      </div>
    </header>
  );
}
