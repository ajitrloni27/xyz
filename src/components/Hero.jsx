import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Terminal,
  Sparkles,
  GraduationCap,
  Code
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personalInfo.status}
              </span>
            </div>

            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-indigo-400 tracking-wide font-mono">
                Hi, I'm Ajit 👋
              </p>
              
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Aspiring{' '}
                <span className="gradient-text">Software Developer</span>{' '}
                &amp; Tech Enthusiast
              </h1>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              3rd-year <span className="text-white font-medium">Information Science &amp; Engineering (ISE)</span> student passionate about crafting clean web applications, building scalable backend services, and exploring next-generation technologies.
            </p>

            {/* Two Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 hover:text-white shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Profiles */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono font-medium mr-2">
                Connect:
              </span>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/20 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/20 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/20 transition-all duration-200"
                aria-label="Email Ajit"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/20 transition-all duration-200"
                aria-label="Twitter / X Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                  <div className="text-lg sm:text-xl font-bold font-mono gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Professional Profile Image Placeholder & Tech Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-30 blur-xl group-hover:opacity-60 transition duration-1000 -z-10" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Top Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>ajit@ise-workstation:~</span>
                  </div>
                </div>

                {/* Profile Visual Placeholder */}
                <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-indigo-500/30 flex items-center justify-center p-2 shadow-inner group">
                  
                  {/* Stylized Modern Avatar Placeholder */}
                  <div className="w-full h-full rounded-xl bg-[#0b0f19] flex flex-col items-center justify-center relative overflow-hidden text-center p-4">
                    {/* Background subtle mesh */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-indigo-900/10 to-transparent pointer-events-none" />
                    
                    {/* Monogram / Profile Icon */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-600/30 border-2 border-white/10 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-3xl font-black font-mono text-white tracking-wider">
                        A
                      </span>
                    </div>

                    <div className="mt-3 relative">
                      <p className="text-sm font-bold text-white tracking-wide">Ajit</p>
                      <p className="text-[11px] text-indigo-400 font-mono">B.E. ISE Student</p>
                    </div>
                  </div>

                  {/* Floating chip 1: 3rd Year */}
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/40 text-[11px] font-mono text-indigo-300 shadow-md flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-indigo-400" />
                    <span>3rd Year</span>
                  </div>

                  {/* Floating chip 2: Full Stack */}
                  <div className="absolute -bottom-3 -left-3 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/40 text-[11px] font-mono text-purple-300 shadow-md flex items-center gap-1">
                    <Code className="w-3 h-3 text-purple-400" />
                    <span>ISE Engineer</span>
                  </div>
                </div>

                {/* Developer snippet inside the card */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-slate-800/80 font-mono text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center justify-between text-slate-500 text-[11px]">
                    <span>// developer.config.ts</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      ready
                    </span>
                  </div>
                  <p className="text-indigo-300">
                    <span className="text-pink-400">const</span> developer = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-amber-300">"{personalInfo.name}"</span>,
                  </p>
                  <p className="pl-4">
                    branch: <span className="text-amber-300">"Information Science &amp; Engg"</span>,
                  </p>
                  <p className="pl-4">
                    year: <span className="text-indigo-400">3</span>,
                  </p>
                  <p className="pl-4">
                    interests: [<span className="text-emerald-300">"Web"</span>, <span className="text-emerald-300">"DSA"</span>, <span className="text-emerald-300">"Cloud"</span>]
                  </p>
                  <p className="text-indigo-300">&#125;;</p>
                </div>

                {/* Instruction note for photo replacement */}
                <p className="text-[11px] text-center text-slate-500 font-mono">
                  💡 Tip: Replace avatar in <span className="text-slate-400">src/components/Hero.jsx</span> with your photo anytime.
                </p>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-indigo-400 transition-colors group"
            aria-label="Scroll to About Me section"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-indigo-300">
              Scroll Down
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-indigo-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
