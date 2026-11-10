import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import FiguresBanner from './components/FiguresBanner.jsx';
import ExpertiseSection from './components/ExpertiseSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import PortfolioSection from './components/PortfolioSection.jsx';
import EngineeringSection from './components/EngineeringSection.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import BeyondHandoverSection from './components/BeyondHandoverSection.jsx';
import PartnersSection from './components/PartnersSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import ConsultationModal from './components/ConsultationModal.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import SplashScreen from './components/SplashScreen.jsx';

export default function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [consultationModal, setConsultationModal] = useState({
    isOpen: false,
    title: 'General Inquiry',
  });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenConsultation = (title = 'General Consultation') => {
    setConsultationModal({
      isOpen: true,
      title,
    });
  };

  const handleCloseConsultation = () => {
    setConsultationModal({
      isOpen: false,
      title: '',
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#102c51] flex flex-col relative selection:bg-[#21a8b9]/25 selection:text-[#102c51]">
      {/* Optional Brand Splash Screen */}
      {showSplash && (
        <SplashScreen onEnter={() => setShowSplash(false)} />
      )}

      {/* Main Fixed Navigation */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Landing Page Content Wrapper */}
      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section with Immersive Lagoon */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 01 / ABOUT ORA */}
        <AboutSection />

        {/* Founding Team Figures */}
        <FiguresBanner />

        {/* 02 / OUR EXPERTISE */}
        <ExpertiseSection
          onSelectExpertise={(name) => handleOpenConsultation(`Inquire about: ${name}`)}
        />

        {/* 03 / WHAT WE DO */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 04 / SELECTED EXPERIENCE */}
        <PortfolioSection
          onOpenProject={(proj) => setSelectedProject(proj)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 05 / ENGINEERING FIRST */}
        <EngineeringSection />

        {/* 06 / HOW WE WORK */}
        <ProcessSection />

        {/* 07 / BEYOND HANDOVER */}
        <BeyondHandoverSection onOpenConsultation={handleOpenConsultation} />

        {/* 08 / A COLLABORATIVE DISCIPLINE */}
        <PartnersSection />

        {/* 09 / LET’S TALK WATER */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenSplash={() => setShowSplash(true)} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModal.isOpen}
        onClose={handleCloseConsultation}
        contextTitle={consultationModal.title}
      />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsult={handleOpenConsultation}
      />
    </div>
  );
}
