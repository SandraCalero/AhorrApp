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

function BarChart({ labelsList, dataExpenses, dataBudget }) {
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

  const labels = labelsList;

  const data = {
    labels,
    datasets: [
      {
        label: "Budget",
        data: dataBudget,
        backgroundColor: "#4FB8FF",
      },
      {
        label: "Expenses",
        data: dataExpenses,
        backgroundColor: "#F47265",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export { BarChart };
