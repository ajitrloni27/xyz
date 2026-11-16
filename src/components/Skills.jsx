import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Database,
  Wrench,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'CodeXml':
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'LayoutGrid':
      case 'Globe':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'Wrench':
      case 'Terminal':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Subtle ambient blur */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium uppercase tracking-wider">
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Technologies, frameworks, and tools I use to turn ideas into performant software.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20 font-semibold'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20 font-semibold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 pb-5 border-b border-slate-800/80 mb-5">
                <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Tags / Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 group/skill ${
                      skill.highlight
                        ? 'bg-slate-800/90 border-indigo-500/30 text-white hover:border-indigo-400 hover:bg-indigo-950/30'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider bg-black/40 text-slate-400 border border-slate-700/40 group-hover/skill:text-indigo-300">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Customization Tip Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 max-w-2xl mx-auto flex items-start sm:items-center gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong className="text-slate-300">Easily Customizable:</strong> To add, remove, or modify your skills, simply update the <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">skillCategories</code> array in <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">src/data/portfolioData.js</code>.
          </span>
        </div>

      </div>
    </section>
  );
}
