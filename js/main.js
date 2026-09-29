/**
 * PHE-BE SMITH PLATFORM — VIBRANT & JOYFUL CONTROLLER
 * Orchestrates Theme Toggling, Particle Canvas, Scroll Animations,
 * Interactive Grade Level Tabs, and Number Counters.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeroParticles();
  initHeaderScroll();
  initMobileMenu();
  initGradeTabs();
  initStatsCounters();
  initChoreographyTriggers();
});

/* --------------------------------------------------------------------------
   THEME TOGGLING (LIGHT VIBRANT DEFAULT / ELECTRIC STAGE DARK)
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtns = document.querySelectorAll('#theme-toggle-btn, #drawer-theme-toggle-btn');
  const savedTheme = localStorage.getItem('phebe-theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('phebe-theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  });
}

function updateThemeIcon(theme) {
  const icons = document.querySelectorAll('#theme-icon, #drawer-theme-icon, .drawer-theme-icon');
  icons.forEach(icon => {
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
  });
}

/* --------------------------------------------------------------------------
   HERO VIBRANT MULTI-COLOR PARTICLES & LIGHT DUST CANVAS
   -------------------------------------------------------------------------- */
function initHeroParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const vibrantColors = ['#ff4757', '#ff7f11', '#ffaa00', '#e024c3', '#7928ca', '#00b4d8', '#06d6a0'];

  function resize() {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * (width || 800);
      this.y = (height || 600) + Math.random() * 20;
      this.size = Math.random() * 3.5 + 1.5;
      this.speedY = Math.random() * 0.9 + 0.35;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.color = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
      this.life = 0;
      this.maxLife = Math.random() * 280 + 120;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.life * 0.03) * 0.6;
      this.life++;

      if (this.y < -10 || this.life > this.maxLife) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity * (1 - this.life / this.maxLife);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 45; i++) {
    const p = new Particle();
    p.y = Math.random() * (height || 600);
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   STICKY HEADER & SMOOTH SCROLL SPY
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   MOBILE MENU DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const menu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !menu) return;

  function setMenuState(open) {
    if (open) {
      menu.classList.add('open');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.setAttribute('aria-label', 'Close Navigation Menu');
      document.body.classList.add('menu-open');
    } else {
      menu.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Open Navigation Menu');
      document.body.classList.remove('menu-open');
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains('open');
    setMenuState(!isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      setMenuState(false);
    }
  });

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      setMenuState(false);
      toggleBtn.focus();
    }
  });

  // Handle resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080 && menu.classList.contains('open')) {
      setMenuState(false);
    }
  });
}

/* --------------------------------------------------------------------------
   GRADE LEVEL INTERACTIVE TABS
   -------------------------------------------------------------------------- */
function initGradeTabs() {
  const tabBtns = document.querySelectorAll('.grade-tab-btn');
  const tabPanels = document.querySelectorAll('.grade-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const grade = btn.getAttribute('data-grade');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`grade-panel-${grade}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   KINETIC STATS NUMBER COUNTERS
   -------------------------------------------------------------------------- */
function initStatsCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          if (isNaN(target)) return;

          let count = 0;
          const duration = 1600;
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              counter.textContent = `${target.toLocaleString()}${suffix}`;
              clearInterval(timer);
            } else {
              counter.textContent = `${Math.floor(count).toLocaleString()}${suffix}`;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.getElementById('hero-stats-bar');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* --------------------------------------------------------------------------
   CHOREOGRAPHY WORK LIGHTBOX TRIGGERS
   -------------------------------------------------------------------------- */
function initChoreographyTriggers() {
  document.querySelectorAll('.repertoire-card').forEach(card => {
    const playBtn = card.querySelector('.repertoire-play-btn');
    const title = card.getAttribute('data-title');
    const premiere = card.getAttribute('data-premiere');
    const synopsis = card.getAttribute('data-synopsis');
    const img = card.querySelector('.repertoire-img');
    const imgSrc = img ? img.getAttribute('src') : 'assets/images/hero.jpg';

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (window.videoLightbox) {
          window.videoLightbox.open({
            title: title || "Choreography & Repertoire",
            category: premiere || "Choreographic Work",
            desc: synopsis || "Original choreography and stage rehearsal work in New York City.",
            imageSrc: imgSrc
          });
        }
      });
    }
  });
}
