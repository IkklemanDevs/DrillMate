import { Chart } from "chart.js/auto";
import { Colors } from 'chart.js';

Chart.register(Colors);

export function initConsumableChart() {
  console.log('Consumables bar chart loaded');

  const consChart = document.getElementById('consumablePerformance');

  if (!consChart) {
    console.warn("Canvas not found");
    return;
  }

  new Chart(consChart, {
    type: 'line',
    data: {
      labels: ['0112', '1102', '1114', '0918', '0999', 'Current: (0110)',],
      datasets: [
        {
          label: "Previous Bit Performance (m)",
          data: ['345','271','290','212','302','178'],
          borderWidth: 1
        },
        // {
        //   label: "Previous Hammer Performance (m)",
        //   data: ['123.4', '84.7', '96.1', '141.6', '109.3', '77.8', '132.0'],
        //   borderWidth: 1
        // }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}