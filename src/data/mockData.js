// Comprehensive mock dataset for KlickConnect - Creator Connect Suite featuring exclusively Black models & creative pros

export const CATEGORIES = [
  { id: 'all', label: 'All Creatives', icon: 'Sparkles', count: 48 },
  { id: 'photographers', label: 'Photographers', icon: 'Camera', count: 16 },
  { id: 'videographers', label: 'Videographers', icon: 'Video', count: 12 },
  { id: 'makeup', label: 'Makeup Artists', icon: 'Palette', count: 8 },
  { id: 'models', label: 'Models & Talent', icon: 'UserCheck', count: 6 },
  { id: 'stylists', label: 'Fashion Stylists', icon: 'Scissors', count: 4 },
  { id: 'event-creatives', label: 'Event Creatives', icon: 'Flame', count: 2 },
];

export const HERO_MOMENTS = [
  {
    id: 1,
    title: 'Editorial & High Fashion',
    category: 'Photographers',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1000',
    location: 'London, UK',
    creator: 'Elena Vance'
  },
  {
    id: 2,
    title: 'Cinematic Music & Brand Videos',
    category: 'Videographers',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000',
    location: 'New York, NY',
    creator: 'Marcus Thorne'
  },
  {
    id: 3,
    title: 'Runway & Glamour Makeup',
    category: 'Makeup Artists',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1000',
    location: 'Los Angeles, CA',
    creator: 'Sofia Chen'
  },
  {
    id: 4,
    title: 'Commercial & Lifestyle Modeling',
    category: 'Models & Talent',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=1000',
    location: 'Paris, France',
    creator: 'David Sterling'
  }
];

export const CREATORS = [
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    role: 'Editorial & Fashion Photographer',
    category: 'photographers',
    location: 'London & Paris',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400',
    coverImage: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=1200',
    rating: 4.98,
    reviewsCount: 42,
    startingRate: '$650 / session',
    responseTime: '< 2 hrs',
    verified: true,
    tags: ['Vogue Feature', 'Studio Lighting', 'Medium Format', 'Color Grading'],
    bio: 'Specializing in high-concept fashion editorials, portraiture, and luxury brand campaigns. 8+ years experience working with global fashion houses and boutique publications.',
    equipment: ['Hasselblad X2D 100C', 'Profoto B10X Plus Studio Kit', 'Leica M11 Monochrom'],
    portfolio: [
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800'
    ],
    packages: [
      { title: 'Half-Day Editorial Lookbook', price: '$850', details: '4 hours studio shoot, 15 retouched final images, full digital delivery' },
      { title: 'Full Campaign Shoot', price: '$1,800', details: '8 hours, multi-location, 35 retouched high-res masters, assistant included' }
    ],
    reviews: [
      { author: 'Clara Dupuis', role: 'Creative Director, LVMH', comment: 'Elena transformed our SS26 collection shoot. Her eye for color and shadow is unmatched.' },
      { author: 'Julian Vance', role: 'Model Agent', comment: 'Punctual, inspiring to work with, and delivers final selects ahead of schedule!' }
    ]
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Cinematographer & Commercial Director',
    category: 'videographers',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    coverImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1200',
    rating: 5.0,
    reviewsCount: 38,
    startingRate: '$1,200 / day',
    responseTime: '< 1 hr',
    verified: true,
    tags: ['4K Anamorphic', 'Colorist', 'Drone Certified', 'Music Videos'],
    bio: 'Award-winning Director of Photography creating rich narrative visuals for commercials, music videos, and fashion brand films across North America & Europe.',
    equipment: ['ARRI Alexa Mini LF', 'Cooke Anamorphic Lenses', 'DJI Inspire 3 Cinema Drone'],
    portfolio: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=800'
    ],
    packages: [
      { title: 'Brand Film Highlight (60s)', price: '$1,500', details: 'Full day filming, 4K Master, sound design, licensed music track' },
      { title: 'Commercial Suite Package', price: '$3,200', details: '2-day production, director + gaffer team, 3 video cutdowns for social' }
    ],
    reviews: [
      { author: 'Apex Athletics', role: 'Brand Manager', comment: 'Marcus delivered a video that accumulated over 2M views in our launch week.' }
    ]
  },
  {
    id: 'sofia-chen',
    name: 'Sofia Chen',
    role: 'Celebrity & Editorial Makeup Artist',
    category: 'makeup',
    location: 'Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400',
    coverImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1200',
    rating: 4.96,
    reviewsCount: 51,
    startingRate: '$400 / look',
    responseTime: '< 30 mins',
    verified: true,
    tags: ['HD Airbrush', 'Bridal Glam', 'SFX Makeup', 'Skin prep expert'],
    bio: 'Creating glowing, camera-ready skins and artistic editorial glam. Featured in Harper\'s Bazaar and Red Carpet events in LA.',
    equipment: ['TEMPTU Airbrush Kit', 'Pat McGrath Labs Palette', 'Dyson Supersonic Pro'],
    portfolio: [
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800'
    ],
    packages: [
      { title: 'Editorial & Lookbook Glam', price: '$500', details: 'Full skin prep, 2 makeup changes, touch-up kit included' },
      { title: 'Bridal Master Package', price: '$900', details: 'Trial session, wedding day hair & makeup for bride + 2 bridesmaids' }
    ],
    reviews: [
      { author: 'Samantha Miller', role: 'Bride', comment: 'Sofia made me feel like an absolute queen. The makeup stayed fresh for 14 hours!' }
    ]
  },
  {
    id: 'david-sterling',
    name: 'David Sterling',
    role: 'Editorial & Commercial Model',
    category: 'models',
    location: 'Paris & Milan',
    avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=400',
    coverImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200',
    rating: 4.95,
    reviewsCount: 29,
    startingRate: '$500 / half day',
    responseTime: '< 1 hr',
    verified: true,
    tags: ['Height 6ft1', 'Runway', 'Fitness', 'Suiting & Activewear'],
    bio: 'Experienced international model represented in Paris, Milan, and New York. Professional posture, dynamic posing, and easy direction flow.',
    equipment: ['Fully Optioned Wardrobe', 'Passports Ready for Travel'],
    portfolio: [
      'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800'
    ],
    packages: [
      { title: 'Half-Day Shoot (4 Hours)', price: '$500', details: 'Up to 5 outfit changes, studio or outdoor location' },
      { title: 'Full Campaign Day (8 Hours)', price: '$950', details: 'Full day shoot, multi-lookbook imagery & video B-roll' }
    ],
    reviews: [
      { author: 'Studio Maison', role: 'Creative Lead', comment: 'David is extremely professional, understands lighting, and brings high energy to the set.' }
    ]
  },
  {
    id: 'chloe-bennett',
    name: 'Chloe Bennett',
    role: 'Celebrity Fashion Stylist',
    category: 'stylists',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=400',
    coverImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1200',
    rating: 4.99,
    reviewsCount: 34,
    startingRate: '$700 / project',
    responseTime: '< 2 hrs',
    verified: true,
    tags: ['High Fashion', 'Wardrobe Pulls', 'Red Carpet', 'Sustainability Focus'],
    bio: 'Curating iconic wardrobes for music artists, magazine covers, and luxury brand commercials. Direct contacts with top fashion showrooms globally.',
    equipment: ['Mobile Steamer & Garment Care Kit', 'Showroom Access Passports'],
    portfolio: [
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800'
    ],
    packages: [
      { title: 'Single Look Curation', price: '$450', details: 'Full moodboard, 3 outfit selections pulled from designers, fittings included' },
      { title: 'Editorial Lookbook Styling', price: '$1,100', details: 'Pulling 10+ designer looks, onset styling assistance for full shoot day' }
    ],
    reviews: [
      { author: 'Vogue Scandinavia', role: 'Editor', comment: 'Chloe elevated our cover story with incredible archive vintage pieces.' }
    ]
  },
  {
    id: 'lucas-moreau',
    name: 'Lucas Moreau',
    role: 'Experiential & Event Creative Director',
    category: 'event-creatives',
    location: 'Berlin & Amsterdam',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    coverImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200',
    rating: 4.97,
    reviewsCount: 22,
    startingRate: '$1,500 / event',
    responseTime: '< 3 hrs',
    verified: true,
    tags: ['Lighting Architecture', 'Stage Design', 'Brand Activations', 'Immersive Audio'],
    bio: 'Designing unforgettable immersive experiences, high-end gala atmospheres, fashion week runways, and boutique launch events.',
    equipment: ['Astera Wireless LED Rigging', 'MadMapper Spatial Projection'],
    portfolio: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=800'
    ],
    packages: [
      { title: 'Boutique Launch Production', price: '$1,800', details: 'Full lighting design, custom DJ booth setup, immersive ambient mood setup' },
      { title: 'Full Scale Gala Production', price: '$4,500', details: 'End-to-end creative direction, stage management, live video walls' }
    ],
    reviews: [
      { author: 'Art Basel Berlin', role: 'Events Lead', comment: 'Lucas created an atmosphere that our guests are still talking about months later.' }
    ]
  }
];

export const FOUNDERS = [
  {
    name: 'Magdalene',
    role: 'Co-Founder & Chief Product Officer',
    bio: 'Passionate about seamless creator tools and empowering independent visual artists worldwide.',
    initials: 'M'
  },
  {
    name: 'Gilbert',
    role: 'Co-Founder & Head of Operations',
    bio: 'Building transparent marketplace economics that reward talent and simplify client bookings.',
    initials: 'G'
  },
  {
    name: 'Godfred',
    role: 'Co-Founder & CTO',
    bio: 'Engineering the next-generation smart matching engine and real-time creative suite backend.',
    initials: 'G'
  }
];

export const CLIENT_BRIEFS = [
  {
    id: 'brief-1',
    title: 'SS26 Luxury Apparel Lookbook',
    client: 'Aura Atelier',
    category: 'photographers',
    date: 'Oct 14, 2026',
    location: 'London Studio',
    budget: '$1,500 - $2,500',
    matches: 98,
    status: 'Accepting Proposals'
  },
  {
    id: 'brief-2',
    title: 'High-Energy Music Video Production',
    client: 'Velvet Sound Records',
    category: 'videographers',
    date: 'Nov 02, 2026',
    location: 'New York, NY',
    budget: '$3,000 - $5,000',
    matches: 95,
    status: 'Matched'
  },
  {
    id: 'brief-3',
    title: 'Private Estate Sunset Wedding Coverage',
    client: 'Harrison Family',
    category: 'photographers',
    date: 'Dec 18, 2026',
    location: 'Monaco',
    budget: '$4,000 - $6,000',
    matches: 99,
    status: 'Reviewing Quotes'
  }
];
