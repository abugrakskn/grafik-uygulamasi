"use client";

import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
        {
            label: '# of Votes',
            data: [2, 9, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: '# of Other',
            data: [5, 4, 6, 2, 7, 8],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: { color: 'white' }
        }
    },
    scales: {
        r: {
            ticks: {
                color: 'white',
                backdropColor: 'transparent'
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.2)'
            },
            angleLines: {
                color: 'rgba(255, 255, 255, 0.2)'
            },
            pointLabels: {
                color: 'white'
            }
        }
    }
};

const RadarChart = () => {
    return <Radar data={data} options={options} />;
};

export default RadarChart;
