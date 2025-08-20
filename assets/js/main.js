(function () {
  const yearTarget = document.querySelector('[data-year]');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear().toString();
  }

  // Smooth scroll for in-page anchors
  document.addEventListener('click', function (e) {
    const target = e.target;
    if (target instanceof Element && target.matches('a[href^="#"]')) {
      const id = target.getAttribute('href');
      if (!id) return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  // Theme toggle (dark / light) using localStorage
  try {
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      const root = document.documentElement;
      const key = 'theme-preference';
      const apply = (mode) => {
        if (mode === 'light') root.classList.add('light');
        else root.classList.remove('light');
      };
      const initial = localStorage.getItem(key) || 'dark';
      apply(initial);
      toggle.addEventListener('click', function () {
        const current = root.classList.contains('light') ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        localStorage.setItem(key, next);
        apply(next);
      });
    }
  } catch (_) {}
})();


