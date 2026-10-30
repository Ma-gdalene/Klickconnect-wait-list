import React from 'react';
import { Search, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenBrief, onOpenWaitlist }) {
  const steps = [
    {
      num: '01',
      title: 'Share your vision',
      desc: 'Post your project brief or browse our curated marketplace of top photographers, videographers, MUAs, models, and stylists.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Smart matching & quotes',
      desc: 'Receive transparent rate quotes, equipment specs, and verified portfolio matches tailored to your location and budget.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Book & create moments',
      desc: 'Lock in availability, collaborate directly, and focus on what matters most — making unforgettable visual work.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="border-y border-[#273234]/10 bg-white/40 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3 text-[#d96b45]">Workflow Simplified</p>
            <h2 className="font-serif text-4xl font-bold leading-none tracking-tight text-[#273234] sm:text-5xl md:text-6xl">
              The plan: <em className="not-italic text-[#d96b45]">less searching</em>, more making.
            </h2>
          </div>
          <button
            onClick={onOpenBrief}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#d96b45] underline decoration-2 underline-offset-8 transition-colors hover:text-[#273234]"
          >
            <span>Try the Brief Builder</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#273234]/10 bg-[#F8F6F0] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d96b45]/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#d96b45]">{step.num}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d96b45]/10 text-[#d96b45] transition-colors group-hover:bg-[#d96b45] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-[#273234]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#536061]">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#273234]/10 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#d96b45]">
                    Step {step.num} • Instant Connect
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
