/**
 * ===================================================================
 * PROJECTS DATA & RENDERING SCRIPT
 * Edit the `projects` array below to add, modify, or remove projects!
 * ===================================================================
 */

const projects = [
  // --- Category: Apps ---
  {
    title: "Rent Tracker",
    description: "An app to track rent payments, due dates, and tenants in one place.",
    github: "https://github.com/ajitrloni27/REPO-NAME",
    live: "", // Leave blank if no live demo exists
    category: "Apps",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`
  },

  // --- Category: Hackathon Projects ---
  {
    title: "Lethe: Autonomous Agent Memory Layer",
    description: "A memory layer that lets autonomous AI agents store, recall, and manage context across tasks.",
    github: "https://github.com/ajitrloni27/REPO-NAME",
    live: "",
    category: "Hackathon Projects",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>`
  },
  {
    title: "Namma MedGate",
    description: "A Flutter prototype for contactless patient intake and protected transmission workflows, demonstrating a realistic clinical handoff from intake to specialist review, with a focus on reliability and recovery behavior.",
    github: "https://github.com/ajitrloni27/REPO-NAME",
    live: "",
    category: "Hackathon Projects",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  },
  {
    title: "Pramaan",
    description: "Helps people verify everyday documents like hospital bills, rental agreements, payslips, and medicine receipts against official rules, so they don't lose money or waive their rights because the paperwork is too complex to check.",
    github: "https://github.com/ajitrloni27/REPO-NAME",
    live: "",
    category: "Hackathon Projects",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>`
  },

  // --- Category: College Projects ---
  {
    title: "FarmVeda (Farmer System)",
    description: "A front-end community web application where farmers connect, share knowledge, and interact with each other.",
    github: "https://github.com/ajitrloni27",
    live: "",
    category: "College Projects",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c0-5 2-8 2-12"/><path d="M12 8c2.5 0 5 1.5 5 4s-2.5 4-5 4"/><path d="M12 12c-2.5 0-5 1.5-5 4s2.5 4 5 4"/></svg>`
  }
];

/**
 * Render the categories and project cards into their respective containers
 */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});

function renderProjects() {
  const sectionsConfig = [
    { id: "apps-grid", category: "Apps" },
    { id: "hackathon-grid", category: "Hackathon Projects" },
    { id: "college-grid", category: "College Projects" }
  ];

  sectionsConfig.forEach(section => {
    const container = document.getElementById(section.id);
    if (!container) return;

    const filtered = projects.filter(p => p.category === section.category);
    container.innerHTML = "";

    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = `card project-card reveal delay-${(idx % 3) + 1}`;

      // Build live button if live URL exists
      const liveButtonHtml = project.live && project.live.trim() !== ""
        ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-live">Live ↗</a>`
        : "";

      card.innerHTML = `
        <div class="project-card-top">
          <div class="project-icon-box" aria-hidden="true">
            ${project.icon || ''}
          </div>
        </div>
        <div class="project-card-body">
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-desc">${escapeHtml(project.description)}</p>
        </div>
        <div class="project-card-footer">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-btn">
            View on GitHub ↗
          </a>
          ${liveButtonHtml}
        </div>
      `;

      container.appendChild(card);
    });
  });

  // Re-run scroll reveal observation on newly rendered cards
  if (typeof initScrollReveal === 'function') {
    initScrollReveal();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
