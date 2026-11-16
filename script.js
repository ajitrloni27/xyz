/**
 * Ajit Ramachandra Loni - Personal Portfolio
 * Core interactions: Background Starfield, Scroll Reveal, Active Link
 */

document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initScrollReveal();
});

/**
 * Generate ~40 twinkling dots at random intervals and positions
 */
function initStarfield() {
  const container = document.getElementById('bg-stars');
  if (!container) return;

  const count = 42;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star-dot';
    
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() < 0.25 ? 3 : 2; // slight size variation
    const duration = (3.5 + Math.random() * 4.5).toFixed(2);
    const delay = (Math.random() * 5).toFixed(2);

    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--duration', `${duration}s`);
    star.style.setProperty('--delay', `${delay}s`);

    fragment.appendChild(star);
  }

  container.appendChild(fragment);
}

/**
 * IntersectionObserver for smooth fade-up animations as sections scroll into view
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // If user prefers reduced motion, show immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}
