// Theme toggle
(function () {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  const toggle = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  if (toggle && icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-gray-600';

    toggle.addEventListener('click', function () {
      const isDark = document.documentElement.classList.toggle('dark');
      icon.className = isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-gray-600';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // Sync with system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        if (icon) icon.className = 'fas fa-sun text-yellow-400';
      } else {
        document.documentElement.classList.remove('dark');
        if (icon) icon.className = 'fas fa-moon text-gray-600';
      }
    }
  });
})();

// Mobile menu toggle
(function () {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
      const isOpen = !menu.classList.contains('hidden');
      btn.innerHTML = isOpen
        ? '<i class="fas fa-times text-2xl text-gray-900 dark:text-white"></i>'
        : '<i class="fas fa-bars text-2xl text-gray-900 dark:text-white"></i>';
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.add('hidden');
        btn.innerHTML = '<i class="fas fa-bars text-2xl text-gray-900 dark:text-white"></i>';
      });
    });
  }
})();

// Active nav link on scroll
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let current = '';
    sections.forEach(function (section) {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('text-cyan-400', 'dark:text-cyan-400');
      link.classList.add('text-gray-600', 'dark:text-gray-400');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('text-cyan-400', 'dark:text-cyan-400');
        link.classList.remove('text-gray-600', 'dark:text-gray-400');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
})();

// Back to top
(function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100');
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// AOS
(function () {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }
})();

// TS Particles
(function () {
  if (typeof tsParticles !== 'undefined') {
    tsParticles.load('tsparticles', {
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: '#22d3ee' },
        links: {
          color: '#22d3ee',
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: false,
          straight: false,
          outModes: { default: 'bounce' },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: { value: 0.4 },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 4 },
        },
      },
      detectRetina: true,
    });
  }
})();

// Image slider for project cards
(function () {
  var tracks = document.querySelectorAll('.slider-track');
  tracks.forEach(function (track) {
    var imgs = track.querySelectorAll('.slider-img');
    if (imgs.length < 2) return;
    var current = 0;
    setInterval(function () {
      imgs.forEach(function (img) { img.style.opacity = '0'; });
      current = (current + 1) % imgs.length;
      imgs[current].style.opacity = '1';
    }, 3500);
  });
})();
