(function () {
  if (typeof Chart === 'undefined') return;

  // Modern chart styling
  const chartColors = {
    primary: '#6366f1',
    secondary: '#06b6d4',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    purple: '#8b5cf6',
    pink: '#ec4899',
    gradient: {
      purple: ['#8b5cf6', '#6366f1'],
      cyan: ['#06b6d4', '#0891b2'],
      emerald: ['#10b981', '#059669'],
      amber: ['#f59e0b', '#d97706']
    }
  };

  function createLineChart(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
    gradient.addColorStop(1, 'rgba(99, 102, 241, 0.05)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1주차', '2주차', '3주차', '4주차'],
        datasets: [
          {
            label: '학습 진행률 (%)',
            data: [25, 50, 75, 100],
            borderColor: chartColors.primary,
            backgroundColor: gradient,
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: chartColors.primary,
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: chartColors.primary,
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
              label: function(context) {
                return `진행률: ${context.parsed.y}%`;
              }
            }
          }
        },
        scales: {
          x: {
            ticks: { color: '#94a3b8', font: { size: 12 } },
            grid: { color: 'rgba(51, 65, 85, 0.3)', drawBorder: false },
            border: { display: false }
          },
          y: {
            ticks: { 
              color: '#94a3b8', 
              font: { size: 12 },
              callback: function(value) {
                return value + '%';
              }
            },
            grid: { color: 'rgba(51, 65, 85, 0.3)', drawBorder: false },
            border: { display: false },
            min: 0,
            max: 100
          },
        },
        interaction: {
          intersect: false,
          mode: 'index'
        }
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
            label: 'YouTube 분석 데모',
            data: [1200, 320, 85, 44],
            backgroundColor: [
              chartColors.gradient.purple[0],
              chartColors.gradient.cyan[0],
              chartColors.gradient.emerald[0],
              chartColors.gradient.amber[0]
            ],
            borderRadius: 8,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: chartColors.primary,
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: false,
          }
        },
        scales: {
          x: {
            ticks: { color: '#94a3b8', font: { size: 12 } },
            grid: { display: false },
            border: { display: false }
          },
          y: {
            ticks: { color: '#94a3b8', font: { size: 12 } },
            grid: { color: 'rgba(51, 65, 85, 0.3)', drawBorder: false },
            border: { display: false }
          },
        },
      },
    });
  }

  function createDoughnutChart(ctx) {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Electron', 'API 연동', 'YouTube 분석', 'OAuth 인증'],
        datasets: [
          {
            data: [25, 25, 25, 25],
            backgroundColor: [
              chartColors.gradient.purple[0],
              chartColors.gradient.cyan[0], 
              chartColors.gradient.emerald[0],
              chartColors.gradient.amber[0]
            ],
            borderWidth: 0,
            cutout: '70%',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#94a3b8',
              font: { size: 12 },
              padding: 20,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          tooltip: {
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: chartColors.primary,
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.parsed}%`;
              }
            }
          }
        },
      },
    });
  }

  // Enhanced animation and interaction
  Chart.defaults.animation.duration = 1000;
  Chart.defaults.animation.easing = 'easeOutQuart';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('canvas[data-chart]').forEach(function (canvas) {
      const kind = canvas.getAttribute('data-chart');
      const ctx = canvas.getContext('2d');
      
      if (kind === 'line') createLineChart(ctx);
      if (kind === 'bar') createBarChart(ctx);
      if (kind === 'doughnut') createDoughnutChart(ctx);
      
      // Week 2 specific chart
      if (canvas.id === 'apiChart') {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['월', '화', '수', '목', '금'],
            datasets: [{
              label: 'API 호출 성공',
              data: [45, 52, 48, 61, 58],
              backgroundColor: chartColors.gradient.cyan[0],
              borderRadius: 6,
            }, {
              label: 'API 호출 실패',
              data: [3, 2, 4, 1, 2],
              backgroundColor: chartColors.error,
              borderRadius: 6,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: { color: '#94a3b8', font: { size: 12 } }
              }
            },
            scales: {
              x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
              y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51, 65, 85, 0.3)' } }
            }
          }
        });
      }
      
      // Week 3 content chart
      if (canvas.id === 'contentChart') {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['튜토리얼', '리뷰', '브이로그', '라이브'],
            datasets: [{
              data: [35, 25, 25, 15],
              backgroundColor: [
                '#ef4444', // red
                '#3b82f6', // blue  
                '#10b981', // emerald
                '#f59e0b'  // amber
              ],
              borderWidth: 0,
              cutout: '65%',
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: { color: '#94a3b8', font: { size: 11 }, padding: 15 }
              }
            }
          }
        });
      }
    });
  });
})();


