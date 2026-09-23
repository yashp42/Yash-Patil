/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudiesSection from './components/CaseStudiesSection';
import ExperienceSection from './components/ExperienceSection';
import SubstackSection from './components/SubstackSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ArticleModal from './components/ArticleModal';
import SectionDivider from './components/SectionDivider';
import GrowthCaseStudiesPage from './components/case-studies/GrowthCaseStudiesPage';
import { SubstackPost } from './types';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <MainPortfolio />
    </ThemeProvider>
  );
}

function MainPortfolio() {
  const [currentView, setCurrentView] = useState<'home' | 'case-studies'>('home');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [activeArticle, setActiveArticle] = useState<SubstackPost | null>(null);

  // Sync view with hash route or pathname
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      const pathname = window.location.pathname.toLowerCase();
      if (
        hash.startsWith('#/case-studies') ||
        hash === '#case-studies-page' ||
        pathname.includes('case-studies')
      ) {
        setCurrentView('case-studies');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (view: 'home' | 'case-studies') => {
    setCurrentView(view);
    if (view === 'case-studies') {
      window.location.hash = '#/case-studies';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentView === 'case-studies') {
      document.title = `Case Studies & Growth Teardowns – Yash Patil`;
    } else if (activeArticle) {
      document.title = `${activeArticle.title} – Yash Patil`;
    } else if (activeCaseStudyId) {
      document.title = `Case Study – Yash Patil`;
    } else {
      document.title = `Yash Patil – Product & Strategy Portfolio`;
    }
  }, [currentView, activeArticle, activeCaseStudyId]);

  const handleOpenCaseStudy = (caseStudyId: string) => {
    setActiveCaseStudyId(caseStudyId);
  };

  const handleOpenArticle = (post: SubstackPost) => {
    setActiveArticle(post);
  };

  const scrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#141413] text-[#161616] dark:text-[#FAF9F5] font-sans antialiased selection:bg-[#161616] selection:text-[#FAF9F5] dark:selection:bg-[#FAF9F5] dark:selection:text-[#141413] transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigateCaseStudies={() => navigateTo('case-studies')}
        onNavigateHome={() => navigateTo('home')}
        onContactClick={() => scrollToSection('contact')}
      />

      {currentView === 'case-studies' ? (
        /* Dedicated Growth.design Style Case Studies & Teardowns View */
        <GrowthCaseStudiesPage
          onBackToOverview={() => navigateTo('home')}
        />
      ) : (
        /* Primary Portfolio View */
        <>
          {/* Hero Section */}
          <Hero
            onExploreExperience={() => scrollToSection('experience')}
            onExploreCaseStudies={() => scrollToSection('projects')}
            onExploreSubstack={() => scrollToSection('writing')}
            onExploreTeardowns={() => navigateTo('case-studies')}
          />

          <SectionDivider />

          {/* Primary: Selected Projects & Case Studies */}
          <CaseStudiesSection 
            onOpenCaseStudy={handleOpenCaseStudy} 
            onExploreTeardowns={() => navigateTo('case-studies')}
          />

          <SectionDivider />

          {/* Product Work & Internships */}
          <ExperienceSection />

          <SectionDivider />

          {/* Substack Publication & Product Thinking */}
          <SubstackSection onOpenArticle={handleOpenArticle} />

          <SectionDivider />

          {/* Background */}
          <AboutSection
            onContactClick={() => scrollToSection('contact')}
          />

          <SectionDivider />

          {/* Direct Inquiries & Contact */}
          <ContactSection />
        </>
      )}

      {/* Clean Footer */}
      <Footer />

      {/* Interactive Case Study Breakdown Modal */}
      {activeCaseStudyId && (
        <CaseStudyModal
          caseStudyId={activeCaseStudyId}
          onClose={() => setActiveCaseStudyId(null)}
          onSelectCaseStudy={setActiveCaseStudyId}
        />
      )}

      {/* Substack In-Site Article Reader Modal */}
      {activeArticle && (
        <ArticleModal
          post={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </div>
  );
}

