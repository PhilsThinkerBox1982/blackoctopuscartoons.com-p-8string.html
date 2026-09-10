import React, { useState } from 'react';
import { 
  Compass, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Layers, 
  ShieldCheck, 
  MessageSquare,
  FileText,
  Calendar,
  MapPin
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface BiographyProps {
  profile: PortfolioProfile;
  darkMode: boolean;
  onOpenResume: () => void;
}

export const Biography: React.FC<BiographyProps> = ({ profile, darkMode, onOpenResume }) => {
  const [expandedRoleIndex, setExpandedRoleIndex] = useState<number | null>(0);

  const toggleRole = (index: number) => {
    setExpandedRoleIndex(expandedRoleIndex === index ? null : index);
  };

  const getPrincipleIcon = (title: string) => {
    if (title.includes('Performance')) return <Zap className="w-5 h-5 text-indigo-500" />;
    if (title.includes('Craft')) return <Layers className="w-5 h-5 text-emerald-500" />;
    if (title.includes('Resilience')) return <ShieldCheck className="w-5 h-5 text-amber-500" />;
    return <MessageSquare className="w-5 h-5 text-blue-500" />;
  };

  return (
    <section 
      id="biography" 
      className={`py-20 sm:py-28 border-b ${
        darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200/80 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-5 h-5 text-indigo-500" />
            <span className={`text-sm font-bold uppercase tracking-wider ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              Biography & Background
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Engineering at the intersection of scale, performance, and craftsmanship.
          </h2>
        </div>

        {/* 2-Column Layout: Narrative Bio on Left, Core Principles on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start mb-20">
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-6" id="biography-narrative">
            {profile.bioParagraphs.map((paragraph, idx) => (
              <p 
                key={idx}
                className={`text-base sm:text-lg leading-relaxed font-normal ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Quote / Highlight Box */}
            <div className={`p-5 rounded-xl border mt-6 ${
              darkMode 
                ? 'bg-slate-900/90 border-slate-800 text-slate-300' 
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <p className="text-sm italic font-medium">
                "Building systems that withstand continuous load is just half the battle; ensuring code remains approachable and transparent for your teammates is where true engineering craft shows."
              </p>
              <span className={`block text-xs font-semibold uppercase tracking-wider mt-2 ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                — Phillip Macias
              </span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800'
                }`}
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>View Full Curriculum Vitae</span>
              </button>
            </div>
          </div>

          {/* Core Principles */}
          <div className="lg:col-span-5 space-y-4" id="engineering-principles">
            <h3 className={`text-lg font-bold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Core Engineering Tenets
            </h3>
            {profile.principles.map((principle, index) => (
              <div 
                key={index}
                id={`principle-card-${index}`}
                className={`p-5 rounded-xl border transition-all ${
                  darkMode 
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700' 
                    : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {getPrincipleIcon(principle.title)}
                  <h4 className={`text-base font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {principle.title}
                  </h4>
                </div>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline Section */}
        <div id="experience" className="pt-10">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-indigo-500" />
              <span className={`text-sm font-bold uppercase tracking-wider ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                Work History & Leadership
              </span>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}>
              Professional Experience
            </h3>
          </div>

          <div className="space-y-4" id="experience-list">
            {profile.experiences.map((exp, index) => {
              const isExpanded = expandedRoleIndex === index;
              return (
                <div
                  key={index}
                  id={`experience-item-${index}`}
                  className={`rounded-xl border transition-all ${
                    darkMode
                      ? isExpanded 
                        ? 'bg-slate-900/90 border-indigo-500/40 shadow-lg shadow-black/20' 
                        : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                      : isExpanded
                        ? 'bg-white border-indigo-200 shadow-md'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleRole(index)}
                    aria-expanded={isExpanded}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <span className={`text-lg sm:text-xl font-bold ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {exp.role}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          darkMode ? 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/50' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                        }`}>
                          {exp.company}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className={`text-sm mt-3 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {exp.summary}
                      </p>
                    </div>

                    <div className="pt-1 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Achievements & Technologies */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/40">
                      <div className="mb-4">
                        <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Key Technical Contributions & Impact:
                        </span>
                        <ul className="space-y-2.5">
                          {exp.achievements.map((achievement, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2.5 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 pt-3">
                        <span className={`text-xs font-semibold mr-2 ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Stack:
                        </span>
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${
                              darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-800'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Highlight */}
        <div className="mt-12 p-6 rounded-xl border"
          id="education-section"
          style={{
            backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.4)' : 'rgba(248, 250, 252, 0.9)',
            borderColor: darkMode ? '#334155' : '#e2e8f0'
          }}
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl shrink-0 ${
              darkMode ? 'bg-indigo-950 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
            }`}>
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className={`text-lg font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {profile.education[0].institution}
                </h4>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  darkMode ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {profile.education[0].honors}
                </span>
              </div>
              <p className={`text-sm font-medium ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {profile.education[0].degree} • {profile.education[0].period}
              </p>
              <p className={`text-xs mt-1.5 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
              Coursework focus : General Education
{profile.education[0].focus}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
