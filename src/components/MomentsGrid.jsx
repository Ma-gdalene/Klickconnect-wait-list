import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function MomentsGrid({ onOpenWaitlist }) {
  const moments = [
    {
      title: 'Graduations & Milestones',
      desc: 'Commemorate major life achievements with portrait photography.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-1 md:col-span-2'
    },
    {
      title: 'High Fashion & Editorial',
      desc: 'Studio lighting, creative direction, and runway lookbooks.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-1'
    },
    {
      title: 'Cinematic Weddings & Galas',
      desc: 'Documenting love stories and luxury events in 4K resolution.',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-1'
    },
    {
      title: 'Glamour & Editorial Makeup',
      desc: 'High-definition skin prep, airbrushing, and artistic glam.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-1 md:col-span-2'
    }
  ];

  return (
    <section className="bg-[#273234] px-5 py-20 text-[#fffaf2] sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3 text-[#f2b49b]">Real people. Real work.</p>
            <h2 className="font-serif text-4xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl">
              Bring the next <em className="not-italic text-[#f2b49b]">moment</em> to life.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#fffaf2]/60">
            Graduations, fashion, events, beauty, portraits, and everything in between.
          </p>
        </div>

        {/* Moments Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {moments.map((item, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl bg-[#415253] min-h-[300px] ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172122]/90 via-[#172122]/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="font-serif text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-[#fffaf2]/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
