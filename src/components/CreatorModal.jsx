import React, { useState, useEffect } from 'react';
import { X, Star, ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function CreatorModal({ creator, onClose, onBookCreator }) {
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (creator?.portfolio?.length > 0) {
      setActiveImage(creator.portfolio[0]);
    }
  }, [creator]);

  if (!creator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Box */}
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#1F1F1F]/10 bg-white p-6 shadow-2xl sm:p-8 md:p-10 text-[#1F1F1F]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F1EA] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Creator Info */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border-2 border-[#C8A25A] shadow-md">
              <img src={creator.avatar} alt={creator.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-editorial text-3xl font-bold text-[#1F1F1F]">{creator.name}</h2>
                {creator.verified && <ShieldCheck className="h-5 w-5 text-[#C5834D]" />}
              </div>
              <p className="text-xs font-semibold text-[#8A5E3B]">{creator.role}</p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-[#666666]">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#C5834D]" />
                  {creator.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#C5834D]" />
                  {creator.responseTime}
                </span>
                <span className="flex items-center gap-1 font-bold text-[#1F1F1F]">
                  <Star className="h-3.5 w-3.5 fill-[#C5834D] text-[#C5834D]" />
                  {creator.rating} ({creator.reviewsCount} verified reviews)
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onBookCreator) onBookCreator(creator);
            }}
            className="inline-flex items-center gap-2 rounded-full btn-primary-luxury px-6 py-3 text-xs font-bold text-white shadow-md cursor-pointer"
          >
            <span>Request Booking Quote</span>
            <ArrowRight className="h-4 w-4 text-[#C8A25A]" />
          </button>
        </div>

        {/* Lookbook Gallery */}
        <div className="mt-8">
          <div className="h-96 w-full overflow-hidden rounded-2xl bg-[#F4F1EA] border border-[#1F1F1F]/10 shadow-sm">
            <img
              src={activeImage || creator.coverImage}
              alt="Lookbook preview"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {creator.portfolio?.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(imgUrl)}
                className={`h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                  activeImage === imgUrl ? 'border-[#C8A25A] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt="Thumbnail" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Bio & Details */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 border-t border-[#1F1F1F]/10 pt-6">
          <div>
            <h3 className="font-editorial text-2xl font-bold text-[#1F1F1F]">About the Artist</h3>
            <p className="mt-3 text-xs leading-relaxed text-[#666666]">{creator.bio}</p>

            <h4 className="mt-5 text-[11px] font-bold uppercase tracking-wider text-[#8A5E3B]">Specialties</h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {creator.tags?.map(tag => (
                <span key={tag} className="rounded-md bg-[#F4F1EA] border border-[#1F1F1F]/10 px-2.5 py-1 text-[11px] font-medium text-[#7A4B2D]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#1F1F1F]/10 bg-[#F9F7F2] p-5">
            <h3 className="font-editorial text-xl font-bold text-[#1F1F1F]">Commercial Rates</h3>
            <p className="mt-1 text-sm text-[#7A4B2D] font-bold">{creator.startingRate}</p>
            <p className="mt-3 text-xs text-[#666666] leading-relaxed">
              Includes full digital gallery delivery, commercial license options, color grading, and automated milestone deposit protection via KlickConnect & Paystack.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
