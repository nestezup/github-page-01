(function () {
  if (typeof Chart === 'undefined') return;

  function createLineChart(ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Visitors',
            data: [12, 19, 13, 22, 28, 33, 26],
            borderColor: '#7c3aed',
            backgroundColor: 'rgba(124, 58, 237, 0.2)',
            tension: 0.35,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#e5e7eb' } },
        },
        scales: {
          x: { ticks: { color: '#9ca3af' }, grid: { color: '#1f2937' } },
          y: { ticks: { color: '#9ca3af' }, grid: { color: '#1f2937' } },
        },
      },
    });
  }

  function createBarChart(ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['조회수', '좋아요', '댓글', '공유'],
        datasets: [
          {
            label: 'Sample',
            data: [1200, 320, 85, 44],
            backgroundColor: ['#a78bfa', '#60a5fa', '#34d399', '#f472b6'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#e5e7eb' } },
        },
        scales: {
          x: { ticks: { color: '#9ca3af' }, grid: { color: '#1f2937' } },
          y: { ticks: { color: '#9ca3af' }, grid: { color: '#1f2937' } },
        },
      },
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('canvas[data-chart]').forEach(function (canvas) {
      const kind = canvas.getAttribute('data-chart');
      if (kind === 'line') createLineChart(canvas.getContext('2d'));
      if (kind === 'bar') createBarChart(canvas.getContext('2d'));
    });
  });
})();


