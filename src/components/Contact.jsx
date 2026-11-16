import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo, contactData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    // Simulate sending message (can be connected to Formspree, EmailJS, or backend)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium uppercase tracking-wider">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {contactData.heading}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {contactData.subheading}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">Direct Email</p>
                  <p className="text-sm sm:text-base font-semibold text-white break-all">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600/30 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/40 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>{contactData.responseExpectation}</span>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-slate-300">
                Connect Across The Web
              </h3>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
                    <div>
                      <p className="text-sm font-semibold">GitHub</p>
                      <p className="text-xs text-slate-400">Repositories &amp; open-source</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-indigo-400 group-hover:translate-x-1 transition-transform">
                    Follow &rarr;
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                    <div>
                      <p className="text-sm font-semibold">LinkedIn</p>
                      <p className="text-xs text-slate-400">Professional network &amp; updates</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-blue-400 group-hover:translate-x-1 transition-transform">
                    Connect &rarr;
                  </span>
                </a>

                {/* Twitter / X */}
                <a
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <TwitterIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                    <div>
                      <p className="text-sm font-semibold">Twitter / X</p>
                      <p className="text-xs text-slate-400">Tech thoughts &amp; discussions</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">
                    Follow &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Opportunities Box */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Open for Opportunities</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {contactData.opportunities.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-slate-800/90 shadow-2xl relative">
              
              {/* Form Title */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Send Me a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-emerald-300">
                      Message Sent Successfully!
                    </p>
                    <p className="mt-1 text-emerald-200/90">
                      Thank you for reaching out, Ajit has received your note and will respond shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-2 text-xs font-mono underline text-emerald-300 hover:text-emerald-100"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.name ? 'border-rose-500/80 bg-rose-950/10' : 'border-slate-700/80'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.email ? 'border-rose-500/80 bg-rose-950/10' : 'border-slate-700/80'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                      errors.subject ? 'border-rose-500/80 bg-rose-950/10' : 'border-slate-700/80'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or questions..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-y ${
                      errors.message ? 'border-rose-500/80 bg-rose-950/10' : 'border-slate-700/80'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 disabled:opacity-60 transition-all duration-200 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-500 pt-2 font-mono">
                  🔒 No spam guaranteed. Your email address stays strictly confidential.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
