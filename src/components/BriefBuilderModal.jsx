import React, { useState } from 'react';
import { X, Sparkles, Calendar, MapPin, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { CATEGORIES, CREATORS } from '../data/mockData';

export default function BriefBuilderModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: 'photographers',
    location: 'London, UK',
    date: '',
    budget: '$1,000 - $2,500',
    vibe: 'Editorial & High Fashion',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Simple match logic
  const matchedCreators = CREATORS.filter(c => c.category === formData.category).slice(0, 2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-[#273234]/70 backdrop-blur-md" />

      {/* Modal */}
      <div className="animate-modal-zoom relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#F8F6F0] p-6 shadow-2xl sm:p-8 md:p-10">
        
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#273234]/10 text-[#273234] hover:bg-[#273234] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#d96b45]" />
              <span className="eyebrow text-[#d96b45]">Project Brief & Quote Calculator</span>
            </div>
            
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#273234]">
              Describe your vision
            </h2>
            <p className="mt-1 text-sm text-[#536061]">
              Post your brief and get instant matched quotes from verified creative professionals.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              
              {/* Title & Category */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">Project Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Autumn Fashion Campaign"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-[#273234]/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#d96b45]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">Creative Needed</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-[#273234]/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#d96b45]"
                  >
                    {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location & Date */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">Shoot Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. London / Studio / Outdoor"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-[#273234]/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#d96b45]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">Target Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-[#273234]/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#d96b45]"
                  />
                </div>
              </div>

              {/* Budget Tier */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">Estimated Budget</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {['$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000+'].map(b => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`rounded-xl border py-2.5 text-xs font-bold transition-all ${
                        formData.budget === b
                          ? 'border-[#d96b45] bg-[#d96b45] text-white'
                          : 'border-[#273234]/15 bg-white text-[#536061] hover:border-[#d96b45]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">Creative Brief Details</label>
                <textarea
                  rows={3}
                  placeholder="Describe your project aesthetic, deliverables, and vibe..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-[#273234]/15 bg-white p-4 text-sm outline-none focus:border-[#d96b45]"
                />
              </div>

              {/* Instant Recommended Match Preview */}
              <div className="rounded-2xl border border-[#d96b45]/30 bg-[#d96b45]/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#d96b45]">Live Match Probability</span>
                  <span className="rounded-full bg-[#d96b45] px-2.5 py-0.5 text-[10px] font-bold text-white">98% Match</span>
                </div>
                <p className="mt-1 text-xs text-[#536061]">
                  Matching with {matchedCreators.map(c => c.name).join(' & ')} in your area.
                </p>
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#d96b45] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#273234]"
              >
                <span>Calculate Match & Post Brief</span>
                <ArrowRight className="h-4 w-4" />
              </button>

            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d96b45]/10 text-[#d96b45]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#273234]">Brief Published!</h2>
            <p className="mt-2 text-sm text-[#536061]">
              Your project brief <strong className="text-[#273234] font-semibold">"{formData.title || 'Untitled Brief'}"</strong> is now live for matching creatives.
            </p>
            
            <div className="mt-6 rounded-2xl bg-white p-5 text-left text-xs text-[#536061]">
              <div className="flex justify-between border-b border-[#273234]/10 pb-2">
                <span>Reference ID:</span>
                <span className="font-mono font-bold text-[#273234]">KC-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>Estimated Response Time:</span>
                <span className="font-bold text-[#d96b45]">&lt; 2 Hours</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-8 rounded-full bg-[#273234] px-8 py-3 text-xs font-bold text-white hover:bg-[#d96b45]"
            >
              Back to Marketplace
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
