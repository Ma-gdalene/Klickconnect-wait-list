import React, { useState } from 'react';
import { LayoutDashboard, DollarSign, Calendar, MessageSquare, Star, TrendingUp, Check, X, Plus, Sparkles, UserCheck } from 'lucide-react';
import { CLIENT_BRIEFS, CREATORS } from '../data/mockData';

export default function CreatorDashboard({ onReturnMarketplace }) {
  const [briefs, setBriefs] = useState(CLIENT_BRIEFS);
  const activeCreator = CREATORS[0]; // Elena Vance sample profile

  const handleAction = (id, newStatus) => {
    setBriefs(briefs.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <div className="animate-fade-in mx-auto max-w-[1240px] px-5 py-10 sm:px-8">
      
      {/* Workspace Header */}
      <div className="flex flex-col gap-4 border-b border-[#273234]/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#d96b45] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
              Creator Suite Portal
            </span>
            <span className="text-xs text-[#536061]">Live Preview Mode</span>
          </div>
          <h1 className="mt-2 font-serif text-3xl font-bold text-[#273234] sm:text-4xl">
            Welcome back, {activeCreator.name}
          </h1>
          <p className="text-sm text-[#536061]">Manage your project inquiries, calendar bookings, and portfolio analytics.</p>
        </div>

        <button
          onClick={onReturnMarketplace}
          className="inline-flex items-center gap-2 rounded-full border border-[#273234]/20 bg-white px-5 py-2.5 text-xs font-bold text-[#273234] hover:bg-[#273234] hover:text-white"
        >
          <span>← Back to Marketplace</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
        <div className="rounded-3xl border border-[#273234]/10 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between text-[#536061]">
            <span className="text-xs font-bold uppercase tracking-wider">Monthly Revenue</span>
            <DollarSign className="h-5 w-5 text-[#d96b45]" />
          </div>
          <h3 className="mt-3 font-serif text-3xl font-bold text-[#273234]">$12,850</h3>
          <div className="mt-2 flex items-center gap-1 text-xs font-bold text-emerald-600">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>+18% from last month</span>
          </div>
        </div>

        <div className="rounded-3xl border border-[#273234]/10 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between text-[#536061]">
            <span className="text-xs font-bold uppercase tracking-wider">Active Inquiries</span>
            <MessageSquare className="h-5 w-5 text-[#d96b45]" />
          </div>
          <h3 className="mt-3 font-serif text-3xl font-bold text-[#273234]">24 Briefs</h3>
          <p className="mt-2 text-xs text-[#536061]">3 new pending proposals</p>
        </div>

        <div className="rounded-3xl border border-[#273234]/10 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between text-[#536061]">
            <span className="text-xs font-bold uppercase tracking-wider">Match Score</span>
            <Sparkles className="h-5 w-5 text-[#d96b45]" />
          </div>
          <h3 className="mt-3 font-serif text-3xl font-bold text-[#273234]">98.4%</h3>
          <p className="mt-2 text-xs text-[#536061]">Top 1% Creator in London</p>
        </div>

        <div className="rounded-3xl border border-[#273234]/10 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between text-[#536061]">
            <span className="text-xs font-bold uppercase tracking-wider">Client Rating</span>
            <Star className="h-5 w-5 fill-[#d96b45] text-[#d96b45]" />
          </div>
          <h3 className="mt-3 font-serif text-3xl font-bold text-[#273234]">4.98 ★</h3>
          <p className="mt-2 text-xs text-[#536061]">42 verified client reviews</p>
        </div>

      </div>

      {/* Main Content Grid */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
        
        {/* Left: Incoming Client Briefs */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-[#273234]">Incoming Project Briefs</h2>
            <span className="text-xs font-bold text-[#d96b45]">3 Pending Action</span>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            {briefs.map((brief) => (
              <div key={brief.id} className="rounded-3xl border border-[#273234]/10 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="rounded-full bg-[#F8F6F0] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d96b45]">
                      {brief.category}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-bold text-[#273234]">{brief.title}</h3>
                    <p className="text-xs text-[#536061]">Client: <strong className="text-[#273234]">{brief.client}</strong> • {brief.location}</p>
                  </div>
                  <span className="font-bold text-[#d96b45] text-sm">{brief.budget}</span>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#273234]/10 pt-4 text-xs">
                  <span className="text-[#536061]">Date: <strong>{brief.date}</strong></span>
                  
                  {brief.status === 'Accepting Proposals' ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAction(brief.id, 'Declined')}
                        className="rounded-full border border-[#273234]/20 px-4 py-1.5 font-bold text-[#536061] hover:bg-red-50 hover:text-red-600"
                      >
                        Decline
                      </button>
                      <button
                        onClick={() => handleAction(brief.id, 'Quote Sent')}
                        className="rounded-full bg-[#d96b45] px-4 py-1.5 font-bold text-white hover:bg-[#273234]"
                      >
                        Send Quote →
                      </button>
                    </div>
                  ) : (
                    <span className={`rounded-full px-3 py-1 font-bold ${
                      brief.status === 'Quote Sent' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {brief.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Portfolio & Booking Schedule */}
        <div className="flex flex-col gap-6">
          
          <div className="rounded-3xl border border-[#273234]/10 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-[#273234]">Portfolio Highlights</h3>
              <button className="flex items-center gap-1 text-xs font-bold text-[#d96b45] hover:underline">
                <Plus className="h-3.5 w-3.5" />
                <span>Upload New</span>
              </button>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-2">
              {activeCreator.portfolio.map((img, i) => (
                <div key={i} className="h-28 overflow-hidden rounded-xl bg-[#415253]">
                  <img src={img} alt="Portfolio" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#273234]/10 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#273234]">Upcoming Schedule</h3>
            <div className="mt-4 flex flex-col gap-3 text-xs text-[#536061]">
              <div className="flex items-center justify-between rounded-xl bg-[#F8F6F0] p-3">
                <div>
                  <p className="font-bold text-[#273234]">Vogue Scandinavia Shoot</p>
                  <p>Oct 12 • London Studio 4</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-bold text-emerald-700">Confirmed</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-[#F8F6F0] p-3">
                <div>
                  <p className="font-bold text-[#273234]">Aura Atelier SS26</p>
                  <p>Oct 14 • Paris Studio</p>
                </div>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 font-bold text-amber-700">Pending Brief</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
