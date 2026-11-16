import React from 'react';
import {
  GraduationCap,
  Code2,
  Cpu,
  Sparkles,
  Layers,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

export default function About() {
  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'BrainCircuit':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium uppercase tracking-wider">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionate About Technology &amp; Engineering
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Bridging foundational Computer Science concepts with modern software development practices.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <span>Hello, I'm</span>
                <span className="gradient-text">{personalInfo.fullName}</span>
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.bioLong.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Interests List */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Technical Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>Full-Stack Web Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>Data Structures &amp; Algorithms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>Relational &amp; NoSQL Databases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>System Design &amp; Clean Architecture</span>
                  </div>
                </div>
              </div>

              {/* Fast Meta Info */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>Information Science (ISE)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Graduation: 2027 (Expected)</span>
                </div>
              </div>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {aboutHighlights.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {getHighlightIcon(pillar.iconName)}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Small Education Card & Academic Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Highlight Card */}
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-indigo-500/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    Current Education
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    3rd Year Undergrad
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 font-mono">Degree &amp; Major</p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    B.E. in Information Science &amp; Engineering
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 font-mono">Status &amp; Batch</p>
                  <p className="text-sm font-medium text-slate-200 mt-0.5">
                    3rd Year (Ongoing) &bull; 2023 &ndash; 2027
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 font-mono">College / Institution</p>
                  <p className="text-sm font-medium text-slate-300 mt-0.5">
                    XYZ Institute of Technology <span className="text-xs text-slate-500">(Editable Placeholder)</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <p className="text-xs font-mono uppercase text-slate-400 mb-2">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['DSA', 'DBMS', 'OS', 'Networks', 'OOP', 'Web Tech'].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="#education"
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 group"
                >
                  <span>View detailed education timeline</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Quick Mindset / Code Philosophy Card */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>My Approach to Software</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed italic">
                "Writing clean, readable code and understanding underlying computer science principles matters more than chasing fleeting hype. I build with empathy for users and respect for maintainability."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
