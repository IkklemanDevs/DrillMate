import { Chart } from "chart.js/auto";
import { Colors } from 'chart.js';

Chart.register(Colors);

export function initWeeklyPerformance() {
  console.log('Weekly bar chart loaded');

  const ctx = document.getElementById('weeklyPerformance');

  if (!ctx) {
    console.warn("Canvas not found");
    return;
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      datasets: [
        {
          label: "Current Week's Performance (m)",
          data: ['0'],
          borderWidth: 1
        },
        {
          label: "Last Week's Performance (m)",
          data: ['0'],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}