import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer({ onOpenWaitlist }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#273234]/10 bg-[#F8F6F0] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d96b45] text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-[#273234]">
              Klick<span className="text-[#d96b45]">Connect</span>
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-[#536061]">
            <a href="#home" className="transition-colors hover:text-[#d96b45]">Home</a>
            <a href="#explore" className="transition-colors hover:text-[#d96b45]">For Clients</a>
            <a href="#creatives" className="transition-colors hover:text-[#d96b45]">For Creatives</a>
            <a href="#founders" className="transition-colors hover:text-[#d96b45]">Vision & Founders</a>
            <button
              onClick={() => onOpenWaitlist('client')}
              className="text-[#d96b45] transition-colors hover:underline"
            >
              Waitlist
            </button>
          </div>

          {/* Founders Credit */}
          <div className="flex flex-col items-start gap-1 text-xs text-[#536061] sm:items-end">
            <p className="font-semibold text-[#273234]">
              Co-founders: Magdalene, Gilbert and Godfred
            </p>
            <p className="text-[11px]">
              © {currentYear} KlickConnect. All rights reserved.
            </p>
          </div>

        </div>

        {/* Attribution Subline */}
        <div className="mt-8 border-t border-[#273234]/10 pt-5 text-[10px] leading-5 text-[#536061]/70">
          KlickConnect is a creative marketplace suite platform connecting visual artists, photographers, videographers, makeup artists, models, stylists, and event creators. Photography via Unsplash public sources.
        </div>

      </div>
    </footer>
  );
}
