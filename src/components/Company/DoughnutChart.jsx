import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
const DoughnutChart = () => {
  // Prepare data for the chart
  const data = {
    labels: ['Total ESOP', 'Granted ESOP'],
    datasets: [
      {
        data: [2000,550],
        backgroundColor: ['green', 'black'],
      },
    ],
  };

  // Set options for the chart
  const options = {
    maintainAspectRatio: false, // Disable aspect ratio to allow custom height and width
    responsive: true, // Enable responsiveness
    cutout: '70%', 
    plugins: {
      legend: {
        position: 'left',
        labels: {
          font: {
            size: 14, // Adjust the font size for the legend labels
          },
        },
      },
      title: {
        display: true,
        text: 'ESOP Chart',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
    },
    tooltip: {
      enabled: true, // Enable tooltips
    },
    animation: {
      duration: 2000, // Set animation duration in milliseconds
    },
  };

  return <Doughnut data={data} options={options} height={300} width={400} />;
};

export default DoughnutChart;
