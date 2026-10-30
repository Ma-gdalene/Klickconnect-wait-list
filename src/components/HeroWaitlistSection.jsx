import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Copy, Share2, Users, Star, Flame, MapPin } from 'lucide-react';

export default function HeroWaitlistSection({ waitlistCount, onNewSignup }) {
  const [role, setRole] = useState('client');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Accra');
  const [discipline, setDiscipline] = useState('Editorial & Portrait Photography');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    // Generate randomized ticket ID
    setTicketId(`KC-${city.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name) return;

    const signupData = {
      name,
      email,
      phone,
      city,
      role,
      discipline,
      ticketId,
      date: new Date().toISOString()
    };

    // Store in localStorage
    const saved = JSON.parse(localStorage.getItem('kc_waitlist_signups') || '[]');
    saved.unshift(signupData);
    localStorage.setItem('kc_waitlist_signups', JSON.stringify(saved));

    if (onNewSignup) onNewSignup(signupData);
    setSubmitted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://klickconnect.online?ref=${ticketId}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShareWhatsApp = () => {
    const text = `I just reserved my early VIP access to KlickConnect — Africa's premier creative operating system. Join the waitlist with my code ${ticketId}: https://klickconnect.online`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-12 sm:px-8 md:pb-28 md:pt-16">
      
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#E5A855]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#D96B45]/10 blur-[160px]" />

      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left: Headline & Interactive Form */}
          <div className="flex flex-col items-start">
            
            {/* Live Counter Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#E5A855]/30 bg-[#161513] px-4 py-1.5 text-xs font-semibold text-[#E5A855] shadow-lg shadow-[#E5A855]/5">
              <span className="flex h-2 w-2 rounded-full bg-[#E5A855] animate-ping" />
              <span>Phase 1 Waitlist • {waitlistCount.toLocaleString()}+ Members Registered</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-5xl font-bold leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-[5.2rem]">
              Where Africa’s elite <span className="gold-gradient-text italic font-normal">creative talent</span> meets unforgettable moments.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              KlickConnect is Ghana and Africa's premier creator operating system. Connecting visionary clients with verified photographers, filmmakers, MUAs, and models across Accra, Kumasi, London, and the global diaspora.
            </p>

            {/* Interactive Waitlist Card */}
            <div id="waitlist-card" className="mt-9 w-full rounded-3xl glass-panel-gold p-6 sm:p-8">
              {!submitted ? (
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div>
                      <span className="eyebrow-luxury text-[#E5A855]">Priority Registration</span>
                      <h3 className="font-editorial text-2xl font-bold text-white">Claim Your Founding VIP Access</h3>
                    </div>
                    <span className="hidden sm:inline-block rounded-full bg-[#E5A855]/15 px-3 py-1 text-[11px] font-bold text-[#E5A855]">
                      Free Founding Pass
                    </span>
                  </div>

                  {/* Role Switcher */}
                  <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-black/40 p-1.5 border border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => setRole('client')}
                      className={`rounded-xl py-2.5 text-xs font-bold transition-all ${
                        role === 'client'
                          ? 'gold-gradient-bg text-black shadow-md'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      I Need Creative Talent
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('creative')}
                      className={`rounded-xl py-2.5 text-xs font-bold transition-all ${
                        role === 'creative'
                          ? 'gold-gradient-bg text-black shadow-md'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      I’m a Creative Professional
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/60">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ama Boadi"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#E5A855] focus:ring-1 focus:ring-[#E5A855]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/60">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#E5A855] focus:ring-1 focus:ring-[#E5A855]"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/60">Primary City / Region</label>
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-white/10 bg-black/70 px-3 py-2.5 text-sm text-white outline-none focus:border-[#E5A855]"
                        >
                          <option value="Accra">Accra, Ghana</option>
                          <option value="Kumasi">Kumasi, Ghana</option>
                          <option value="Takoradi">Takoradi, Ghana</option>
                          <option value="Lagos">Lagos, Nigeria</option>
                          <option value="London">London, UK</option>
                          <option value="Diaspora">Other / Global Diaspora</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                          {role === 'client' ? 'Service Required' : 'Primary Discipline'}
                        </label>
                        <select
                          value={discipline}
                          onChange={(e) => setDiscipline(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-white/10 bg-black/70 px-3 py-2.5 text-sm text-white outline-none focus:border-[#E5A855]"
                        >
                          <option value="Editorial & Portrait Photography">Editorial & Portrait Photography</option>
                          <option value="Luxury Bridal & Wedding Coverage">Luxury Bridal & Wedding Coverage</option>
                          <option value="Commercial & Music Video DP">Commercial & Music Video DP</option>
                          <option value="Celebrity Makeup & Airbrushing">Celebrity Makeup & Airbrushing</option>
                          <option value="Fashion Modeling & Commercial Talent">Fashion Modeling & Commercial Talent</option>
                          <option value="Wardrobe & Creative Direction">Wardrobe & Creative Direction</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl gold-gradient-bg py-3.5 text-sm font-bold text-black shadow-lg shadow-[#E5A855]/20 hover:brightness-110 cursor-pointer"
                    >
                      <span>Reserve Priority Access & 0% Fees Pass</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>

                  {/* Perks Line */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/50 border-t border-white/[0.06] pt-3">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[#E5A855]" /> 0% Booking Fee for 3 Months</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-[#E5A855]" /> Verified Founding Badge</span>
                    <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-[#E5A855]" /> Gala Invite Priority</span>
                  </div>
                </div>
              ) : (
                /* Luxury Digital VIP Pass */
                <div className="py-2 text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient-bg text-black shadow-xl shadow-[#E5A855]/30">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  
                  <h3 className="mt-4 font-editorial text-3xl font-bold text-white">
                    VIP Access Confirmed!
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    Welcome to the founding circle, <strong className="text-white">{name}</strong>.
                  </p>

                  {/* Digital Ticket Badge */}
                  <div className="mt-6 rounded-2xl border border-[#E5A855]/40 bg-gradient-to-br from-black/80 via-[#181614] to-black/90 p-5 text-left shadow-2xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 h-28 w-28 bg-[#E5A855]/10 rounded-full blur-2xl" />
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5A855]">Founding Member Pass</span>
                        <h4 className="font-editorial text-2xl font-bold text-white tracking-wide">{ticketId}</h4>
                      </div>
                      <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                        Tier 1 Priority
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/70">
                      <div>
                        <span className="text-[10px] uppercase text-white/40">Category</span>
                        <p className="font-semibold text-white">{role === 'client' ? 'Private Client' : 'Pro Creative'}</p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-white/40">City</span>
                        <p className="font-semibold text-white">{city}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2 pt-2 sm:flex-row">
                      <button
                        onClick={handleCopyLink}
                        className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.06] py-2 text-xs font-semibold text-white hover:bg-white/10"
                      >
                        <Copy className="h-3.5 w-3.5 text-[#E5A855]" />
                        <span>{copied ? 'Link Copied!' : 'Copy Referral Link'}</span>
                      </button>

                      <button
                        onClick={handleShareWhatsApp}
                        className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 py-2 text-xs font-semibold text-white shadow-md"
                      >
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Share on WhatsApp</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs font-bold text-[#E5A855] underline decoration-[#E5A855]/50 underline-offset-4 hover:text-white"
                  >
                    Register another pass
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Right: High-Fashion Black Visual Mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1: Stunning High Fashion Model */}
              <div className="group relative overflow-hidden rounded-3xl bg-[#121215] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
                  alt="High fashion editorial model"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="rounded-full bg-[#E5A855] px-2.5 py-0.5 text-[10px] font-bold text-black uppercase">
                    Editorial
                  </span>
                  <p className="mt-1 font-editorial text-lg font-bold text-white">Vogue Africa Campaign</p>
                  <p className="text-[11px] text-white/60">Shot in East Legon, Accra</p>
                </div>
              </div>

              {/* Image 2: Handsome Cinematographer */}
              <div className="group relative mt-8 overflow-hidden rounded-3xl bg-[#121215] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                  alt="Creative Cinematographer"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white uppercase">
                    Cinematography
                  </span>
                  <p className="mt-1 font-editorial text-lg font-bold text-white">ARRI Alexa 4K Film</p>
                  <p className="text-[11px] text-white/60">Kofi Mensah Studio</p>
                </div>
              </div>

              {/* Image 3: Gorgeous Glamour Makeup */}
              <div className="group relative -mt-4 overflow-hidden rounded-3xl bg-[#121215] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800"
                  alt="Melanin beauty glam"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="rounded-full bg-[#E5A855] px-2.5 py-0.5 text-[10px] font-bold text-black uppercase">
                    Beauty & MUA
                  </span>
                  <p className="mt-1 font-editorial text-lg font-bold text-white">Glow Airbrush Glam</p>
                  <p className="text-[11px] text-white/60">Akua Serwaa Artistry</p>
                </div>
              </div>

              {/* Image 4: Radiant Model with Braids */}
              <div className="group relative overflow-hidden rounded-3xl bg-[#121215] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800"
                  alt="High fashion model in profile"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white uppercase">
                    Runway
                  </span>
                  <p className="mt-1 font-editorial text-lg font-bold text-white">Accra Fashion Week</p>
                  <p className="text-[11px] text-white/60">Luxury Couture</p>
                </div>
              </div>

            </div>

            {/* Glowing Badge Floating */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass-panel-gold p-4 sm:flex items-center gap-3.5 shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gold-gradient-bg text-black">
                <Flame className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#E5A855]">Creator Operating System</p>
                <p className="font-editorial text-lg font-bold text-white">Built for Ghana & The Global Diaspora</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
