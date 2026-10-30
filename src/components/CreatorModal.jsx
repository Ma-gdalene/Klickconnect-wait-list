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
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity duration-300"
      />

      {/* Modal Box */}
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#121215] p-6 shadow-2xl sm:p-8 md:p-10 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#E5A855] hover:text-black cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Creator Info */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border-2 border-[#E5A855] shadow-lg">
              <img src={creator.avatar} alt={creator.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-editorial text-3xl font-bold text-white">{creator.name}</h2>
                {creator.verified && <ShieldCheck className="h-5 w-5 text-[#E5A855]" />}
              </div>
              <p className="text-xs font-semibold text-[#E5A855]">{creator.role}</p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#E5A855]" />
                  {creator.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#E5A855]" />
                  {creator.responseTime}
                </span>
                <span className="flex items-center gap-1 font-bold text-white">
                  <Star className="h-3.5 w-3.5 fill-[#E5A855] text-[#E5A855]" />
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
            className="inline-flex items-center gap-2 rounded-full gold-gradient-bg px-6 py-3 text-xs font-bold text-black shadow-lg hover:brightness-110 cursor-pointer"
          >
            <span>Request Booking Quote</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Lookbook Gallery */}
        <div className="mt-8">
          <div className="h-96 w-full overflow-hidden rounded-2xl bg-black border border-white/10 shadow-lg">
            <img
              src={activeImage || creator.coverImage}
              alt="Lookbook select"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {creator.portfolio?.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(imgUrl)}
                className={`h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                  activeImage === imgUrl ? 'border-[#E5A855] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt="Thumbnail" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Bio & Details */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 border-t border-white/10 pt-6">
          <div>
            <h3 className="font-editorial text-2xl font-bold text-white">About the Artist</h3>
            <p className="mt-3 text-xs leading-relaxed text-white/70">{creator.bio}</p>

            <h4 className="mt-5 text-[11px] font-bold uppercase tracking-wider text-[#E5A855]">Specialties</h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {creator.tags?.map(tag => (
                <span key={tag} className="rounded-md bg-white/[0.06] border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-editorial text-xl font-bold text-white">Commercial Rates</h3>
            <p className="mt-1 text-sm text-[#E5A855] font-semibold">{creator.startingRate}</p>
            <p className="mt-3 text-xs text-white/60 leading-relaxed">
              Includes full digital gallery delivery, commercial license options, color grading, and automated milestone deposit protection via KlickConnect & Paystack.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
