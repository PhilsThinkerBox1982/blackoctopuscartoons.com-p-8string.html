import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  TrendingUp, 
  AlertCircle, 
  Star 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  darkMode: boolean;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  darkMode,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="case-study-modal-dialog"
        className={`relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden my-auto ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className={`p-6 border-b flex items-start justify-between gap-4 sticky top-0 z-10 ${
          darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                darkMode ? 'bg-indigo-950/80 text-indigo-300 border-indigo-800/50' : 'bg-indigo-50 text-indigo-700 border-indigo-100'
              }`}>
                {project.category}
              </span>
              {project.stars && (
                <span className="flex items-center gap-1 text-xs font-mono font-medium text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {project.stars} stars
                </span>
              )}
            </div>

            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}>
              {project.title}
            </h2>
            <p className={`text-sm font-medium mt-1 ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              {project.tagline}
            </p>
          </div>

          <button
            id="close-case-study-modal"
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className={`p-2 rounded-xl transition-colors ${
              darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Key Metrics Banner */}
          <div className={`grid grid-cols-3 gap-3 p-4 rounded-xl border ${
            darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <span className={`block font-mono text-lg sm:text-xl font-extrabold ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                  {m.value}
                </span>
                <span className={`text-xs font-medium ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h3 className={`text-base font-bold uppercase tracking-wider mb-2 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Project Overview
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-5 rounded-xl border ${
              darkMode ? 'bg-rose-950/20 border-rose-900/40' : 'bg-rose-50/70 border-rose-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                <h4 className={`text-sm font-bold ${
                  darkMode ? 'text-rose-300' : 'text-rose-800'
                }`}>
                  The Engineering Challenge
                </h4>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${
              darkMode ? 'bg-emerald-950/20 border-emerald-900/40' : 'bg-emerald-50/70 border-emerald-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-emerald-500" />
                <h4 className={`text-sm font-bold ${
                  darkMode ? 'text-emerald-300' : 'text-emerald-800'
                }`}>
                  Engineered Solution
                </h4>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-indigo-500" />
              <h3 className={`text-base font-bold uppercase tracking-wider ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Architectural Breakdown
              </h3>
            </div>
            <div className="space-y-2.5">
              {project.caseStudy.architecture.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-lg border text-xs sm:text-sm flex items-start gap-3 ${
                    darkMode ? 'bg-slate-950/50 border-slate-800/80 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="font-mono font-bold text-indigo-500 shrink-0">0{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Measurable Outcomes */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <h3 className={`text-base font-bold uppercase tracking-wider ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Measurable Impact & Production Results
              </h3>
            </div>
            <ul className="space-y-2">
              {project.caseStudy.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies used */}
          <div>
            <span className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Full Stack & Infrastructure:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium border ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className={`p-6 border-t flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-10 ${
          darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl border transition-all ${
                darkMode ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200' : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-semibold ${
              darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
