// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ dataPoints, label, borderColor = "#00e0ff" }) => {
  const data = {
    labels: dataPoints.map((_, i) => `T-${dataPoints.length - i}`),
    datasets: [
      {
        label,
        data: dataPoints,
        borderColor,
        backgroundColor: borderColor + "50",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: label },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;