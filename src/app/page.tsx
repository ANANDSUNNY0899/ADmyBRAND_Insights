"use client";

import MetricCard from "@/components/ui/MetricCard";
import LineChartComponent from "@/components/ui/LineChartComponent";
import DataTable from "@/components/ui/DataTable";
import { metrics, chartData } from "@/data/mockMetrics";
import { tableData } from "@/data/tableData";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">ADmyBRAND Insights</h1>
        <DarkModeToggle />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(metrics).map(([key, value]) => (
          <MetricCard key={key} title={key} value={value} />
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">User Growth</h2>
          <LineChartComponent data={chartData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Revenue Overview</h2>
          {/* You can use BarChartComponent here */}
        </div>
      </section>

      <div>
        <h2 className="text-xl font-semibold mb-2">User Table</h2>
        <DataTable data={tableData} />
      </div>
    </main>
  );
}
