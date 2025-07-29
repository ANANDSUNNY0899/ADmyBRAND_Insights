// src/components/dashboard/MetricCard.tsx
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
}

export default function MetricCard({ title, value }: MetricCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition duration-300">
      <CardContent className="p-4 space-y-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
