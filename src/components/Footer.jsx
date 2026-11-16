import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05070c] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <a
              href="#home"
              className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <span className="font-mono text-sm font-black">A</span>
              </div>
              <span className="font-mono text-base">
                {personalInfo.name}
                <span className="text-indigo-400">.dev</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              3rd-Year Information Science &amp; Engineering Student crafting modern digital products.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-indigo-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all shadow-sm cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Exact Footer prompt requirement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          
          {/* Explicit requirement: "Designed & Built by Ajit ❤️" */}
          <p className="flex items-center gap-1.5 text-slate-400">
            Designed &amp; Built by <span className="text-white font-medium">{personalInfo.name}</span>{' '}
            <span className="text-rose-500 inline-block animate-pulse">❤️</span>
          </p>

          <p>
            &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
