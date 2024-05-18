import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data.length === 0) return;

    const labels = data.map(item => item.name);
    const soldData = data.map(item => item.sold);
    const quantityData = data.map(item => item.quantity);
    const ratioData = data.map(item => (item.sold / item.quantity) * 100); // Calculate ratio in percentage

    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Sold',
            data: soldData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Quantity',
            data: quantityData,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Sold/Quantity Ratio (%)',
            data: ratioData,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            padding: {
              top: 20 // Adjust as needed
            }
          },
          x: {
            padding: {
              right: 20 // Adjust as needed
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom' // Move legend to the bottom
          }
        },
        layout: {
          padding: {
            top: 10 // Additional padding for the entire chart area
          }
        }
      },
    });
  }, [data]);

  return <canvas ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default ChartComponent;
