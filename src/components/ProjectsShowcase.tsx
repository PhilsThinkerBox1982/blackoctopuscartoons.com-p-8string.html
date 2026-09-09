import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  BookOpen, 
  Search, 
  Sparkles, 
  X, 
  Star,
  Activity,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { PortfolioProfile, Project } from '../types';

interface ProjectsShowcaseProps {
  profile: PortfolioProfile;
  darkMode: boolean;
  activeSkillFilter: string | null;
  onClearSkillFilter: () => void;
  onSelectProjectForCaseStudy: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  profile,
  darkMode,
  activeSkillFilter,
  onClearSkillFilter,
  onSelectProjectForCaseStudy
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Distributed Systems', 'Developer Tools', 'Full-Stack SaaS', 'Cloud & DevOps'];

  const filteredProjects = useMemo(() => {
    return profile.projects.filter((project) => {
      // Category check
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;

      // Skill filter check
      const matchesSkill = !activeSkillFilter || 
        project.technologies.some(tech => tech.toLowerCase().includes(activeSkillFilter.toLowerCase())) ||
        project.title.toLowerCase().includes(activeSkillFilter.toLowerCase());

      // Search query check
      const query = searchQuery.toLowerCase();
      const matchesSearch = !query || 
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSkill && matchesSearch;
    });
  }, [profile.projects, selectedCategory, activeSkillFilter, searchQuery]);

  return (
    <section 
      id="projects" 
      className={`py-20 sm:py-28 border-b ${
        darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200/80 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <FolderGit2 className="w-5 h-5 text-indigo-500" />
              <span className={`text-sm font-bold uppercase tracking-wider ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                Featured Works & Case Studies
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}>
              Engineering Showcase
            </h2>
            <p className={`text-base mt-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Production systems, developer sandboxes, and distributed infrastructure designed for extreme reliability and sub-millisecond execution.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                id="project-search-input"
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl border transition-colors outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' 
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills & Active Skill Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-2" id="project-category-filters">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  id={`project-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : darkMode
                        ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Skill Filter Tag active */}
          {activeSkillFilter && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <span>Filtered by: <strong>{activeSkillFilter}</strong></span>
              <button
                type="button"
                onClick={onClearSkillFilter}
                className="hover:text-white transition-colors"
                title="Clear skill filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" id="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`rounded-2xl border transition-all flex flex-col justify-between overflow-hidden group ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div className="p-6 sm:p-7">
                {/* Header: Category + Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                    darkMode 
                      ? 'bg-slate-800 text-indigo-300 border-slate-700' 
                      : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                  }`}>
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.featuredBadge && (
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        darkMode ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40' : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        {project.featuredBadge}
                      </span>
                    )}
                    {project.stars && (
                      <span className="flex items-center gap-1 text-xs font-mono font-medium text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {project.stars}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:text-indigo-500 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-950'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${
                  darkMode ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                  {project.tagline}
                </p>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Metrics Pill Grid */}
                <div className={`grid grid-cols-3 gap-2 p-3 rounded-xl border mb-6 ${
                  darkMode ? 'bg-slate-950/50 border-slate-800/70' : 'bg-slate-50 border-slate-200/70'
                }`}>
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <span className={`block font-mono text-xs sm:text-sm font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {m.value}
                      </span>
                      <span className={`text-[11px] font-medium block truncate ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${
                        darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className={`px-6 sm:px-7 py-4 border-t flex flex-wrap items-center justify-between gap-3 ${
                darkMode ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/50'
              }`}>
                <button
                  type="button"
                  id={`btn-case-study-${project.id}`}
                  onClick={() => onSelectProjectForCaseStudy(project)}
                  className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors ${
                    darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Architecture & Case Study</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    id={`btn-github-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                      darkMode
                        ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200'
                        : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      id={`btn-live-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Launch ${project.title} Demo`}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={`p-12 text-center rounded-xl border ${
            darkMode ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-white'
          }`}>
            <p className="text-sm font-medium text-slate-400">
              No projects matched your criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                onClearSkillFilter();
              }}
              className="mt-3 px-4 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
