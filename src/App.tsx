import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ProfilesAndContact } from './components/ProfilesAndContact';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [profile] = useState(initialPortfolioData);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return true; // Default to sleek dark mode
  });

  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/20 selection:text-indigo-300';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-indigo-500/20 selection:text-indigo-700';
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleSelectSkillForProjectFilter = (skillName: string) => {
    setActiveSkillFilter(skillName);
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearSkillFilter = () => {
    setActiveSkillFilter(null);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Fixed Navigation Bar */}
      <Navbar
        profile={profile}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          profile={profile}
          darkMode={darkMode}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* Biography & Work History Section */}
        <Biography
          profile={profile}
          darkMode={darkMode}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* Projects Showcase & Case Studies Section */}
        <ProjectsShowcase
          profile={profile}
          darkMode={darkMode}
          activeSkillFilter={activeSkillFilter}
          onClearSkillFilter={handleClearSkillFilter}
          onSelectProjectForCaseStudy={(project) => setSelectedCaseStudyProject(project)}
        />

        {/* Technical Skills Section */}
        <SkillsSection
          profile={profile}
          darkMode={darkMode}
          onSelectSkillForProjectFilter={handleSelectSkillForProjectFilter}
        />

        {/* Professional Profiles & Contact Section */}
        <ProfilesAndContact
          profile={profile}
          darkMode={darkMode}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        darkMode={darkMode}
      />

      {/* Modals */}
      <ProjectCaseStudyModal
        project={selectedCaseStudyProject}
        darkMode={darkMode}
        onClose={() => setSelectedCaseStudyProject(null)}
      />

      <ResumeModal
        profile={profile}
        isOpen={isResumeModalOpen}
        darkMode={darkMode}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
