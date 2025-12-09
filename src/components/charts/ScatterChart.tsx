"use client";

import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            ticks: { color: 'white' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
        },
        x: {
            ticks: { color: 'white' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
        }
    },
    plugins: {
        legend: {
            labels: { color: 'white' }
        }
    }
};

const data = {
    datasets: [
        {
            label: 'A dataset',
            data: Array.from({ length: 100 }, () => ({
                x: faker.number.int({ min: -100, max: 100 }),
                y: faker.number.int({ min: -100, max: 100 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

const ScatterChart = () => {
    return <Scatter options={options} data={data} />;
};

export default ScatterChart;
