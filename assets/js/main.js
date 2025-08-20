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
})();


