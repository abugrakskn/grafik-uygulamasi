"use client";

import React, { useState } from 'react';
import ChartCard from '@/components/ChartCard';
import VerticalBarChart from '@/components/charts/VerticalBarChart';
import HorizontalBarChart from '@/components/charts/HorizontalBarChart';
import LineChart from '@/components/charts/LineChart';
import AreaChart from '@/components/charts/AreaChart';
import PieChart from '@/components/charts/PieChart';
import DoughnutChart from '@/components/charts/DoughnutChart';
import RadarChart from '@/components/charts/RadarChart';
import PolarAreaChart from '@/components/charts/PolarAreaChart';
import ScatterChart from '@/components/charts/ScatterChart';
import BubbleChart from '@/components/charts/BubbleChart';
import FileUpload from '@/components/FileUpload';

interface ChartData {
  labels: string[];
  data: number[];
  label: string;
}

export default function Home() {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-4 animate-fade-in-down">
          Modern Grafik Galerisi
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
          Verilerinizi görselleştirmenin en estetik yolu. 10 farklı grafik türü ile verilerinize hayat verin.
        </p>

        <div className="max-w-md mx-auto">
          <FileUpload onDataLoaded={setChartData} />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <ChartCard title="Dikey Çubuk Grafik" description="Aylık satış verilerinin karşılaştırılması">
          <VerticalBarChart
            externalLabels={chartData?.labels}
            externalData={chartData?.data}
            dataLabel={chartData?.label}
          />
        </ChartCard>

        <ChartCard title="Yatay Çubuk Grafik" description="Kategorik verilerin sıralı gösterimi">
          <HorizontalBarChart />
        </ChartCard>

        <ChartCard title="Çizgi Grafik" description="Zaman içindeki değişim trendleri">
          <LineChart />
        </ChartCard>

        <ChartCard title="Alan Grafiği" description="Hacimsel değişimin görselleştirilmesi">
          <AreaChart />
        </ChartCard>

        <ChartCard title="Pasta Grafik" description="Bütünün parçalara dağılımı">
          <PieChart />
        </ChartCard>

        <ChartCard title="Halka Grafik" description="Oransal dağılımın modern sunumu">
          <DoughnutChart />
        </ChartCard>

        <ChartCard title="Radar Grafik" description="Çok değişkenli veri analizi">
          <RadarChart />
        </ChartCard>

        <ChartCard title="Kutupsal Alan" description="Döngüsel verilerin karşılaştırılması">
          <PolarAreaChart />
        </ChartCard>

        <ChartCard title="Dağılım Grafiği" description="İki değişken arasındaki ilişki">
          <ScatterChart />
        </ChartCard>

        <ChartCard title="Kabarcık Grafiği" description="Üç boyutlu veri ilişkileri">
          <BubbleChart />
        </ChartCard>
      </div>

      <footer className="mt-16 text-center text-gray-400 text-sm py-8 border-t border-white/10">
        <p>© 2025 Modern Grafik Uygulaması. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}
