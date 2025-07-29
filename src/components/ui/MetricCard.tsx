// components/MetricCard.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <Card className="hover:scale-105 transition-all duration-300 shadow-md">
      <CardContent className="p-6 space-y-2">
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold">{value}</h3>
      </CardContent>
    </Card>
  );
}
