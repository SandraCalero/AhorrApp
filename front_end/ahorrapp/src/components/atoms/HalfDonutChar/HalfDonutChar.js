import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function HalfDonutChar ({ totalExpenses, totalSavings }) {
  const data = {
    labels: ['Expenses', 'Savings'],
    datasets: [
      {
        data: [totalExpenses, totalSavings],
        backgroundColor: ['#f47265', '#f5e27d'],
        borderColor: ['transparent', 'transparent'],
        borderWidth: 1,
        circumference: 180,
        rotation: 270
      }
    ]
  };

  return <Doughnut data={data} />;
}

export { HalfDonutChar };
