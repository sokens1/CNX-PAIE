'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionSection from '@/components/SolutionSection';
import ParcoursSection from '@/components/ParcoursSection';
import InformationPaieSection from '@/components/InformationPaieSection';
import ModulesTransversauxSection from '@/components/ModulesTransversauxSection';
import BeneficesSection from '@/components/BeneficesSection';
import TagsSection from '@/components/TagsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import BackToTop from '@/components/BackToTop';
import DemoModal from '@/components/DemoModal';
import ConfirmationModal from '@/components/ConfirmationModal';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState({ date: '', time: '' });

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);
  
  const openConfirmationModal = (details: { date: string; time: string }) => {
    setConfirmationDetails(details);
    setIsConfirmationModalOpen(true);
  };
  
  const closeConfirmationModal = () => setIsConfirmationModalOpen(false);

  return (
    <div className="bg-white">
      <Navigation onDemoClick={openDemoModal} />
      <HeroSection onDemoClick={openDemoModal} />
      <SolutionSection />
      <ParcoursSection />
      <InformationPaieSection />
      <ModulesTransversauxSection />
      <BeneficesSection />
      <TagsSection />
      <CTASection onDemoClick={openDemoModal} />
      <Footer />
      <Chatbot />
      <BackToTop />
      
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={closeDemoModal}
        onConfirm={openConfirmationModal}
      />
      
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        details={confirmationDetails}
      />
    </div>
  );
}