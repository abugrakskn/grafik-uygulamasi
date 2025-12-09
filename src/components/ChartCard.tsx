"use client";

import React from 'react';

interface ChartCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, description, children }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4">{description}</p>
            <div className="relative h-64 w-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default ChartCard;
