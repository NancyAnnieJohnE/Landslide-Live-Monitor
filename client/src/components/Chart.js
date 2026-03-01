import React from "react";
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
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ label, data }) {
  const chartData = {
    labels: ["Current"], // can later extend to multiple timestamps
    datasets: [
      {
        label,
        data,
        borderColor: "#00e0ff",
        backgroundColor: "rgba(0,224,255,0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: label },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return <Line data={chartData} options={options} />;
}