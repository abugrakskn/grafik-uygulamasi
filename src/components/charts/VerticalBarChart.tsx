"use client";

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
            labels: {
                color: 'white',
            }
        },
        title: {
            display: false,
            text: 'Vertical Bar Chart',
        },
    },
    scales: {
        y: {
            ticks: { color: 'white' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
        },
        x: {
            ticks: { color: 'white' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
        }
    }
};


interface VerticalBarChartProps {
    externalLabels?: string[];
    externalData?: number[];
    dataLabel?: string;
}

const VerticalBarChart: React.FC<VerticalBarChartProps> = ({ externalLabels, externalData, dataLabel }) => {
    const labels = externalLabels || ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const datasetData = externalData || labels.map(() => faker.number.int({ min: 0, max: 1000 }));
    const labelTitle = dataLabel || 'Dataset 1';

    const data = {
        labels,
        datasets: [
            {
                label: labelTitle,
                data: datasetData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            // Only show second dataset if using default data
            ...(!externalData ? [{
                label: 'Dataset 2',
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }] : []),
        ],
    };

    return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
