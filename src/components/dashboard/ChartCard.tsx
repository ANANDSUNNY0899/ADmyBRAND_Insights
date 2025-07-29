// src/components/dashboard/ChartCard.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface ChartCardProps {
  data: {
    label: string;
    value: number;
  }[];
}

export default function ChartCard({ data }: ChartCardProps) {
  return (
    <Card className="shadow-md">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
