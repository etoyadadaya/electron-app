import React from "react";
import styles from "./graphs.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
} from "chart.js";

import { faker } from "@faker-js/faker";
import { Bar, Line, Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Dollar Currency",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dollar",
      data: labels.map(() => faker.datatype.number({ min: 50, max: 100 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

//https://react-chartjs-2.js.org/examples/

export const Graphs = () => {
  return (
    <div className={styles.container}>
      <h1>Graphs</h1>
      <div
        style={{
          height: "50vh",
          width: "50vw",
          marginBottom: "1%",
          padding: "1%",
        }}
      >
        <Bar options={options} data={data} />
        <Line options={options} data={data} />
        <Radar data={data} />
      </div>
    </div>
  );
};
