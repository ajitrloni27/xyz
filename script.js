/**
 * Ajit Ramachandra Loni - Personal Portfolio
 * Interactivity & Animations:
 * 1. Particle Network Canvas (~70 particles with repulsion & connecting lines)
 * 2. Mouse Glow Follower on Desktop
 * 3. Tagline Cycling Typing Effect
 * 4. IntersectionObserver Scroll Reveal
 * 5. Tab visibility pause & prefers-reduced-motion checks
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initParticleCanvas(isReducedMotion);
  initMouseGlow(isReducedMotion);
  initTypingEffect(isReducedMotion);
  initScrollReveal(isReducedMotion);
});

/* ===================================================================
   1. PARTICLE NETWORK CANVAS
   - ~70 accent-colored drifting particles
   - Thin connecting lines between nearby particles
   - Particles gently move away from cursor
   - Pauses on hidden tab, scales to DPR
   =================================================================== */
function initParticleCanvas(isReducedMotion) {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || isReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let animId = null;
  let width = 0;
  let height = 0;

  const mouse = {
    x: null,
    y: null,
    radius: 130
  };

  const PARTICLE_COUNT = 70;
  const CONNECT_DIST = 125;
  const particles = [];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.55;
      this.vy = (Math.random() - 0.5) * 0.55;
      this.radius = Math.random() * 1.8 + 1.2;
      this.baseAlpha = Math.random() * 0.45 + 0.35;
    }

    update() {
      // Mouse repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 3.5;
          this.y += Math.sin(angle) * force * 3.5;
        }
      }

      // Normal drift
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges smoothly
      if (this.x < -10) this.x = width + 10;
      else if (this.x > width + 10) this.x = -10;

      if (this.y < -10) this.y = height + 10;
      else if (this.y > height + 10) this.y = -10;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 149, 90, ${this.baseAlpha})`;
      ctx.fill();
    }
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Spawn particles
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  // Mouse move tracking
  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Render loop
  function loop() {
    ctx.clearRect(0, 0, width, height);

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.28;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(200, 149, 90, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(loop);
  }

  loop();

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animId) cancelAnimationFrame(animId);
    } else {
      animId = requestAnimationFrame(loop);
    }
  });
}

/* ===================================================================
   2. SOFT ACCENT GLOW MOUSE FOLLOWER (Desktop only)
   =================================================================== */
function initMouseGlow(isReducedMotion) {
  const glow = document.getElementById('mouse-glow');
  if (!glow || isReducedMotion) return;

  const isPointerFine = window.matchMedia('(pointer: fine)').matches;
  if (!isPointerFine) return;

  let mouseX = -500;
  let mouseY = -500;
  let currentX = -500;
  let currentY = -500;
  let isVisible = false;

  window.addEventListener('pointermove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      glow.style.opacity = '1';
      isVisible = true;
    }
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    glow.style.opacity = '0';
    isVisible = false;
  });

  function followMouse() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;

    requestAnimationFrame(followMouse);
  }

  requestAnimationFrame(followMouse);
}

/* ===================================================================
   3. TYPING EFFECT IN HERO TAGLINE
   - Cycles through:
     "3rd year ISE student"
     "App builder"
     "Hackathon enthusiast"
     "Problem solver"
   =================================================================== */
function initTypingEffect(isReducedMotion) {
  const phraseEl = document.getElementById('typed-phrase');
  if (!phraseEl) return;

  const phrases = [
    "3rd year ISE student",
    "App builder",
    "Hackathon enthusiast",
    "Problem solver"
  ];

  if (isReducedMotion) {
    phraseEl.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      phraseEl.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 45;
    } else {
      charIndex++;
      phraseEl.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 85;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause on completed word
      isDeleting = true;
      typingSpeed = 2200;
    } else if (isDeleting && charIndex === 0) {
      // Move to next word
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  // Start deleting after initial display delay
  setTimeout(() => {
    isDeleting = true;
    type();
  }, 2200);
}

/* ===================================================================
   4. SCROLL REVEAL (IntersectionObserver)
   =================================================================== */
function initScrollReveal(isReducedMotion) {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (isReducedMotion) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
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
