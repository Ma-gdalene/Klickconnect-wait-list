import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="border-t border-[#1F1F1F]/[0.08] bg-[#F4F1EA] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[800px]">
        
        <div className="text-center">
          <span className="eyebrow-luxury">Questions & Answers</span>
          <h2 className="mt-2 font-editorial text-4xl font-bold text-[#1F1F1F] sm:text-5xl">
            Frequently Asked <span className="gold-gradient-text italic font-normal">Questions</span>
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-[#1F1F1F]/10 bg-white transition-colors hover:border-[#C8A25A]/50"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left text-sm font-bold text-[#1F1F1F] cursor-pointer"
                >
                  <span className="font-editorial text-xl sm:text-2xl">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#C5834D] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-[#1F1F1F]/[0.08] p-6 pt-4 text-xs leading-relaxed text-[#666666]">
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
