import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  ExternalLink 
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface HeroProps {
  profile: PortfolioProfile;
  darkMode: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, darkMode, onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBio = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className={`relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b ${
        darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200/80 bg-slate-50/60'
      }`}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div 
          className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] blur-3xl rounded-full ${
            darkMode ? 'bg-indigo-950/40' : 'bg-indigo-100/60'
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border transition-all"
            id="hero-availability-pill"
            style={{
              backgroundColor: darkMode ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.12)',
              borderColor: darkMode ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.35)',
              color: darkMode ? '#34d399' : '#047857'
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profile.availability}</span>
          </div>

          {/* Headline Name and Title */}
          <h1 
            id="hero-headline" 
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4 ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}
          >
            Hi, I'm {profile.name}.
            <span className={`block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              {profile.title}
            </span>
          </h1>

          {/* Subtitle description */}
          <p 
            id="hero-subtitle"
            className={`text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-3xl ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {profile.subtitle}
          </p>

          {/* Metadata chips: Location, Experience, Focus */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium mb-8">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-md border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
            }`}>
              <MapPin className="w-4 h-4 text-indigo-500" />
              <span>{profile.location}</span>
            </div>
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-md border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
            }`}>
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span>8+ Years in Production Engineering</span>
            </div>
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-md border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
            }`}>
              <Layers className="w-4 h-4 text-amber-500" />
              <span>Full-Stack & Cloud Architecture</span>
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10" id="hero-actions">
            <a
              id="hero-cta-projects"
              href="#projects"
              onClick={scrollToProjects}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md ${
                darkMode 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20'
              }`}
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              id="hero-cta-resume"
              type="button"
              onClick={onOpenResume}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all ${
                darkMode
                  ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white'
                  : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800'
              }`}
            >
              <FileText className="w-4 h-4 text-indigo-500" />
              <span>View Resume</span>
            </button>

            <a
              id="hero-cta-bio"
              href="#biography"
              onClick={scrollToBio}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                darkMode
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Read Bio</span>
            </a>
          </div>

          {/* Social Profiles Quick Bar */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800/50" id="hero-social-links">
            <span className={`text-xs font-semibold uppercase tracking-wider ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Profiles:
            </span>
            
            <a
              id="hero-link-github"
              href="https://github.com/PhillipMacias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white'
                  : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              id="hero-link-linkedin"
              href="https://linkedin.com/in/phillipmacias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white'
                  : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-500" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              id="hero-link-email"
              href="mailto:PhillipMacias82@gmail.com"
              aria-label="Send Email"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white'
                  : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>PhillipMacias82@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Highlight Metrics Strip */}
        <div 
          id="hero-metrics-strip"
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 p-6 rounded-2xl border ${
            darkMode 
              ? 'bg-slate-900/60 border-slate-800/90' 
              : 'bg-white border-slate-200/90 shadow-sm'
          }`}
        >
          <div className="flex flex-col" id="metric-experience">
            <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              8+ Years
            </span>
            <span className={`text-xs sm:text-sm font-medium mt-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Production Engineering Experience
            </span>
          </div>

          <div className="flex flex-col" id="metric-throughput">
            <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              120k req/s
            </span>
            <span className={`text-xs sm:text-sm font-medium mt-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Distributed Pipeline Throughput
            </span>
          </div>

          <div className="flex flex-col" id="metric-volume">
            <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-emerald-400' : 'text-emerald-600'
            }`}>
              $1.4B+
            </span>
            <span className={`text-xs sm:text-sm font-medium mt-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              SaaS Ledger Volume Audited
            </span>
          </div>

          <div className="flex flex-col" id="metric-uptime">
            <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-amber-400' : 'text-amber-600'
            }`}>
              99.98%
            </span>
            <span className={`text-xs sm:text-sm font-medium mt-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Service Reliability Track Record
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
