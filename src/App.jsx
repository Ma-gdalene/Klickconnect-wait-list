import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroWaitlistSection from './components/HeroWaitlistSection';
import LiveActivityTicker from './components/LiveActivityTicker';
import CreatorsSpotlight from './components/CreatorsSpotlight';
import PlatformEcosystem from './components/PlatformEcosystem';
import FoundersSection from './components/FoundersSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CreatorModal from './components/CreatorModal';

export default function App() {
  const [waitlistCount, setWaitlistCount] = useState(2492);
  const [selectedCreator, setSelectedCreator] = useState(null);

  const scrollToForm = () => {
    const card = document.getElementById('waitlist-card');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewSignup = () => {
    setWaitlistCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1F1F1F] selection:bg-[#C8A25A] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar onScrollToForm={scrollToForm} />

      <main>
        {/* Hero with Embedded Live Waitlist Registration */}
        <HeroWaitlistSection
          waitlistCount={waitlistCount}
          onNewSignup={handleNewSignup}
        />

        {/* Live Community Stream Ticker */}
        <LiveActivityTicker />

        {/* Curated Creator Roster (Exclusively Black Models & Creatives) */}
        <CreatorsSpotlight
          onSelectCreator={(creator) => setSelectedCreator(creator)}
        />

        {/* Platform Ecosystem (Bookings, Paystack, Pixieset Galleries) */}
        <PlatformEcosystem onScrollToForm={scrollToForm} />

        {/* Executive Founders (Zero Images, Typographic Crests) */}
        <FoundersSection />

        {/* Interactive FAQs */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onScrollToForm={scrollToForm} />

      {/* Lookbook Lightbox Modal */}
      {selectedCreator && (
        <CreatorModal
          creator={selectedCreator}
          onClose={() => setSelectedCreator(null)}
          onBookCreator={scrollToForm}
        />
      )}

    </div>
  );
}
