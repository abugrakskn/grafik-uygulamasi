"use client";

import React, { ChangeEvent } from 'react';

interface FileUploadProps {
    onDataLoaded: (data: { labels: string[], data: number[], label: string }) => void;
}

import { parseCSV } from '../utils/parseData';

const FileUpload: React.FC<FileUploadProps> = ({ onDataLoaded }) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target?.result as string;
            const parsed = parseCSV(text);
            if (parsed) {
                onDataLoaded(parsed);
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white">Veri Yükle (CSV)</h3>
            <p className="text-sm text-gray-300">Format: Etiket, Değer (Örn: Ocak, 100)</p>
            <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-300
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-purple-600 file:text-white
          hover:file:bg-purple-700
          cursor-pointer"
            />
        </div>
    );
};

export default FileUpload;
