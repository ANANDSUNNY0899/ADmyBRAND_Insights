// app/dashboard/page.tsx
"use client";

import MetricCard from "@/components/dashboard/MetricCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { metrics, chartData } from "@/data/mockMetrics";
import { CSVAnalyzer } from "@/components/dashboard/CSVAnalyzer";


export default function DashboardPage() {
  return (
    <main className="space-y-8 p-6">
      <CSVAnalyzer />
    
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(metrics).map(([key, value]) => (
          <MetricCard key={key} title={key} value={value} />
        ))}
      </div>

    <ChartCard
  data={chartData.map((item) => ({
    label: item.name,
    value: item.revenue, // Change to item.users if needed
  }))}
/>


      {/* Include other charts and data table here */}
    </div>
    </main>
  );
}
