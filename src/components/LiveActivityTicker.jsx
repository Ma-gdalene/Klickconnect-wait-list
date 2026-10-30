import React from 'react';
import { LIVE_ACTIVITY } from '../data/mockData';
import { MapPin } from 'lucide-react';

export default function LiveActivityTicker() {
  return (
    <div className="w-full border-y border-[#1F1F1F]/[0.08] bg-[#F4F1EA] py-3 overflow-hidden">
      <div className="mx-auto flex max-w-[1280px] items-center px-5 sm:px-8">
        
        {/* Label */}
        <div className="flex items-center gap-2 border-r border-[#1F1F1F]/10 pr-5 flex-shrink-0 text-xs font-bold text-[#8A5E3B]">
          <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="hidden sm:inline">LIVE COMMUNITY FEED</span>
          <span className="sm:hidden">LIVE FEED</span>
        </div>

        {/* Scrolling Feed */}
        <div className="flex items-center gap-8 pl-5 overflow-x-auto no-scrollbar whitespace-nowrap text-xs text-[#666666]">
          {LIVE_ACTIVITY.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2 flex-shrink-0">
              <span className="font-semibold text-[#1F1F1F]">{item.name}</span>
              <span className="rounded bg-white border border-[#1F1F1F]/10 px-2 py-0.5 text-[10px] font-medium text-[#7A4B2D] shadow-2xs">
                {item.role}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-[#666666]">
                <MapPin className="h-3 w-3 text-[#C5834D]" />
                {item.location}
              </span>
              <span className="text-[10px] text-[#999999]">• {item.time}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
