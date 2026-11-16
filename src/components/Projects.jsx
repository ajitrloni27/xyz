import React, { useState } from 'react';
import {
  ExternalLink,
  FolderGit2,
  Sparkles,
  Layers,
  ArrowUpRight,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Tools & Systems'];

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider">
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects &amp; Prototypes
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A selection of projects exploring web technologies, system architectures, and algorithmic tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20 font-semibold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/30 overflow-hidden group"
            >
              <div>
                {/* Project Header Banner / Visual Placeholder */}
                <div className="relative h-44 sm:h-48 bg-gradient-to-tr from-slate-900 via-slate-850 to-slate-800 border-b border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Grid / Glow on Hover */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                  {/* Top Bar inside Banner */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/80 border border-slate-700/80 text-indigo-300 backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Tech Preview Inside Banner */}
                  <div className="relative z-10 space-y-1">
                    <p className="text-xs font-mono text-slate-400">
                      {project.tagline}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-7 space-y-5">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics / Highlights if available */}
                  {project.metrics && (
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2.5 py-1 rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-300 group-hover:border-slate-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/60 mt-auto flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 hover:text-white transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Tip Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 max-w-2xl mx-auto flex items-start sm:items-center gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong className="text-slate-300">Adding Your Real Projects:</strong> Replace titles, descriptions, tech stacks, and URLs in <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">src/data/portfolioData.js</code>.
          </span>
        </div>

      </div>
    </section>
  );
}
