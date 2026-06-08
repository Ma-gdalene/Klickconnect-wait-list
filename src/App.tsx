import React, { useState, useEffect } from "react";
import { 
  Camera, 
  Video, 
  Sparkles, 
  Calendar, 
  Users, 
  Handshake, 
  Star, 
  Award, 
  CheckCircle2, 
  Instagram, 
  Facebook,
  ChevronRight, 
  Clock, 
  ArrowRight, 
  DollarSign, 
  Smartphone,
  ShieldCheck,
  Zap,
  Tag,
  BookOpen
} from "lucide-react";

// Precise, elegant custom TikTok Icon 
function TikTokIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

// Precise, elegant signature KlickConnect Logo representing brand guidelines of Gold on Dark
function Logo({ className = "h-11 w-11" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full transform hover:scale-105 transition-transform duration-500">
        <defs>
          <linearGradient id="luxuryGoldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A67B28" />
            <stop offset="25%" stopColor="#D9B455" />
            <stop offset="50%" stopColor="#FFF2CC" />
            <stop offset="75%" stopColor="#D9B455" />
            <stop offset="100%" stopColor="#8C6A15" />
          </linearGradient>
        </defs>
        <circle 
          cx="50" 
          cy="50" 
          r="41" 
          fill="none" 
          stroke="url(#luxuryGoldGradient)" 
          strokeWidth="3.5"
          className="filter drop-shadow-[0_0_8px_rgba(217,180,85,0.35)]"
        />
        {/* Customized exact high-luxury solid stem column */}
        <rect 
          x="35" 
          y="27" 
          width="7" 
          height="46" 
          rx="1" 
          fill="url(#luxuryGoldGradient)" 
        />
        {/* Customized exact high-luxury unified K-chevron with elegant luxury gap to stem */}
        <path 
          d="M 64 27 L 47 50 L 64 73" 
          stroke="url(#luxuryGoldGradient)" 
          strokeWidth="7.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

// Custom curated creator cards with premium photographic stories - strictly elegant Black creatives only
const OUTSTANDING_FOUNDERS = [
  {
    id: "xelan",
    name: "Xelan Visuels",
    handle: "@xelanvisuels",
    role: "Lead Portraitist",
    category: "Photographer",
    location: "Accra, Ghana",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    cover: "/src/assets/images/photographer_director_collab_1780922863491.png",
    bio: "Capturing the cinematic drama of West African legacy wedding and lookbook sessions. Elite lead portraitist consulting with luxury brands across the continent.",
    startingRate: "2,500 GHS",
    portfolio: [
      "/src/assets/images/photographer_director_collab_1780922863491.png",
      "/src/assets/images/vanguard_crew_session_1780922801642.png",
      "/src/assets/images/camera_rain_puddle_1780922843137.png"
    ]
  },
  {
    id: "daniel",
    name: "Daniel Logan",
    handle: "@loganfilms",
    role: "Cinematographer",
    category: "Videographer",
    location: "Accra, Ghana",
    avatar: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
    cover: "/src/assets/images/camera_rain_puddle_1780922843137.png",
    bio: "Vibrant brand storytelling through anamorphic motion design. Crafting high-end wedding films and visual media reels that invite global clients.",
    startingRate: "4,500 GHS",
    portfolio: [
      "/src/assets/images/camera_rain_puddle_1780922843137.png",
      "/src/assets/images/vanguard_crew_session_1780922801642.png",
      "/src/assets/images/photographer_director_collab_1780922863491.png"
    ]
  },
  {
    id: "akua",
    name: "Akua Boadi",
    handle: "@makeupbyakua",
    role: "Creative MUA",
    category: "Makeup Artist",
    location: "Accra, Ghana",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
    cover: "/src/assets/images/luxury_african_fashion_model_1780923225087.png",
    bio: "Pioneering luminous skin finishes and abstract cosmetic art for haute couture. Voted top creative makeup designer in Accra's boutique circle.",
    startingRate: "1,200 GHS",
    portfolio: [
      "/src/assets/images/luxury_african_fashion_model_1780923225087.png",
      "/src/assets/images/vanguard_crew_session_1780922801642.png",
      "/src/assets/images/photographer_director_collab_1780922863491.png"
    ]
  },
  {
    id: "elena",
    name: "Elena Mensah",
    handle: "@elenamensah",
    role: "High-Fashion Model",
    category: "Model",
    location: "Accra, Ghana",
    avatar: "/src/assets/images/luxury_african_fashion_model_1780923225087.png",
    cover: "/src/assets/images/luxury_african_fashion_model_1780923225087.png",
    bio: "High-fashion beauty muse representing premier designers on elite African and global runways. Specializes in luxury campaigns, editorial, and curated catalogs.",
    startingRate: "3,000 GHS",
    portfolio: [
      "/src/assets/images/luxury_african_fashion_model_1780923225087.png",
      "/src/assets/images/vanguard_crew_session_1780922801642.png",
      "/src/assets/images/photographer_director_collab_1780922863491.png"
    ]
  },
  {
    id: "kofi",
    name: "Kofi Kyei",
    handle: "@kofikyeistyling",
    role: "Wedding Stylist & Director",
    category: "Stylist",
    location: "Accra, Ghana",
    avatar: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
    cover: "/src/assets/images/luxury_african_wedding_photoshoot_1780923207124.png",
    bio: "Bespoke style designer and coordinator for high-luxury African weddings. Aligning traditional kente integrations with tailored modern velvet tuxedos.",
    startingRate: "5,000 GHS",
    portfolio: [
      "/src/assets/images/luxury_african_wedding_photoshoot_1780923207124.png",
      "/src/assets/images/vanguard_crew_session_1780922801642.png",
      "/src/assets/images/klickconnect_merch_1780922823585.png"
    ]
  },
  {
    id: "ama",
    name: "Ama Serwaa",
    handle: "@amaserwaa_dir",
    role: "Creative Director",
    category: "Director",
    location: "Accra, Ghana",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
    cover: "/src/assets/images/vanguard_crew_session_1780922801642.png",
    bio: "Visual curator coordinating lifestyle aesthetics, lookbook sets, and campaign setups for West Africa's leading editorial boutiques.",
    startingRate: "3,500 GHS",
    portfolio: [
      "/src/assets/images/vanguard_crew_session_1780922801642.png",
      "/src/assets/images/photographer_director_collab_1780922863491.png",
      "/src/assets/images/luxury_african_wedding_photoshoot_1780923207124.png"
    ]
  }
];

// Curated high-fashion boutique products representing exclusive downloads & prints
const BOUTIQUE_SHOWCASE = [
  {
    id: "preset-cinematic",
    title: "Lightroom Preset Suite — Velvet Gold",
    creator: "Elena Mensah & Xelan",
    category: "PRESETS",
    price: "79.00 GHS",
    rating: "5.0",
    downloads: 148,
    imageUrl: "/src/assets/images/luxury_african_fashion_model_1780923225087.png"
  },
  {
    id: "print-sunset",
    title: "Fine Art Print — Golden Hour Accra",
    creator: "Kofi Kyei & Xelan",
    category: "LIMITED PRINTS",
    price: "149.00 GHS",
    rating: "4.9",
    downloads: 82,
    imageUrl: "/src/assets/images/luxury_african_wedding_photoshoot_1780923207124.png"
  },
  {
    id: "luts-classic",
    title: "Cinematic LUTs Pack — Legacy 4K",
    creator: "Daniel Logan",
    category: "FILM LUTS",
    price: "199.00 GHS",
    rating: "5.0",
    downloads: 215,
    imageUrl: "/src/assets/images/camera_rain_puddle_1780922843137.png"
  }
];

// Curated scenes showing exact premium photos from user guidelines
const VANGUARD_SCENES = [
  {
    title: "The Creative Studio Session",
    caption: "Our master photographers and makeup artists collaborating live on a high-fashion lookbook set.",
    badge: "STUDIO PORTRAIT",
    imageUrl: "/src/assets/images/vanguard_crew_session_1780922801642.png",
    details: "Accra, Cantonments Studio Set • Styled by @makeupbyakua"
  },
  {
    title: "Cinematic Tech Fidelity",
    caption: "Pure cinematic craftsmanship: high-fidelity professional equipment designed to capture every detail.",
    badge: "EQUIPMENT SOUL",
    imageUrl: "/src/assets/images/camera_rain_puddle_1780922843137.png",
    details: "Accra, Wet Asphalt Reflexion • Lens: Canon RF 85mm Luxury Series"
  },
  {
    title: "Elite Merchandise & Apparel",
    caption: "Custom embroidered KlickConnect caps, bespoke hardbound notebooks, and cotton tote bags matching true status.",
    badge: "BRAND LIFESTYLE",
    imageUrl: "/src/assets/images/klickconnect_merch_1780922823585.png",
    details: "Accra, Vanguard Meetup • Branded Porter Bags & Notebooks Suite"
  }
];

export default function App() {
  const [spotsLeft, setSpotsLeft] = useState(64);
  const [invitedCreatorsCount, setInvitedCreatorsCount] = useState(36); // Currently over 35+
  const [email, setEmail] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("Photographer");
  const [selectedCreator, setSelectedCreator] = useState(OUTSTANDING_FOUNDERS[0]);
  const [activePortfolioImg, setActivePortfolioImg] = useState(OUTSTANDING_FOUNDERS[0].portfolio[0]);
  const [calculatorEarnings, setCalculatorEarnings] = useState(15000); // monthly base earnings (GHS)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [activeVanguardTab, setActiveVanguardTab] = useState(0);
  const [selectedRoleFilter, setSelectedRoleFilter] = useState("All");

  const filteredFounders = OUTSTANDING_FOUNDERS.filter((f) => {
    if (selectedRoleFilter === "All") return true;
    return f.category === selectedRoleFilter || f.role.toLowerCase().includes(selectedRoleFilter.toLowerCase());
  });

  // Sync active image when creator changes
  useEffect(() => {
    setActivePortfolioImg(selectedCreator.portfolio[0]);
  }, [selectedCreator]);

  // Urgency logic: dynamic spot updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev <= 12) return 12; // preserve extreme limited status
        const rand = Math.random();
        if (rand > 0.8) {
          setInvitedCreatorsCount((c) => c + 1);
          return prev - 1;
        }
        return prev;
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate real backend submission before showing glorious modal
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessModal(true);
      setInvitedCreatorsCount((prev) => prev + 1);
      setSpotsLeft((prev) => Math.max(12, prev - 1));

      // Persist in local storage
      localStorage.setItem("klick_connect_subscribed_email", email);
      // Waitlist submission completes beautifully without forcing any intrusive popups/redirects
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic luxury math
  const standardFeeRate = 1.15; // 15% standard commission
  const foundingFeeRate = 1.10; // 10% premium founder program commission
  const commissionStandard = calculatorEarnings * 0.15;
  const commissionFounder = calculatorEarnings * 0.10;
  const monthlySaves = commissionStandard - commissionFounder;
  const freeStockValue = 500; // estimated GHS value per month
  const totalMonthlyEarningGains = monthlySaves + freeStockValue;
  const annualTotalEarningGains = totalMonthlyEarningGains * 12;

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans-premium selection:bg-amber-400 selection:text-black">
      {/* Dynamic Ambient Blur Backgrounds representing deep luxury & electric cobalt blue vibes */}
      <div className="absolute top-0 left-0 w-full h-[85vh] overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-60 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-20 right-[-300px] w-[900px] h-[900px] bg-yellow-500/5 rounded-full blur-[200px]" />
        <div className="absolute top-[40vh] left-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]" />
      </div>

      {/* Top Banner: Real urgency with countdown highlights */}
      <div className="bg-gradient-to-r from-blue-950 via-black to-neutral-950 border-b border-blue-900/40 text-center py-2 px-4 sticky top-0 z-50 backdrop-blur-lg">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-2.5 text-xs">
          <span className="inline-flex items-center gap-1.5 bg-blue-500/15 text-blue-400 font-mono-tech uppercase text-[10px] tracking-wider px-2.5 py-0.5 rounded border border-blue-500/20">
            👑 FOUNDING CREATOR OPPORTUNITY
          </span>
          <p className="text-neutral-300 font-light">
            Cohort limited to first <strong className="text-white">100 creators</strong>. Enjoy permanent <strong className="text-amber-400">10% commission status</strong>, FreeStock suite, and first 3-month launch perks.
          </p>
          <button 
            onClick={() => scrollToSection("secure-funnel")}
            className="text-amber-400 hover:text-amber-300 underline font-semibold transition-colors duration-200 border-none bg-none cursor-pointer leading-none"
          >
            Reg Lock Slot →
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <header className="border-b border-neutral-900/60 bg-black/80 backdrop-blur-xl sticky top-[37px] z-40">
        <div className="container mx-auto px-4 py-3.5 flex justify-between items-center max-w-7xl">
          
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo className="h-10 w-10 sm:h-11 sm:w-11" />
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-normal text-white block leading-none">
                Klick<span className="text-[#D9B455] font-light">Connect</span>
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.35em] text-[#D9B455]/85 font-semibold block uppercase leading-none mt-1">
                CONNECT. BOOK. CREATE.
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest font-semibold uppercase text-neutral-400">
            <a href="#hero-intro" className="hover:text-blue-400 transition-colors duration-200">The Vision</a>
            <a href="#how-it-works" className="hover:text-blue-400 transition-colors duration-200">How to Join</a>
            <a href="#benefits-panel" className="hover:text-blue-400 transition-colors duration-200">Exclusive Perks</a>
            <a href="#interactive-sandbox" className="hover:text-blue-400 transition-colors duration-200">Vetted Founders</a>
            <a href="#boutique-showcase" className="hover:text-blue-400 transition-colors duration-200">Boutique Store</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/officialklickconnect"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-neutral-400 hover:text-[#D9B455] transition-colors duration-200"
              title="KlickConnect Official Instagram"
              id="global-instagram-connection"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@officialklickconnect"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-neutral-400 hover:text-[#D9B455] transition-colors duration-200"
              title="KlickConnect Official TikTok"
              id="global-tiktok-connection"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1EYd5hkZYP/"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-neutral-400 hover:text-[#D9B455] transition-colors duration-200"
              title="KlickConnect Official Facebook"
              id="global-facebook-connection"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <button
              onClick={() => scrollToSection("secure-funnel")}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-xs px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.25)] uppercase tracking-wider ml-1.5"
              id="global-apply-navigation-button"
            >
              Join waitlist
            </button>
          </div>

        </div>
      </header>

      {/* Premium Hero with Magnificent Image Header Background */}
      <section className="relative pt-6 pb-20 overflow-hidden border-b border-neutral-900" id="hero-intro">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Magnificent Luxury Welcome Poster Header */}
          <div className="relative rounded-3xl overflow-hidden mb-16 border border-neutral-800/80 aspect-[21/9] min-h-[350px] md:min-h-[460px] flex items-center justify-center p-8 select-none shadow-[0_0_50px_rgba(217,180,85,0.06)] group">
            {/* Background Image: Ultimate premium luxury African wedding professional photoshoot */}
            <img 
              src="/src/assets/images/luxury_african_wedding_photoshoot_1780923207124.png"
              alt="Premium luxury African wedding professional photoshoot"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.4] group-hover:scale-102 transition-transform duration-1000 pointer-events-none"
            />
            {/* Custom Vignette & Light Spotlight overlaying the satin */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
            <div className="absolute inset-x-0 top-0 h-full bg-radial-spotlight pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(217,180,85,0.12) 0%, rgba(0,0,0,0) 70%)" }} />
            
            {/* Complete Golden Branding Reveal (Screenshot 2 / 3 concept) */}
            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6 flex flex-col items-center">
              
              {/* Handcrafted animated Sparkle container */}
              <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-black/70 border border-[#D9B455]/30 shadow-[0_0_15px_rgba(217,180,85,0.1)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9B455] animate-ping" />
                <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#D9B455] font-bold">SOMETHING EXTRAORDINARY IS COMING</span>
              </div>

              {/* Majestic gold metallic logo */}
              <div className="h-28 w-28 md:h-36 md:w-36 filter drop-shadow-[0_0_12px_rgba(217,180,85,0.3)] hover:scale-105 transition-transform duration-500 cursor-pointer">
                <Logo className="w-full h-full" />
              </div>

              {/* Brand pair text */}
              <div className="space-y-2">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-normal text-white">
                  Klick<span className="text-[#D9B455] font-light font-sans-premium">Connect</span>
                </h2>
                <p className="text-[10px] sm:text-xs tracking-[0.35em] text-[#D9B455]/85 uppercase font-bold">
                  C O N N E C T . &nbsp; B O O K . &nbsp; C R E A T E .
                </p>
              </div>

              {/* Sparkle divider and tagline */}
              <div className="flex flex-col items-center space-y-2 pt-2">
                <div className="flex items-center gap-4 w-44">
                  <div className="h-[1px] bg-gradient-to-r from-transparent to-[#D9B455]/50 flex-1" />
                  <span className="text-sm">✨</span>
                  <div className="h-[1px] bg-gradient-to-l from-transparent to-[#D9B455]/50 flex-1" />
                </div>
                <p className="text-neutral-300 font-serif-display text-sm md:text-base font-light italic max-w-md">
                  "The right connection brings your vision to life."
                </p>
              </div>

            </div>
          </div>

          {/* Majestic Interactive Welcome Grid: Brand Program Poster & Photo Vanguard Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
            
            {/* Left Column: True Digital Recreation of Launch Poster (Image 4 / 5 concept) */}
            <div className="lg:col-span-6 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 sm:p-10 rounded-3xl border border-neutral-850 flex flex-col justify-between space-y-8 relative shadow-2xl">
              
              {/* Subtle Gold light accent overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="space-y-6">
                
                {/* Poster Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {/* Customized Glowing Gold Megaphone SVG */}
                      <svg className="w-5 h-5 text-[#D9B455]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                      <span className="text-emerald-400 font-mono-tech text-[10px] tracking-widest font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">LIMITED SLOTS</span>
                    </div>
                    <h3 className="text-[#D9B455] text-5xl font-black tracking-tight font-serif-display uppercase leading-none">
                      LAUNCHING <br />
                      <span className="text-white text-5xl">SOON!</span>
                    </h3>
                  </div>
                  <div className="h-14 w-14 border border-[#D9B455]/40 rounded-full p-1.5 bg-black">
                    <Logo className="w-full h-full" />
                  </div>
                </div>

                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  Welcome to Africa’s elite creator platform. Designed to filter for absolute excellence, KlickConnect syncs photographers, videographers, styling directors, and editorial makeup experts into a unified ecosystem of escrow billing, calendar management, and boutique commerce.
                </p>

                {/* Sparkling Divider */}
                <div className="flex items-center gap-3">
                  <div className="h-[1px] bg-[#D9B455]/30 flex-1" />
                  <span className="text-xs text-[#D9B455]">✦</span>
                  <div className="h-[1px] bg-[#D9B455]/30 flex-1" />
                </div>

                {/* Four Beautiful Pillars with SVG Icons */}
                <div className="space-y-4 text-left">
                  
                  {/* Pillar 1 */}
                  <div className="flex items-start gap-4 p-3.5 bg-neutral-950/50 rounded-xl border border-neutral-900 group/item hover:border-[#D9B455]/20 hover:bg-neutral-950 transition-all duration-300">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-[#D9B455]/10 flex items-center justify-center text-[#D9B455] border border-[#D9B455]/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs uppercase font-bold tracking-wider text-white font-mono-tech group-hover/item:text-[#D9B455] transition-colors">
                        FIND CREATIVE TALENT
                      </p>
                      <p className="text-neutral-400 text-xs leading-relaxed font-light">
                        Discover elite photographers, models, videographers, MUA, stylists, and fashion architects.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex items-start gap-4 p-3.5 bg-neutral-950/50 rounded-xl border border-neutral-900 group/item hover:border-[#D9B455]/20 hover:bg-neutral-950 transition-all duration-300">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-[#D9B455]/10 flex items-center justify-center text-[#D9B455] border border-[#D9B455]/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs uppercase font-bold tracking-wider text-white font-mono-tech group-hover/item:text-[#D9B455] transition-colors">
                        BOOK & MANAGE PROJECTS
                      </p>
                      <p className="text-neutral-400 text-xs leading-relaxed font-light">
                        Book direct, manage active schedules, lease high-end gear, and track calendar openings.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex items-start gap-4 p-3.5 bg-neutral-950/50 rounded-xl border border-neutral-900 group/item hover:border-[#D9B455]/20 hover:bg-neutral-950 transition-all duration-300">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-[#D9B455]/10 flex items-center justify-center text-[#D9B455] border border-[#D9B455]/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs uppercase font-bold tracking-wider text-white font-mono-tech group-hover/item:text-[#D9B455] transition-colors">
                        COLLABORATE EASILY
                      </p>
                      <p className="text-neutral-400 text-xs leading-relaxed font-light">
                        Work with vetted creatives side-by-side. Communicate. Create. Connect. Elevate.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 4 */}
                  <div className="flex items-start gap-4 p-3.5 bg-neutral-950/50 rounded-xl border border-neutral-900 group/item hover:border-[#D9B455]/20 hover:bg-neutral-950 transition-all duration-300">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-[#D9B455]/10 flex items-center justify-center text-[#D9B455] border border-[#D9B455]/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs uppercase font-bold tracking-wider text-white font-mono-tech group-hover/item:text-[#D9B455] transition-colors">
                        BUILD YOUR CREATIVE NETWORK
                      </p>
                      <p className="text-neutral-400 text-xs leading-relaxed font-light">
                        Expand your geographic influence, sell presets, and grow your custom creative enterprise.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Poster Footer Brand Lines */}
              <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="text-[#D9B455] font-mono-tech text-[10px] tracking-widest font-extrabold uppercase">
                  ALL IN ONE PLACE. BUILT FOR CREATIVES. BY CREATIVES.
                </p>
                <div className="flex items-center gap-4.5">
                  <a 
                    href="https://instagram.com/officialklickconnect" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    <Instagram className="h-3.5 w-3.5 text-[#D9B455] animate-pulse" />
                    <span className="font-mono-tech text-[10px]">Instagram</span>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@officialklickconnect" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    <TikTokIcon className="h-3.5 w-3.5 text-[#D9B455]" />
                    <span className="font-mono-tech text-[10px]">TikTok</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1EYd5hkZYP/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    <Facebook className="h-3.5 w-3.5 text-[#D9B455]" />
                    <span className="font-mono-tech text-[10px]">Facebook</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Photo Vanguard Showcase (Beautiful tab structure representing Snapshot photos) */}
            <div className="lg:col-span-6 bg-neutral-900/40 p-6 sm:p-8 rounded-3xl border border-neutral-850 flex flex-col justify-between space-y-6 relative">
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-neutral-850 pb-4">
                  <div className="text-left">
                    <span className="text-[10px] font-mono-tech text-[#D9B455] tracking-widest block uppercase font-bold">EXQUISITE SCENE LOGS</span>
                    <h4 className="text-xl font-serif-display font-medium text-white tracking-wide mt-1">
                      Our Photo Vanguard Suite
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-400 font-mono-tech text-[9px] uppercase tracking-wider rounded-lg border border-blue-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Vetted Portfolios
                  </span>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed text-left">
                  We integrate real premium scenes directly into the welcome deck. Click the interactive tabs below to switch through curated studio art, professional gear, and bespoke merchandised products.
                </p>

                {/* Swapper Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-black rounded-xl border border-neutral-850">
                  {VANGUARD_SCENES.map((scene, idx) => {
                    const isSelected = activeVanguardTab === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveVanguardTab(idx)}
                        className={`py-2 text-[9px] sm:text-xs font-mono-tech font-bold uppercase tracking-wider rounded-lg transition-all ${
                          isSelected 
                            ? "bg-[#D9B455] text-black shadow-[0_0_12px_rgba(217,180,85,0.3)]" 
                            : "text-neutral-500 hover:text-white"
                        }`}
                      >
                        {scene.badge.split(" ")[0]}
                      </button>
                    );
                  })}
                </div>

                {/* Display Frame with Transitions */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-850 shadow-2xl group/img">
                  <img 
                    src={VANGUARD_SCENES[activeVanguardTab].imageUrl}
                    alt={VANGUARD_SCENES[activeVanguardTab].title}
                    className="w-full h-full object-cover object-center brightness-90 group-hover/img:scale-103 transition-all duration-700 pointer-events-none"
                  />
                  
                  {/* Backdrop Shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Photo Title Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left space-y-1.5 w-full">
                    <span className="inline-block text-[9px] font-mono-tech text-white bg-black/85 px-2.5 py-1 rounded font-bold uppercase border border-neutral-800">
                      {VANGUARD_SCENES[activeVanguardTab].badge}
                    </span>
                    <p className="text-white font-serif-display text-base font-semibold tracking-wide">
                      {VANGUARD_SCENES[activeVanguardTab].title}
                    </p>
                    <p className="text-neutral-300 text-xs font-light leading-snug">
                      {VANGUARD_SCENES[activeVanguardTab].caption}
                    </p>
                  </div>
                </div>

              </div>

              {/* Photo Shot Specs details */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900 text-left flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-mono-tech text-neutral-500 uppercase tracking-wide">LOCATION LOGS</p>
                  <p className="text-[#D9B455] font-mono-tech text-[10px] uppercase font-bold tracking-wider mt-0.5">
                    {VANGUARD_SCENES[activeVanguardTab].details}
                  </p>
                </div>
                <div className="h-6 w-6 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 border border-emerald-500/20 text-[10px]">
                  ✓
                </div>
              </div>

            </div>

          </div>

          {/* Vetted Cohort Stats & Waitlist urgency panel */}
          <div className="bg-neutral-950/80 backdrop-blur border border-neutral-900 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 justify-between items-stretch max-w-5xl mx-auto shadow-xl">
            
            <div className="text-left md:w-1/3 border-b md:border-b-0 md:border-r border-neutral-900 pb-6 md:pb-0 md:pr-6 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-xs uppercase font-mono-tech tracking-wider text-neutral-500 block">Active Handpicked Founders</span>
                <div className="flex items-baseline gap-2.5">
                  <p className="text-4xl font-black text-white font-mono-tech">{invitedCreatorsCount}+</p>
                  <span className="text-[10px] text-blue-400 uppercase font-bold font-mono-tech bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">VETTED</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                Elite visual pioneers currently building secure boutique portfolios in our Accra network branch.
              </p>
            </div>

            <div className="text-left md:w-1/3 border-b md:border-b-0 md:border-r border-neutral-900 pb-6 md:pb-0 md:pr-6 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-xs uppercase font-mono-tech tracking-wider text-neutral-500 block">Waitlist slots left</span>
                <div className="flex items-baseline gap-2.5">
                  <p className="text-4xl font-black text-[#D9B455] font-mono-tech animate-pulse">{spotsLeft}</p>
                  <span className="text-[10px] text-[#D9B455] uppercase font-bold font-mono-tech bg-[#D9B455]/10 px-2.5 py-0.5 rounded border border-[#D9B455]/20">URGENT</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                Unlock permanent 10% platform rates forever and complete support across initial boutique launches.
              </p>
            </div>

            <div className="md:w-1/3 flex flex-col justify-center space-y-3.5">
              <button
                onClick={() => scrollToSection("secure-funnel")}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-[#D9B455] hover:from-blue-500 hover:to-[#FFF2CC] text-white hover:text-black font-extrabold tracking-widest uppercase text-[10px] py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(217,180,85,0.15)] flex items-center justify-center gap-2 shrink-0 border border-[#D9B455]/20"
              >
                Apply to the Founding 100
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <div className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9B455] animate-pulse" />
                <a 
                  href="https://klickconnect.online" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[10px] font-mono-tech text-[#D9B455] hover:underline uppercase tracking-widest font-extrabold"
                >
                  VISIT KLICKCONNECT.ONLINE
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Structured, Non-crowded Waitlist Registration Steps Section */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-900" id="how-it-works">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono-tech text-blue-400 tracking-[0.2em] font-bold">THE ENTRY BLUEPRINT</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-white tracking-wide mt-2">
              Three Steps To Claim Vetted Elite Status.
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              We design every element of the onboard experience to filter for quality, giving users something stunning and professional to engage with without overwhelming the page structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-900 hover:border-blue-500/10 transition-all duration-300 flex flex-col space-y-6 relative group">
              <div className="absolute top-4 right-6 text-7xl font-serif-display font-extrabold text-neutral-800/20 group-hover:text-blue-500/10 select-none transition-colors">
                01
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono-tech font-bold text-sm">
                I
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono-tech">
                  Register Your Intent
                </h3>
                <p className="text-neutral-400 text-xs mt-0.5 uppercase tracking-wide text-blue-400 font-bold">Instant Core Timestamp Locked</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                Secure your priority index on our cohort. Submit your active creator category (photographer, MUA, stylist, videographer) to register with the first wave of 100 creators.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-900 hover:border-indigo-500/10 transition-all duration-300 flex flex-col space-y-6 relative group">
              <div className="absolute top-4 right-6 text-7xl font-serif-display font-extrabold text-neutral-800/20 group-hover:text-indigo-500/10 select-none transition-colors">
                02
              </div>
              <div className="h-10 w-10 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono-tech font-bold text-sm">
                II
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono-tech">
                  Verified Launch Email
                </h3>
                <p className="text-neutral-400 text-xs mt-0.5 uppercase tracking-wide text-indigo-400 font-bold">Custom Invite Verification</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                Once our internal curation locks your submission, you receive our elegant launch kit containing your verified access key, sandbox profile editor, and FreeStock login links.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-900 hover:border-amber-500/10 transition-all duration-300 flex flex-col space-y-6 relative group">
              <div className="absolute top-4 right-6 text-7xl font-serif-display font-extrabold text-neutral-800/20 group-hover:text-amber-500/10 select-none transition-colors">
                03
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono-tech font-bold text-sm">
                III
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono-tech">
                  Legacy Perks Activated
                </h3>
                <p className="text-neutral-400 text-xs mt-0.5 uppercase tracking-wide text-amber-400 font-bold">10% Commission Status Forever</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                Unchain your creative potential. List preset downloads, offer custom portrait prints in the live boutique, accept direct escrow client bookings, and keep 90% of your earnings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Beautiful High-contrast Interactive Founders Vetted Showcase Sandbox */}
      <section className="py-20 bg-black border-b border-neutral-900 relative" id="interactive-sandbox">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono-tech text-blue-400 tracking-[0.2em] font-bold">DYNAMIC PROFILE SIMULATOR</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-white tracking-wide mt-2">
              Explore Our Live Vetted Founders.
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              We focus on premium, professional photography of talented Black creatives in Accra. Click any elite founder below to preview their interactive rates and portfolios.
            </p>
          </div>

          {/* Dynamic Category Selector Menu aligning perfectly with Director, Models, Stylists request */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {[
              { label: "✨ All Creatives", value: "All" },
              { label: "📸 Photographers", value: "Photographer" },
              { label: "🎥 Videographers", value: "Videographer" },
              { label: "💄 Makeup Artists", value: "Makeup Artist" },
              { label: "👗 Stylists", value: "Stylist" },
              { label: "💎 Models", value: "Model" },
              { label: "👑 Directors", value: "Director" }
            ].map((category) => {
              const isSelected = selectedRoleFilter === category.value;
              return (
                <button
                  key={category.value}
                  onClick={() => {
                    setSelectedRoleFilter(category.value);
                    // Match the first founder items automatically to prevent displaying blank selections
                    const matched = OUTSTANDING_FOUNDERS.filter(f => 
                      category.value === "All" || f.category === category.value || f.role.toLowerCase().includes(category.value.toLowerCase())
                    );
                    if (matched.length > 0) {
                      setSelectedCreator(matched[0]);
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-[10px] font-mono-tech font-extrabold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                    isSelected 
                      ? "bg-[#D9B455] text-black border-[#D9B455] shadow-[0_0_15px_rgba(217,180,85,0.25)] scale-[1.02]" 
                      : "bg-neutral-900 border-neutral-850 text-neutral-400 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Swapper buttons */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <span className="text-xs uppercase font-mono-tech tracking-wider text-neutral-500 block px-1">ACTIVE DIRECTORY SELECTOR:</span>
              
              <div className="space-y-3">
                {filteredFounders.map((cur) => {
                  const isActive = selectedCreator.id === cur.id;
                  return (
                    <button
                      key={cur.id}
                      onClick={() => setSelectedCreator(cur)}
                      className={`w-full text-left p-4.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${isActive ? 'bg-blue-500/5 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)] transform translate-x-1.5' : 'bg-neutral-950 border-neutral-900 hover:border-neutral-800'}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <img 
                          src={cur.avatar} 
                          alt={cur.name}
                          className="h-11 w-11 rounded-full object-cover border border-neutral-800"
                        />
                        <div>
                          <p className="font-bold text-white text-sm uppercase tracking-wider">{cur.name}</p>
                          <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-0.5">
                            <span className="font-medium text-blue-400">{cur.role}</span>
                            <span>•</span>
                            <span>{cur.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono-tech text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">ONLINE</span>
                        <ChevronRight className={`h-4 w-4 text-neutral-600 transition-transform ${isActive ? 'translate-x-1 text-blue-400' : ''}`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900 text-center space-y-2">
                <p className="text-xs text-neutral-400">
                  Are you a photographer, videographer, MUA, or stylist based in Africa? Claim your catalog spot.
                </p>
                <button 
                  onClick={() => scrollToSection("secure-funnel")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-widest font-mono-tech"
                >
                  Request Application Code →
                </button>
              </div>
            </div>

            {/* Right: Live Interactive Card Interface representation */}
            <div className="lg:col-span-7 bg-neutral-950 rounded-3xl p-6 md:p-8 border border-neutral-900 flex flex-col justify-between glow-gold-subtle relative overflow-hidden">
              
              <div className="space-y-6">
                
                {/* Simulated Header */}
                <div className="flex justify-between items-center pb-4 border-b border-neutral-900">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src={selectedCreator.avatar} 
                      alt={selectedCreator.name}
                      className="h-9 w-9 rounded-full object-cover border border-neutral-800"
                    />
                    <div>
                      <p className="text-xs font-mono-tech text-white font-bold uppercase">{selectedCreator.name}</p>
                      <p className="text-[10px] text-neutral-500 font-mono-tech">{selectedCreator.handle}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono-tech text-neutral-400 uppercase tracking-wider block">STARTING RATE</span>
                    <span className="text-sm font-semibold text-amber-400 font-mono-tech">{selectedCreator.startingRate}</span>
                  </div>
                </div>

                {/* Profile Bio */}
                <div className="space-y-2 text-left">
                  <p className="text-xs font-mono-tech uppercase text-blue-400 font-bold tracking-widest">ABOUT CREATOR</p>
                  <p className="text-neutral-300 text-sm leading-relaxed font-light">{selectedCreator.bio}</p>
                </div>

                {/* Key Portfolio Selector Viewer */}
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center text-xs font-mono-tech uppercase">
                    <span className="text-neutral-400 tracking-wider">CURATED PORTFOLIO</span>
                    <span className="text-amber-400">Hover or click below to inspect</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {selectedCreator.portfolio.map((imgUrl, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePortfolioImg(imgUrl)}
                        className={`aspect-square rounded-lg overflow-hidden border transition-all duration-300 relative group ${activePortfolioImg === imgUrl ? 'border-blue-400 scale-[0.98]' : 'border-neutral-900 hover:border-neutral-800'}`}
                      >
                        <img 
                          src={imgUrl} 
                          alt="Portfolio piece" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Booking Prompt Button */}
                <div className="bg-neutral-900/60 p-4.5 rounded-xl border border-neutral-850 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-400" />
                    <span className="text-xs text-neutral-300 font-light">Ecosystem booking and file sharing synced.</span>
                  </div>
                  <button 
                    onClick={() => scrollToSection("secure-funnel")}
                    className="text-white hover:text-blue-400 text-xs font-bold uppercase tracking-wider font-mono-tech"
                  >
                    Simulate Calendar Book →
                  </button>
                </div>

              </div>

              {/* Large Image Overlay */}
              <div className="mt-6 aspect-[16/7] rounded-xl overflow-hidden border border-neutral-900 relative">
                <img 
                  src={activePortfolioImg} 
                  alt="Curated backdrop artwork matching user aesthetics" 
                  className="w-full h-full object-cover object-center grayscale contrast-110 brightness-75 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/85 border border-neutral-800 text-[9px] font-mono-tech text-white uppercase px-2.5 py-1 rounded">
                  {selectedCreator.role} Viewport Preview
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Dynamic and Interactive Earnings & Commission Calculator */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-900" id="benefits-panel">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono-tech text-blue-400 tracking-[0.2em] font-bold">OVERHEAD COMPARATIVE ESTIMATOR</span>
            <h2 className="text-3xl font-serif-display font-medium text-white tracking-wide mt-2">
              Calculate What You Retain.
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              We capped our Founding Creator platform overhead fee at 10% permanently (instead of 15% standard). Drag the controller to see your savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Calculator Control */}
            <div className="lg:col-span-6 bg-neutral-900/40 p-6 md:p-8 rounded-2xl flex flex-col justify-between border border-neutral-900">
              <div className="space-y-6">
                
                <div className="flex justify-between items-center pb-2 border-b border-neutral-950">
                  <span className="text-xs font-bold uppercase font-mono-tech text-neutral-300">Expected Monthly Creative Bookings</span>
                  <span className="text-amber-400 font-mono-tech font-bold text-lg">{calculatorEarnings.toLocaleString()} GHS</span>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Every wedding, corporate editorial, brand photoshoot, and preset accessory sale aggregates into your monthly payouts. Drag below to see your legacy gains:
                </p>

                {/* Range bar */}
                <div className="py-4 space-y-2">
                  <input 
                    type="range"
                    min="3000"
                    max="60000"
                    step="1000"
                    value={calculatorEarnings}
                    onChange={(e) => setCalculatorEarnings(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono-tech text-neutral-600">
                    <span>3,000 GHS</span>
                    <span>15,000 GHS</span>
                    <span>35,000 GHS</span>
                    <span>60,000 GHS</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs pt-1">
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-900">
                    <p className="text-neutral-500 font-semibold font-mono-tech uppercase">STANDARD CONTRACT PLAN</p>
                    <p className="text-neutral-300 font-bold text-base mt-1">15% platform commission</p>
                    <p className="text-[10px] text-neutral-400 mt-1">Standard index priority list without FreeStock access.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-orange-400/5 border border-orange-500/20">
                    <p className="text-amber-400 font-semibold font-mono-tech uppercase">👑 FOUNDING COHORT</p>
                    <p className="text-amber-400 font-bold text-base mt-1">10% commission forever</p>
                    <p className="text-[10px] text-neutral-400 mt-1">Locks absolute commission ceiling, permanently.</p>
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-neutral-950">
                <p className="text-[10px] text-neutral-500 text-center italic leading-relaxed">
                  Comparative calculations modeled against standard West African global payment agency commission averages.
                </p>
              </div>
            </div>

            {/* Right: Net math block */}
            <div className="lg:col-span-6 bg-neutral-950 p-6 md:p-8 rounded-2xl border border-blue-500/10 flex flex-col justify-between relative glow-gold-subtle overflow-hidden">
              
              <div className="space-y-6">
                <span className="text-xs font-mono-tech text-blue-400 font-bold uppercase tracking-widest block">FOUNDING BENEFACTOR MATRIX</span>

                <div className="space-y-3.5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-400 font-light">Standard 15% Platform charge:</span>
                    <span className="font-mono-tech text-red-400">-{commissionStandard.toLocaleString()} GHS/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-3 border-b border-neutral-900">
                    <span className="text-blue-400 font-semibold">Founding 10% Platform charge:</span>
                    <span className="font-mono-tech text-blue-400 font-semibold">-{commissionFounder.toLocaleString()} GHS/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" /> Cash overhead retained:
                    </span>
                    <span className="font-mono-tech text-emerald-400 font-extrabold">+{monthlySaves.toLocaleString()} GHS/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" /> FreeStock Subscription link value:
                    </span>
                    <span className="font-mono-tech text-emerald-400 font-extrabold">+500 GHS/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-3 border-b border-neutral-900">
                    <span className="font-bold text-amber-400 flex items-center gap-1.5 animate-pulse">
                      <Sparkles className="h-4 w-4 shrink-0 text-[#D9B455]" /> Client invite multiplier reward:
                    </span>
                    <span className="font-mono-tech text-amber-400 font-extrabold">+6 Months FREE Status</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-950 via-black to-neutral-900 p-5 rounded-xl border border-blue-900/30 text-center space-y-2">
                  <p className="text-[10px] font-mono-tech text-neutral-400 uppercase tracking-widest">ESTIMATED FIRST YEAR ACCUMULATED VALUE KEPT IN POCKET</p>
                  <p className="text-3xl font-serif-display font-bold text-white tracking-wide">
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">{annualTotalEarningGains.toLocaleString()} GHS</span>
                  </p>
                  <p className="text-[9px] font-mono-tech text-[#D9B455] uppercase leading-relaxed font-medium">
                    Includes 3-month launch priority bonus. <br />
                    🎁 REFERRAL PERK: Vetted creatives who invite 10 clients receive an additional 6 months of priority premium directory listing!
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => scrollToSection("secure-funnel")}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.25)] flex items-center justify-center gap-2"
                >
                  SECURE FOUNDING ADVANTAGE NOW
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Beautiful Boutique Storefront Preview Section */}
      <section className="py-20 bg-black border-b border-neutral-900" id="boutique-showcase">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono-tech text-blue-400 tracking-[0.2em] font-bold">DIGITAL & ART BOUTIQUE</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-white tracking-wide mt-2">
              Browse Curated Preset Storefronts.
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              Vetted founders get a personalized commerce boutique to upload digital Lightroom packs, cinematic LUT profiles, presets, or framed canvas prints directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BOUTIQUE_SHOWCASE.map((item) => (
              <div key={item.id} className="bg-neutral-900/30 rounded-2xl p-4 border border-neutral-900 hover:border-blue-500/10 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur border border-neutral-800 text-[9px] tracking-wider font-mono-tech text-amber-400 uppercase font-extrabold px-2 py-1 rounded-md">
                      {item.category}
                    </div>
                  </div>

                  <div className="text-left">
                    <p className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-wide">Upload by {item.creator}</p>
                    <p className="text-white text-base font-serif-display mt-1 font-semibold leading-snug tracking-wide group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-neutral-950 flex justify-between items-center">
                  <span className="text-sm font-bold text-white font-mono-tech">{item.price}</span>
                  <button 
                    onClick={() => scrollToSection("secure-funnel")}
                    className="text-xs text-blue-400 font-bold uppercase tracking-wider font-mono-tech flex items-center gap-1 hover:text-blue-300"
                  >
                    View Boutique →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Non-crowded Waitlist Registration Funnel */}
      <section className="py-24 bg-gradient-to-t from-neutral-950 to-black border-b border-neutral-900 relative" id="secure-funnel">
        
        {/* Subtle decorative target line container */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Premium Image Banner with User Vision Quote */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800/80 shadow-[0_0_40px_rgba(0,0,0,0.8)] aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img 
                  src="/src/assets/images/photographer_director_collab_1780922863491.png"
                  alt="Elite photographer and director collaborating closely on set"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-101 group-hover:scale-103 transition-transform duration-1000 brightness-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Custom Testimonial Quote layer */}
                <div className="absolute inset-x-0 bottom-0 p-8 text-left space-y-3 w-full">
                  <span className="inline-block text-[9px] font-mono-tech text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 uppercase tracking-[0.2em] font-extrabold">
                    CREATIVE STATEMENT
                  </span>
                  <p className="text-white font-serif-display text-2xl font-light italic leading-snug">
                    "The right connection can bring your <span className="text-[#D9B455] font-semibold italic">vision</span> to life."
                  </p>
                  <p className="text-neutral-400 text-xs font-light tracking-wide uppercase font-mono-tech">
                    Accra Creative Node • Powered by KlickConnect
                  </p>
                </div>
              </div>

              {/* Decorative design lines */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#D9B455]/5 rounded-3xl -z-10 pointer-events-none transform translate-x-1 translate-y-1" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-blue-500/5 rounded-3xl -z-10 pointer-events-none transform -translate-x-1 -translate-y-1" />
            </div>

            {/* Right side: Onboarding Form block */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs tracking-widest font-mono-tech font-extrabold rounded-full uppercase">
                  🔐 10% FOR LIFE CLASSIFIED CEILING
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-white tracking-wide leading-tight">
                  Join The Waitlist <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-[#D9B455] bg-clip-text text-transparent font-semibold">& Lock Your Place.</span>
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  Don't compromise your creative overhead. Enter your email key below. You will be locked into our timestamp registry list and securely connected to our premier creator network directory at <strong className="text-[#D9B455]">klickconnect.online</strong>.
                </p>
              </div>

              <div className="bg-neutral-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-neutral-850 shadow-2xl relative">
                
                {/* Live Count banner */}
                <div className="mb-8 flex items-center justify-between pb-4 border-b border-neutral-800">
                  <span className="text-xs font-mono-tech text-neutral-400 uppercase tracking-wider block font-bold">CURRENT REGISTRATION WAVE</span>
                  <span className="text-xs font-mono-tech text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded font-bold uppercase tracking-wider block border border-amber-500/25 animate-pulse">
                    {spotsLeft} SPOTS UNCLAIMED
                  </span>
                </div>

                <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-mono-tech text-neutral-400 block font-bold">
                      Select Your Main Creative Specialty
                    </label>
                    <div className="grid grid-cols-2 gap-3.5">
                      {["Photographer", "Videographer", "Makeup Artist", "Stylist Designer"].map((field) => {
                        const isSelected = selectedSpecialty === field;
                        return (
                          <button
                            key={field}
                            type="button"
                            onClick={() => setSelectedSpecialty(field)}
                            className={`py-3 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider text-left transition-all duration-200 flex justify-between items-center focus:outline-none ${
                              isSelected
                                ? "bg-blue-600/10 border-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                                : "bg-black border-neutral-800 text-neutral-400 hover:border-blue-500/40 hover:text-white"
                            }`}
                          >
                            <span>{field}</span>
                            <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? "bg-amber-400 animate-pulse" : "bg-neutral-700"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-mono-tech text-neutral-400 block font-bold">
                      Your Primary Creative Email Key
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@creativeagency.com"
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-neutral-600 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-[#D9B455] hover:from-blue-500 hover:to-[#FFF2CC] hover:text-black text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(217,180,85,0.15)] flex items-center justify-center gap-2 cursor-pointer border border-[#D9B455]/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        LOCKING DIRECTORY KEY...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        SUBMIT EMAIL & CLAIM PERKS CEILING
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </button>

                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-neutral-500 text-center uppercase tracking-wider font-mono-tech font-bold leading-relaxed">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" /> Zero spam • Fully Secure escrow index certification
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Beautiful Vetted Creator Guidelines FAQ */}
      <section className="py-20 bg-black border-b border-neutral-900" id="faq">
        <div className="container mx-auto px-4 max-w-4xl font-sans-premium">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono-tech text-blue-400 tracking-[0.2em] font-bold">DIRECTORY CLEAR ANSWERS</span>
            <h2 className="text-3xl font-serif-display font-medium text-white tracking-wide mt-2">
              Waitlist & Program FAQ.
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              Clear and honest responses guiding creators and brands through our vetting cohorts, billing policies, and platform features.
            </p>
          </div>

          <div className="space-y-6">
            
            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-900 space-y-2">
              <p className="font-serif-display text-white text-lg font-medium leading-normal">How do I qualify for the Founding Creator 10% rate?</p>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                The first 100 photographers, videographers, MUAs, and styling teams who complete our waitlist sign-up on Tally and pass our baseline quality vetting will permanently lock in a 10% booking commission ceiling for the lifetime of their accounts. Standard accounts created later will pay 15%.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-900 space-y-2">
              <p className="font-serif-display text-white text-lg font-medium leading-normal">What does the 3-month Onboarding Bonus entail?</p>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                Founding members are automatically subscribed to the priority discovery stream, boosting profile search listings in Accra, plus customized design reviews for digital presets in the Boutique, completely free for the initial 3 months of launch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-900 space-y-2">
              <p className="font-serif-display text-white text-lg font-medium leading-normal">What is the FreeStock subscription feature?</p>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                FreeStock is our integrated royalty premium library allowing vetted creators to download, list, and lease curated digital stock textures, photography modifiers, overlay files, and fine-art backgrounds, valued at over 500 GHS/mo. This is fully sponsored on your profile suite.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-900 space-y-2">
              <p className="font-serif-display text-white text-lg font-medium leading-normal">When does KlickConnect officially launch?</p>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                The client checkout booking engine and the digital boutique storefront will open live during Quarter 3, 2026. Waitlisted creators will receive a VIP notification sequence to build and style their catalogs before the commercial launch.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Luxury Footer matching original screengrab layout (00.png / 09.png) */}
      <footer className="bg-neutral-950 pb-16 pt-20 border-t border-neutral-900 font-sans-premium">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16">
            
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <Logo className="h-10 w-10" />
                <div>
                  <span className="text-xl font-black tracking-normal text-white block leading-none">
                    Klick<span className="text-[#D9B455] font-light">Connect</span>
                  </span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.35em] text-[#D9B455]/85 font-semibold block uppercase leading-none mt-1">
                    CONNECT. BOOK. CREATE.
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                Africa's premier creator marketplace connecting elite visual architects with international brands. Vetted, booked, elevated.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase font-mono-tech tracking-wider text-white font-bold block pb-1.5 border-b border-neutral-900">Explore Directory</span>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><button onClick={() => scrollToSection("interactive-sandbox")} className="hover:text-blue-400">Photographers</button></li>
                <li><button onClick={() => scrollToSection("interactive-sandbox")} className="hover:text-blue-400">Videographers</button></li>
                <li><button onClick={() => scrollToSection("interactive-sandbox")} className="hover:text-blue-400">Makeup Artists</button></li>
                <li><button onClick={() => scrollToSection("interactive-sandbox")} className="hover:text-blue-400">Styling Directors</button></li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase font-mono-tech tracking-wider text-white font-bold block pb-1.5 border-b border-neutral-900">Waitlist perks</span>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><button onClick={() => scrollToSection("benefits-panel")} className="hover:text-blue-400">10% Platform Commission</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-blue-400">FreeStock Suite Trial</button></li>
                <li><button onClick={() => scrollToSection("benefits-panel")} className="hover:text-blue-400">Onboarding Wave Access</button></li>
                <li><button onClick={() => scrollToSection("benefits-panel")} className="hover:text-blue-400">Escrow Billing Assurance</button></li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase font-mono-tech tracking-wider text-white font-bold block pb-1.5 border-b border-neutral-900">Vanguard Connection</span>
              <div className="space-y-3.5 text-xs text-neutral-400">
                <p className="font-light">Sync with our elite creator collective daily on Instagram, TikTok & Facebook feeds.</p>
                <div className="flex flex-col space-y-2">
                  <a 
                    href="https://instagram.com/officialklickconnect" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 font-mono-tech uppercase"
                  >
                    <Instagram className="h-4 w-4 text-amber-400" /> Instagram
                  </a>
                  <a 
                    href="https://www.tiktok.com/@officialklickconnect" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-amber-400 hover:text-[#D9B455] font-mono-tech uppercase"
                  >
                    <TikTokIcon className="h-4 w-4 text-amber-400" /> TikTok
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1EYd5hkZYP/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-amber-400 hover:text-[#D9B455] font-mono-tech uppercase"
                  >
                    <Facebook className="h-4 w-4 text-amber-400" /> Facebook Group
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono-tech uppercase">
            <span className="tracking-wider">© 2026 KlickConnect. All rights, designs and legacy reserves secure.</span>
            <div className="flex gap-6">
              <a href="#how-it-works" className="hover:text-blue-400">Index blueprint</a>
              <a href="#faq" className="hover:text-blue-400">Escrow Safety</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Light Success Modal Feedback redirecting to tally */}
      {successModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-neutral-950 p-8 rounded-3xl border border-blue-500/30 max-w-md w-full text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="h-16 w-16 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
              <Award className="h-8 w-8 text-blue-400" />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-xl font-serif-display font-medium text-white tracking-wide">Timestamp Secured Successfully!</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                We locked your primary email key into the waitlist database! You will now be redirected to our main brand portal at <strong className="text-amber-400">klickconnect.online</strong>.
              </p>
            </div>

            <button
              onClick={() => {
                setSuccessModal(false);
                window.open("https://klickconnect.online", "_blank");
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold py-3 text-xs uppercase tracking-widest rounded-xl transition-all duration-300"
            >
              VISIT KLICKCONNECT.ONLINE →
            </button>
            
            <button 
              onClick={() => setSuccessModal(false)}
              className="text-neutral-500 hover:text-neutral-300 font-mono-tech text-[10px] uppercase font-bold tracking-wider"
            >
              Close dialog
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
