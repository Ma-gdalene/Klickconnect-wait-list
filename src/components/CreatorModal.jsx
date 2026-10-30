import React, { useState, useEffect } from 'react';
import { X, Star, CheckCircle, MapPin, Clock, Camera, ArrowRight } from 'lucide-react';

export default function CreatorModal({ creator, onClose, onRequestQuote }) {
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
        className="fixed inset-0 bg-[#273234]/70 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Container */}
      <div className="animate-modal-zoom relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[#F8F6F0] p-6 shadow-2xl sm:p-8 md:p-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#273234]/10 text-[#273234] transition-all hover:bg-[#273234] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Creator Header Info */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border-2 border-[#d96b45] shadow-lg">
              <img src={creator.avatar} alt={creator.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-3xl font-bold text-[#273234]">{creator.name}</h2>
                {creator.verified && <CheckCircle className="h-5 w-5 text-[#d96b45]" />}
              </div>
              <p className="text-sm font-semibold text-[#d96b45]">{creator.role}</p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-[#536061]">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#d96b45]" />
                  {creator.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#d96b45]" />
                  {creator.responseTime}
                </span>
                <span className="flex items-center gap-1 font-bold text-[#273234]">
                  <Star className="h-3.5 w-3.5 fill-[#d96b45] text-[#d96b45]" />
                  {creator.rating} ({creator.reviewsCount} reviews)
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onRequestQuote(creator)}
            className="inline-flex items-center gap-2 rounded-full bg-[#d96b45] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#273234]"
          >
            <span>Request Quote</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Main Gallery Lightbox */}
        <div className="mt-8">
          <div className="h-96 w-full overflow-hidden rounded-2xl bg-[#415253] shadow-md">
            <img src={activeImage || creator.coverImage} alt="Portfolio preview" className="h-full w-full object-cover" />
          </div>

          {/* Thumbnails */}
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {creator.portfolio?.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(imgUrl)}
                className={`h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                  activeImage === imgUrl ? 'border-[#d96b45] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Bio & Details Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          
          {/* Left Column: Bio & Equipment */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#273234]">About the Creator</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#536061]">{creator.bio}</p>

            <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-[#d96b45]">
              Equipment & Technical Specs
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {creator.equipment?.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 rounded-full border border-[#273234]/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#536061]">
                  <Camera className="h-3.5 w-3.5 text-[#d96b45]" />
                  {item}
                </span>
              ))}
            </div>

            {/* Specialties */}
            <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-[#d96b45]">
              Specialties & Style
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {creator.tags?.map((tag) => (
                <span key={tag} className="rounded-full bg-[#d96b45]/10 px-3 py-1 text-xs font-bold text-[#d96b45]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Packages & Pricing */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#273234]">Service Packages</h3>
            <div className="mt-4 flex flex-col gap-4">
              {creator.packages?.map((pkg, idx) => (
                <div key={idx} className="rounded-2xl border border-[#273234]/10 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-[#273234]">{pkg.title}</h4>
                    <span className="font-bold text-[#d96b45]">{pkg.price}</span>
                  </div>
                  <p className="mt-2 text-xs text-[#536061]">{pkg.details}</p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            {creator.reviews?.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#d96b45]">Verified Client Reviews</h4>
                <div className="mt-3 rounded-2xl bg-white p-5">
                  <p className="text-xs italic text-[#536061]">"{creator.reviews[0].comment}"</p>
                  <p className="mt-2 text-xs font-bold text-[#273234]">
                    — {creator.reviews[0].author} ({creator.reviews[0].role})
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
