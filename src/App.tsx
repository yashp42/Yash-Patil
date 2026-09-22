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
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [activeArticle, setActiveArticle] = useState<SubstackPost | null>(null);

  useEffect(() => {
    if (activeArticle) {
      document.title = `${activeArticle.title} – Yash Patil`;
    } else if (activeCaseStudyId) {
      document.title = `Case Study – Yash Patil`;
    } else {
      document.title = `Yash Patil – Product & Strategy`;
    }
  }, [activeArticle, activeCaseStudyId]);

  const handleOpenCaseStudy = (caseStudyId: string) => {
    setActiveCaseStudyId(caseStudyId);
  };

  const handleOpenArticle = (post: SubstackPost) => {
    setActiveArticle(post);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#141413] text-[#161616] dark:text-[#FAF9F5] font-sans antialiased selection:bg-[#161616] selection:text-[#FAF9F5] dark:selection:bg-[#FAF9F5] dark:selection:text-[#141413] transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        onContactClick={() => scrollToSection('contact')}
      />

      {/* Hero Section */}
      <Hero
        onExploreExperience={() => scrollToSection('experience')}
        onExploreCaseStudies={() => scrollToSection('projects')}
        onExploreSubstack={() => scrollToSection('writing')}
      />

      <SectionDivider />

      {/* Primary: Selected Projects & Case Studies */}
      <CaseStudiesSection onOpenCaseStudy={handleOpenCaseStudy} />

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

