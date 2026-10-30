import React from 'react';
import { Sparkles, Users, Calendar, UserCheck, ArrowRight, LayoutDashboard } from 'lucide-react';

export default function Navbar({ onOpenWaitlist, onOpenBrief, isDashboardView, setIsDashboardView, activeRole, setActiveRole }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#273234]/10 bg-[#F8F6F0]/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 sm:px-8">
        
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d96b45] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#273234]">
              Klick<span className="text-[#d96b45]">Connect</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#536061]">
              Creator Suite
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-7 md:flex">
          <a href="#explore" className="text-sm font-semibold text-[#536061] transition-colors hover:text-[#d96b45]">
            Explore Creatives
          </a>
          <a href="#briefs" className="text-sm font-semibold text-[#536061] transition-colors hover:text-[#d96b45]">
            Brief Builder
          </a>
          <a href="#creatives" className="text-sm font-semibold text-[#536061] transition-colors hover:text-[#d96b45]">
            For Creatives
          </a>
          <a href="#founders" className="text-sm font-semibold text-[#536061] transition-colors hover:text-[#d96b45]">
            Vision & Founders
          </a>
        </nav>

        {/* Action Controls & Mode Switcher */}
        <div className="flex items-center gap-3">
          
          {/* Dashboard Mode Toggle */}
          <button
            onClick={() => setIsDashboardView(!isDashboardView)}
            className={`hidden items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all sm:flex ${
              isDashboardView
                ? 'bg-[#273234] text-[#f2b49b] shadow-md'
                : 'border border-[#273234]/15 bg-white/70 text-[#536061] hover:border-[#d96b45] hover:text-[#d96b45]'
            }`}
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            {isDashboardView ? 'Public Marketplace' : 'Creator Portal'}
          </button>

          {/* Quick Post Brief */}
          <button
            onClick={onOpenBrief}
            className="hidden items-center gap-1.5 rounded-full border border-[#d96b45]/30 bg-[#d96b45]/10 px-4 py-2 text-xs font-bold text-[#d96b45] transition-all hover:bg-[#d96b45] hover:text-white lg:flex"
          >
            <Calendar className="h-3.5 w-3.5" />
            Post Brief
          </button>

          {/* Waitlist CTA Button */}
          <button
            onClick={() => onOpenWaitlist('client')}
            className="inline-flex items-center gap-2 rounded-full bg-[#d96b45] px-5 py-2.5 text-xs font-bold text-[#fffaf2] shadow-md transition-all duration-300 hover:bg-[#273234] hover:shadow-lg"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
