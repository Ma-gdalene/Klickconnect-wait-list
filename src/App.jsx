import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ExploreDirectory from './components/ExploreDirectory';
import MomentsGrid from './components/MomentsGrid';
import ForCreativesSection from './components/ForCreativesSection';
import FoundersVision from './components/FoundersVision';
import CreatorDashboard from './components/CreatorDashboard';
import CreatorModal from './components/CreatorModal';
import BriefBuilderModal from './components/BriefBuilderModal';
import WaitlistModal from './components/WaitlistModal';
import Footer from './components/Footer';

export default function App() {
  const [isDashboardView, setIsDashboardView] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState('client');

  const handleOpenWaitlist = (role = 'client') => {
    setWaitlistRole(role);
    setIsWaitlistOpen(true);
  };

  const handleRequestQuote = (creator) => {
    setSelectedCreator(null);
    setIsBriefOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#273234]">
      
      {/* Header Navbar */}
      <Navbar
        onOpenWaitlist={handleOpenWaitlist}
        onOpenBrief={() => setIsBriefOpen(true)}
        isDashboardView={isDashboardView}
        setIsDashboardView={setIsDashboardView}
      />

      {/* Main View Conditional Toggle */}
      {!isDashboardView ? (
        <main>
          {/* Hero Presentation */}
          <HeroSection
            onOpenWaitlist={handleOpenWaitlist}
            onOpenBrief={() => setIsBriefOpen(true)}
          />

          {/* Workflow Steps */}
          <HowItWorks
            onOpenBrief={() => setIsBriefOpen(true)}
            onOpenWaitlist={handleOpenWaitlist}
          />

          {/* Moments & Categories Showcase */}
          <MomentsGrid
            onOpenWaitlist={handleOpenWaitlist}
          />

          {/* Interactive Creator Directory */}
          <ExploreDirectory
            onSelectCreator={(creator) => setSelectedCreator(creator)}
          />

          {/* For Creatives Pathway */}
          <ForCreativesSection
            onOpenWaitlist={handleOpenWaitlist}
          />

          {/* Founders & Vision Roadmap */}
          <FoundersVision
            onOpenWaitlist={handleOpenWaitlist}
          />
        </main>
      ) : (
        /* Creator Workspace Suite Portal */
        <CreatorDashboard
          onReturnMarketplace={() => setIsDashboardView(false)}
        />
      )}

      {/* Footer */}
      <Footer onOpenWaitlist={handleOpenWaitlist} />

      {/* Modals - conditionally rendered to guarantee safe state */}
      {selectedCreator && (
        <CreatorModal
          creator={selectedCreator}
          onClose={() => setSelectedCreator(null)}
          onRequestQuote={handleRequestQuote}
        />
      )}

      <BriefBuilderModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        initialRole={waitlistRole}
        onClose={() => setIsWaitlistOpen(false)}
      />

    </div>
  );
}
