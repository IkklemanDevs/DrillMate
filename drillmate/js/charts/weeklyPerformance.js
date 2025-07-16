import { Chart } from "chart.js/auto";
import { Colors } from 'chart.js';

Chart.register(Colors);

export function initWeeklyPerformance () {
    console.log('Weekly bar chart loaded');
};

  const ctx = document.getElementById('weeklyPerformance');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Web', 'Thur', 'Fri', 'Sat'],
      datasets: [{
        label: 'Current Week\'s Performance (m)',
        data: ['128.3','48.1','141.1','120.3','148.1','141.1','100.2'],
        borderWidth: 1
      },
    {
        label: 'Last Week\'s Performance (m)',
        data: ['123.4', '84.7', '96.1', '141.6', '109.3', '77.8', '132.0'],
        borderWidth: 1
      }]
    },
  });
