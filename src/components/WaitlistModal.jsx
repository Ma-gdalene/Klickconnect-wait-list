import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Copy, ArrowRight, UserCheck, Briefcase } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

export default function WaitlistModal({ isOpen, initialRole = 'client', onClose }) {
  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('photographers');
  const [portfolio, setPortfolio] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const referralCode = `KC-VIP-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // Persist to local storage
    const existing = JSON.parse(localStorage.getItem('klickconnect_waitlist') || '[]');
    existing.push({ name, email, role, specialty, portfolio, referralCode, date: new Date().toISOString() });
    localStorage.setItem('klickconnect_waitlist', JSON.stringify(existing));

    setSubmitted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://klickconnect.suite/join?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-[#273234]/70 backdrop-blur-md" />

      {/* Modal Box */}
      <div className="animate-modal-zoom relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-[#F8F6F0] p-6 shadow-2xl sm:p-8 md:p-10">
        
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
              <span className="eyebrow text-[#d96b45]">VIP Early Access</span>
            </div>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#273234]">
              Join the KlickConnect Waitlist
            </h2>
            <p className="mt-1 text-sm text-[#536061]">
              Be the first to experience the premier marketplace for creative moments.
            </p>

            {/* Role Selector Tabs */}
            <div className="mt-6 flex rounded-2xl bg-white p-1.5 shadow-inner">
              <button
                type="button"
                onClick={() => setRole('client')}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all ${
                  role === 'client'
                    ? 'bg-[#d96b45] text-white shadow-md'
                    : 'text-[#536061] hover:text-[#273234]'
                }`}
              >
                <Briefcase className="h-4 w-4" />
                <span>I'm a Client</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('creative')}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all ${
                  role === 'creative'
                    ? 'bg-[#273234] text-[#f2b49b] shadow-md'
                    : 'text-[#536061] hover:text-[#273234]'
                }`}
              >
                <UserCheck className="h-4 w-4" />
                <span>I'm a Creative Pro</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Magdalene Gilbert"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#273234]/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#d96b45]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#273234]/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#d96b45]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">
                  {role === 'creative' ? 'Primary Specialty' : 'Primary Service Needed'}
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#273234]/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#d96b45]"
                >
                  {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </div>

              {role === 'creative' && (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#273234]">Portfolio or Instagram Link</label>
                  <input
                    type="url"
                    placeholder="https://instagram.com/yourhandle or website"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#273234]/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#d96b45]"
                  />
                </div>
              )}

              <button
                type="submit"
                className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-white shadow-md transition-all ${
                  role === 'client' ? 'bg-[#d96b45] hover:bg-[#273234]' : 'bg-[#273234] hover:bg-[#d96b45]'
                }`}
              >
                <span>Reserve My Spot</span>
                <ArrowRight className="h-4 w-4" />
              </button>

            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d96b45]/10 text-[#d96b45]">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#273234]">Welcome to the Inner Circle!</h2>
            <p className="mt-2 text-sm text-[#536061]">
              You are reserved on the <strong className="text-[#d96b45]">{role === 'client' ? 'Client' : 'Creative Pro'}</strong> waitlist.
            </p>

            {/* Referral Link Box */}
            <div className="mt-6 rounded-2xl bg-white p-5 text-left shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d96b45]">
                Your VIP Referral Pass
              </span>
              <div className="mt-2 flex items-center justify-between rounded-xl border border-[#273234]/10 bg-[#F8F6F0] p-3">
                <span className="font-mono text-xs font-bold text-[#273234]">{referralCode}</span>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1 text-xs font-bold text-[#d96b45] hover:underline"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy Pass'}</span>
                </button>
              </div>
              <p className="mt-2 text-[11px] text-[#536061]">
                Share your referral pass to skip ahead in line for launch priority.
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-[#273234] px-8 py-3 text-xs font-bold text-white hover:bg-[#d96b45]"
            >
              Done & Return
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
