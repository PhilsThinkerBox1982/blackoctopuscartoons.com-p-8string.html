import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Search, 
  Sparkles, 
  Check, 
  Layers, 
  Server, 
  Cloud, 
  Database, 
  Cpu,
  ArrowRight
} from 'lucide-react';
import { PortfolioProfile, SkillItem } from '../types';

interface SkillsSectionProps {
  profile: PortfolioProfile;
  darkMode: boolean;
  onSelectSkillForProjectFilter: (skillName: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  profile,
  darkMode,
  onSelectSkillForProjectFilter
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Frontend', 'Backend', 'Cloud & DevOps', 'Databases', 'Architecture'];

  const filteredSkills = useMemo(() => {
    return profile.skills.filter((skill) => {
      const matchesCat = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [profile.skills, selectedCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Layers className="w-4 h-4 text-indigo-500" />;
      case 'Backend': return <Server className="w-4 h-4 text-emerald-500" />;
      case 'Cloud & DevOps': return <Cloud className="w-4 h-4 text-blue-500" />;
      case 'Databases': return <Database className="w-4 h-4 text-amber-500" />;
      case 'Architecture': return <Cpu className="w-4 h-4 text-rose-500" />;
      default: return <Code2 className="w-4 h-4 text-indigo-500" />;
    }
  };

  const getLevelBadgeClass = (level: SkillItem['level']) => {
    if (level === 'Expert') {
      return darkMode 
        ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/60' 
        : 'bg-emerald-50 text-emerald-700 border border-emerald-200';
    }
    if (level === 'Advanced') {
      return darkMode 
        ? 'bg-blue-950/70 text-blue-400 border border-blue-800/60' 
        : 'bg-blue-50 text-blue-700 border border-blue-200';
    }
    return darkMode 
      ? 'bg-slate-800 text-slate-300 border border-slate-700' 
      : 'bg-slate-100 text-slate-700 border border-slate-200';
  };

  return (
    <section 
      id="skills" 
      className={`py-20 sm:py-28 border-b ${
        darkMode ? 'border-slate-800/80 bg-slate-900/30' : 'border-slate-200/80 bg-slate-50/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5 text-indigo-500" />
              <span className={`text-sm font-bold uppercase tracking-wider ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                Technical Competencies
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}>
              Skills & Engineering Tooling
            </h2>
            <p className={`text-base mt-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              A comprehensive view of my technical competencies across modern frontends, high-concurrency backends, distributed data stores, and cloud infrastructure.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                id="skill-search-input"
                type="text"
                placeholder="Search skills or keywords..."
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

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8" id="skills-category-tabs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                id={`skill-category-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? darkMode
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-indigo-600 text-white shadow-sm'
                    : darkMode
                      ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat)}
                <span>{cat}</span>
                {cat === 'All' && (
                  <span className={`ml-1 text-xs opacity-75`}>
                    ({profile.skills.length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              id={`skill-card-${index}`}
              className={`p-5 rounded-xl border transition-all group flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(skill.category)}
                    <h3 className={`font-bold text-base ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {skill.name}
                    </h3>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap ${getLevelBadgeClass(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-xs">
                <span className={`font-medium ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {skill.years} yrs practical experience
                </span>

                <button
                  type="button"
                  onClick={() => onSelectSkillForProjectFilter(skill.name)}
                  className={`inline-flex items-center gap-1 font-semibold transition-colors ${
                    darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                  }`}
                >
                  <span>Related projects</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className={`p-12 text-center rounded-xl border ${
            darkMode ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-white'
          }`}>
            <p className="text-sm font-medium text-slate-400">
              No skills match your query "{searchQuery}". Try searching for another keyword.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
