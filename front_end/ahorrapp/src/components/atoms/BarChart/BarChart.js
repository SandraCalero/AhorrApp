import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function BarChart() {
  const options = {
    responsive: true,
    layout: {
      padding: {
        left: 52,
        right: 52,
      },
    },
    scales: {
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Budget vs Expenses",
        position: "bottom",
      },
    },
  };

  const labels = ["Rent", "Utilities", "Restaurant", "Transport"];

  const data = {
    labels,
    datasets: [
      {
        label: "Budget",
        data: [100, 200, 300, 500],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Expenses",
        data: [500, 400, 300, 600],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export { BarChart };
