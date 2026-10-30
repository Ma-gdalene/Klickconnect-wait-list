import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ForCreativesSection({ onOpenWaitlist }) {
  const creativeTags = [
    'Photographers',
    'Filmmakers & DPs',
    'Makeup Artists',
    'Fashion Models',
    'Wardrobe Stylists',
    'Creative Directors',
    'Lighting Technicians',
    'Hair Stylists',
    'Stage & Event Designers'
  ];

  return (
    <section id="creatives" className="px-5 py-20 sm:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        
        {/* Left Column: Image Mosaic */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative mt-8 overflow-hidden rounded-3xl bg-[#415253] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
              alt="Creative professional on camera set"
              className="aspect-[0.8] w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl bg-[#415253] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
                alt="Portrait of a fashion creative"
                className="aspect-[0.8] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#415253] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800"
                alt="Creative team collaborating"
                className="aspect-[1.15] w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div>
          <p className="eyebrow mb-4 text-[#d96b45]">For Creatives</p>
          <h2 className="font-serif text-5xl font-bold leading-[0.9] tracking-tight text-[#273234] md:text-6xl lg:text-7xl">
            Let the right people <em className="not-italic text-[#d96b45]">find you</em>.
          </h2>
          
          <p className="mt-6 text-base leading-relaxed text-[#536061]">
            Photographers, filmmakers, makeup artists, models, stylists and more. Bring your work; we'll help it get seen by high-intent clients looking for quality moments.
          </p>

          {/* Specialty Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {creativeTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#273234]/15 bg-white px-4 py-2 text-xs font-bold text-[#536061] transition-colors hover:border-[#d96b45] hover:text-[#d96b45]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => onOpenWaitlist('creative')}
              className="inline-flex items-center gap-2 text-base font-bold text-[#d96b45] underline decoration-2 underline-offset-8 transition-colors hover:text-[#273234]"
            >
              <span>Join the Creative Waitlist</span>
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
