import React from 'react';
import { Camera, CreditCard, Sparkles, FolderCheck, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PlatformEcosystem({ onScrollToForm }) {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Smart Creative Matchmaking',
      desc: 'Post your project brief or wedding date. Our algorithm matches you with verified talent matching your visual style, location, and budget in minutes.'
    },
    {
      icon: FolderCheck,
      title: 'Luxury Client Delivery Galleries',
      desc: 'Deliver client work in stunning high-res digital galleries with built-in proofing, favorites selection, watermarking, and instant download delivery.'
    },
    {
      icon: CreditCard,
      title: 'Integrated Paystack Commerce',
      desc: 'Seamless payments in Ghanaian Cedis (GH₵), USD, and GBP. Secure automated booking deposits, digital invoices, and milestone payouts.'
    },
    {
      icon: ShieldCheck,
      title: 'Digital Legal Contracts & Safety',
      desc: 'Eliminate shoot cancellations and payment disputes. Every booking includes enforceable client contracts, copyright clauses, and dispute protection.'
    }
  ];

  return (
    <section id="ecosystem" className="border-t border-white/[0.08] bg-[#0c0c0f] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow-luxury text-[#E5A855]">The Operating System</span>
          <h2 className="mt-2 font-editorial text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Everything African creators need to <span className="gold-gradient-text italic font-normal">grow and monetize</span>.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            More than a directory. KlickConnect is the complete business infrastructure powering commercial studios, independent visual artists, and top-tier events.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl border border-white/[0.08] bg-[#141418] p-7 transition-all duration-300 hover:border-[#E5A855]/40 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl gold-gradient-bg text-black shadow-md">
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="mt-6 font-editorial text-2xl font-bold text-white leading-tight">
                  {p.title}
                </h3>
                
                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mid-Page Call to Action */}
        <div className="mt-16 rounded-3xl glass-panel-gold p-8 text-center sm:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto">
            <span className="eyebrow-luxury text-[#E5A855]">Limited Founding Batch</span>
            <h3 className="font-editorial text-3xl font-bold text-white sm:text-4xl mt-1">
              Be among the first 3,000 creators and clients to launch with 0% platform fees.
            </h3>
            <button
              onClick={onScrollToForm}
              className="mt-6 inline-flex items-center gap-2 rounded-full gold-gradient-bg px-7 py-3.5 text-xs font-bold text-black shadow-xl shadow-[#E5A855]/25 hover:brightness-110 cursor-pointer"
            >
              <span>Secure Your Priority Ticket</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
