import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="border-t border-white/[0.08] bg-[#0c0c0f] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[800px]">
        
        <div className="text-center">
          <span className="eyebrow-luxury text-[#E5A855]">Questions & Clarifications</span>
          <h2 className="mt-2 font-editorial text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked <span className="gold-gradient-text italic font-normal">Questions</span>
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141418] transition-colors hover:border-[#E5A855]/30"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left text-sm font-bold text-white cursor-pointer"
                >
                  <span className="font-editorial text-xl sm:text-2xl">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#E5A855] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-white/[0.06] p-6 pt-4 text-xs leading-relaxed text-white/70">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
