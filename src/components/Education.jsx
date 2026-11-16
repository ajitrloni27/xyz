import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
  Info
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium uppercase tracking-wider">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            My formal foundation in Information Science &amp; Engineering, theoretical coursework, and milestones.
          </p>
        </div>

        {/* Timeline / Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-9 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20 group"
            >
              {/* Highlight ribbon for current study */}
              {item.status.includes('3rd Year') && (
                <div className="absolute -top-3 right-6 sm:right-8 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-mono font-semibold shadow-md">
                  Current Degree (3rd Year)
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-indigo-400 mt-0.5">
                      {item.major}
                    </p>
                    <p className="text-sm text-slate-300 mt-1 font-medium">
                      {item.institution}
                    </p>
                    {item.university && (
                      <p className="text-xs text-slate-400">
                        {item.university}
                      </p>
                    )}
                  </div>
                </div>

                {/* Duration & Location Badges */}
                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-mono text-slate-400">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-indigo-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  {item.grade && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.grade}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Coursework & Learning Highlights */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Courses */}
                <div className="md:col-span-7 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Relevant Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300 font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="md:col-span-5 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    <span>Highlights</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Customization Tip Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 max-w-2xl mx-auto flex items-start sm:items-center gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong className="text-slate-300">College &amp; Batch Placeholders:</strong> You can edit college name, graduation year, and GPA in <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">src/data/portfolioData.js</code> under <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">educationData</code>.
          </span>
        </div>

      </div>
    </section>
  );
}
