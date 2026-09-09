import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  Sparkles
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface NavbarProps {
  profile: PortfolioProfile;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  darkMode,
  onToggleDarkMode,
  onOpenResume
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'biography', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About & Bio', href: '#biography', id: 'biography' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Profiles & Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' 
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Name */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group"
          id="nav-brand-logo"
        >
          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-sm sm:text-base transition-all ${
            darkMode 
              ? 'bg-indigo-600 text-white group-hover:bg-indigo-500 shadow-md shadow-indigo-600/30' 
              : 'bg-indigo-600 text-white group-hover:bg-indigo-700 shadow-sm'
          }`}>
            PM
          </div>
          <div className="flex flex-col">
            <span className={`font-bold tracking-tight text-sm sm:text-base transition-colors ${
              darkMode ? 'text-slate-100 group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
            }`}>
              {profile.name}
            </span>
            <span className={`text-xs hidden sm:inline-block font-medium ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Senior Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" id="desktop-nav-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? darkMode
                      ? 'text-white bg-slate-800/90'
                      : 'text-indigo-700 bg-indigo-50'
                    : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Theme toggle + Resume button + Mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3" id="nav-actions">
          {/* Theme Toggle */}
          <button
            id="theme-toggle-button"
            type="button"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Resume View Button */}
          <button
            id="nav-resume-button"
            type="button"
            onClick={onOpenResume}
            className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-semibold border transition-all ${
              darkMode
                ? 'border-slate-700 hover:border-slate-600 bg-slate-900 text-slate-200 hover:text-white hover:bg-slate-800'
                : 'border-slate-300 hover:border-slate-400 bg-white text-slate-800 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4 text-indigo-500" />
            <span>Resume</span>
          </button>

          {/* Quick Contact CTA */}
          <a
            id="nav-contact-button"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              darkMode
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
            }`}
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className={`md:hidden border-b transition-all px-4 pt-3 pb-6 ${
            darkMode 
              ? 'bg-slate-950/95 border-slate-800 text-slate-100' 
              : 'bg-white/95 border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? darkMode ? 'bg-slate-800 text-white' : 'bg-indigo-50 text-indigo-700'
                    : darkMode ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-3 border-t border-slate-800/50">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 border ${
                darkMode ? 'border-slate-700 bg-slate-900 text-slate-200' : 'border-slate-300 bg-slate-50 text-slate-800'
              }`}
            >
              <FileText className="w-4 h-4 text-indigo-500" />
              <span>View Full Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-500"
            >
              <span>Connect with Phillip</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
