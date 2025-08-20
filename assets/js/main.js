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
        
        // Add click animation
        toggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
          toggle.style.transform = 'scale(1)';
        }, 150);
      });
    }
  } catch (_) {}

  // Scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.card, .content, details');
    animateElements.forEach(el => {
      observer.observe(el);
    });
  });

  // Progress bar animations
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('[style*="width:"]');
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      bar.style.transition = 'width 1.5s ease-out';
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
    });
  }

  // Card hover effects enhancement
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.card')) {
      const card = e.target.closest('.card');
      card.style.transform = 'translateY(-8px) scale(1.02)';
    }
  });

  document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.card')) {
      const card = e.target.closest('.card');
      card.style.transform = 'translateY(0) scale(1)';
    }
  });

  // Initialize animations when page loads
  window.addEventListener('load', function() {
    setTimeout(animateProgressBars, 500);
  });
})();


