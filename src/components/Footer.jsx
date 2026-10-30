import React from 'react';
import { ArrowRight, Globe, Share2 } from 'lucide-react';

export default function Footer({ onScrollToForm }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F1F1F]/[0.08] bg-[#F4F1EA] px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-[1280px]">
        
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.svg"
                alt="KlickConnect Logo"
                className="h-9 w-9 rounded-xl object-contain shadow-xs"
              />
              <span className="font-editorial text-2xl font-bold tracking-tight text-[#1F1F1F]">
                Klick<span className="text-[#C5834D]">Connect</span>
              </span>
            </div>
            <p className="max-w-xs text-xs text-[#666666] leading-relaxed">
              Ghana & Africa's Premier Creator Operating System. Headquartered in Accra, Ghana.
            </p>
          </div>

          {/* Socials & Handles with clean SVGs */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#666666]">
            <a
              href="https://instagram.com/officialklickconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-[#C5834D]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@officialklickconnect</span>
            </a>
            <a
              href="https://facebook.com/officialklickconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-[#C5834D]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href="https://tiktok.com/@officialklickconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-[#C5834D]"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>TikTok</span>
            </a>
            <a
              href="https://klickconnect.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5834D] font-semibold hover:underline flex items-center gap-1"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>klickconnect.online</span>
            </a>
          </div>

          {/* CTA */}
          <button
            onClick={onScrollToForm}
            className="inline-flex items-center gap-2 rounded-full btn-primary-luxury px-5 py-2.5 text-xs font-bold shadow-md cursor-pointer"
          >
            <span>Claim Early Pass</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#C8A25A]" />
          </button>

        </div>

        {/* Co-Founders & Copyright Row */}
        <div className="mt-12 border-t border-[#1F1F1F]/[0.08] pt-6 flex flex-col justify-between gap-4 text-[11px] text-[#666666] sm:flex-row sm:items-center">
          <p>
            Co-Founders: <strong className="text-[#1F1F1F]">Magdalene Frimpomaa Boahene</strong>, <strong className="text-[#1F1F1F]">Godfred Gbemu</strong>, and <strong className="text-[#1F1F1F]">Gilbert Amoah</strong>.
          </p>
          <p>© {currentYear} KlickConnect. All rights reserved. Built for African Creative Excellence.</p>
        </div>

      </div>
    </footer>
  );
}
