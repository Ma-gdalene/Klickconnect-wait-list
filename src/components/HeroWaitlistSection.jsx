import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Copy, Share2, Users, Flame, MapPin } from 'lucide-react';

export default function HeroWaitlistSection({ waitlistCount, onNewSignup }) {
  const [role, setRole] = useState('client');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Accra');
  const [discipline, setDiscipline] = useState('Editorial & Portrait Photography');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    setTicketId(`KLICK-${city.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name) return;

    const signupData = {
      name,
      email,
      city,
      role,
      discipline,
      ticketId,
      date: new Date().toISOString()
    };

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
    const text = `I just reserved my early VIP access to KlickConnect — Ghana & Africa's premier creative operating system. Claim your founding pass with my invite code ${ticketId}: https://klickconnect.online`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-10 sm:px-8 md:pb-28 md:pt-16">
      
      {/* Background Warm Accents */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#E8D9C7]/50 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#F5E9DD]/60 blur-[140px]" />

      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left: Headline & Interactive Waitlist Card */}
          <div className="flex flex-col items-start">
            
            {/* Live Counter Pill */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A25A]/35 bg-[#F5E9DD]/60 px-4 py-1.5 text-xs font-semibold text-[#7A4B2D] shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#C5834D] animate-ping" />
              <span>Phase 1 Waitlist • {waitlistCount.toLocaleString()}+ Members Registered</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-5xl font-bold leading-[0.93] text-[#1F1F1F] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
              Where Africa’s elite <span className="gold-gradient-text italic font-normal">creative talent</span> meets unforgettable moments.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#666666] sm:text-lg">
              Whether you're booking an elite photographer or scaling a luxury creative business — KlickConnect is your home. Connecting verified photographers, filmmakers, MUAs, and models across Accra, Kumasi, London, and the global diaspora.
            </p>

            {/* Interactive Waitlist Card */}
            <div id="waitlist-card" className="mt-8 w-full rounded-3xl glass-panel-luxury p-6 sm:p-8">
              {!submitted ? (
                <div>
                  <div className="flex items-center justify-between border-b border-[#1F1F1F]/[0.08] pb-4">
                    <div>
                      <span className="eyebrow-luxury">Priority Registration</span>
                      <h3 className="font-editorial text-2xl font-bold text-[#1F1F1F]">Claim Your Founding VIP Access</h3>
                    </div>
                    <span className="hidden sm:inline-block rounded-full bg-[#F0E5D9] px-3 py-1 text-[11px] font-bold text-[#7A4B2D] border border-[#C8A25A]/30">
                      Founding Pass
                    </span>
                  </div>

                  {/* Role Switcher */}
                  <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-[#F4F1EA] p-1.5 border border-[#1F1F1F]/[0.06]">
                    <button
                      type="button"
                      onClick={() => setRole('client')}
                      className={`rounded-xl py-2.5 text-xs font-bold transition-all cursor-pointer ${
                        role === 'client'
                          ? 'bg-white text-[#1F1F1F] shadow-sm'
                          : 'text-[#666666] hover:text-[#1F1F1F]'
                      }`}
                    >
                      I Want to Book Creative Talent
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('creative')}
                      className={`rounded-xl py-2.5 text-xs font-bold transition-all cursor-pointer ${
                        role === 'creative'
                          ? 'bg-[#1F1F1F] text-white shadow-sm'
                          : 'text-[#666666] hover:text-[#1F1F1F]'
                      }`}
                    >
                      I’m a Creative Professional
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#1F1F1F]/70">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ama Boadi"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-[#1F1F1F]/15 bg-white px-3.5 py-2.5 text-sm text-[#1F1F1F] placeholder-[#999999] outline-none focus:border-[#C8A25A] focus:ring-2 focus:ring-[#C8A25A]/20"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#1F1F1F]/70">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-[#1F1F1F]/15 bg-white px-3.5 py-2.5 text-sm text-[#1F1F1F] placeholder-[#999999] outline-none focus:border-[#C8A25A] focus:ring-2 focus:ring-[#C8A25A]/20"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#1F1F1F]/70">Primary City / Region</label>
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-[#1F1F1F]/15 bg-white px-3 py-2.5 text-sm text-[#1F1F1F] outline-none focus:border-[#C8A25A]"
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
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#1F1F1F]/70">
                          {role === 'client' ? 'Service Required' : 'Primary Specialty'}
                        </label>
                        <select
                          value={discipline}
                          onChange={(e) => setDiscipline(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-[#1F1F1F]/15 bg-white px-3 py-2.5 text-sm text-[#1F1F1F] outline-none focus:border-[#C8A25A]"
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
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl btn-primary-luxury py-3.5 text-sm font-bold shadow-md cursor-pointer"
                    >
                      <span>Reserve Priority Access & 0% Fees Pass</span>
                      <ArrowRight className="h-4 w-4 text-[#C8A25A]" />
                    </button>
                  </form>

                  {/* Perks Line */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#666666] border-t border-[#1F1F1F]/[0.08] pt-3">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[#C5834D]" /> 0% Booking Fee for 3 Months</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#C5834D]" /> Verified Founding Badge</span>
                    <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-[#C5834D]" /> Gala Invite Priority</span>
                  </div>
                </div>
              ) : (
                /* Luxury Digital Pass Card */
                <div className="py-2 text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0E5D9] text-[#7A4B2D] border border-[#C8A25A]/40 shadow-md">
                    <CheckCircle2 className="h-8 w-8 text-[#C5834D]" />
                  </div>
                  
                  <h3 className="mt-4 font-editorial text-3xl font-bold text-[#1F1F1F]">
                    VIP Access Confirmed!
                  </h3>
                  <p className="mt-1 text-sm text-[#666666]">
                    Welcome to the founding circle, <strong className="text-[#1F1F1F]">{name}</strong>.
                  </p>

                  {/* Digital Pass Ticket */}
                  <div className="mt-6 rounded-2xl border border-[#C8A25A]/40 bg-[#FFFFFF] p-5 text-left shadow-lg relative overflow-hidden">
                    <div className="flex items-center justify-between border-b border-[#1F1F1F]/10 pb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A5E3B]">Founding Member Pass</span>
                        <h4 className="font-editorial text-2xl font-bold text-[#1F1F1F] tracking-wide">{ticketId}</h4>
                      </div>
                      <span className="rounded-full bg-[#F0E5D9] px-2.5 py-1 text-[10px] font-bold text-[#7A4B2D] border border-[#C8A25A]/30">
                        Tier 1 Priority
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#666666]">
                      <div>
                        <span className="text-[10px] uppercase text-[#999999]">Account Role</span>
                        <p className="font-semibold text-[#1F1F1F]">{role === 'client' ? 'Client / Brand' : 'Creative Pro'}</p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-[#999999]">Primary City</span>
                        <p className="font-semibold text-[#1F1F1F]">{city}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2 pt-2 sm:flex-row">
                      <button
                        onClick={handleCopyLink}
                        className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-[#1F1F1F]/15 bg-[#F9F7F2] py-2 text-xs font-semibold text-[#1F1F1F] hover:bg-[#F0E5D9] cursor-pointer"
                      >
                        <Copy className="h-3.5 w-3.5 text-[#C5834D]" />
                        <span>{copied ? 'Link Copied!' : 'Copy Invite Link'}</span>
                      </button>

                      <button
                        onClick={handleShareWhatsApp}
                        className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 py-2 text-xs font-semibold text-white shadow-xs cursor-pointer"
                      >
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Share on WhatsApp</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs font-bold text-[#8A5E3B] underline decoration-[#8A5E3B]/40 underline-offset-4 hover:text-[#1F1F1F] cursor-pointer"
                  >
                    Register another pass
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Right: High-Fashion Black Visual Mosaic (100% Black Models & Creators) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1: High Fashion Editorial Model */}
              <div className="group relative overflow-hidden rounded-3xl bg-[#E8D9C7] border border-[#1F1F1F]/10 shadow-lg transition-all duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
                  alt="High fashion editorial model"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded-full bg-[#C8A25A] px-2.5 py-0.5 text-[10px] font-bold text-black uppercase">
                    Editorial
                  </span>
                  <p className="mt-1 font-editorial text-lg font-bold">Vogue Africa Campaign</p>
                  <p className="text-[11px] text-white/70">East Legon, Accra</p>
                </div>
              </div>

              {/* Image 2: Handsome Cinematographer */}
              <div className="group relative mt-8 overflow-hidden rounded-3xl bg-[#E8D9C7] border border-[#1F1F1F]/10 shadow-lg transition-all duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                  alt="Creative Cinematographer"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded-full bg-white/30 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white uppercase">
                    Cinematography
                  </span>
                  <p className="mt-1 font-editorial text-lg font-bold">ARRI Alexa 4K Film</p>
                  <p className="text-[11px] text-white/70">Kofi Mensah Studio</p>
                </div>
              </div>

              {/* Image 3: Gorgeous Glamour Makeup */}
              <div className="group relative -mt-4 overflow-hidden rounded-3xl bg-[#E8D9C7] border border-[#1F1F1F]/10 shadow-lg transition-all duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800"
                  alt="Melanin beauty glam"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded-full bg-[#C8A25A] px-2.5 py-0.5 text-[10px] font-bold text-black uppercase">
                    Beauty & MUA
                  </span>
                  <p className="mt-1 font-editorial text-lg font-bold">Glow Airbrush Glam</p>
                  <p className="text-[11px] text-white/70">Akua Serwaa Artistry</p>
                </div>
              </div>

              {/* Image 4: Radiant Model with Braids */}
              <div className="group relative overflow-hidden rounded-3xl bg-[#E8D9C7] border border-[#1F1F1F]/10 shadow-lg transition-all duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800"
                  alt="High fashion model with braids"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded-full bg-white/30 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white uppercase">
                    Runway
                  </span>
                  <p className="mt-1 font-editorial text-lg font-bold">Accra Fashion Week</p>
                  <p className="text-[11px] text-white/70">Luxury Couture</p>
                </div>
              </div>

            </div>

            {/* Floating Luxury Tag */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 sm:flex items-center gap-3.5 shadow-xl border border-[#C8A25A]/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0E5D9] text-[#7A4B2D]">
                <Flame className="h-5 w-5 text-[#C5834D]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8A5E3B]">Built for Ghana & Africa</p>
                <p className="font-editorial text-base font-bold text-[#1F1F1F]">Africa's Creative Operating System</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
