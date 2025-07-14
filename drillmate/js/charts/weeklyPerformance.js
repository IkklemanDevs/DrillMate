import { Chart } from "chart.js/auto";

export function initWeeklyPerformance () {
    console.log('Weekly bar chart loaded');
};

  const ctx = document.getElementById('weeklyPerformance');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Web', 'Thur', 'Fri', 'Sat'],
      datasets: [{
        label: 'Weekly Performance (m)',
        data: ['128.3','48.1','141.1'],
        borderWidth: 1
      }]
    },
  });
