import React from 'react';
import { LIVE_ACTIVITY } from '../data/mockData';
import { Sparkles, MapPin } from 'lucide-react';

export default function LiveActivityTicker() {
  return (
    <div className="w-full border-y border-white/[0.08] bg-[#0c0c0f] py-3.5 overflow-hidden">
      <div className="mx-auto flex max-w-[1280px] items-center px-5 sm:px-8">
        
        {/* Label */}
        <div className="flex items-center gap-2 border-r border-white/10 pr-5 flex-shrink-0 text-xs font-bold text-[#E5A855]">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">LIVE COMMUNITY STREAM</span>
          <span className="sm:hidden">LIVE</span>
        </div>

        {/* Scrolling Feed */}
        <div className="flex items-center gap-8 pl-5 overflow-x-auto no-scrollbar whitespace-nowrap text-xs text-white/70">
          {LIVE_ACTIVITY.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2 flex-shrink-0">
              <span className="font-semibold text-white">{item.name}</span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-[#E5A855]">{item.role}</span>
              <span className="flex items-center gap-1 text-[11px] text-white/40">
                <MapPin className="h-3 w-3 text-[#E5A855]" />
                {item.location}
              </span>
              <span className="text-[10px] text-white/30">• {item.time}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
