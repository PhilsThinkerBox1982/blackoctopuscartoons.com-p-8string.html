import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PortfolioProfile } from '../types';

interface FooterProps {
  profile: PortfolioProfile;
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ profile, darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className={`py-12 sm:py-16 border-t ${
        darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/40">
          {/* Brand and Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-base font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {profile.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Active
              </span>
            </div>
            <p className="text-xs">
              {profile.title} • {profile.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4" id="footer-social-links">
            <a
              id="footer-link-github"
              href="https://github.com/PhillipMacias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-slate-800 hover:border-slate-700 hover:text-white' : 'border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-link-linkedin"
              href="https://linkedin.com/in/phillipmacias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-slate-800 hover:border-slate-700 hover:text-white' : 'border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <Linkedin className="w-4 h-4 text-blue-500" />
            </a>

            <a
              id="footer-link-email"
              href="mailto:PhillipMacias82@gmail.com"
              aria-label="Direct Email"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-slate-800 hover:border-slate-700 hover:text-white' : 'border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <Mail className="w-4 h-4 text-emerald-500" />
            </a>

            {/* Back to top */}
            <button
              id="btn-back-to-top"
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`p-2 rounded-lg border transition-all inline-flex items-center gap-1 text-xs font-semibold ${
                darkMode 
                  ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white' 
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with React 19, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
