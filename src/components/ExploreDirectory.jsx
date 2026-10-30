import React, { useState } from 'react';
import { Search, Filter, Star, CheckCircle, MapPin, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { CATEGORIES, CREATORS } from '../data/mockData';

export default function ExploreDirectory({ onSelectCreator }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyVerified, setOnlyVerified] = useState(false);

  // Filter logic
  const filteredCreators = CREATORS.filter((creator) => {
    const matchesCategory = selectedCategory === 'all' || creator.category === selectedCategory;
    const matchesQuery =
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesVerified = !onlyVerified || creator.verified;

    return matchesCategory && matchesQuery && matchesVerified;
  });

  return (
    <section id="explore" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="eyebrow text-[#d96b45]">Featured Creative Directory</p>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl font-bold leading-tight text-[#273234] sm:text-5xl md:text-6xl">
              Discover top talent for your <em className="not-italic text-[#d96b45]">next moment</em>.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#536061]">
              Browse verified creative professionals across photography, video, makeup, modeling, styling, and immersive event design.
            </p>
          </div>
        </div>

        {/* Category Pills & Search Controls */}
        <div className="mt-10 flex flex-col gap-6">
          
          {/* Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 ${
                    active
                      ? 'bg-[#273234] text-[#fffaf2] shadow-md'
                      : 'border border-[#273234]/15 bg-white/70 text-[#536061] hover:border-[#d96b45] hover:text-[#d96b45]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] ${active ? 'bg-[#d96b45] text-white' : 'bg-[#273234]/10 text-[#536061]'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Verified Toggle */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#536061]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, role, tags (e.g. Vogue, Drone, Studio, London)..."
                className="w-full rounded-2xl border border-[#273234]/15 bg-white px-11 py-3 text-sm text-[#273234] outline-none transition-all placeholder:text-[#536061]/60 focus:border-[#d96b45] focus:ring-2 focus:ring-[#d96b45]/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#536061] hover:text-[#d96b45]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Verified Filter Checkbox */}
            <label className="flex items-center gap-2.5 cursor-pointer rounded-2xl border border-[#273234]/15 bg-white/70 px-4 py-3 text-xs font-bold text-[#536061] transition-all hover:border-[#d96b45]">
              <input
                type="checkbox"
                checked={onlyVerified}
                onChange={(e) => setOnlyVerified(e.target.checked)}
                className="h-4 w-4 rounded border-[#273234]/20 text-[#d96b45] focus:ring-[#d96b45]"
              />
              <CheckCircle className="h-4 w-4 text-[#d96b45]" />
              <span>Verified Pro Only</span>
            </label>

          </div>

        </div>

        {/* Creator Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCreators.map((creator) => (
            <div
              key={creator.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#273234]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                {/* Cover Image & Rating Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-[#415253]">
                  <img
                    src={creator.coverImage}
                    alt={creator.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#273234]/80 via-transparent to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#273234] backdrop-blur-md shadow-md">
                    <Star className="h-3.5 w-3.5 fill-[#d96b45] text-[#d96b45]" />
                    <span>{creator.rating}</span>
                    <span className="text-[#536061]">({creator.reviewsCount})</span>
                  </div>

                  {/* Starting Rate Badge */}
                  <div className="absolute right-4 top-4 rounded-full bg-[#273234]/90 px-3 py-1 text-xs font-bold text-[#f2b49b] backdrop-blur-md">
                    {creator.startingRate}
                  </div>

                  {/* Avatar Overlay */}
                  <div className="absolute -bottom-6 left-6 h-14 w-14 overflow-hidden rounded-2xl border-2 border-white bg-[#415253] shadow-md">
                    <img src={creator.avatar} alt={creator.name} className="h-full w-full object-cover" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-6 pt-9">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-serif text-2xl font-bold text-[#273234]">
                        {creator.name}
                      </h3>
                      {creator.verified && (
                        <CheckCircle className="h-4 w-4 text-[#d96b45]" title="Verified Professional" />
                      )}
                    </div>
                  </div>

                  <p className="mt-0.5 text-xs font-semibold text-[#d96b45]">
                    {creator.role}
                  </p>

                  <div className="mt-3 flex items-center gap-4 text-xs text-[#536061]">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-[#d96b45]" />
                      {creator.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#d96b45]" />
                      {creator.responseTime}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-[#536061]">
                    {creator.bio}
                  </p>

                  {/* Tag Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {creator.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full bg-[#F8F6F0] px-2.5 py-1 text-[10px] font-bold text-[#536061]">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Action Button */}
              <div className="border-t border-[#273234]/10 bg-[#F8F6F0]/50 px-6 py-3.5">
                <button
                  onClick={() => onSelectCreator(creator)}
                  className="flex w-full items-center justify-between text-xs font-bold text-[#273234] transition-colors group-hover:text-[#d96b45]"
                >
                  <span>View Portfolio & Pricing</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="mt-12 rounded-3xl border border-[#273234]/10 bg-white p-12 text-center">
            <Sparkles className="mx-auto h-8 w-8 text-[#d96b45]" />
            <h3 className="mt-4 font-serif text-2xl font-bold text-[#273234]">No creatives found</h3>
            <p className="mt-2 text-sm text-[#536061]">Try adjusting your search filters or category selection.</p>
          </div>
        )}

      </div>
    </section>
  );
}
